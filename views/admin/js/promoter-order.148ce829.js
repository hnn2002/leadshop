(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-order"],{"0e28":function(e,t,n){"use strict";n.d(t,"h",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"j",(function(){return u})),n.d(t,"i",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"l",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"m",(function(){return g})),n.d(t,"d",(function(){return v})),n.d(t,"f",(function(){return b})),n.d(t,"o",(function(){return y})),n.d(t,"e",(function(){return w})),n.d(t,"n",(function(){return _})),n.d(t,"p",(function(){return k})),n.d(t,"g",(function(){return P}));n("b1fa"),n("2769"),n("ecf1");var r=n("430a"),a=(n("6afd"),n("2070"),n("eb62"),["X-PAGINATION-TOTAL-COUNT","X-PAGINATION-PER-PAGE","X-PAGINATION-PAGE-COUNT","X-PAGINATION-CURRENT-PAGE"]);function o(e){Object.keys(e.headers).forEach((function(t){e.headers[t.toUpperCase()]=e.headers[t],delete e.headers[t]}));var t={current:1,pageCount:1,totalCount:1};a.forEach((function(t){Object.keys(e.headers).map((function(n){t===n&&(e.headers[n]=parseInt(e.headers[n]))}))})),t.current=e.headers["X-PAGINATION-CURRENT-PAGE"],t.pageCount=e.headers["X-PAGINATION-PAGE-COUNT"],t.totalCount=e.headers["X-PAGINATION-TOTAL-COUNT"],e.pagination=t}var i=r["default"].prototype.$heshop,s=r["default"].prototype.$message;function c(e){var t=e.tabKey,n=void 0===t?"all":t,r=e.page,a=void 0===r?1:r;return new Promise((function(e){i.search("post",{include:"goods"},{keyword:{tab_key:n}}).page(a,10).then((function(t){o(t);var n=t.data,r=t.pagination;e({data:n,pagination:r})})).catch((function(e){s(e.data.message)}))}))}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){i.finance("get").page(e,10).then((function(e){o(e);var n=e.data,r=e.pagination;t({data:n,pagination:r})})).catch((function(e){s(e.data.message)}))}))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){i.search("post",{include:"promoterorder"},t).page(e,10).then((function(e){o(e);var t=e.data,r=e.pagination;n({data:t,pagination:r})})).catch((function(e){s(e.data.message)}))}))}function d(){return new Promise((function(e){i.promoterlevel("get").then((function(t){e(t)})).catch((function(e){s(e.data.message)}))}))}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){i.promotermaterial("get").page(e,10).then((function(e){o(e);var n=e.data,r=e.pagination;t({data:n,pagination:r})})).catch((function(e){s(e.data.message)}))}))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t){i.promotermaterial("post",e).then((function(e){t(e)})).catch((function(e){s(e.data.message)}))}))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){i.promoterzone("get",t).page(e,10).then((function(e){o(e);var t=e.data,r=e.pagination;n({data:t,pagination:r})})).catch((function(e){s(e.data.message)}))}))}function h(e){return new Promise((function(t){i.promoterzone("post",e).then((function(e){t(e)})).catch((function(e){s(e.data.message)}))}))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i.setting("post",{keyword:"commission_setting",content:e}).then((function(e){t(e)})).catch((function(e){n(e)}))}))}function v(){return new Promise((function(e,t){i.search("post",{include:"setting"},{keyword:"commission_setting"}).then((function(t){e(t)})).catch((function(e){s(e.data.message),t()}))}))}function b(){return new Promise((function(e,t){i.search("post",{include:"setting"},{keyword:"promoter_setting"}).then((function(t){e(t)})).catch((function(e){s(e.data.message),t()}))}))}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i.setting("post",{keyword:"promoter_setting",content:e}).then((function(e){t(e)})).catch((function(e){n(e)}))}))}function w(){return new Promise((function(e,t){i.search("post",{include:"setting"},{keyword:"promoter_rank"}).then((function(t){e(t)})).catch((function(e){s(e.data.message),t()}))}))}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i.setting("post",{keyword:"promoter_rank",content:e}).then((function(e){t(e)})).catch((function(e){n(e)}))}))}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){i.setting("post",{keyword:"promoter_recruit_make",content:e}).then((function(e){t(e)})).catch((function(e){n(e)}))}))}function P(){return new Promise((function(e,t){i.search("post",{include:"setting"},{keyword:"promoter_recruit_make"}).then((function(t){e(t.content)})).catch((function(e){s(e.data.message),t()}))}))}},5531:function(e,t,n){},"5f8e":function(e,t,n){"use strict";n("5531")},8236:function(e,t,n){"use strict";n("2769"),n("0756"),n("6afd"),n("2070");t["a"]={data:function(){},methods:{replaceQuery:function(){var e=Object.assign({},this.$route.query,this.form);this.$router.replace({query:e})},getQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["page"],t=this.$route.query;return Object.keys(t).forEach((function(n){for(var r=0;r<e.length;r++)e[r]===n&&(isNaN(t[n])?t[n]=1:t[n]=parseInt(t[n]))})),Object.assign(this.form,t)},emptyStatus:function(){this.$router.replace({query:{}})}},filters:{}}},9463:function(e,t,n){"use strict";n.r(t);n("aa00"),n("2769"),n("ecf1"),n("eb62"),n("3f7e"),n("f5bd");var r,a,o=n("8236"),i=n("0e28"),s={mixins:[o["a"]],data:function(){return{form:{search_key:"order_sn",search:"",source:"",status:null,orderTime:[],page:1},list:[],pagination:{pageCount:1}}},methods:{filter:function(){this.replaceQuery(),this.promoterOrderList()},empty:function(){this.emptyStatus(),this.promoterOrderList()},switchPage:function(e){this.form.page=e,this.replaceQuery(),this.promoterOrderList()},promoterOrderList:function(){var e=this,t=JSON.parse(JSON.stringify(this.form));t.orderTime.length>0?(t.time_start=t.orderTime[0]+"",t.time_start=t.time_start.slice(0,t.time_start.length-3),t.time_end=t.orderTime[1]+"",t.time_end=t.time_end.slice(0,t.time_end.length-3)):(t.time_start=null,t.time_end=null),delete t.orderTime,Object(i["j"])(this.form.page,{keyword:t}).then((function(t){e.list=t.data,e.pagination=t.pagination}))}},mounted:function(){this.form=this.getQuery(),this.promoterOrderList()},render:function(){var e=this,t=arguments[0],n=this,r=[{label:"订单号",value:"order_sn"},{label:"商品名称",value:"goods_name"},{label:"买家昵称",value:"buyer_nickname"},{label:"买家手机号",value:"buyer_mobile"},{label:"收货人姓名",value:"consignee_name"},{label:"收货人手机号",value:"consignee_mobile"},{label:"商品货号",value:"goods_sn"}],a=[{label:"全部",value:""},{label:"微信小程序",value:"weapp"},{label:"公众号",value:"wechat"}],o=[{label:"全部",value:null},{label:"待结算",value:"0"},{label:"已结算",value:"1"}];return t("div",{class:"le-main"},[t("el-form",{class:"le-card",attrs:{"label-width":"112px",inline:!0}},[t("el-form-item",{attrs:{label:"订单搜索"},class:"le-order--search"},[t("el-input",{attrs:{placeholder:"请输入内容"},model:{value:n.form.search,callback:function(t){e.$set(n.form,"search",t)}}},[t("el-select",{slot:"prepend",attrs:{placeholder:"请选择"},model:{value:n.form.search_key,callback:function(t){e.$set(n.form,"search_key",t)}}},[r.map((function(e,n){return t("el-option",{key:n,attrs:{label:e.label,value:e.value}})}))])])]),t("el-form-item",{attrs:{label:"订单来源"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:n.form.source,callback:function(t){e.$set(n.form,"source",t)}}},[a.map((function(e,n){return t("el-option",{key:n,attrs:{label:e.label,value:e.value}})}))])]),t("el-form-item",{attrs:{label:"佣金状态"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:n.form.status,callback:function(t){e.$set(n.form,"status",t)}}},[o.map((function(e,n){return t("el-option",{key:n,attrs:{label:e.label,value:e.value}})}))])]),t("el-form-item",{attrs:{label:"下单时间"}},[t("el-date-picker",{attrs:{size:"small",type:"datetimerange","value-format":"timestamp","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:n.form.orderTime,callback:function(t){e.$set(n.form,"orderTime",t)}}})]),t("div",{class:"le-button"},[t("el-button",{attrs:{type:"primary"},on:{click:n.filter}},["筛选"]),t("el-button",{on:{click:n.empty}},["清空"])])]),t("div",{class:"le-card"},[t("div",{class:"le-table--wrapper"},[t("table",{class:"le-table"},[t("thead",{class:"le-table--head"},[t("tr",[t("td",["商品描述"]),t("td",["单价/数量"]),t("td",["买家/收货人"]),t("td",["商品实付金额"]),t("td",["商品利润"]),t("td",["佣金状态"]),t("td",["佣金金额"])])]),t("tbody",{class:"le-table--body"},[n.list.map((function(n){return[[t("tr",{class:"le-body--empty"},[t("td",{attrs:{colSpan:"7"}})])],[t("tr",{class:"le-order--head"},[t("td",{attrs:{colSpan:"7"}},[t("span",{class:"le-order--time"},[e.$moment(new Date(1e3*n.created_time)).format("Y-MM-DD HH:mm:ss")]),t("span",{class:"le-order--text"},["订单号："]),t("span",{class:"le-order--number"},[n.order_sn]),function(){if("weapp"===n.order.source){var e="小程序",r="le-icon-xiaochengxu";return[[t("span",{class:"le-icon le-platform--icon "+r})],[t("span",{class:"le-order--text"},[e])]]}}()])])],[t("tr",{class:"le-order--info"},[t("td",{class:"flex"},[t("el-image",{class:"le-order--image",attrs:{src:n.orderGoods.goods_image}}),t("div",{class:"le-order--content flex-sub"},[t("div",{class:"flex "},[t("div",{class:"le-goods--name"},[n.orderGoods.goods_name])]),t("div",{class:"le-goods--attr"},[n.orderGoods.goods_param])])]),t("td",[t("div",{class:"le-goods--number"},["¥",n.orderGoods.goods_price,t("br"),"X",n.orderGoods.goods_number])]),t("td",{class:"le-contact-person"},[t("div",{class:"le-buyer"},[n.user.nickname]),t("div",{class:"le-receiver"},[n.buyer.name,t("br"),"15862962362"])]),t("td",{class:"le-amount-paid"},["¥",n.order.pay_amount]),t("td",{class:"le-amount-paid"},["¥",n.profits_amount]),t("td",{class:"le-order--status"},[function(){var e="",r="";return 1===n.status?(e="success",r="已结算"):(e="待结算",r="warning"),t("el-tag",{attrs:{effect:"plain",size:"medium",type:e}},[r])}()]),t("td",{class:"le-level"},[t("div",["一级佣金：￥",n.commission.first.commission," 分销员：",n.commission.first.user]),t("div",["二级佣金：￥",n.commission.second.commission," 分销员：",n.commission.second.user]),t("div",["三级佣金：￥",n.commission.third.commission," 分销员：",n.commission.third.user])])])]]}))])])]),t("div",{class:"flex le-pagination justify-end"},[t("el-pagination",{attrs:{background:!0,"current-page":n.form.page,layout:"prev, pager, next, jumper","page-count":n.pagination.pageCount},on:{"current-change":n.switchPage}})])])])}},c=s,l=(n("5f8e"),n("5d22")),u=Object(l["a"])(c,r,a,!1,null,"583f183c",null);t["default"]=u.exports}}]);
//# sourceMappingURL=promoter-order.148ce829.js.map