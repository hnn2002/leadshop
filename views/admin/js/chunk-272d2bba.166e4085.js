(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-272d2bba"],{1269:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-button",{attrs:{type:"primary"},on:{click:t.routerAddLiveGood}},[t._v("添加直播商品")]),s("el-tabs",{staticClass:"le-tabs",attrs:{type:"card"},on:{"tab-click":t.goodsTabSwitch},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l([{label:"审核中",status:"1"},{label:"审核通过",status:"2"},{label:"审核未通过",status:"3"}],(function(e,o){return s("el-tab-pane",{key:o,attrs:{label:e.label,name:e.status}},[s("liveGoodsTable",{attrs:{page:t.page},on:{"update:page":function(e){t.page=e}},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}})],1)})),1)],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"le-main"},[s("el-table",{staticClass:"le-table",attrs:{data:t.value,"row-class-name":"le-table--row"}},[s("el-table-column",{attrs:{label:"商品"},scopedSlots:t._u([{key:"default",fn:function(e){return s("div",{staticClass:"flex align-center"},[s("el-image",{staticClass:"le-image",attrs:{src:e.row.coverImgUrlBase64}},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),s("div",[t._v(" "+t._s(e.row.name)+" ")])],1)}}])}),s("el-table-column",{attrs:{label:"商品价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"le-price"},[t._v(" "+t._s(1===e.row.priceType?"一口价":2===e.row.priceType?"价格区间":3===e.row.priceType?"折扣价":"")+" ")]),s("div",[s("span",[t._v(" "+t._s(2===e.row.priceType?e.row.price+"-￥"+e.row.price2:1===e.row.priceType?e.row.price:3===e.row.priceType?e.row.price2:"")+" ")]),3===e.row.priceType?s("span",[t._v("￥"+t._s(e.row.price))]):t._e()])]}}])}),s("el-table-column",{attrs:{label:"小程序路径",prop:"url"}}),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return s("div",{staticClass:"le-operating flex align-center"},["3"===t.parentComponentName?[s("el-button",{attrs:{type:"text"},on:{click:function(s){return t.submitReview(e.row.goodsId,e.$index)}}},[t._v("提交审核")]),s("span",{staticClass:"le-line"})]:t._e(),"1"!==t.parentComponentName&&0!==e.row.is_show?[s("el-button",{attrs:{type:"text"},on:{click:function(s){return t.editLiveGood(e.row)}}},[t._v("编辑")]),s("span",{staticClass:"le-line"})]:t._e(),s("el-button",{attrs:{type:"text"},on:{click:function(s){return t.deleteGood(e.row.goodsId,e.$index)}}},[t._v("删除")])],2)}}])})],1),s("div",{staticClass:"flex le-pagination justify-end"},[s("el-pagination",{attrs:{background:"","current-page":t.page.page,"page-count":t.page.count,layout:"prev, pager, next, jumper"}})],1)],1)},n=[],r=s("5530"),l=(s("b0c0"),{name:"liveGoodsTable",props:{value:{type:Array},page:{type:Object}},computed:{parentComponentName:function(){return this.$parent.name}},methods:{submitReview:function(t,e){var s=this;this.$confirm("是否确认提交审核",{customClass:"le-submit-review"}).then((function(){s.$heshop.livegoods("post",{behavior:"submit"},{goods_id:t}).then((function(){s.$delete(s.value,e),s.$message.success("提交成功")})).catch((function(t){s.$message.error(t.data.message)}))})).catch((function(){}))},deleteGood:function(t,e){var s=this;this.$confirm("直播商品删除请谨慎操作，确定删除？",{}).then((function(){s.$heshop.livegoods("post",{behavior:"delete"},{goods_id:t}).then((function(){s.$delete(s.value,e),s.$message.success("删除成功")})).catch((function(t){s.$message.error(t.data.message)}))})).catch((function(){}))},editLiveGood:function(t){localStorage.setItem("editLiveGood",JSON.stringify(Object(r["a"])({},t))),this.$router.push({path:"/practical/live/addLiveGood",query:{goodsId:t.goodsId,status:this.parentComponentName}})}}}),c=l,u=(s("f40a"),s("718b"),s("2877")),p=Object(u["a"])(c,i,n,!1,null,"9cafb354",null),d=p.exports,f={name:"liveGoods",components:{liveGoodsTable:d},data:function(){return{form:{limit:10,status:"1"},list:[],page:{page:1,count:1}}},mounted:function(){this.getGoodsList()},methods:{getGoodsList:function(){var t=this,e=JSON.parse(JSON.stringify(this.form));e.status=+e.status,e.page=this.page.page,this.$heshop.livegoods("get",e).then((function(e){t.list=e.list})).catch((function(e){t.$message.error(e.data.message)}))},goodsTabSwitch:function(){this.list=[],this.getGoodsList()},routerAddLiveGood:function(){this.$router.push("/practical/live/addLiveGood")}}},m=f,g=(s("2095"),Object(u["a"])(m,o,a,!1,null,"3ae9e778",null));e["default"]=g.exports},2095:function(t,e,s){"use strict";s("f2f5")},"718b":function(t,e,s){"use strict";s("e682")},"809d":function(t,e,s){},e682:function(t,e,s){},f2f5:function(t,e,s){},f40a:function(t,e,s){"use strict";s("809d")}}]);