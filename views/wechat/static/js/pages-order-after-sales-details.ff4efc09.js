(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-after-sales-details"],{"0062":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"he-loading",class:"circle"==t.mode?"he-loading-circle":"he-loading-flower",style:[t.cricleStyle]}):t._e()},o=[]},"0a9b":function(t,e,i){"use strict";i.r(e);var a=i("864d"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"12e6":function(t,e,i){"use strict";var a=i("3647"),n=i.n(a);n.a},"146b":function(t,e,i){var a=i("c08c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("88da").default;n("135fbc1c",a,!0,{sourceMap:!1,shadowMode:!1})},1563:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"he-page-content",class:t.loading?"flex justify-center align-center":"",attrs:{"data-theme":t.theme}},[t.loading?i("he-loading",{attrs:{size:"50",mode:"flower"}}):t._e(),t.loading?t._e():[i("v-uni-view",{staticClass:"he-header he-box"},[i("v-uni-view",{staticClass:"he-top"},[t._v(t._s(t._f("getStatusText")(t.detail.status,t.detail)))]),100!==t.detail.status&&102!==t.detail.status?i("v-uni-view",{staticClass:"he-bottom"},[t._v(t._s(t._f("getStatusTime")(t.detail.status,t.detail)))]):t._e()],1),2==t.detail.type&&200==t.detail.status?i("v-uni-view",{staticClass:"he-box he-logistics"},[i("v-uni-view",{staticClass:"he-top"},[t._v("换货物流")]),i("v-uni-view",{staticClass:"detail-logistics flex align-center"},[t.exchangeFlow.status?[i("v-uni-text",{staticClass:"he-company"},[t._v(t._s(1===t.detail.merchant_freight_info.type?t.detail.merchant_freight_info.logistics_company:"无物流"))]),1===t.detail.merchant_freight_info.type?[i("v-uni-text",[t._v(t._s(t.detail.merchant_freight_info.freight_sn))]),i("v-uni-button",{staticClass:"cu-btn he-copy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.detail.merchant_freight_info.freight_sn)}}},[t._v("复制")])]:t._e()]:[i("v-uni-text",{staticClass:"iconfont iconorderdetails_logistics"}),i("v-uni-view",{staticClass:"flex-sub flex align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateToLogistics(t.exchangeFlow.no,t.exchangeFlow.mobile,t.exchangeFlow.name,"换货物流")}}},[0!==t.exchangeFlow.state?i("v-uni-view",{staticClass:"flex-sub he-text"},[t._v(t._s(t.exchangeFlow.message))]):i("v-uni-view",{staticClass:"flex-sub he-data_now"},[i("v-uni-view",{staticClass:"he-text he-line-2"},[t._v(t._s(t.exchangeFlow.desc))]),i("v-uni-view",{staticClass:"he-text he-time"},[t._v(t._s(t.exchangeFlow.datetime))])],1),i("v-uni-text",{staticClass:"iconfont iconbtn_arrow"})],1)]],2)],1):t._e(),122==t.detail.status||132==t.detail.status||(2==t.detail.type||1==t.detail.type)&&200==t.detail.status?i("v-uni-view",{staticClass:"he-box he-logistics"},[i("v-uni-view",{staticClass:"he-top"},[t._v("退货物流")]),i("v-uni-view",{staticClass:"detail-logistics flex align-center"},[t.returnFlow.status?[i("v-uni-text",{staticClass:"he-company"},[t._v(t._s(t.detail.user_freight_info.logistics_company))]),i("v-uni-text",[t._v(t._s(t.detail.user_freight_info.freight_sn))]),i("v-uni-button",{staticClass:"cu-btn he-copy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.detail.user_freight_info.freight_sn)}}},[t._v("复制")])]:[i("v-uni-text",{staticClass:"iconfont iconorderdetails_logistics"}),i("v-uni-view",{staticClass:"flex-sub flex align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateToLogistics(t.returnFlow.no,t.returnFlow.mobile,t.returnFlow.name,"退货物流")}}},[0!==t.returnFlow.state?i("v-uni-view",{staticClass:"flex-sub he-text"},[t._v(t._s(t.returnFlow.message))]):i("v-uni-view",{staticClass:"flex-sub he-data_now"},[i("v-uni-view",{staticClass:"he-text he-line-2"},[t._v(t._s(t.returnFlow.desc))]),i("v-uni-view",{staticClass:"he-text he-time"},[t._v(t._s(t.returnFlow.datetime))])],1),i("v-uni-text",{staticClass:"iconfont iconbtn_arrow"})],1)]],2)],1):t._e(),121==t.detail.status||131==t.detail.status?i("v-uni-view",{staticClass:"he-return-address he-box"},[i("v-uni-view",{staticClass:"he-top"},[t._v("退货地址")]),i("v-uni-view",{staticClass:"he-body"},[i("v-uni-text",{staticClass:"he-name"},[t._v(t._s(t.detail.return_address.name))]),i("v-uni-text",[t._v(t._s(t.detail.return_address.mobile))])],1),i("v-uni-view",{staticClass:"he-footer"},[t._v(t._s(t.detail.return_address.province)+t._s(t.detail.return_address.city)+t._s(t.detail.return_address.district)+t._s(t.detail.return_address.address))])],1):t._e(),101==t.detail.status?i("v-uni-view",{staticClass:"he-reason-rejection he-box"},[i("v-uni-view",{staticClass:"he-top"},[t._v("拒绝理由")]),i("v-uni-view",{staticClass:"he-bottom"},[t._v(t._s(t.detail.refuse_reason))])],1):t._e(),i("v-uni-view",{staticClass:"he-product-info he-box"},[i("v-uni-view",{staticClass:"he-top"},[t._v("商品信息")]),i("v-uni-view",{staticClass:"he-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/goods/detail?id="+t.detail.goods.goods_id)}}},t._l(t.detail.goods,(function(e,a){return i("v-uni-view",{staticClass:"he-good flex"},[i("he-image",{attrs:{width:160,height:160,src:e.goods_image,"image-style":{borderRadius:"8rpx",marginRight:"24rpx"}}}),i("v-uni-view",{staticClass:"he-content flex"},[i("v-uni-view",{staticClass:"he-content-left"},[i("v-uni-view",{staticClass:"he-name he-line-1"},[t._v(t._s(e.goods_name))]),i("v-uni-view",{staticClass:"he-attr he-line-2"},[t._v(t._s(e.show_goods_param))]),i("v-uni-view",{staticClass:"he-number-price"},[i("v-uni-text",{staticClass:"he-number"},[t._v("x"+t._s(e.goods_number))])],1)],1),i("v-uni-view",{staticClass:"he-content-right flex-sub"},[Number(e.total_amount)>Number(e.pay_amount)?[i("v-uni-view",{staticClass:"flex align-center justify-end"},[i("v-uni-text",{staticClass:"he-item-price-prompt"},[t._v("优惠后")]),i("v-uni-text",{staticClass:"he-item-payAmount"},[t._v("￥"+t._s(Math.floor(e.pay_amount/e.goods_number*100)/100))])],1),i("v-uni-view",{staticClass:"he-item-price-prompt"},[t._v("￥"+t._s(e.goods_price))])]:[i("v-uni-view",{staticClass:"he-item-payAmount"},[t._v("￥"+t._s(e.goods_price))])]],2)],1)],1)})),1)],1),i("v-uni-view",{staticClass:"he-parameter he-box"},[i("v-uni-view",{staticClass:"he-item flex align-center justify-between"},[i("v-uni-view",{staticClass:"he-item__label"},[t._v("售后方式")]),i("v-uni-view",{staticClass:"he-item__value"},[t._v(t._s(0===t.detail.type?"仅退款":1===t.detail.type?"退货退款":2===t.detail.type?"换货":""))])],1),i("v-uni-view",{staticClass:"he-item flex align-center justify-between"},[i("v-uni-view",{staticClass:"he-item__label"},[t._v(t._s(2===t.detail.type?"换货数量":"退款数量"))]),i("v-uni-view",{staticClass:"he-item__value"},[t._v(t._s(t.detail.return_number))])],1),2!==t.detail.type?[t.$manifest("task","config.integral_return")?["task"==t.detail.order_type?i("v-uni-view",{staticClass:"he-item flex align-center justify-between"},[i("v-uni-view",{staticClass:"he-item__label"},[t._v("退还积分")]),i("v-uni-view",{staticClass:"he-item__value he-price"},[t._v(t._s(t.detail.return_score)+"积分")])],1):t._e()]:t._e(),i("v-uni-view",{staticClass:"he-item flex align-start justify-between he-order--price"},[i("v-uni-view",{staticClass:"he-item__label"},[t._v("退款金额")]),i("v-uni-view",{staticClass:"he-item__value flex flex-direction align-end"},[i("v-uni-view",{staticClass:"he-price"},[t._v("¥"+t._s(t.detail.return_amount))]),Number(t.detail.return_freight)>0?i("v-uni-view",{staticClass:"he-freight"},[t._v("(包含运费￥"+t._s(t.detail.return_freight)+")")]):t._e()],1)],1),i("v-uni-view",{staticClass:"he-item flex align-center justify-between"},[i("v-uni-view",{staticClass:"he-item__label"},[t._v("退款原因")]),i("v-uni-view",{staticClass:"he-item__value"},[t._v(t._s(t.detail.return_reason))])],1)]:t._e(),t.detail.user_note?i("v-uni-view",{staticClass:"he-item-other flex justify-between"},[i("v-uni-view",{staticClass:"he-item__label flex-sub"},[t._v("问题描述")]),i("v-uni-view",{staticClass:"he-item__value flex-treble flex justify-end"},[i("v-uni-text",{staticClass:"he-user_note"},[t._v(t._s(t.detail.user_note))])],1)],1):t._e()],2),t.detail.images.length>0?i("v-uni-view",{staticClass:"he-voucher-picture he-box"},[i("v-uni-view",{staticClass:"he-top"},[t._v("凭证图片")]),i("v-uni-view",{staticClass:"he-bottom flex"},t._l(t.detail.images,(function(e,a){return i("v-uni-image",{key:a,staticClass:"he-image",attrs:{src:e,mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$utils.doPreviewImage(e,t.detail.images)}}})})),1)],1):t._e(),i("v-uni-view",{staticClass:"he-order-info he-box"},[i("v-uni-view",{staticClass:"he-top"},[i("v-uni-view",{staticClass:"he-item flex align-center justify-between"},[i("v-uni-view",{staticClass:"he-item__label"},[t._v("售后订单号")]),i("v-uni-view",{staticClass:"flex align-center"},[i("v-uni-view",{staticClass:"he-item__value"},[t._v(t._s(t.detail.after_sn))]),i("v-uni-button",{staticClass:"cu-btn he-copy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.detail.after_sn)}}},[t._v("复制")])],1)],1),i("v-uni-view",{staticClass:"he-item flex align-center justify-between"},[i("v-uni-view",{staticClass:"he-item__label"},[t._v("申请时间")]),i("v-uni-view",{staticClass:"he-item__value"},[t._v(t._s(t._f("timeFormat")(t.detail.created_time,"yyyy-mm-dd hh:MM:ss")))])],1),t.detail.audit_time?i("v-uni-view",{staticClass:"he-item flex align-center justify-between"},[i("v-uni-view",{staticClass:"he-item__label"},[t._v("审核时间")]),i("v-uni-view",{staticClass:"he-item__value"},[t._v(t._s(t._f("timeFormat")(t.detail.audit_time,"yyyy-mm-dd hh:MM:ss")))])],1):t._e(),!t.detail.return_time||1!==t.detail.type&&0!==t.detail.type?t._e():i("v-uni-view",{staticClass:"he-item flex align-center justify-between"},[i("v-uni-view",{staticClass:"he-item__label"},[t._v("退款时间")]),i("v-uni-view",{staticClass:"he-item__value"},[t._v(t._s(t._f("timeFormat")(t.detail.return_time,"yyyy-mm-dd hh:MM:ss")))])],1),t.detail.exchange_time&&2===t.detail.type?i("v-uni-view",{staticClass:"he-item flex align-center justify-between"},[i("v-uni-view",{staticClass:"he-item__label"},[t._v("换货时间")]),i("v-uni-view",{staticClass:"he-item__value"},[t._v(t._s(t._f("timeFormat")(t.detail.exchange_time,"yyyy-mm-dd hh:MM:ss")))])],1):t._e()],1),i("v-uni-view",{staticClass:"he-bottom flex justify-between"},[i("v-uni-button",{staticClass:"cu-btn flex-sub he-btn__right",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.makePhoneCall.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"iconfont iconproductdetails_tab_customerservice_telephone"}),i("v-uni-text",[t._v("呼叫卖家")])],1)],1)],1),t.isBottom?[i("v-uni-view",{staticClass:"safe-area-inset-bottom"},[i("v-uni-view",{staticClass:"he-bottom-height"})],1),i("v-uni-view",{staticClass:"he-bottom-btn safe-area-inset-bottom"},[i("v-uni-view",{staticClass:"he-height flex justify-end"},[100===t.detail.status||102===t.detail.status?i("v-uni-button",{staticClass:"cu-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isApplication=!0}}},[t._v("撤回申请")]):t._e(),101===t.detail.status?i("v-uni-button",{staticClass:"cu-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reapply.apply(void 0,arguments)}}},[t._v("再次申请")]):t._e(),121===t.detail.status||131===t.detail.status?i("v-uni-button",{staticClass:"cu-btn he-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateTo("/pages/order/fill-return-information?id="+t.detail.id+"&mobile="+t.detail.return_address.mobile)}}},[t._v("填写退货信息")]):t._e()],1)],1),i("after-sales-detail-application",{attrs:{"detail-id":t.detail.id},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelAfter.apply(void 0,arguments)}},model:{value:t.isApplication,callback:function(e){t.isApplication=e},expression:"isApplication"}})]:t._e()],i("he-float-window",{attrs:{bottom:t.isBottom?96:0,"pages-url":"after-detail"}})],2)},o=[]},3647:function(t,e,i){var a=i("45e5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("88da").default;n("14c8f5d9",a,!0,{sourceMap:!1,shadowMode:!1})},"45e5":function(t,e,i){var a=i("a1a8");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-box[data-v-3f0578e0]{width:%?510?%;height:%?357?%;background:#fff;border-radius:%?16?%}.he-body[data-v-3f0578e0]{border-bottom:%?1?% solid #e5e5e5;font-weight:500;font-family:PingFang SC;color:#222;text-align:center;padding:%?24?%}.he-title[data-v-3f0578e0]{margin-top:%?32?%;font-size:%?32?%}.he-content[data-v-3f0578e0]{font-size:%?26?%;margin-top:%?20?%;display:inline-block}.he-footer[data-v-3f0578e0]{height:%?88?%;position:relative}.cu-btn[data-v-3f0578e0]{width:%?254?%;height:%?86?%;border:none;background:#fff;font-size:%?28?%;font-family:PingFang SC;font-weight:500}.he-cancel[data-v-3f0578e0]{color:#666}[data-theme="red_theme"] .he-sure[data-v-3f0578e0]{color:#e60b30!important}[data-theme="purple_theme"] .he-sure[data-v-3f0578e0]{color:#8f2df3!important}[data-theme="blue_theme"] .he-sure[data-v-3f0578e0]{color:#33a7ff!important}[data-theme="green_theme"] .he-sure[data-v-3f0578e0]{color:#1fc551!important}[data-theme="orange_theme"] .he-sure[data-v-3f0578e0]{color:#ff7f00!important}[data-theme="golden_theme"] .he-sure[data-v-3f0578e0]{color:#caa45a!important}.he-line[data-v-3f0578e0]{width:%?2?%;height:%?88?%;background:#e5e5e5;position:absolute;top:0;left:50%}',""]),t.exports=e},4696:function(t,e,i){"use strict";var a=i("146b"),n=i.n(a);n.a},"4cd0":function(t,e,i){"use strict";i.r(e);var a=i("8713"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"5e72":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("he-popup",{attrs:{mode:"center","border-radius":16,zoom:!1},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[i("v-uni-view",{staticClass:"he-box flex-direction flex",attrs:{"data-theme":t.theme}},[i("v-uni-view",{staticClass:"he-body flex-sub"},[i("v-uni-view",{staticClass:"he-title"},[t._v("撤回售后申请")]),i("v-uni-text",{staticClass:"he-content"},[t._v("撤销申请后，售后将被关闭，\n                如后续仍有问题，可继续申请售后，\n                是否确认撤销？")])],1),i("v-uni-view",{staticClass:"he-footer flex justify-between align-end"},[i("v-uni-view",{staticClass:"he-line"}),i("v-uni-button",{staticClass:"cu-btn he-cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal=!1}}},[t._v("取消")]),i("v-uni-button",{staticClass:"cu-btn he-sure",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmit.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)},o=[]},"5fa2":function(t,e,i){"use strict";i.r(e);var a=i("1563"),n=i("4cd0");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("4696");var s,c=i("8add"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5c5c3594",null,!1,a["a"],s);e["default"]=r.exports},"6f94":function(t,e,i){"use strict";i.r(e);var a=i("5e72"),n=i("0a9b");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("12e6");var s,c=i("8add"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"3f0578e0",null,!1,a["a"],s);e["default"]=r.exports},"7fe5":function(t,e,i){"use strict";i.r(e);var a=i("0062"),n=i("816d");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("e653");var s,c=i("8add"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"618c03e3",null,!1,a["a"],s);e["default"]=r.exports},"816d":function(t,e,i){"use strict";i.r(e);var a=i("e450"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"864d":function(t,e,i){"use strict";i("cb27");var a=i("f328").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("8d0a");var n=a(i("c2c4")),o={name:"afterSalesDetail-application",components:{hePopup:n.default},props:{value:Boolean,detailId:Number},computed:{showModal:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{onSubmit:function(){this.$emit("submit",this.detailId),this.showModal=!1}}};e.default=o},8713:function(t,e,i){"use strict";i("cb27");var a=i("f328").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("aa3f");var n=a(i("66f2")),o=a(i("6f94")),s=a(i("7fe5")),c=i("c479"),r=a(i("fe9c")),l={name:"after-sale-details",components:{afterSalesDetailApplication:o.default,heLoading:s.default,heFloatWindow:r.default},data:function(){return{detail:{},isApplication:!1,loading:!0,returnFlow:{status:0},exchangeFlow:{status:0}}},computed:(0,n.default)({isBottom:function(){var t=this.detail.status;return 100===t||101===t||102===t||121===t||131===t}},(0,c.mapGetters)({getShip:"order/getShip",floatWindow:"setting/getFloatWindow"})),onLoad:function(t){this.orderId=parseInt(t.id),this.behavior=t.behavior?{behavior:t.behavior}:{},this.getDetail(this.orderId,this.behavior)},methods:{cancelAfter:function(t){var e=this;this.$heshop.orderafter("put",{id:t,behavior:"cancel"}).then((function(){e.$store.commit("after/cancelAfter",{bool:!0,order_id:t}),uni.navigateBack({delta:1})})).catch((function(t){403!==t.status&&422!==t.status||this.getDetail(this.orderId,this.behavior)}))},reapply:function(){var t=this;this.$heshop.orderafter("post",this.detail).then((function(e){t.detail.status=e.status})).catch((function(e){t.$toError(e)}))},navigateTo:function(t){this.detail.order_type&&"task"==this.detail.order_type&&(t+="&is_task=1"),uni.navigateTo({url:t})},navigateToLogistics:function(t,e,i,a){uni.navigateTo({url:"/pages/order/logistics?no="+t+"&name="+i+"&mobile="+e+"&title="+a})},getDetail:function(t,e){var i=this;this.$heshop.orderafter("get",t,e).then((function(t){if(i.detail=t,2===t.type&&200===t.status&&1===t.merchant_freight_info.type){var e=t.merchant_freight_info.freight_sn,a=t.return_address.mobile,n=t.merchant_freight_info.logistics_company;i.$heshop.express("post",{no:e,mobile:a,name:n}).then((function(t){0===t.state?i.exchangeFlow=t.list[t.list.length-1]:i.exchangeFlow.message=t.message,i.exchangeFlow.no=e,i.exchangeFlow.mobile=a,i.exchangeFlow.name=n,i.exchangeFlow.state=t.state,i.loading=!1})).catch((function(t){403===t.status&&(i.exchangeFlow.status=403),i.loading=!1}))}if(122===t.status||132===t.status||(2===t.type||1===t.type)&&200===t.status){i.loading=!0;var o=t.user_freight_info.freight_sn,s=t.buyer.mobile,c=t.user_freight_info.logistics_company;i.$heshop.express("post",{no:o,mobile:s,name:c}).then((function(t){0===t.state?i.returnFlow=t.list[t.list.length-1]:i.returnFlow.message=t.message,i.returnFlow.no=o,i.returnFlow.mobile=s,i.returnFlow.name=c,i.returnFlow.state=t.state,i.loading=!1})).catch((function(t){i.returnFlow.status=t.status,i.loading=!1}))}else i.loading=!1})).catch((function(t){403!==t.status&&422!==t.status||(uni.showToast({title:"售后订单不存在",icon:"none"}),setTimeout((function(){uni.navigateBack({delta:1})}),1e3))}))},makePhoneCall:function(){uni.makePhoneCall({phoneNumber:this.storeSetting.contact.phone.value})},copy:function(t){this.uniCopy({content:t})}},filters:{getStatusText:function(t,e){var i="",a=e.type;switch(t){case 100:i="待卖家审核";break;case 101:i="卖家已拒绝售后申请";break;case 102:i="待卖家审核";break;case 111:i="售后申请已通过，等待退款";break;case 121:i="售后申请已通过，请填写退货信息";break;case 122:i="等待卖家收货且退款";break;case 131:i="售后申请已通过，请填写退货信息";break;case 132:i="等待卖家收货且发货";break;case 200:2===a?i="换货成功":0!==a&&1!==a||(i="退款成功");break;case 201:i="已完成(已拒绝)";break}return i},getStatusTime:function(t,e){function i(t){if(t)return uni.$h.timeFormat(t,"yyyy-mm-dd hh:MM:ss")}switch(t){case 101:return i(e.refuse_time);case 111:return i(e.audit_time);case 121:return i(e.audit_time);case 122:return i(e.salesexchange_time);case 131:return i(e.audit_time);case 132:return i(e.salesexchange_time);case 200:return i(e.finish_time);case 201:return i(e.finish_time)}}},watch:{getShip:{handler:function(t){t.bool&&(this.loading=!0,this.getDetail(parseInt(t.id)),this.$store.commit("order/setShip",{bool:!1,id:null}))}}}};e.default=l},b633:function(t,e,i){var a=i("b7cf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("88da").default;n("26ed9796",a,!0,{sourceMap:!1,shadowMode:!1})},b7cf:function(t,e,i){var a=i("a1a8");e=a(!1),e.push([t.i,".he-loading-circle[data-v-618c03e3]{\r\ndisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\r\nvertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:%?2?% solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:he-circle-data-v-618c03e3 1s linear infinite;animation:he-circle-data-v-618c03e3 1s linear infinite}.he-loading-flower[data-v-618c03e3]{width:%?20?%;height:%?20?%;display:inline-block;vertical-align:middle;-webkit-animation:a 1s steps(12) infinite;animation:he-flower-data-v-618c03e3 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes he-flower-data-v-618c03e3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes he-flower-data-v-618c03e3{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes he-circle-data-v-618c03e3{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),t.exports=e},c08c:function(t,e,i){var a=i("a1a8");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-image[data-v-5c5c3594]{display:block;border-radius:%?8?%}.he-box[data-v-5c5c3594]{width:%?710?%;background-color:#fff;border-radius:%?16?%;margin-left:%?20?%;margin-right:%?20?%}.he-box[data-v-5c5c3594]:not(:last-child){margin-bottom:%?16?%}.he-header[data-v-5c5c3594]{padding:%?40?%;font-family:PingFang SC;font-weight:500}.he-header .he-top[data-v-5c5c3594]{font-size:%?32?%;color:#222;line-height:1.3}.he-header .he-bottom[data-v-5c5c3594]{font-size:%?24?%;color:#999;line-height:1.3;margin-top:%?13?%}.he-return-flow[data-v-5c5c3594]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222;padding:%?32?% %?24?%}.he-top[data-v-5c5c3594]{margin-bottom:%?21?%;font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222}.he-company[data-v-5c5c3594]{margin-right:%?20?%;font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222}.he-return-address[data-v-5c5c3594]{padding:%?32?% %?20?%;font-family:PingFang SC;font-size:%?26?%}.he-return-address .he-top[data-v-5c5c3594]{font-weight:500;color:#222;margin-bottom:%?21?%}.he-return-address .he-body[data-v-5c5c3594]{font-weight:700;color:#222;line-height:1.3;margin-bottom:%?13?%}.he-return-address .he-name[data-v-5c5c3594]{margin-right:%?24?%}.he-return-address .he-footer[data-v-5c5c3594]{font-weight:500;color:#666;line-height:1.3}.he-reason-rejection[data-v-5c5c3594]{padding:%?32?% %?24?%;font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222}.he-reason-rejection .he-top[data-v-5c5c3594]{line-height:1.3;margin-bottom:%?21?%}.he-reason-rejection .he-bottom[data-v-5c5c3594]{line-height:1.3}.he-product-info[data-v-5c5c3594]{padding:%?32?% %?24?%}.he-product-info .he-good[data-v-5c5c3594]{margin-bottom:%?24?%}.he-product-info .he-top[data-v-5c5c3594]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222;margin-bottom:%?32?%}.he-product-info .he-bottom[data-v-5c5c3594]{font-family:PingFang SC;font-weight:500}.he-product-info .he-image[data-v-5c5c3594]{width:%?160?%;height:%?160?%;margin-right:%?24?%}.he-product-info .he-content[data-v-5c5c3594]{padding-top:%?8?%;width:%?478?%}.he-product-info .he-content .he-content-left[data-v-5c5c3594]{width:%?284?%}.he-product-info .he-content .he-content-right[data-v-5c5c3594]{text-align:right}.he-product-info .he-content .he-content-right .he-weak-text[data-v-5c5c3594]{font-size:%?20?%;font-family:PingFang SC;font-weight:500;color:#999}.he-product-info .he-name[data-v-5c5c3594]{font-size:%?26?%;color:#222;line-height:1.3;margin-bottom:%?13?%}.he-product-info .he-attr[data-v-5c5c3594]{font-size:%?22?%;font-family:PingFang SC;font-weight:500;color:#999}.he-product-info .he-number-price[data-v-5c5c3594]{font-family:PingFang SC;font-weight:500;margin-top:%?13?%}.he-product-info .he-number[data-v-5c5c3594]{font-size:%?22?%;color:#999}.he-product-info .he-price[data-v-5c5c3594]{font-size:%?26?%;color:#222;margin-left:%?8?%}.he-parameter[data-v-5c5c3594]{padding:%?20?% %?24?%}.he-parameter .he-item[data-v-5c5c3594]{font-family:PingFang SC;font-size:%?26?%;height:%?50?%}.he-parameter .he-item-other[data-v-5c5c3594]{font-family:PingFang SC;font-size:%?26?%}.he-parameter .he-item__label[data-v-5c5c3594]{font-weight:500;color:#999}.he-parameter .he-item__value[data-v-5c5c3594]{font-weight:500;color:#222}.he-item__value .he-user_note[data-v-5c5c3594]{word-break:break-all}.he-parameter .he-price[data-v-5c5c3594]{font-weight:700;color:#e60b30}.he-voucher-picture[data-v-5c5c3594]{padding:%?32?% %?24?%}.he-voucher-picture .he-top[data-v-5c5c3594]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222}.he-voucher-picture .he-bottom[data-v-5c5c3594]{margin-top:%?24?%}.he-voucher-picture .he-image[data-v-5c5c3594]{width:%?150?%;height:%?150?%}.he-voucher-picture .he-image[data-v-5c5c3594]:not(:last-child){margin-right:%?20?%}.he-order-info .he-top[data-v-5c5c3594]{padding:%?20?% %?24?% %?19?% %?24?%}.he-order-info .he-item[data-v-5c5c3594]{height:%?50?%}.he-order-info .he-bottom[data-v-5c5c3594]{border-top:%?1?% solid #e5e5e5;height:%?88?%;position:relative}.he-order-info .he-bottom .cu-btn[data-v-5c5c3594]{height:%?88?%;background:#fff;margin-left:%?6?%;font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#433f52}.he-order-info .iconfont[data-v-5c5c3594]{width:%?28?%;height:%?28?%;font-size:%?28?%;margin-right:%?6?%;color:#433f52}.he-order-info .he-item__label[data-v-5c5c3594]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#999}.he-item-payAmount[data-v-5c5c3594]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222}.he-item-price-prompt[data-v-5c5c3594]{font-size:%?20?%;font-family:PingFang SC;font-weight:500;color:#999}.he-order--price[data-v-5c5c3594]{height:auto!important;margin:%?5?% 0}.he-order--price .he-freight[data-v-5c5c3594]{font-size:%?22?%;font-family:PingFang SC;font-weight:500;color:#999}.he-copy[data-v-5c5c3594]{height:%?34?%;background:#fff;border:%?1?% solid #ccc;border-radius:%?17?%;font-size:%?20?%;font-family:PingFang SC;font-weight:500;color:#222;padding:%?6?% %?14?%;margin-left:%?12?%}.he-order-info .he-item__value[data-v-5c5c3594]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222}.he-line[data-v-5c5c3594]{position:absolute;width:%?1?%;height:%?40?%;border:%?1?% solid #d7d7d7;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.he-btn__left[data-v-5c5c3594]{margin-right:%?2?%}.he-btn__right[data-v-5c5c3594]{margin-left:%?2?%}.he-bottom-height[data-v-5c5c3594]{height:%?96?%}.he-bottom-btn[data-v-5c5c3594]{width:100%;position:fixed;bottom:0;z-index:1;box-shadow:0 0 %?10?% 0 rgba(0,0,0,.05);background-color:#fff}.he-bottom-btn .he-height[data-v-5c5c3594]{height:%?96?%;padding:%?20?%}.he-bottom-btn .cu-btn[data-v-5c5c3594]{height:%?56?%;background:#fff;border:%?1?% solid #ccc;border-radius:%?28?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#222}.he-bottom-btn .he-btn[data-v-5c5c3594]{border-style:solid;border-width:%?1?%}[data-theme="red_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{color:#e60b30!important}[data-theme="purple_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{color:#8f2df3!important}[data-theme="blue_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{color:#33a7ff!important}[data-theme="green_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{color:#1fc551!important}[data-theme="orange_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{color:#ff7f00!important}[data-theme="golden_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{color:#caa45a!important}[data-theme="red_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{border-color:#e60b30!important}[data-theme="purple_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{border-color:#8f2df3!important}[data-theme="blue_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{border-color:#33a7ff!important}[data-theme="green_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{border-color:#1fc551!important}[data-theme="orange_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{border-color:#ff7f00!important}[data-theme="golden_theme"] .he-bottom-btn .he-btn[data-v-5c5c3594]{border-color:#caa45a!important}.he-bottom-btn .cu-btn[data-v-5c5c3594]:not(:last-child){margin-right:%?16?%}.he-logistics[data-v-5c5c3594]{padding:%?30?% %?24?% 0 %?24?%}.he-logistics .detail-logistics[data-v-5c5c3594]{padding:%?28?% 0 %?28?% %?4?%}.he-logistics .iconorderdetails_logistics[data-v-5c5c3594]{font-size:%?40?%;color:#d7d7d7;margin-right:%?26?%}.he-logistics .he-text[data-v-5c5c3594]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222}.he-logistics .he-data_now[data-v-5c5c3594]{padding-right:%?32?%}.he-logistics .he-time[data-v-5c5c3594]{height:%?36?%;line-height:%?36?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#999}.he-logistics .iconbtn_arrow[data-v-5c5c3594]{font-size:%?28?%;color:#bebebe}',""]),t.exports=e},e450:function(t,e,i){"use strict";i("cb27"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("8d0a");var a={name:"he-loading",props:{mode:{type:String,default:"circle"},color:{type:String,default:"#c7c7c7"},size:{type:[String,Number],default:"34"},show:{type:Boolean,default:!0}},computed:{cricleStyle:function(){var t={};return t.width=this.size+"rpx",t.height=this.size+"rpx","circle"===this.mode&&(t.borderColor="#e4e4e4 #e4e4e4 #e4e4e4 ".concat(this.color?this.color:"#c7c7c7")),t}}};e.default=a},e653:function(t,e,i){"use strict";var a=i("b633"),n=i.n(a);n.a}}]);