(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setup-wechatRemind"],{"789dc":function(t,s,e){"use strict";e("9c4d")},"9c4d":function(t,s,e){},afdd:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"le-matter le-form",attrs:{"label-width":"130px",model:t.form},nativeOn:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"le-header le-card"},[t._v(" 温馨提示：请确保您有公众号订阅通知的使用权限，且订阅通知中无任何已存数据。订阅通知添加完成后，请不要删除订阅通知，否则将影响消息的正常发送。"),e("br"),t._v(" 使用说明："),e("br"),t._v(" 1.请前往微信公众平台，将【商家自营>服装/鞋/箱包】类目添加至您的服务类目，否则将影响订阅通知的正常发送。"),e("span",{directives:[{name:"popup",rawName:"v-popup.messageGuide",value:"wechat",expression:"'wechat'",modifiers:{messageGuide:!0}}],staticClass:"le-header-button",attrs:{module:"setup",sure_btn:"我知道了",width:"680",hide_cancel:!0,title:"订阅通知模板ID获取指引"}},[t._v("查看指引")]),e("br"),t._v(" 2.查找订阅通知并选用，调整关键词的顺序后，复制模板ID，粘贴在此页面对应的模板ID输入框中"),e("br"),t._v(" 3.您可使用一键添加订阅通知功能，快速获取模板ID  "),e("button",{staticClass:"le-header-btn",on:{click:t.onceAdd}},[t._v("一键添加订阅通知")])]),e("div",{staticClass:"le-body flex"},[e("div",{staticClass:"flex-sub"},[e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[t._v("付款成功通知")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:t.form.order_pay,callback:function(s){t.$set(t.form,"order_pay",s)},expression:"form.order_pay"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("模板标题")]),e("span",{staticClass:"le-value"},[t._v("【付款成功通知】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[t._v("付款金额、付款时间、商家名称、订单编号")])])])])],1),e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[t._v("售后状态通知")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:t.form.order_sale_verify,callback:function(s){t.$set(t.form,"order_sale_verify",s)},expression:"form.order_sale_verify"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("模板标题")]),e("span",{staticClass:"le-value"},[t._v("【售后状态通知】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[t._v("审核结果、订单编号、订单金额")])])])])],1),e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[t._v("优惠券到期通知")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:t.form.coupon_expire,callback:function(s){t.$set(t.form,"coupon_expire",s)},expression:"form.coupon_expire"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("模板标题")]),e("span",{staticClass:"le-value"},[t._v("【优惠券到期通知】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[t._v("优惠券名称、过期时间、商家名称、温馨提示")])])])])],1)]),e("div",{staticClass:"flex-sub"},[e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[t._v("订单发货通知")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:t.form.order_send,callback:function(s){t.$set(t.form,"order_send",s)},expression:"form.order_send"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("模板标题")]),e("span",{staticClass:"le-value"},[t._v("【订单发货通知】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[t._v("快递公司、快递单号、收货地址、订单号")])])])])],1),e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[t._v("退款成功通知")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:t.form.order_refund_tpl,callback:function(s){t.$set(t.form,"order_refund_tpl",s)},expression:"form.order_refund_tpl"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("模板标题")]),e("span",{staticClass:"le-value"},[t._v("【退款成功通知】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[t._v("退款金额、订单编号、商品名称、申请时间")])])])])],1),[e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[t._v("积分变更提醒")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:t.form.task_refund_tpl,callback:function(s){t.$set(t.form,"task_refund_tpl",s)},expression:"form.task_refund_tpl"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[t._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("模板标题")]),e("span",{staticClass:"le-value"},[t._v("【积分变更提醒】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[t._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[t._v("变更数量、积分余额、变动时间、变更原因")])])])])],1)]],2)]),e("div",{staticClass:"le-cardpin"},[e("el-button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.submit}},[t._v("保存")])],1)])},l=[],i={name:"wechatRemind",data:function(){return{loading:!1,form:{order_sale_verify:"",order_refund_tpl:"",coupon_expire:"",order_pay:"",order_send:""}}},methods:{submit:function(){this.loading=!0;var t=this;this.$heshop.subscribe("post",{platform:"wechat",behavior:"save"},this.form).then((function(){t.loading=!1,t.$message.success("保存成功")})).catch((function(s){t.loading=!1,t.$message.error(s.data.message)}))},obtain:function(){this.loading=!0;var t=this;this.$heshop.subscribe("get",{platform:"wechat"}).then((function(s){t.form=s.form,t.loading=!1})).catch((function(s){t.loading=!1,t.$message.error(s.data.message)}))},onceAdd:function(){var t=this;this.loading=!0,this.$heshop.subscribe("post",{platform:"wechat"},{}).then((function(s){for(var e=0;e<s.length;e++)t.form[s[e].tpl_name]=s[e].tpl_id;t.$message.success("一键添加成功"),t.loading=!1})).catch((function(s){t.loading=!1,t.$message.error(s.data.message)}))}},mounted:function(){this.obtain()}},o=i,r=(e("789dc"),e("4ac2")),c=Object(r["a"])(o,a,l,!1,null,"0c553a8c",null);s["default"]=c.exports}}]);
//# sourceMappingURL=setup-wechatRemind.c95b0166.js.map