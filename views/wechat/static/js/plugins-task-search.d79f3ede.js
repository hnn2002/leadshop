(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-task-search"],{"0781":function(t,e,i){var a=i("154d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("b41b").default;n("2809f5aa",a,!0,{sourceMap:!1,shadowMode:!1})},"154d":function(t,e,i){var a=i("a1a8");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-page-content[data-v-439d243a]{background:#fff}.he-search[data-v-439d243a]{width:%?750?%;height:%?112?%;padding:%?24?% %?8?% %?24?% %?32?%}.he-search__input[data-v-439d243a]{width:%?609?%;height:%?64?%;background:#f7f7f7;border-radius:%?32?%;padding:0 %?32?%}.he-search__text[data-v-439d243a]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#222;height:%?64?%;line-height:%?64?%;text-align:center}.he-search__icon[data-v-439d243a]{width:%?28?%;height:%?28?%;font-size:%?28?%;color:#999;margin-right:%?16?%}[data-v-439d243a] .he-placeholder{font-size:%?28?%;font-family:PingFang SC;font-weight:400;color:#999}.he-history[data-v-439d243a]{min-height:calc(100vh - %?112?%);padding-top:%?19?%}.iconsearch_empty[data-v-439d243a]{font-size:%?36?%;color:#cbcbcb;width:%?36?%;height:%?36?%}.he-clear[data-v-439d243a]{height:%?56?%;padding:%?10?%;margin-right:%?20?%}.he-header[data-v-439d243a]{height:%?56?%}.he-header .he-title[data-v-439d243a]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#555;margin-left:%?32?%}.he-body[data-v-439d243a]{padding:%?10?% %?32?% 0 %?32?%}.he-body .he-item[data-v-439d243a]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#222;padding:%?16?% %?24?%;background:#f7f7f7;border-radius:%?32?%;margin:0 %?16?% %?16?% 0}',""]),t.exports=e},5824:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("3f7e"),i("9b24");var a={name:"search",data:function(){return{keyword:"",keywordList:[],fromStr:"",couponId:null}},onLoad:function(t){this.keyword=t.keyword,this.fromStr=t.from,this.couponId=t.coupon_id,this.keywordList=this.getStorageSync("keyword_list")?this.getStorageSync("keyword_list"):[]},methods:{search:function(){if(!this.$h.test.isEmpty(this.keyword)){uni.setStorageSync("search_key",this.keyword);var t=this.getStorageSync("keyword_list");t=t||[],t.unshift(this.keyword),t=t.filter((function(t,e,i){return i.indexOf(t)===e})),uni.setStorageSync("keyword_list",t);var e="/plugins/task/search-list";this.couponId&&(e+="?coupon_id="+this.couponId),uni.redirectTo({url:e})}},setKeyword:function(t){this.keyword=t,uni.setStorageSync("search_key",t);var e="/plugins/task/search-list";this.couponId&&(e+="?coupon_id="+this.couponId),uni.redirectTo({url:e})},emptyList:function(){uni.removeStorageSync("keyword_list"),this.keywordList=[]}}};e.default=a},"6f5a":function(t,e,i){"use strict";var a=i("0781"),n=i.n(a);n.a},a1d8:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"he-page-content"},[i("v-uni-view",{staticClass:"he-search flex align-center"},[i("v-uni-view",{staticClass:"he-search__input flex align-center"},[i("v-uni-view",{staticClass:"he-search__icon iconfont iconsearchbar_search"}),i("v-uni-input",{staticClass:"flex-sub",attrs:{type:"text",focus:!0,"confirm-type":"search","placeholder-class":"he-placeholder",maxlength:40,placeholder:"输入商品名称搜索"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword="string"===typeof e?e.trim():e},expression:"keyword"}})],1),i("v-uni-text",{staticClass:"flex-sub he-search__text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v("搜索")])],1),t.$h.test.isEmpty(t.keywordList)?t._e():i("v-uni-view",{staticClass:"he-history"},[i("v-uni-view",{staticClass:"he-header flex justify-between align-center"},[i("v-uni-view",{staticClass:"he-title"},[t._v("历史搜索")]),i("v-uni-view",{staticClass:"he-clear"},[i("v-uni-view",{staticClass:"iconfont iconsearch_empty",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.emptyList.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"he-body flex flex-wrap"},t._l(t.keywordList,(function(e,a){return i("v-uni-text",{key:a,staticClass:"he-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setKeyword(e)}}},[t._v(t._s(e))])})),1)],1)],1)},o=[]},ab05:function(t,e,i){"use strict";i.r(e);var a=i("5824"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},d597:function(t,e,i){"use strict";i.r(e);var a=i("a1d8"),n=i("ab05");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("6f5a");var r,s=i("522a"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"439d243a",null,!1,a["a"],r);e["default"]=c.exports}}]);