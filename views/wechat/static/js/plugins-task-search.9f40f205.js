(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-task-search"],{"0ea1":function(t,e,a){"use strict";var i=a("4a36"),n=a.n(i);n.a},4630:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"he-page-content"},[a("v-uni-view",{staticClass:"he-search flex align-center"},[a("v-uni-view",{staticClass:"he-search__input flex align-center"},[a("v-uni-view",{staticClass:"he-search__icon iconfont iconsearchbar_search"}),a("v-uni-input",{staticClass:"flex-sub",attrs:{type:"text",focus:!0,"confirm-type":"search","placeholder-class":"he-placeholder",maxlength:40,placeholder:"输入商品名称搜索"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword="string"===typeof e?e.trim():e},expression:"keyword"}})],1),a("v-uni-text",{staticClass:"flex-sub he-search__text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v("搜索")])],1),t.$h.test.isEmpty(t.keywordList)?t._e():a("v-uni-view",{staticClass:"he-history"},[a("v-uni-view",{staticClass:"he-header flex justify-between align-center"},[a("v-uni-view",{staticClass:"he-title"},[t._v("历史搜索")]),a("v-uni-view",{staticClass:"he-clear"},[a("v-uni-view",{staticClass:"iconfont iconsearch_empty",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.emptyList.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"he-body flex flex-wrap"},t._l(t.keywordList,(function(e,i){return a("v-uni-text",{key:i,staticClass:"he-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.setKeyword(e)}}},[t._v(t._s(e))])})),1)],1)],1)},o=[]},"4a36":function(t,e,a){var i=a("5487");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("45f641bc",i,!0,{sourceMap:!1,shadowMode:!1})},5487:function(t,e,a){var i=a("4bad");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-page-content[data-v-da602b1a]{background:#fff}.he-search[data-v-da602b1a]{width:%?750?%;height:%?112?%;padding:%?24?% %?8?% %?24?% %?32?%}.he-search__input[data-v-da602b1a]{width:%?609?%;height:%?64?%;background:#f7f7f7;border-radius:%?32?%;padding:0 %?32?%}.he-search__text[data-v-da602b1a]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#222;height:%?64?%;line-height:%?64?%;text-align:center}.he-search__icon[data-v-da602b1a]{width:%?28?%;height:%?28?%;font-size:%?28?%;color:#999;margin-right:%?16?%}[data-v-da602b1a] .he-placeholder{font-size:%?28?%;font-family:PingFang SC;font-weight:400;color:#999}.he-history[data-v-da602b1a]{min-height:calc(100vh - %?112?%);padding-top:%?19?%}.iconsearch_empty[data-v-da602b1a]{font-size:%?36?%;color:#cbcbcb;width:%?36?%;height:%?36?%}.he-clear[data-v-da602b1a]{height:%?56?%;padding:%?10?%;margin-right:%?20?%}.he-header[data-v-da602b1a]{height:%?56?%}.he-header .he-title[data-v-da602b1a]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#555;margin-left:%?32?%}.he-body[data-v-da602b1a]{padding:%?10?% %?32?% 0 %?32?%}.he-body .he-item[data-v-da602b1a]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#222;padding:%?16?% %?24?%;background:#f7f7f7;border-radius:%?32?%;margin:0 %?16?% %?16?% 0}',""]),t.exports=e},"5c7d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("4de4"),a("c975");var i={name:"search",data:function(){return{keyword:"",keywordList:[],fromStr:"",couponId:null}},onLoad:function(t){this.keyword=t.keyword,this.fromStr=t.from,this.couponId=t.coupon_id,this.keywordList=this.getStorageSync("keyword_list")?this.getStorageSync("keyword_list"):[]},methods:{search:function(){if(!this.$h.test.isEmpty(this.keyword)){uni.setStorageSync("search_key",this.keyword);var t=this.getStorageSync("keyword_list");t=t||[],t.unshift(this.keyword),t=t.filter((function(t,e,a){return a.indexOf(t)===e})),uni.setStorageSync("keyword_list",t);var e="/plugins/task/search-list";this.couponId&&(e+="?coupon_id="+this.couponId),uni.redirectTo({url:e})}},setKeyword:function(t){this.keyword=t,uni.setStorageSync("search_key",t);var e="/plugins/task/search-list";this.couponId&&(e+="?coupon_id="+this.couponId),uni.redirectTo({url:e})},emptyList:function(){uni.removeStorageSync("keyword_list"),this.keywordList=[]}}};e.default=i},ab05:function(t,e,a){"use strict";a.r(e);var i=a("5c7d"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},d597:function(t,e,a){"use strict";a.r(e);var i=a("4630"),n=a("ab05");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("0ea1");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"da602b1a",null,!1,i["a"],r);e["default"]=c.exports}}]);