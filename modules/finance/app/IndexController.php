<?php

namespace finance\app;

use finance\models\Finance;
use framework\common\BasicController;
use promoter\models\Promoter;
use yii\data\ActiveDataProvider;

class IndexController extends BasicController
{
    public $post;

    /**
     * 重写父类
     * @return [type] [description]
     */
    public function actions()
    {
        $actions = parent::actions();
        unset($actions['create']);
        unset($actions['update']);
        return $actions;
    }

    public function actionCreate()
    {
        $behavior = \Yii::$app->request->get('model');
        if (!method_exists($this, $behavior)) {
            Error('未定义操作');
        }
        $this->post = \Yii::$app->request->post();
        return $this->$behavior();
    }

    private function promoter()
    {
        $promoter = Promoter::findOne(['UID' => \Yii::$app->user->id]);
        if (!$promoter) {
            Error('申请的用户不是分销商，无法提现');
        }
        $price = $this->post['price'];
        if ($price <= 0) {
            Error('提现佣金必须大于0');
        }
        if ($promoter->commission < $price) {
            Error('提现佣金超出分销商可提现佣金');
        }
        $minMoney = StoreSetting('commission_setting', 'min_money');
        $maxMoney = StoreSetting('commission_setting', 'max_money');
        $poundage = StoreSetting('commission_setting', 'poundage');
        $withdrawWay = StoreSetting('commission_setting', 'withdrawal_way');
        $type = $this->post['type'];
        if (!in_array($type, $withdrawWay)) {
            Error('未知的提现方式');
        }
        if ($price < $minMoney) {
            Error('不得小于最低提现金额');
        }
        if ($price > $maxMoney) {
            Error('不得大于每日最高提现金额');
        }

        $exists = Finance::find()->where([
            'AppID' => \Yii::$app->params['AppID'], 'status' => 0, 'UID' => \Yii::$app->user->id, 'is_deleted' => 0,
        ])->exists();

        if ($exists) {
            Error('尚有未审核的提现申请');
        }
        $extra = to_json($this->post['extra']);
        $t = \Yii::$app->db->beginTransaction();
        $cash = new Finance();
        $cash->attributes = $this->post;
        $cash->model = 'promoter';
        $cash->AppID = \Yii::$app->params['AppID'];
        $cash->merchant_id = 1;
        $cash->UID = \Yii::$app->user->id;
        $cash->price = qm_round($price, 2);
        $cash->service_charge = $poundage;
        $cash->type = $this->post['type'];
        $cash->extra = $extra;
        $cash->status = 0;
        $cash->order_sn = date('YmdHis') . rand(10000, 99999);
        $cash->is_deleted = 0;
        if ($cash->save()) {
            $t->commit();
            return $cash->id;
        } else {
            $t->rollBack();
            Error($cash->getErrorMsg());
        }
    }

    public function actionIndex()
    {
        $behavior = \Yii::$app->request->get('model');
        if (!method_exists($this, $behavior)) {
            Error('未定义操作');
        }
        $this->post = \Yii::$app->request->post();
        $behavior = $behavior . 'List';
        return $this->$behavior();
    }

    private function promoterList()
    {
        //获取头部信息
        $headers = \Yii::$app->getRequest()->getHeaders();
        //获取分页信息
        $pageSize = $headers->get('X-Pagination-Per-Page') ?? 20;
        $query = Finance::find()
            ->where(['AppID' => \Yii::$app->params['AppID'], 'model' => 'promoter', 'UID' => \Yii::$app->user->id, 'is_deleted' => 0])
            ->with(['user']);
        $status = \Yii::$app->request->get('status') ?? false;
        if ($status) {
            $query->andWhere(['status' => $status]);
        }
        $data = new ActiveDataProvider(
            [
                'query'      => $query,
                'pagination' => ['pageSize' => intval($pageSize), 'validatePage' => false],
            ]
        );
        $list = $data->getModels();
        $newList = [];
        foreach ($list as $item) {
            /* @var Finance $item */
            $serviceCharge = qm_round($item->price * $item->service_charge / 100, 2);
            $extra = to_array($item->extra);
            $newItem = [
                'id' => $item->id,
                'order_no' => $item->order_sn,
                'pay_type' => $item->getTypeText2($item->type),
                'type' => $item->type,
                'status' => $item->status,
                'status_text' => $item->getStatusText($item->status),
                'user' => [
                    'avatar' => $item->user->avatar,
                    'nickname' => $item->user->nickname,
                ],
                'cash' => [
                    'price' => qm_round($item->price, 2),
                    'service_charge' => $serviceCharge,
                    'actual_price' => qm_round($item->price - $serviceCharge, 2)
                ],
                'extra' => [
                    //姓名
                    'name' => $extra['name'] ?? '',
                    //电话
                    'mobile' => $extra['mobile'] ?? '',
                    //银行名称
                    'bank_name' => $extra['bank_name'] ?? '',
                    //微信号
                    'wechat' => $extra['wechat'] ?? '',
                    //支付宝账号
                    'alipay' => $extra['alipay'] ?? '',
                    //银行卡号
                    'bank_no' => $extra['bank_no'] ?? '',
                    //开户人
                    'bank_user_name' => $extra['bank_user_name'] ?? '',
                ],
                'time' => [
                    'created_time' => $item->created_time,
                    'apply_time' => isset($extra['apply_time']) ? $extra['apply_time'] : '',
                    'remittance_time' => isset($extra['remittance_time']) ? $extra['remittance_time'] : '',
                    'reject_time' => isset($extra['reject_time']) ? $extra['reject_at'] : '',
                ],
                'content' => [
                    'apply_content' => isset($extra['apply_content']) ? $extra['apply_content'] : '',
                    'remittance_content' => isset($extra['remittance_content']) ? $extra['remittance_content'] : '',
                    'reject_content' => isset($extra['reject_content']) ? $extra['reject_content'] : '',
                ]
            ];
            $newList[] = $newItem;
        }

        $cashList = $newList;
        $newList = [];
        foreach ($cashList as $item) {
            $time = date('Y-m', ($item['time']['created_time']));
            if (isset($newList[$time])) {
                $newList[$time]['list'][] = $item;
            } else {
                $newItem = [
                    'date' => date('Y年m月', ($item['time']['created_time'])),
                    'list' => [
                        $item
                    ]
                ];
                $newList[$time] = $newItem;
            }
        }
        $data->setModels($newList);
        return $data;
    }
}
