(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["channel-appletsInfo"],{"12d2":function(e,t,a){},"1ed8":function(e,t){e.exports=function(e,t,a,i){var s="undefined"!==typeof i?[i,e]:[e],l=new Blob(s,{type:a||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(l,t);else{var n=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(l):window.webkitURL.createObjectURL(l),o=document.createElement("a");o.style.display="none",o.href=n,o.setAttribute("download",t),"undefined"===typeof o.download&&o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),setTimeout((function(){document.body.removeChild(o),window.URL.revokeObjectURL(n)}),200)}}},"80bb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"le-matter"},[e.uploadLoading?a("div",{staticClass:"le-upload-loading flex align-center justify-center"},[e._m(0)]):e._e(),e.bind||e.isBind?e._e():a("div",{staticClass:"le-bind"},[a("div",{staticClass:"le-bind__content flex flex-direction align-center"},[a("div",{staticClass:"le-bind-logo"}),a("div",{staticClass:"le-bind-name"},[e._v("微信小程序")]),e._m(1),a("el-button",{staticClass:"le-bind-btn",attrs:{type:"primary"},on:{click:e.goBind}},[e._v("立即绑定")])],1)]),e.bind&&!e.isBind||e.toBind?a("el-form",{ref:"bind",staticClass:"le-form",attrs:{rules:e.rules,model:e.form,"label-width":"180px"}},[a("div",{staticClass:"le-form__header flex align-center"},[a("span",{staticClass:"le-tip"}),a("span",{staticClass:"le-text"},[e._v("填写小程序信息")])]),a("el-form-item",{attrs:{label:"小程序名称"}},[a("el-input",{attrs:{placeholder:"请输入小程序名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"AppID",prop:"AppID"}},[a("el-input",{attrs:{placeholder:"请输入AppID"},model:{value:e.form.AppID,callback:function(t){e.$set(e.form,"AppID",t)},expression:"form.AppID"}})],1),a("el-form-item",{attrs:{label:"AppSecret",prop:"AppSecret"}},[a("el-input",{attrs:{placeholder:"请输入AppSecret"},model:{value:e.form.AppSecret,callback:function(t){e.$set(e.form,"AppSecret",t)},expression:"form.AppSecret"}})],1)],1):e._e(),e.isBind&&!e.toBind?[a("div",{staticClass:"le-bind-over"},[e.isPay?e._e():a("div",{staticClass:"le-bind-header"},[a("span",{staticClass:"le-text"},[e._v("你的微信小程序尚未设置支付方式，请先设置支付方式。")]),a("he-link",{attrs:{href:"channel/applets-pay"}},[a("el-button",{staticClass:"le-btn",attrs:{type:"primary"}},[e._v("立即配置")])],1)],1),a("div",{staticClass:"le-info le-card"},[e._m(2),a("div",{staticClass:"le-item flex"},[a("div",{staticClass:"le-item__label"},[e._v("小程序名称")]),a("div",{staticClass:"le-item__value"},[e._v(e._s(e.form.name))])]),a("div",{staticClass:"le-item flex"},[a("div",{staticClass:"le-item__label"},[e._v("小程序码")]),a("div",{staticClass:"le-item__value"},[a("div",{directives:[{name:"popup",rawName:"v-popup.uploadQrcode",value:e.qrcode,expression:"qrcode",modifiers:{uploadQrcode:!0}}],staticClass:"le-item--download",attrs:{width:"340",title:"小程序二维码",hide_cancel:!0,sure_btn:"下载二维码",module:"channel"}},[e._v(" 下载小程序码 ")]),a("div",{staticClass:"le-item-tip"},[e._v("下载小程序码，用于推广与分享小程序")])])]),a("div",{staticClass:"le-item flex"},[a("div",{staticClass:"le-item__label"},[e._v("小程序包")]),a("div",{staticClass:"le-item__value"},[a("div",[a("span",{staticStyle:{"margin-right":"30px"}},[e._v("是否已开通小程序直播")]),a("el-radio-group",{model:{value:e.enable_live,callback:function(t){e.enable_live=t},expression:"enable_live"}},[a("el-radio",{attrs:{label:0}},[e._v("未开通")]),a("el-radio",{attrs:{label:1}},[e._v("已开通")])],1)],1),e._m(3),a("div",{staticClass:"le-item--download"},[a("el-button",{staticStyle:{padding:"9px 0"},attrs:{type:"text"},on:{click:function(t){return e.download()}}},[e._v("下载小程序包")])],1)])])]),a("div",{staticClass:"le-info le-card"},[e._m(4),a("div",{staticClass:"le-item flex"},[a("div",{staticClass:"le-item__label"},[e._v("AppID")]),a("div",{staticClass:"le-item__value"},[e._v(e._s(e.form.AppID))])]),a("div",{staticClass:"le-item flex"},[a("div",{staticClass:"le-item__label"},[e._v("AppSecret")]),a("div",{staticClass:"le-item__value"},[e._v(e._s(e.form.AppSecret))])]),a("el-button",{staticClass:"le-editor",attrs:{type:"primary"},on:{click:function(t){e.toBind=!0}}},[e._v("修改账号信息")])],1)])]:e._e(),e.bind&&!e.isBind||e.toBind?a("div",{staticClass:"le-cardpin"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save("bind")}}},[e._v("保存")])],1):e._e()],2)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"le-upload-content"},[i("img",{staticClass:"le-upload-img",attrs:{src:a("9892")}}),i("div",[e._v("下载中...")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"le-bind-des"},[e._v(" 绑定小程序并授权，快速发布小程"),a("br"),e._v(" 序商城，自动提交最新版本的审核 ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"le-info__header flex align-center"},[a("span",{staticClass:"le-tip"}),a("span",{staticClass:"le-text"},[e._v("基本信息")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"le-prompt-text"},[e._v("请谨慎选择是否有开通小程序直播功能，否则将影响小程序的发布审核"),a("br"),e._v(" 可前往 "),a("span",{staticStyle:{color:"#595959"}},[e._v("微信公众平台>小程序>功能>直播")]),e._v(" 开通直播功能")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"le-info__header flex align-center"},[a("span",{staticClass:"le-tip"}),a("span",{staticClass:"le-text"},[e._v("账号信息")])])}],l=a("1ed8"),n=a.n(l),o={name:"applets-info",data:function(){return{bind:!1,toBind:!1,rules:{AppID:[{required:!0,message:"请输入AppID",trigger:"blur"}],AppSecret:[{required:!0,message:"请输入AppSecret",trigger:"blur"}]},form:{name:"",AppID:"",AppSecret:""},isPay:!1,isBind:!1,qrcode:"",uploadLoading:!1,enable_live:0}},methods:{goBind:function(){this.bind=!0},save:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.$heshop.appconfig("post",{behavior:"save",key:"apply_weapp"},t.form).then((function(){t.$notify({title:"保存成功",message:"小程序手动绑定成功。",type:"success"}),t.toBind=!1,t.bind=!1,t.getForm()})).catch((function(e){t.$message.error(e.data.message)}))}))},getForm:function(){var e=this;this.$heshop.appconfig("get").then((function(t){e.form=t.apply.weapp,e.isPay=!!t.appPay.weapp.appid,e.isBind=!!t.apply.weapp.AppID})).catch((function(t){e.$message.error(t.data.message)}))},getCode:function(){var e=this;this.$heshop.qrcode("post").then((function(t){e.qrcode=t.weapp.image})).catch((function(t){e.$message.error(t.data.message)}))},download:function(){var e=this;this.uploadLoading=!0,this.$heshop.download({enable_live:this.enable_live}).then((function(t){setTimeout((function(){e.uploadLoading=!1}),1e3),n()(t,"wxapp.zip")})).catch((function(e){console.error(e)}))}},mounted:function(){this.getForm(),this.getCode()}},r=o,c=(a("a09d"),a("cba8")),d=Object(c["a"])(r,i,s,!1,null,"371778d2",null);t["default"]=d.exports},9892:function(e,t,a){e.exports=a.p+"img/le-upload-applets.8b4e315c.gif"},a09d:function(e,t,a){"use strict";a("12d2")}}]);