(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["channel-weChatPay"],{2667:function(e,t,a){"use strict";a("aa66")},"62ae":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"le-matter"},[a("el-form",{ref:"bind",staticClass:"le-form",attrs:{rules:e.rules,model:e.form,"label-width":"190px"}},[a("div",{staticClass:"le-form__header flex align-center"},[a("span",{staticClass:"le-tip"}),a("span",{staticClass:"le-text"},[e._v("公众号支付配置")])]),a("el-form-item",{attrs:{label:"支付方式"}},[a("span",{staticClass:"le-text"},[e._v("微信支付")])]),a("el-form-item",{attrs:{label:"支付类型"}},[a("span",{staticClass:"le-text"},[e._v("普通商户")])]),a("el-form-item",{attrs:{label:"微信AppID",prop:"appid"}},[a("el-input",{attrs:{placeholder:"请输入微信AppID"},model:{value:e.form.appid,callback:function(t){e.$set(e.form,"appid",t)},expression:"form.appid"}})],1),a("el-form-item",{attrs:{label:"微信支付商户号",prop:"mchid"}},[a("el-input",{attrs:{placeholder:"请输入微信支付商户号"},model:{value:e.form.mchid,callback:function(t){e.$set(e.form,"mchid",t)},expression:"form.mchid"}})],1),a("el-form-item",{attrs:{label:"微信支付Api密钥",prop:"key"}},[a("el-input",{attrs:{placeholder:"请输入微信支付Api密钥"},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),a("el-form-item",{attrs:{prop:"certPem"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 微信支付"),a("br"),e._v(" apiclient_cert.pem ")]),a("el-input",{attrs:{type:"textarea",resize:"none",rows:5,placeholder:"请输入微信支付apiclient_cert.pem"},model:{value:e.form.certPem,callback:function(t){e.$set(e.form,"certPem",t)},expression:"form.certPem"}})],1),a("el-form-item",{attrs:{prop:"keyPem"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 微信支付"),a("br"),e._v(" apiclient_key.pem ")]),a("el-input",{attrs:{type:"textarea",resize:"none",rows:5,placeholder:"请输入微信支付apiclient_key.pem"},model:{value:e.form.keyPem,callback:function(t){e.$set(e.form,"keyPem",t)},expression:"form.keyPem"}})],1)],1),a("div",{staticClass:"le-cardpin"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save("bind")}}},[e._v("保存")])],1)],1)},s=[],i={name:"weChat-pay",data:function(){return{form:{appid:"",isService:0},rules:{appid:[{required:!0,message:"请输入微信AppID",trigger:"blur"}],mchid:[{required:!0,message:"请输入微信支付商户号",trigger:"blur"}],key:[{required:!0,message:"请输入微信支付Api密钥",trigger:"blur"}],certPem:[{required:!0,message:"请输入微信支付apiclient_cert.pem",trigger:"blur"}],keyPem:[{required:!0,message:"请输入微信支付apiclient_key.pem",trigger:"blur"}]}}},methods:{save:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.$heshop.appconfig("post",{behavior:"save",key:"appPay_wechat"},t.form).then((function(){t.$notify({title:"保存成功",message:"微信支付手动绑定成功。",type:"success"}),t.toBind=!1,t.bind=!1})).catch((function(e){t.$message.error(e.data.message)}))}))},getConfig:function(){var e=this;this.$heshop.appconfig("get").then((function(t){e.form=t.appPay.wechat})).catch((function(t){e.$message.error(t.data.message)}))}},mounted:function(){this.getConfig()}},l=i,o=(a("2667"),a("2877")),n=Object(o["a"])(l,r,s,!1,null,"85f3bef0",null);t["default"]=n.exports},aa66:function(e,t,a){}}]);
//# sourceMappingURL=channel-weChatPay.d72b89dc.js.map