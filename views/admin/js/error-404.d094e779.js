(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["error-404"],{"4ac7":function(t,e,n){},"9a79":function(t,e,n){"use strict";n("4ac7")},c4363:function(t,e,n){t.exports=n.p+"img/error-404.94756dcf.svg"},c619:function(t,e,n){},f5c0:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-page"},[n("div",{staticClass:"content-con"},[n("img",{attrs:{src:t.src,alt:"404"}}),n("div",{staticClass:"text-con"},[n("h4",[t._v(t._s(t.code))]),n("h5",[t._v(t._s(t.desc))])]),n("back-btn-group",{staticClass:"back-btn-group"})],1)])},c=[],o=(n("c619"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{size:"large",type:"text"},on:{click:t.backHome}},[t._v("返回首页")]),n("el-button",{attrs:{size:"large",type:"text"}},[t._v("返回上一页("+t._s(t.second)+"s)")])],1)}),s=[],a=(n("2769"),n("0756"),{name:"backBtnGroup",data:function(){return{second:5,timer:null}},methods:{backHome:function(){this.$router.replace({name:this.$config.homeName})},backPrev:function(){this.$router.go(-1)}},mounted:function(){var t=this;this.timer=setInterval((function(){0===t.second?t.backPrev():t.second--}),1e3)},beforeDestroy:function(){clearInterval(this.timer)}}),i=a,u=(n("9a79"),n("5d22")),l=Object(u["a"])(i,o,s,!1,null,null,null),f=l.exports,d={name:"error_content",components:{backBtnGroup:f},props:{code:String,desc:String,src:String}},p=d,m=Object(u["a"])(p,r,c,!1,null,null,null);e["a"]=m.exports},f96a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("error-content",{attrs:{code:"404",desc:"Oh~~您的页面好像飞走了~",src:t.src}})},c=[],o=n("c4363"),s=n.n(o),a=n("f5c0"),i={name:"error_404",components:{errorContent:a["a"]},data:function(){return{src:s.a}}},u=i,l=n("5d22"),f=Object(l["a"])(u,r,c,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=error-404.d094e779.js.map