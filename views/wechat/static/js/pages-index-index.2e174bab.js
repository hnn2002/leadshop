(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(t,e,a){"use strict";var n=a("4ea4");a("c740"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),o=n(a("4b77")),c=n(a("4bc6")),r=n(a("5830")),s=n(a("9990")),d=n(a("23f8")),l=n(a("ae01")),u=n(a("ed5e")),f=n(a("857d")),b=n(a("d545")),h=n(a("30bc")),g=n(a("29c6")),p=n(a("d2d6")),v=a("2f62"),x={},k={components:{videos:r.default,separate:s.default,blank:d.default,banner:l.default,search:u.default,goods:f.default,navigation:c.default,tabs:b.default,titles:o.default,rubik:h.default,advertising:g.default,heNavbar:p.default},data:function(){return{is_skip:!1,background:"#F7F7F7",page:[],empty:{name:"blank",icon:this.ipAddress+"/pageicon/blank-icon.png",title:"辅助空白",content:{},facade:{height:10,background_color:"#FFFFFF"}},menuButtonInfo:x}},beforeCreate:function(){var t=this;this.is_skip=!0;var e=this.$h.getQueryVariable("_skip");if(e){var a=this.$h.getQueryVariable("code");a&&(this.$store.state.apply.is_login?this.is_skip=!1:this.$store.dispatch("user/weChatLogin",{code:a}).then((function(){t.is_skip=!1,window.location.href=t.$pageURL})).catch((function(){t.is_skip=!1})))}else this.is_skip=!1},computed:(0,i.default)((0,i.default)({},(0,v.mapGetters)({searchTop:"components/getSearchTop",fixed:"components/getSearchFixed",searchHeight:"components/getSearchHeight",navbarHeight:"setting/getNavBarHeight",statusBarHeight:"setting/statusBarHeight"})),{},{topHeight:function(){return{height:"".concat(this.statusBarHeight+this.navbarHeight,"px"),lineHeight:"".concat(this.statusBarHeight+this.navbarHeight,"px")}}}),onShow:function(){this.handlePageLoading()},methods:{handlePageLoading:function(){try{var t=this.getStorageSync("micropage");if(t){uni.setNavigationBarTitle({title:t.name}),this.background=t.background,this.page=JSON.parse(t.content);var e=this.page.findIndex((function(t){return"search"===t.name}));this.$store.commit("components/setSearchIndex",e),this.$store.commit("components/setPage",this.page),this.handleLoadData(t)}else this.handleLoadData()}catch(a){this.handleLoadData()}},handleLoadData:function(t){var e=this;this.$heshop.pages("GET").then((function(a){if(e.background=a.background,!t||e.$heshop.MD5(t)!=e.$heshop.MD5(a)){e.page=JSON.parse(a.content);var n=e.page.findIndex((function(t){return"search"===t.name}));e.$store.commit("components/setSearchIndex",n),e.$store.commit("components/setPage",e.page),uni.setStorageSync("micropage",a),uni.setNavigationBarTitle({title:a.name})}})).catch((function(t){console.log("页面接在信息",t)}))},navigateToDetail:function(){uni.navigateTo({url:"/pages/goods/search"})}},onPageScroll:function(t){var e=this,a=parseInt(t.scrollTop),n=a>=e.searchTop+this.navbarHeight;if(e.searchFixed===n)return!1;this.$store.commit("components/setSearchFixed",n)}};e.default=k},2123:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[a("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),a("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?a("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-icon-wrap flex justify-center align-center"},[a("v-uni-text",{staticClass:"iconfont iconbtn_back"})],1),t.backText?a("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?a("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[a("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"600":"normal"}},[t._v(t._s(t.title))])],1):t._e(),a("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),a("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1)],1)},o=[]},"230a":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.pages[data-v-605ef250]{width:%?750?%;min-height:100vh;overflow-x:hidden;background-color:#f5f5f5}.he-page-title[data-v-605ef250]{background-color:#fff;position:fixed;z-index:10;width:100%;top:0;text-align:center}.he-search[data-v-605ef250]{background:#fff;border:%?2?% solid #e5e5e5;border-radius:%?32?%;margin:0 %?20?%;width:100%;padding-left:%?24?%;height:%?63?%}.he-search-text[data-v-605ef250]{display:inline-block;font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#999;margin-left:%?12?%}.iconsearchbar_search[data-v-605ef250]{font-size:%?24?%}',""]),t.exports=e},"426a":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync(),i={},o={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#000"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"transparent"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:i,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",console.log(this.navbarHeight),console.log(t),t},navbarStyle:function(){var t={};return Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack||uni.navigateBack({delta:1})}}};e.default=o},"4eac":function(t,e,a){var n=a("230a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("b0d761cc",n,!0,{sourceMap:!1,shadowMode:!1})},8069:function(t,e,a){"use strict";a.r(e);var n=a("0d9b"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},ac15:function(t,e,a){var n=a("bcd9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("177e0b10",n,!0,{sourceMap:!1,shadowMode:!1})},b85f:function(t,e,a){"use strict";var n=a("ac15"),i=a.n(n);i.a},bc86:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.is_skip?t._e():a("v-uni-view",{staticClass:"pages fitment-pages",style:{background:t.background}},[t.fixed?a("he-navbar",{attrs:{"is-back":!1,"title-bold":!0,"title-size":"32",background:{background:"#fff"}}},[a("v-uni-view",{staticClass:"he-search flex align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateToDetail.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont iconsearchbar_search"}),a("v-uni-text",{staticClass:"he-search-text"},[t._v("请输入关键字搜索")])],1)],1):t._e(),t._l(t.page,(function(e,n){return a("v-uni-view",{key:n},["rubik"===e.name?a("rubik",{tag:"component",attrs:{id:e.name+"_"+n,facade:e.facade,content:e.content,"data-index":n}}):"title"===e.name?a("titles",{tag:"component",attrs:{id:e.name+"_"+n,facade:e.facade,content:e.content,"data-index":n}}):"navigation"===e.name?a("navigation",{tag:"component",attrs:{id:e.name+"_"+n,facade:e.facade,content:e.content,"data-index":n}}):"video"===e.name?a("videos",{tag:"component",attrs:{id:e.name+"_"+n,facade:e.facade,content:e.content,"data-index":n}}):"separate"===e.name?a("separate",{tag:"component",attrs:{id:e.name+"_"+n,facade:e.facade,content:e.content,"data-index":n}}):"banner"===e.name?a("banner",{tag:"component",attrs:{id:e.name+"_"+n,facade:e.facade,content:e.content,"data-index":n}}):"search"===e.name?a("search",{tag:"component",attrs:{id:"search",facade:e.facade,content:e.content,"data-index":n}}):"goods"===e.name?a("goods",{tag:"component",attrs:{id:e.name+"_"+n,facade:e.facade,content:e.content,"data-index":n}}):"blank"===e.name?a("blank",{tag:"component",attrs:{id:e.name+"_"+n,facade:e.facade,content:e.content,"data-index":n}}):"tabs"===e.name?a("tabs",{tag:"component",attrs:{background:t.background,"page-index":n,id:e.name+"_"+n,facade:e.facade,content:e.content,"data-index":n}}):t._e()],1)}))],2)},o=[]},bcd9:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.u-navbar[data-v-4d5003ad]{width:100%}.u-navbar-fixed[data-v-4d5003ad]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-4d5003ad]{width:100%}.u-navbar-inner[data-v-4d5003ad]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-4d5003ad]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-4d5003ad]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-4d5003ad]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-4d5003ad]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-4d5003ad]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-4d5003ad]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-4d5003ad]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-icon-wrap[data-v-4d5003ad]{width:%?64?%;height:%?64?%;background:hsla(0,0%,100%,.5);border-radius:50%}.iconbtn_back[data-v-4d5003ad]{color:#191919;font-size:%?40?%}',""]),t.exports=e},c71d:function(t,e,a){"use strict";var n=a("4eac"),i=a.n(n);i.a},d2d6:function(t,e,a){"use strict";a.r(e);var n=a("2123"),i=a("fb50");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("b85f");var c,r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"4d5003ad",null,!1,n["a"],c);e["default"]=s.exports},f75a:function(t,e,a){"use strict";a.r(e);var n=a("bc86"),i=a("8069");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("c71d");var c,r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"605ef250",null,!1,n["a"],c);e["default"]=s.exports},fb50:function(t,e,a){"use strict";a.r(e);var n=a("426a"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a}}]);