(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68a9dcee"],{"07bd":function(e,t,a){"use strict";a("ff00")},a421:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"le-matter"},[a("el-breadcrumb",{staticClass:"he-link-text",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[a("he-link",{attrs:{href:"plugins/features"}},[e._v("营销玩法")])],1),a("el-breadcrumb-item",{staticClass:"he-link"},[a("he-link",{attrs:{href:"features/coupon/index"}},[e._v("优惠券管理")])],1),a("el-breadcrumb-item",[e._v(" "+e._s(e.isEdit?"编辑优惠券":"新建优惠券")+" ")])],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"flex le-content"},[a("div",{staticClass:"le-left"},[a("div",{staticClass:"le-left-top"},[a("el-scrollbar",{staticClass:"le-left-top_content"},[a("div",{staticClass:"le-coupon-detail"},[e.form.enable_share?a("div",{staticClass:"le-coupon-share align-center flex flex-direction"},[a("he-icon",{attrs:{type:"le-icon-fenxiang",size:"14px"}}),a("span",[e._v("分享")])],1):e._e(),a("div",{staticClass:"le-coupon-detail-top"},[a("div",{staticClass:"le-coupon-doc-line flex justify-center"},e._l(17,(function(e){return a("div",{key:e,staticClass:"le-coupon-doc-item"},[a("div",{staticClass:"le-coupon-doc"})])})),0),a("div",{staticClass:"le-coupon-heade-body flex flex-direction align-center"},[a("div",{staticClass:"le-coupon-name"},[e._v(" "+e._s(e.form.name?e.form.name:"优惠券名称")+" ")]),a("div",{staticClass:"le-coupon-price"},[e._v(" "+e._s(e.form.sub_price?e.form.sub_price:"88")+" ")]),a("div",{staticClass:"le-coupon-condition"},[e.form.min.type>0?[e._v(" 满"+e._s(e.form.min.price)+"可用 ")]:[e._v(" 无门槛使用 ")],e._v(" ，"+e._s(1===e.form.appoint_type?"全部商品可用":"部分商品可用")+" ")],2),a("button",{staticClass:"le-coupon-btn"},[e._v("立即使用")])])]),a("div",{staticClass:"le-coupon-detail-center"},[a("div",{staticClass:"le-coupon-doc"}),a("div",{staticClass:"le-coupon-line"}),a("div",{staticClass:"le-coupon-doc"})]),a("div",{staticClass:"le-coupon-detail-bottom"},[a("div",{staticClass:"le-coupon-bottom-body"},[a("div",{staticClass:"le-coupon-title"},[e._v("可用时间")]),a("div",{staticClass:"le-coupon-text"},[1===e.form.time.expire_type?[e._v(" 领取后"+e._s(e.form.time.expire_day)+"天内 ")]:[e.form.time.begin_time&&e.form.time.end_time?[e._v(" "+e._s(e._f("timeFormat")(e.form.time.begin_time,"yyyy.mm.dd hh:MM:ss"))+" - "+e._s(e._f("timeFormat")(e.form.time.end_time,"yyyy.mm.dd hh:MM:ss"))+" ")]:[e._v(" XXXX.XX.XX XX:XX:XX - XXXX.XX.XX XX:XX:XX")]]],2),a("div",{staticClass:"le-coupon-title"},[e._v("使用说明")]),a("div",{staticClass:"le-coupon-text",domProps:{innerHTML:e._s(e.form.content)}})]),a("div",{staticClass:"le-coupon-doc-line flex justify-center"},e._l(17,(function(e){return a("div",{key:e,staticClass:"le-coupon-doc-item"},[a("div",{staticClass:"le-coupon-doc"})])})),0)])])])],1),a("div",{staticClass:"le-left-bottom"},[e._v(" 优惠券详情预览图 "),a("el-popover",{attrs:{trigger:"hover",content:"使用在优惠券详情页",placement:"top"}},[a("he-icon",{staticClass:"he-zhushi",attrs:{slot:"reference",type:"le-icon-zhushi"},slot:"reference"})],1)],1)]),a("el-form",{ref:"form",staticClass:"flex-sub",attrs:{"label-width":"189px",model:e.form,rules:e.rules}},[a("div",{staticClass:"le-card"},[a("div",{staticClass:"le-card-header flex align-center"},[a("span"),a("span",[e._v("基本信息")])]),a("div",{staticClass:"le-card-body"},[a("el-form-item",[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("优惠券类型")]),a("span",{staticClass:"le-item-form-text"},[e._v("满减优惠券")])]),a("el-form-item",{attrs:{prop:"name"}},[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("优惠券名称")]),a("el-input",{attrs:{maxlength:"8",placeholder:"请输入优惠券名称","show-word-limit":"",disabled:e.examine},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{prop:"total_num"}},[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("发放总量")]),a("el-input",{attrs:{maxlength:8,disabled:e.examine},nativeOn:{input:function(t){return e.inputNumberTotalNum.apply(null,arguments)}},model:{value:e.form.total_num,callback:function(t){e.$set(e.form,"total_num",e._n(t))},expression:"form.total_num"}},[a("template",{slot:"append"},[e._v("张")])],2),a("div",{staticClass:"le-item-form-prompt"},[e._v(" 编辑发放总量时只能增加不能减少，请谨慎设置 ")])],1),a("el-form-item",{staticClass:"le-form-item-time",attrs:{prop:"time"}},[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("用券时间")]),a("div",{staticClass:"flex"},[a("div",[a("el-radio",{attrs:{label:2,disabled:e.isEdit},on:{change:function(t){return e.validateField("time")}},model:{value:e.form.time.expire_type,callback:function(t){e.$set(e.form.time,"expire_type",t)},expression:"form.time.expire_type"}},[a("span")])],1),a("div",[a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp",disabled:1===e.form.time.expire_type||e.isEdit,placeholder:"开始时间"},model:{value:e.form.time.begin_time,callback:function(t){e.$set(e.form.time,"begin_time",t)},expression:"form.time.begin_time"}}),a("span",{staticClass:"le-go le-item-form-text"},[e._v("至")]),a("el-date-picker",{attrs:{type:"datetime","value-format":"timestamp",disabled:1===e.form.time.expire_type||e.isEdit,placeholder:"结束时间"},model:{value:e.form.time.end_time,callback:function(t){e.$set(e.form.time,"end_time",t)},expression:"form.time.end_time"}}),a("div",{staticClass:"le-item-form-prompt"},[e._v(" 若当前时间超过优惠券的固定用券时间，则优惠券状态将变成已结束。 ")])],1)]),a("div",{staticClass:"flex"},[a("div",[a("el-radio",{attrs:{label:1,disabled:e.isEdit},on:{change:function(t){return e.validateField("time")}},model:{value:e.form.time.expire_type,callback:function(t){e.$set(e.form.time,"expire_type",t)},expression:"form.time.expire_type"}},[a("span")])],1),a("div",[a("span",{staticClass:"le-form-item__label"},[e._v("领取当日起")]),a("el-input",{staticClass:"le-form-item-small-input",attrs:{maxlength:7,disabled:2===e.form.time.expire_type||e.isEdit},nativeOn:{input:function(t){return e.inputNumberDay.apply(null,arguments)}},model:{value:e.form.time.expire_day,callback:function(t){e.$set(e.form.time,"expire_day",e._n(t))},expression:"form.time.expire_day"}},[a("template",{slot:"append"},[e._v("天")])],2),a("span",{staticClass:"le-form-item__label"},[e._v("可用")])],1)])])],1)]),a("div",{staticClass:"le-card"},[a("div",{staticClass:"le-card-header flex align-center"},[a("span"),a("span",[e._v("优惠内容")])]),a("div",{staticClass:"le-card-body"},[a("el-form-item",{attrs:{prop:"min"}},[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("门槛金额")]),a("div",[a("el-radio",{attrs:{label:0,disabled:e.isEdit},model:{value:e.form.min.type,callback:function(t){e.$set(e.form.min,"type",t)},expression:"form.min.type"}},[a("span",{staticClass:"le-item-form-text"},[e._v("无使用门槛")])])],1),a("div",{staticClass:"flex"},[a("div",[a("el-radio",{attrs:{label:1,disabled:e.isEdit},model:{value:e.form.min.type,callback:function(t){e.$set(e.form.min,"type",t)},expression:"form.min.type"}},[a("span")])],1),a("div",[a("span",{staticClass:"le-item-form-text"},[e._v("订单满")]),a("el-input",{staticClass:"le-form-item-small-input",attrs:{maxlength:10,disabled:0===e.form.min.type||e.isEdit},nativeOn:{input:function(t){return e.formatPrice.apply(null,arguments)}},model:{value:e.form.min.price,callback:function(t){e.$set(e.form.min,"price",t)},expression:"form.min.price"}},[a("template",{slot:"append"},[e._v("元")])],2),a("span",{staticClass:"le-item-form-text"},[e._v("可用")])],1)])]),a("el-form-item",{attrs:{prop:"sub_price"}},[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("优惠金额")]),a("span",{staticClass:"le-item-form-text"},[e._v("减免")]),a("el-input",{staticClass:"le-form-item-small-input",attrs:{maxlength:10,disabled:e.isEdit},nativeOn:{input:function(t){return e.formatSubPrice.apply(null,arguments)}},model:{value:e.form.sub_price,callback:function(t){e.$set(e.form,"sub_price",t)},expression:"form.sub_price"}},[a("template",{slot:"append"},[e._v("元")])],2),a("div",{staticClass:"le-item-form-prompt"},[e._v("为控制成本，请谨慎填写")])],1),a("el-form-item",{attrs:{prop:"appoint_data"}},[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("适用商品")]),a("div",[a("el-radio",{attrs:{label:1,disabled:e.examine},on:{change:e.changeAppoint},model:{value:e.form.appoint_type,callback:function(t){e.$set(e.form,"appoint_type",t)},expression:"form.appoint_type"}},[a("span",{staticClass:"le-item-form-text"},[e._v("全部商品")])])],1),a("div",[a("el-radio",{attrs:{label:2,disabled:e.examine},on:{change:e.changeAppoint},model:{value:e.form.appoint_type,callback:function(t){e.$set(e.form,"appoint_type",t)},expression:"form.appoint_type"}},[a("span",{staticClass:"le-item-form-text"},[e._v("指定商品可用")])])],1),2===e.form.appoint_type?a("div",{staticClass:"le-des-goods"},[e.examine?e._e():[a("el-button",{staticClass:"le-select-btn",on:{click:e.getGoods}},[e._v("选择商品")]),a("span",{staticClass:"le-item-form-prompt"},[e._v("最多添加500件商品")])],a("goods-select",{ref:"goodsSelect",attrs:{"is-tips":!1,"select-style":{backgroundColor:"#ffffff"}},model:{value:e.form.appoint_data,callback:function(t){e.$set(e.form,"appoint_data",t)},expression:"form.appoint_data"}}),0!==e.form.appoint_data.length?a("el-table",{staticClass:"le-goods-table",attrs:{"max-height":"368px","row-class-name":"le-table-row",data:e.form.appoint_data}},[a("el-table-column",{attrs:{label:"商品"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"le-table-goods flex align-center"},[a("img",{attrs:{src:t.row.slideshow&&t.row.slideshow[0],alt:""}}),a("div",{staticClass:"he-line-2"},[e._v(e._s(t.row.name))])])]}}],null,!1,3727206901)}),a("el-table-column",{attrs:{label:"商品价格",prop:"price",width:"160"}}),e.examine?e._e():a("el-table-column",{attrs:{label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"le-button-text",on:{click:function(a){return e.form.appoint_data.splice(t.$index,1)}}},[e._v("删除")])]}}],null,!1,3316456559)})],1):e._e()],2):e._e(),a("div",[a("el-radio",{attrs:{label:3,disabled:e.examine},on:{change:e.changeAppoint},model:{value:e.form.appoint_type,callback:function(t){e.$set(e.form,"appoint_type",t)},expression:"form.appoint_type"}},[a("span",{staticClass:"le-item-form-text"},[e._v("指定分类可用")])]),3===e.form.appoint_type?a("div",{staticClass:"le-des-group"},[a("el-button",{directives:[{name:"popup",rawName:"v-popup.chooseCategory",value:e.group.available,expression:"group.available",modifiers:{chooseCategory:!0}}],staticClass:"le-select-btn",attrs:{action:"openAvGroup",title:"选择分类",width:"801",module:"goods"}},[e._v("选择分类 ")]),a("span",{staticClass:"le-item-form-prompt"},[e._v("最多添加30个分类")]),a("div",{staticClass:"le-form-group"},e._l(e.group.available.result,(function(t,i){return a("span",{key:i,staticClass:"le-group-item"},[e._v(e._s(t.value)+" "),a("he-icon",{staticClass:"le-group-item-delete",attrs:{size:"10px",type:"le-icon-fork"},nativeOn:{click:function(a){return e.deleteTag("available",t,i)}}})],1)})),0)],1):e._e()],1),a("div",[a("el-radio",{attrs:{label:4,disabled:e.examine},on:{change:e.changeAppoint},model:{value:e.form.appoint_type,callback:function(t){e.$set(e.form,"appoint_type",t)},expression:"form.appoint_type"}},[a("span",{staticClass:"le-item-form-text"},[e._v("指定商品不可用")])]),4===e.form.appoint_type?a("div",{staticClass:"le-des-goods"},[a("el-button",{staticClass:"le-select-btn",attrs:{disabled:e.examine},on:{click:e.getGoods}},[e._v("选择商品")]),a("span",{staticClass:"le-item-form-prompt"},[e._v("最多添加500件商品")]),a("goods-select",{ref:"goodsSelect",attrs:{"is-tips":!1,"select-style":{backgroundColor:"#ffffff"}},model:{value:e.form.appoint_data,callback:function(t){e.$set(e.form,"appoint_data",t)},expression:"form.appoint_data"}}),e.form.appoint_data.length>0?a("el-table",{staticClass:"le-goods-table",attrs:{"max-height":"368px","row-class-name":"le-table-row",data:e.form.appoint_data}},[a("el-table-column",{attrs:{label:"商品"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"le-table-goods flex align-center"},[a("img",{attrs:{src:t.row.slideshow&&t.row.slideshow[0]}}),a("div",{staticClass:"he-line-2"},[e._v(e._s(t.row.name))])])]}}],null,!1,985051322)}),a("el-table-column",{attrs:{label:"商品价格",prop:"price",width:"160"}}),a("el-table-column",{attrs:{label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"le-button-text",on:{click:function(a){return e.form.appoint_data.splice(t.$index,1)}}},[e._v("删除")])]}}],null,!1,3316456559)})],1):e._e()],1):e._e()],1),a("div",[a("el-radio",{attrs:{label:5,disabled:e.examine},on:{change:e.changeAppoint},model:{value:e.form.appoint_type,callback:function(t){e.$set(e.form,"appoint_type",t)},expression:"form.appoint_type"}},[a("span",{staticClass:"le-item-form-text"},[e._v("指定分类不可用")])]),5===e.form.appoint_type?a("div",{staticClass:"le-des-group"},[a("el-button",{directives:[{name:"popup",rawName:"v-popup.chooseCategory",value:e.group.unavailable,expression:"group.unavailable",modifiers:{chooseCategory:!0}}],staticClass:"le-select-btn",attrs:{action:"openUnGroup",title:"选择分类",width:"801",module:"goods"}},[e._v("选择分类 ")]),a("span",{staticClass:"le-item-form-prompt"},[e._v("最多添加30个分类")]),a("div",{staticClass:"le-form-group"},e._l(e.group.unavailable.result,(function(t,i){return a("span",{key:i,staticClass:"le-group-item"},[e._v(e._s(t.value)+" "),a("he-icon",{staticClass:"le-group-item-delete",attrs:{size:"10px",type:"le-icon-fork"},nativeOn:{click:function(a){return e.deleteTag("unavailable",t,i)}}})],1)})),0)],1):e._e()],1)])],1)]),a("div",{staticClass:"le-card"},[a("div",{staticClass:"le-card-header flex align-center"},[a("span"),a("span",[e._v("发放领取")])]),a("div",{staticClass:"le-card-body"},[a("el-form-item",{attrs:{prop:"give_limit"}},[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("每人限领")]),a("el-input",{staticClass:"le-form-item-small-input",attrs:{disabled:e.examine,maxlength:10},nativeOn:{input:function(t){return e.inputNumberGiveLimit.apply(null,arguments)}},model:{value:e.form.give_limit,callback:function(t){e.$set(e.form,"give_limit",e._n(t))},expression:"form.give_limit"}},[a("template",{slot:"append"},[e._v("张")])],2),a("div",{staticClass:"le-item-form-prompt"},[e._v(" 仅对用户主动领取有效，自动发放不生效，不填写则表明不限制 ")])],1),a("el-form-item",[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("分享设置")]),a("el-checkbox",{attrs:{"true-label":1,"false-label":0,disabled:e.examine},model:{value:e.form.enable_share,callback:function(t){e.$set(e.form,"enable_share",t)},expression:"form.enable_share"}},[a("span",{staticClass:"le-item-form-text"},[e._v("允许分享给好友领取")])]),a("div",{staticClass:"le-item-form-prompt"},[e._v("勾选，则优惠券可被分享转发")])],1),a("el-form-item",{attrs:{prop:"register_limit.value"}},[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("新客领取")]),a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.form.register_limit.type,callback:function(t){e.$set(e.form.register_limit,"type",t)},expression:"form.register_limit.type"}},[a("span",{staticClass:"le-item-form-text"},[e._v("自动发放给新注册的用户")])]),a("div",{staticClass:"le-item-form-prompt"},[e._v(" 勾选，则新用户授权登录后自动发放优惠券 ")]),a("el-input",{staticClass:"le-form-item-small-input",attrs:{maxlength:10},nativeOn:{input:function(t){return e.inputRegisterLimit.apply(null,arguments)}},model:{value:e.form.register_limit.value,callback:function(t){e.$set(e.form.register_limit,"value",e._n(t))},expression:"form.register_limit.value"}},[a("template",{slot:"append"},[e._v("张")])],2)],1)],1)]),a("div",{staticClass:"le-card"},[a("div",{staticClass:"le-card-header flex align-center"},[a("span"),a("span",[e._v("其他设置")])]),a("div",{staticClass:"le-card-body"},[a("el-form-item",{attrs:{prop:"expire_remind"}},[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("到期提醒")]),a("span",{staticClass:"le-item-form-text"},[e._v("到期前")]),a("el-input",{staticClass:"le-form-item-small-input",attrs:{maxlength:10,disabled:e.examine},nativeOn:{input:function(t){return e.inputNumberExpireRemind.apply(null,arguments)}},model:{value:e.form.expire_remind,callback:function(t){e.$set(e.form,"expire_remind",e._n(t))},expression:"form.expire_remind"}},[a("template",{slot:"append"},[e._v("天")])],2),a("span",{staticClass:"le-item-form-text"},[e._v("提醒")]),a("div",{staticClass:"le-form-item-expire-remind"},[e._v(" 请确保已经设置定时任务 "),a("span",{on:{click:e.toSettingPage}},[e._v("设置>基础设置")])])],1),a("el-form-item",[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("退款设置")]),a("el-checkbox",{attrs:{"true-label":1,"false-label":0,disabled:e.examine},model:{value:e.form.enable_refund,callback:function(t){e.$set(e.form,"enable_refund",t)},expression:"form.enable_refund"}},[a("span",{staticClass:"le-item-form-text"},[e._v("订单退款成功时优惠券失效")])]),a("div",{staticClass:"le-item-form-prompt"},[e._v(" 勾选，则因购买商品而发放的优惠券，在商品退款成功后，优惠券失效 ")])],1),a("el-form-item",[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("上架状态")]),a("el-radio-group",{attrs:{disabled:e.examine},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-radio",{attrs:{label:0}},[e._v("暂不上架")]),a("el-radio",{attrs:{label:1}},[e._v("立即上架")])],1)],1),a("el-form-item",{attrs:{prop:"content"}},[a("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[e._v("使用说明")]),a("el-input",{attrs:{type:"textarea",rows:8,resize:"none",placeholder:"请输入使用说明",disabled:e.examine},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1)])])],1),e.examine?e._e():a("div",{staticClass:"le-cardpin"},[a("el-button",{attrs:{type:"primary",disabled:e.loading},on:{click:function(t){return e.submit()}}},[e._v("保存")])],1)],1)},l=[],r=a("1da1"),s=(a("96cf"),a("a9e3"),a("d3b7"),a("b0c0"),a("159b"),a("a434"),a("ac1f"),a("5319"),a("99af"),a("d81d"),a("57f9")),n={components:{goodsSelect:s["a"]},data:function(){var e=this,t=function(t,a,i){e.$route.query.id&&a<e.total_num&&i(new Error("发放数量只能增加不能减少，请填写"+e.total_num+"以上的数字")),(a<1||a>1e7)&&i(new Error("请输入0~10000000之间的整数")),i()},a=function(e,t,a){if(2===t.expire_type){var i=t.begin_time,l=t.end_time;i||l?i?l?i>l&&a(new Error("开始时间不能小于结束时间")):a(new Error("结束时间不能为空")):a(new Error("开始时间不能为空")):a(new Error("用券时间不能为空"))}else{var r=t.expire_day;r||0===r||a(new Error("用券时间不能为空")),(r>2e3||r<1)&&a(new Error("请输入1~2000之间的整数"))}a()},i=function(e,t,a){1===t.type&&(t.price||a(new Error("门槛金额不能为空")),t.price<=0&&a(new Error("请输入0以上的整数或小数")),Number(t)>9999999&&a(new Error("最高限制9999999"))),a()},l=function(t,a,i){1!==e.form.appoint_type&&0===a.length&&i(new Error("适用商品不能为空")),i()},r=function(e,t,a){Number(t)<=0&&a(new Error("请输入0以上的整数或小数")),Number(t)>9999999&&a(new Error("最高限制9999999")),a()},s=function(e,t,a){var i=t.price,l=t.type;1===l&&Number(i)>9999999&&a(new Error("最高限制9999999")),a()},n=function(e,t,a){t||a(),(t>100||t<1)&&a(new Error("请输入1~100之间的整数")),a()},o=function(e,t,a){t||a(),(t>2e3||t<1)&&a(new Error("请输入1~2000之间的整数")),a()},p=function(t,a,i){1===e.form.register_limit.type&&(a>100||a<1)&&i(new Error("请输入1~100之间的整数")),i()};return{total_num:120,loading:!0,list:[],form:{name:"",type:1,content:"使用规则：全部商品\n领取规则：无限制领取",give_limit:null,sub_price:"",enable_share:1,enable_refund:1,expire_remind:null,time:{expire_type:2,begin_time:null,end_time:null,expire_day:null},total_num:"",appoint_type:1,appoint_data:[],min:{type:0,price:null},status:0,register_limit:{type:0,value:1}},group:{unavailable:{cat:[],result:[]},available:{cat:[],result:[]},tree:[]},rules:{name:[{required:!0,message:"请输入优惠券名称",trigger:"blur"},{min:3,max:8,message:"长度在 3 到 8 个字符",trigger:"blur"}],total_num:[{required:!0,message:"请输入发放总量",trigger:"blur"},{validator:t,trigger:["change","blur"]}],time:[{required:!0,validator:a,trigger:["blur","change"]}],min:[{required:!0,validator:i,trigger:["blur","change"]},{validator:s,trigger:["blur","change"]}],sub_price:[{required:!0,message:"请输入优惠金额",trigger:"blur"},{validator:r,trigger:["blur","change"]}],content:[{required:!0,message:"请输入使用说明",trigger:"blur"}],appoint_data:[{required:!0,validator:l,trigger:["blur"]}],give_limit:[{validator:n,trigger:["blur","change"]}],expire_remind:[{validator:o,trigger:["blur","change"]}],"register_limit.value":[{validator:p,trigger:["blur","change"]}]},userContentStr:"使用规则：全部商品\n",receiveContentStr:"领取规则：无限制领取"}},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getGroup();case 2:if(!e.$route.query.id){t.next=8;break}return t.next=5,e.getDetail(parseInt(e.$route.query.id));case 5:e.loading=!1,t.next=9;break;case 8:e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},methods:{getDetail:function(e){var t=this;return new Promise((function(a,i){t.$heshop.coupon("get",e).then((function(e){var i=e.appoint_data_list,l=e.name,r=e.expire_type,s=e.id,n=e.begin_time,o=e.give_limit,p=e.expire_day,m=e.sub_price,c=e.appoint_type,u=e.min_price,d=e.end_time,f=e.expire_remind,_=e.content,v=e.enable_share,g=e.enable_refund,b=e.total_num,h=e.status,x=e.register_limit;2===r&&(n=parseInt(n+"000"),d=parseInt(d+"000"));var C={};if(C=0===Number(u)?{type:0,price:null}:{type:1,price:u},t.total_num=b,t.form={id:parseInt(s),name:l,time:{expire_type:r,begin_time:n,end_time:d,expire_day:p},min:C,sub_price:m,appoint_type:c,appoint_data:i,give_limit:o,expire_remind:f,content:_,enable_share:v,enable_refund:g,total_num:b,status:h,register_limit:{type:0===x?0:1,value:x}},3===c||5===c){var y=t.group.tree,k=[];if(y.forEach((function(e){k.push(e),e.children&&e.children.forEach((function(e){k.push(e),e.children&&e.children.forEach((function(e){k.push(e)}))}))})),3===c)for(var $=0;$<i.length;$++)for(var w=0;w<k.length;w++)i[$].id===k[w].id&&t.group.available.result.push(k[w]);else if(5===c)for(var E=0;E<i.length;E++)for(var X=0;X<k.length;X++)i[E].id===k[X].id&&t.group.unavailable.result.push(k[X])}a()})).catch((function(e){i(),t.$message.error(e.data.message)}))}))},getGoods:function(){this.$refs.goodsSelect.open()},validateField:function(e){this.$refs["form"].clearValidate(e)},changeAppoint:function(){this.form.appoint_data.splice(0,this.form.appoint_data.length)},formatSubPrice:function(e){e.target.value=e.target.value.replace(/[^\d.]/g,""),e.target.value=e.target.value.replace(/\.{2,}/g,"."),e.target.value=e.target.value.replace(/^\./g,"0."),e.target.value=e.target.value.replace(/^0[^\.]+/g,"0"),e.target.value=e.target.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."),e.target.value=e.target.value.replace(/^(\d+)\.(\d\d).*$/,"$1.$2"),this.form.sub_price=e.target.value},formatPrice:function(e){e.target.value=e.target.value.replace(/[^\d.]/g,""),e.target.value=e.target.value.replace(/\.{2,}/g,"."),e.target.value=e.target.value.replace(/^\./g,"0."),e.target.value=e.target.value.replace(/^0[^\.]+/g,"0"),e.target.value=e.target.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."),e.target.value=e.target.value.replace(/^(\d+)\.(\d\d).*$/,"$1.$2"),this.form.min.price=e.target.value},inputNumberDay:function(e){e.target.value=e.target.value.replace(/[^\d]/g,""),this.form.time.expire_day=e.target.value},inputNumberGiveLimit:function(e){e.target.value=e.target.value.replace(/[^\d]/g,""),this.form.give_limit=e.target.value},inputRegisterLimit:function(e){e.target.value=e.target.value.replace(/[^\d]/g,""),this.form.register_limit.value=e.target.value},inputNumberExpireRemind:function(e){e.target.value=e.target.value.replace(/[^\d]/g,""),this.form.expire_remind=e.target.value},inputNumberTotalNum:function(e){e.target.value=e.target.value.replace(/[^\d]/g,""),this.form.total_num=e.target.value},getGroup:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$heshop.group("get",{include:"goods"});case 3:a=t.sent,e.group.available.cat=a,e.group.unavailable.cat=a,a=e.$heshop.toTree({parentKey:"parent_id",idKey:"id",parentId:0,childrenKey:"children"}).on(a).get(),a.forEach((function(e){e.value=e.name,e.children&&e.children.forEach((function(t){t.value="".concat(e.value," > ").concat(t.name),t.children&&t.children.forEach((function(e){e.value="".concat(t.value," > ").concat(e.name)}))}))})),e.group.tree=a,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),e.$message.error(t.t0.data.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},openAvGroup:function(e){for(var t=[],a=0;a<e.result.length;a++){var i=e.result[a];i.children||t.push(i)}this.group.available.result=t,this.form.appoint_data=t},openUnGroup:function(e){for(var t=[],a=0;a<e.result.length;a++){var i=e.result[a];i.children||t.push(i)}this.group.unavailable.result=t,this.form.appoint_data=t},deleteTag:function(e,t,a){this.group[e].result.splice(a,1),this.form.appoint_data=this.group[e].result.map((function(e){return e.id}))},toSettingPage:function(){var e=this.$router.resolve({path:"/setup/index"});window.open(e.href,"_blank")},submit:function(){var e=this;this.loading=!0,console.log(this.form),this.$refs["form"].validate((function(t){if(t){var a=JSON.parse(JSON.stringify(e.form));for(var i in a.begin_time=a.time.begin_time,a.expire_type=a.time.expire_type,a.end_time=a.time.end_time,a.expire_day=a.time.expire_day,a)a[i]&&""!=a[i]||0===a[i]||delete a[i];2===a.expire_type&&(a.end_time=a.end_time+"",a.end_time=parseInt(a.end_time.substring(0,a.end_time.length-3)),a.begin_time=a.begin_time+"",a.begin_time=parseInt(a.begin_time.substring(0,a.begin_time.length-3))),0===a.min.type?a.min_price=0:a.min_price=a.min.price,1!==a.appoint_type&&(a.appoint_data=a.appoint_data.map((function(e){return e.id}))),0===a.register_limit.type?a.register_limit=0:a.register_limit=Number(a.register_limit.value),delete a.time,delete a.min,e.form.id?e.$heshop.coupon("put",a).then((function(){e.loading=!1,e.$router.push({path:"/features/coupon/success",query:{id:e.$route.query.id,isEdit:1}})})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)})):e.$heshop.coupon("post",a).then((function(t){e.loading=!1,e.$router.push({path:"/features/coupon/success",query:{id:t}})})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)}))}else e.loading=!1}))}},computed:{isEdit:function(){return!!this.$route.query.id},examine:function(){return!!this.$route.query.examine}},watch:{"form.appoint_type":{handler:function(e){this.loading||(this.userContentStr="使用规格：".concat(1===e?"全部商品\n":2===e?"指定商品可用\n":3===e?"指定分类可用\n":4===e?"指定商品不可用\n":5===e?"指定分类不可用\n":""),this.form.content=this.userContentStr+this.receiveContentStr)}},"form.give_limit":{handler:function(e){this.loading||(this.receiveContentStr="领取规则：".concat(e?"每人限领"+e+"张":"无限制领取"),this.form.content=this.userContentStr+this.receiveContentStr)}}}},o=n,p=(a("07bd"),a("2877")),m=Object(p["a"])(o,i,l,!1,null,"0ede64b6",null);t["default"]=m.exports},ff00:function(e,t,a){}}]);
//# sourceMappingURL=chunk-68a9dcee.dd835017.js.map