(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order-logisticsSettings"],{9559:function(e,t,a){"use strict";a("fee4")},b499:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"le-card",attrs:{"label-width":"150px"}},[a("el-form-item",{attrs:{label:"物流接口平台"}},[a("span",{staticClass:"le-platform"},[e._v("快宝开放平台")])]),a("el-form-item",{attrs:{label:"用户ID"}},[a("el-input",{attrs:{placeholder:"请输入用户ID"},model:{value:e.app_id,callback:function(t){e.app_id=t},expression:"app_id"}})],1),a("el-form-item",{attrs:{label:"API key"}},[a("el-input",{attrs:{placeholder:"请输入API key"},model:{value:e.app_key,callback:function(t){e.app_key=t},expression:"app_key"}}),a("a",{staticClass:"le-router",attrs:{target:"_blank",href:"https://open.kuaidihelp.com/register?channel=leadshop"}},[e._v("快宝开放平台接口申请")])],1),a("el-form-item",{attrs:{label:"云打印机访问密钥"}},[a("el-input",{attrs:{placeholder:"请输入云打印机访问密钥"},model:{value:e.agent_id,callback:function(t){e.agent_id=t},expression:"agent_id"}})],1),a("div",{staticClass:"le-cardpin"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("保存")])],1)],1)},i=[],n=(a("2769"),a("ecf1"),{name:"logisticsSettings",data:function(){return{app_id:"",app_key:"",agent_id:""}},methods:{submit:function(){var e=this;this.$heshop.setting("post",{keyword:"kb_express_setting",content:{app_id:this.app_id,app_key:this.app_key,agent_id:this.agent_id}}).then((function(){e.app_id?e.$message.success("保存成功"):e.$message.success("请设置物流配置")})).catch((function(){e.$message.error("保存失败")}))},search:function(){var e=this,t=this;this.$heshop.search("post",{include:"setting"},{keyword:"kb_express_setting"}).then((function(e){t.app_id=e.content.app_id,t.app_key=e.content.app_key,t.agent_id=e.content.agent_id})).catch((function(t){e.$message.error(t.data.message)}))}},mounted:function(){this.search()}}),p=n,c=(a("9559"),a("4ac2")),l=Object(c["a"])(p,s,i,!1,null,"5e8168f4",null);t["default"]=l.exports},fee4:function(e,t,a){}}]);
//# sourceMappingURL=order-logisticsSettings.3b367e66.js.map