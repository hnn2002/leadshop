(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setup-appletsRemind"],{b0a0:function(s,t,e){"use strict";e("d68e")},d68e:function(s,t,e){},dbc8:function(s,t,e){"use strict";e.r(t);var l=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("el-form",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"le-matter",attrs:{"label-width":"130px",model:s.form},nativeOn:{submit:function(s){s.preventDefault()}}},[e("div",{staticClass:"le-header le-card"},[s._v(" 温馨提示：请确保您有小程序订阅消息的使用权限，且订阅消息无任何已存数据。订阅消息添加完成后，请不要删除订阅消息，否则将影响消息的正常发送。"),e("br"),s._v(" 使用说明："),e("br"),s._v(" 1.请前往微信公众平台，将【商家自营>服装/鞋/箱包】类目添加至您的服务类目，否则将影响订阅消息的正常发送。 "),e("span",{directives:[{name:"popup",rawName:"v-popup.messageGuide",value:"applets",expression:"'applets'",modifiers:{messageGuide:!0}}],staticClass:"le-header-button",attrs:{module:"setup",sure_btn:"我知道了",width:"680",hide_cancel:!0,title:"订阅消息模板ID获取指引"}},[s._v("查看指引")]),e("br"),s._v(" 2.查找订阅消息并选用，调整关键词的顺序后，复制模板ID，粘贴在此页面对应的模板ID输入框中"),e("br"),s._v(" 3.您可使用一键添加订阅消息功能，快速获取模板ID "),e("button",{staticClass:"le-header-btn",on:{click:s.onceAdd}},[s._v("一键添加订阅消息")])]),e("div",{staticClass:"le-body flex"},[e("div",{staticClass:"flex-sub"},[e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[s._v("付款成功通知")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:s.form.order_pay,callback:function(t){s.$set(s.form,"order_pay",t)},expression:"form.order_pay"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("模板标题")]),e("span",{staticClass:"le-value"},[s._v("【付款成功通知】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[s._v("付款金额、付款时间、商家名称、订单编号")])])])])],1),e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[s._v("售后状态通知")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:s.form.order_sale_verify,callback:function(t){s.$set(s.form,"order_sale_verify",t)},expression:"form.order_sale_verify"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("模板标题")]),e("span",{staticClass:"le-value"},[s._v("【售后状态通知】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[s._v("审核结果、订单编号、订单金额")])])])])],1),e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[s._v("优惠券到期通知")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:s.form.coupon_expire,callback:function(t){s.$set(s.form,"coupon_expire",t)},expression:"form.coupon_expire"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("模板标题")]),e("span",{staticClass:"le-value"},[s._v("【优惠券到期通知】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[s._v("优惠券名称、过期时间、商家名称、温馨提示")])])])])],1)]),e("div",{staticClass:"flex-sub"},[e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[s._v("订单发货通知")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:s.form.order_send,callback:function(t){s.$set(s.form,"order_send",t)},expression:"form.order_send"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("模板标题")]),e("span",{staticClass:"le-value"},[s._v("【订单发货通知】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[s._v("快递公司、快递单号、收货地址、订单号")])])])])],1),e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[s._v("退款成功通知")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:s.form.order_refund_tpl,callback:function(t){s.$set(s.form,"order_refund_tpl",t)},expression:"form.order_refund_tpl"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("模板标题")]),e("span",{staticClass:"le-value"},[s._v("【退款成功通知】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[s._v("退款金额、订单编号、商品名称、申请时间")])])])])],1),[e("div",{staticClass:"le-card"},[e("div",{staticClass:"le-card-title"},[s._v("积分变更提醒")]),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板ID")]),e("el-input",{attrs:{placeholder:"请输入模板ID"},model:{value:s.form.task_refund_tpl,callback:function(t){s.$set(s.form,"task_refund_tpl",t)},expression:"form.task_refund_tpl"}})],1),e("el-form-item",[e("span",{staticClass:"le-form-item__label",attrs:{slot:"label"},slot:"label"},[s._v("模板提示")]),e("div",{staticClass:"le-form-item__content"},[e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("模板标题")]),e("span",{staticClass:"le-value"},[s._v("【积分变更提醒】")])]),e("div",{staticClass:"le-tip-item"},[e("span",{staticClass:"le-label"},[s._v("关键词及顺序")]),e("span",{staticClass:"le-value"},[s._v("变更数量、积分余额、变动时间、变更原因")])])])])],1)]],2)]),e("div",{staticClass:"le-cardpin"},[e("el-button",{attrs:{type:"primary",disabled:s.loading},on:{click:s.submit}},[s._v("保存")])],1)])},a=[],i={name:"appletsRemind",data:function(){return{loading:!1,form:{order_sale_verify:"",order_refund_tpl:"",coupon_expire:"",order_pay:"",order_send:""}}},methods:{submit:function(){this.loading=!0;var s=this;this.$heshop.subscribe("post",{platform:"weapp",behavior:"save"},this.form).then((function(){s.loading=!1,s.$message.success("保存成功")})).catch((function(t){s.loading=!1,s.$message.error(t.data.message)}))},obtain:function(){this.loading=!0;var s=this;this.$heshop.subscribe("get",{platform:"weapp"}).then((function(t){s.form=t.form,s.loading=!1})).catch((function(t){s.loading=!1,s.$message.error(t.data.message)}))},onceAdd:function(){var s=this;this.loading=!0,this.$heshop.subscribe("post",{platform:"weapp"},{}).then((function(t){console.log("response",t);for(var e=0;e<t.length;e++)s.form[t[e].tpl_name]=t[e].tpl_id;s.$message.success("一键添加成功"),s.loading=!1})).catch((function(t){s.loading=!1,s.$message.error(t.data.message)}))}},mounted:function(){this.obtain()}},o=i,r=(e("b0a0"),e("4ac2")),n=Object(r["a"])(o,l,a,!1,null,"8c128a2c",null);t["default"]=n.exports}}]);
//# sourceMappingURL=setup-appletsRemind.e67809e3.js.map