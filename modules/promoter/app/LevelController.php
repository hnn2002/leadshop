<?php


namespace promoter\app;


use framework\common\BasicController;
use promoter\models\Promoter;
use promoter\models\PromoterLevel;
use yii\helpers\ArrayHelper;

class LevelController extends BasicController
{
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

    public function actionIndex()
    {
        $promoter = Promoter::findOne(['UID' => \Yii::$app->user->id]);
        if (!$promoter) {
            Error('你不是分销商');
        }
        $list = PromoterLevel::find()
            ->where(['AppID' => \Yii::$app->params['AppID'], 'is_auto' => 1, 'is_deleted' => 0])
            ->all();
        $allChildren = $promoter->getAllChildren();
        $totalBonus = $promoter->getTotalBonus();
        $totalMoney = $promoter->getTotalMoney();
        $newList = [];
        foreach ($list as $item) {
            $newItem = ArrayHelper::toArray($item);
            $newItem['condition'] = to_array($item['condition']);
            if ($newItem['condition']['all_children']['checked']) {
                $newItem['all_children_percent'] = qm_round(((int)$allChildren / (int)$newItem['condition']['all_children']['num']) * 100, 2);
            }
            if ($newItem['condition']['total_bonus']['checked']) {
                $newItem['total_bonus_percent'] = qm_round(((int)$totalBonus / (int)$newItem['condition']['total_bonus']['num']) * 100, 2);
            }
            if ($newItem['condition']['total_money']['checked']) {
                $newItem['total_money_percent'] = qm_round(((int)$totalMoney / (int)$newItem['condition']['total_money']['num']) * 100, 2);
            }
            $newList[] = $newItem;
        }
        return [
            'promoter' => $promoter,
            'level' => $newList
        ];
    }
}