(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods-index"],{1506:function(e,t,s){"use strict";s("68e9")},"68e9":function(e,t,s){},"7f8e":function(e,t,s){"use strict";s("f920")},"84a7":function(e,t,s){"use strict";s("c5d9")},"9b46":function(e,t,s){"use strict";s("d846")},b086:function(e,t,s){"use strict";s("fbb3")},c0b5:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[s("span",{staticStyle:{"margin-right":"8px"}},[e._t("default")],2),s("el-popover",{attrs:{trigger:"hover",content:e.content,placement:e.placement}},[s("span",{staticClass:"le-icon le-icon-zhushi1",attrs:{slot:"reference"},slot:"reference"})])],1)},a=[],i={name:"HelpHint",props:{placement:{default:"top"},content:String}},n=i,l=(s("b086"),s("2877")),r=Object(l["a"])(n,o,a,!1,null,"47995f73",null);t["a"]=r.exports},c5d9:function(e,t,s){},d846:function(e,t,s){},e4df:function(e,t,s){"use strict";s.r(t);var o,a,i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"le-matter"},[s("el-button",{staticClass:"le-publish-btn",attrs:{type:"primary"},on:{click:function(t){return e.router("/goods/publish")}}},[e._v("发布商品")]),s("div",{staticClass:"le-card le-search"},[s("div",{staticClass:"flex flex-wrap"},[s("div",{staticClass:"le-item flex"},[s("div",{staticClass:"le-item__label"},[e._v("商品搜索")]),s("div",{staticClass:"le-item__value"},[s("el-input",{staticClass:"le-left__input",attrs:{clearable:"",placeholder:"输入商品名称/货号/ID搜索"},on:{clear:e.getSearch},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearch(t)}},model:{value:e.keyword.search,callback:function(t){e.$set(e.keyword,"search",t)},expression:"keyword.search"}})],1)]),s("div",{staticClass:"le-item flex"},[s("div",{staticClass:"le-item__label"},[e._v("商品价格")]),s("div",{staticClass:"le-item__value"},[s("el-input",{staticClass:"le-right__input",attrs:{clearable:"",placeholder:"最低价格"},on:{clear:e.getSearch},nativeOn:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearch(t)},function(t){e.keyword.price_start=e.oninput(e.keyword.price_start)}]},model:{value:e.keyword.price_start,callback:function(t){e.$set(e.keyword,"price_start",t)},expression:"keyword.price_start"}},[s("template",{slot:"append"},[e._v("元")])],2),s("span",{staticClass:"le-go"},[e._v("至")]),s("el-input",{staticClass:"le-right__input",attrs:{clearable:"",placeholder:"最高价格"},on:{clear:e.getSearch},nativeOn:{keyup:[function(t){e.keyword.price_end=e.oninput(e.keyword.price_end)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearch(t)}]},model:{value:e.keyword.price_end,callback:function(t){e.$set(e.keyword,"price_end",t)},expression:"keyword.price_end"}},[s("template",{slot:"append"},[e._v("元")])],2)],1)]),s("div",{staticClass:"le-item flex"},[s("div",{staticClass:"le-item__label"},[e._v("商品分类")]),s("div",{staticClass:"le-item__value"},[s("div",{directives:[{name:"popup",rawName:"v-popup.chooseCategory",value:e.catObject,expression:"catObject",modifiers:{chooseCategory:!0}}],staticClass:"le-group-input flex justify-between align-center",attrs:{id:"searchGroup",action:"openGroup",title:"选择分类",width:"801",module:"goods"}},[s("div",{staticClass:"he-select__content"},[0===e.keyword.group.length?s("div",{staticClass:"le-placeholder"},[e._v(" 请选择 ")]):e._e(),e._l(e.keyword.group,(function(t,o){return s("div",{key:o,staticClass:"he-select__tag"},[s("span",[e._v(e._s(t.value))]),s("i",{staticClass:"el-tag__close el-icon-close",on:{click:function(s){return s.stopPropagation(),e.delGroup(t,o)}}})])}))],2),s("i",{staticClass:"el-icon-arrow-down"})])])]),s("div",{staticClass:"le-item flex"},[s("div",{staticClass:"le-item__label"},[e._v("创建时间")]),s("div",{staticClass:"le-item__value"},[s("el-date-picker",{staticClass:"le-date__input",attrs:{type:"datetime",placeholder:"开始时间"},on:{change:e.getSearch},model:{value:e.time_start,callback:function(t){e.time_start=t},expression:"time_start"}}),s("span",{staticClass:"le-go"},[e._v("至")]),s("el-date-picker",{staticClass:"le-date__input",attrs:{type:"datetime",placeholder:"结束时间"},on:{change:e.getSearch},model:{value:e.time_end,callback:function(t){e.time_end=t},expression:"time_end"}})],1)])]),s("div",{staticClass:"le-button"},[s("el-button",{attrs:{type:"primary"},on:{click:e.getSearch}},[e._v("筛选")]),s("el-button",{on:{click:e.empty}},[e._v("清空")]),s("popconfirm",{attrs:{width:"328px",title:"确认导出选中商品信息？"},on:{confirm:e.exportGoods}},[s("el-button",[e._v("导出")])],1),s("el-button",{attrs:{type:"text"},on:{click:function(t){return e.router("/goods/goodsExportHistory")}}},[e._v("导出历史")])],1)]),s("el-tabs",{staticClass:"le-tabs",attrs:{type:"card","before-leave":e.beforeLeave},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"全部("+e.tabCount.all+")",name:"all"}},["all"==e.keyword.tab_key?s("goodsAll",{attrs:{tab_key:e.keyword.tab_key,group:e.catObject.cat,page:e.page,status:"all",loading:e.tableLoading},on:{request:e.getRequest,delete:e.deleteGoods,selection:e.selection,count:e.getCount},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}}):e._e()],1),s("el-tab-pane",{attrs:{label:"销售中("+e.tabCount.onsale+")",name:"onsale"}},["onsale"==e.keyword.tab_key?s("goodsAll",{attrs:{group:e.catObject.cat,page:e.page,status:"onsale",loading:e.tableLoading,tab_key:e.keyword.tab_key},on:{request:e.getRequest,delete:e.deleteGoods,selection:e.selection,count:e.getCount},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}}):e._e()],1),s("el-tab-pane",{attrs:{label:"下架中("+e.tabCount.nosale+")",name:"nosale"}},["nosale"==e.keyword.tab_key?s("goodsAll",{attrs:{group:e.catObject.cat,page:e.page,status:"nosale",tab_key:e.keyword.tab_key,loading:e.tableLoading},on:{count:e.getCount,request:e.getRequest,delete:e.deleteGoods,selection:e.selection},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}}):e._e()],1),s("el-tab-pane",{attrs:{label:"售罄("+e.tabCount.soldout+")",name:"soldout"}},["soldout"==e.keyword.tab_key?s("goodsAll",{attrs:{group:e.catObject.cat,page:e.page,status:"soldout",tab_key:e.keyword.tab_key,loading:e.tableLoading},on:{count:e.getCount,request:e.getRequest,delete:e.deleteGoods,selection:e.selection},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}}):e._e()],1),s("el-tab-pane",{attrs:{label:"草稿箱("+e.tabCount.drafts+")",name:"drafts"}},["drafts"==e.keyword.tab_key?s("goodsAll",{attrs:{group:e.catObject.cat,page:e.page,status:"drafts",tab_key:e.keyword.tab_key,loading:e.tableLoading},on:{count:e.getCount,request:e.getRequest,delete:e.deleteGoods,selection:e.selection},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}}):e._e()],1),s("el-tab-pane",{attrs:{label:"回收站("+e.tabCount.recycle+")",name:"recycle"}},["recycle"==e.keyword.tab_key?s("goodsAll",{attrs:{group:e.catObject.cat,page:e.page,status:"recycle",tab_key:e.keyword.tab_key,loading:e.tableLoading},on:{count:e.getCount,request:e.getRequest,delete:e.deleteGoods,selection:e.selection},model:{value:e.list,callback:function(t){e.list=t},expression:"list"}}):e._e()],1)],1),s("heloading",{attrs:{page:"goodsExportHistory",path:"goods"},on:{submit:e.exportGoods},model:{value:e.load,callback:function(t){e.load=t},expression:"load"}})],1)},n=[],l=s("1da1"),r=(s("d3b7"),s("25f0"),s("d81d"),s("841c"),s("ac1f"),s("1276"),s("a9e3"),s("a434"),s("159b"),s("96cf"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"le-goods"},[s("div",{staticClass:"le-goods__header"},[s("el-checkbox",{staticClass:"le_goods__header-checkbox",attrs:{indeterminate:e.indeterminate},on:{change:e.allCheckEvent},model:{value:e.allCheck,callback:function(t){e.allCheck=t},expression:"allCheck"}},[e._v("当页全选 ")]),"recycle"!==e.status?["soldout"!==e.tab_key&&"onsale"!==e.tab_key&&"drafts"!==e.tab_key?[s("popconfirm",{attrs:{disabled:0===e.checkList.length,title:"确认上架选中商品？",width:"320.2px"},on:{confirm:function(t){return e.putOffShelf(1)}}},[s("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("上架")])],1)]:e._e(),"nosale"!==e.tab_key&&"drafts"!==e.tab_key?[s("popconfirm",{attrs:{disabled:0===e.checkList.length,title:"确认下架选中商品？",width:"320.2px"},on:{confirm:function(t){return e.putOffShelf(0)}}},[s("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("下架")])],1)]:e._e(),s("popconfirm",{attrs:{disabled:0===e.checkList.length,title:"确认删除选中商品？",width:"320.2px"},on:{confirm:e.batchDeletion}},[s("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("删除")])],1),"drafts"!==e.tab_key?s("el-button",{directives:[{name:"popup",rawName:"v-popup.chooseCategory",value:e.catObject,expression:"catObject",modifiers:{chooseCategory:!0}}],staticStyle:{"margin-left":"8px"},attrs:{disabled:0===e.checkList.length,action:"setGroup",module:"goods",title:"选择分类",width:"820"}},[e._v("改分类 ")]):e._e()]:[s("popconfirm",{attrs:{disabled:0===e.checkList.length,width:"320px",title:"确认恢复商品？"},on:{confirm:e.batchRestore}},[s("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("恢复")])],1),s("popconfirm",{attrs:{disabled:0===e.checkList.length,width:"424px",title:"商品将被删除且无法撤销，确定删除？"},on:{confirm:e.batchRecycleDelete}},[s("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("删除")])],1)]],2),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"goodsTable",staticClass:"le_goods__main",attrs:{data:e.value,"row-key":"id","default-sort":{prop:"created_time",order:"descending"}},on:{select:e.selectRow,"select-all":e.selectAll,"selection-change":e.selectionChange,"sort-change":e.sortChange}},[s("el-table-column",{attrs:{type:"selection",width:"55"}}),s("el-table-column",{attrs:{label:"商品描述","min-width":"309"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"flex"},[s("el-image",{staticClass:"le_goods__main-pic",attrs:{src:t.row.slideshow[0]}},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),s("div",{staticClass:"le_goods__main-goodsinfo"},[s("div",{staticClass:"le_goods__main-goodsname",attrs:{slot:"reference"},slot:"reference"},[e._v(" "+e._s(t.row.name)+" "),s("div",{staticClass:"le-goods__editor"},[s("he-icon",{directives:[{name:"popup",rawName:"v-popup.editName",value:t.row,expression:"scope.row",modifiers:{editName:!0}}],staticClass:"le_goods__main-sortedit",attrs:{id:"editName_"+t.row.id,module:"goods",width:"380",title:"编辑商品名称",type:"le-icon-editor"}})],1)]),s("div",{staticClass:"le_goods__main-goodscn"},[e._v(" 货号："+e._s(t.row.goods_sn?t.row.goods_sn:"--")+" ")]),s("div",{staticClass:"le_goods__main-goodscn"},[e._v("ID："+e._s(t.row.id))])])],1)]}}])}),s("el-table-column",{attrs:{"sort-orders":["ascending","descending"],label:"商品价格",prop:"price",sortable:"custom","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{staticClass:"le_goods__main-goodstitle"},[e._v("￥"+e._s(t.row.price))])]}}])}),s("el-table-column",{attrs:{"sort-orders":["ascending","descending"],label:"库存",prop:"stocks",sortable:"custom","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{staticClass:"le_goods__main-goodstitle"},[e._v(e._s(t.row.stocks))])]}}])}),s("el-table-column",{attrs:{"sort-orders":["ascending","descending"],label:"销量",prop:"sales",sortable:"custom","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{staticClass:"le_goods__main-goodstitle"},[e._v(e._s(t.row.sales))])]}}])}),s("el-table-column",{attrs:{label:"创建时间",prop:"created_time",sortable:"custom","min-width":"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{staticClass:"le_goods__main-goodstitle"},[e._v(e._s(e._f("timeFormat")(t.row.created_time,"yyyy-mm-dd hh:MM:ss")))])]}}])}),"drafts"!==e.tab_key&&"recycle"!==e.tab_key?s("el-table-column",{attrs:{label:"商品状态",prop:"status","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.stocks>0?[1==t.row.is_sale?s("el-tag",{attrs:{size:"medium",type:"success"}},[e._v("销售中")]):0==t.row.is_sale?s("el-tag",{attrs:{size:"medium",type:"info"}},[e._v("下架中")]):e._e()]:s("el-tag",{attrs:{size:"medium",type:"warning"}},[e._v("售罄")])]}}],null,!1,4039142832)}):e._e(),s("el-table-column",{attrs:{"render-header":e.hintRender,prop:"sort",sortable:"custom","min-width":"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"le_goods__main-goodstitle le_goods__main-sort"},[e._v(" "+e._s(t.row.sort)+" "),s("el-popover",{attrs:{id:t.row.id,title:" ",trigger:"click"},model:{value:t.row.popover,callback:function(s){e.$set(t.row,"popover",s)},expression:"scope.row.popover"}},[s("div",{staticClass:"el-popconfirm"},[s("p",{staticClass:"el-popconfirm__main"},[s("el-input",{on:{input:function(t){e.sort=e.onlyNum(e.sort)}},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}})],1),s("div",{staticClass:"el-popconfirm__action"},[s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(s){return e.cancel(t.$index)}}},[e._v("取消")]),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(s){return e.setSort(t.$index)}}},[e._v("确定")])],1)]),s("span",{attrs:{slot:"reference"},on:{click:function(s){return e.getSortVal(t.row)}},slot:"reference"},[s("he-icon",{staticClass:"le_goods__main-sortedit",attrs:{type:"le-icon-editor"}})],1)])],1)]}}])}),s("el-table-column",{attrs:{label:"访问量",prop:"visits",sortable:"custom","min-width":"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"le_goods__main-goodstitle"},[e._v(" 访问量："+e._s(t.row.visits)+" ")]),s("div",{staticClass:"le_goods__main-goodstitle"},[e._v(" 访客数："+e._s(t.row.visitors)+" ")])]}}])}),s("el-table-column",{attrs:{label:"操作",prop:"",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"le-button-editor el-row--flex he-btn flex align-center"},["recycle"!==e.status?[s("he-link",{attrs:{query:{id:t.row.id},href:"goods/publish"}},[s("el-button",{staticClass:"le-goods__btn",attrs:{type:"text"}},[e._v("编辑")])],1),s("span",{staticClass:"he-btn__span"})]:e._e(),"recycle"!==e.status?["drafts"!==e.tab_key?s("el-button",{directives:[{name:"popup",rawName:"v-popup.promote",value:{data:t.row,promoteType:"goods"},expression:"{\n              data: scope.row,\n              promoteType: 'goods',\n            }",modifiers:{promote:!0}}],staticClass:"le-goods__btn",attrs:{hide_footer:!0,id:t.row.id+"_promote",module:"goods",title:"推广",type:"text",width:"791"}},[e._v("推广 ")]):e._e(),"drafts"!==e.tab_key?s("span",{staticClass:"he-btn__span"}):e._e(),s("popconfirm",{attrs:{width:"392px",title:"商品删除请谨慎操作，确定删除？"},on:{confirm:function(s){return e.deleteGoods(t.row.id)}}},[s("el-button",{staticClass:"le-goods__btn",attrs:{type:"text"}},[e._v("删除")])],1)]:[s("popconfirm",{attrs:{title:"确认恢复商品？",width:"320px"},on:{confirm:function(s){return e.restore({id:t.row.id,index:t.$index})}}},[s("el-button",{staticClass:"le-goods__btn",attrs:{type:"text"}},[e._v("恢复")])],1),s("span",{staticClass:"he-btn__span"}),s("popconfirm",{attrs:{title:"商品将被删除且无法撤销，确定删除？",width:"392px"},on:{confirm:function(s){return e.recycleDelete({id:t.row.id,index:t.$index})}}},[s("el-button",{staticClass:"le-goods__btn",attrs:{type:"text"}},[e._v("删除")])],1)]],2)]}}])})],1),s("div",{staticClass:"le-goods__footer el-row--flex is-align-middle is-justify-space-between"},[s("div",[s("el-checkbox",{staticClass:"le_goods__header-checkbox",attrs:{indeterminate:e.indeterminate},on:{change:e.allCheckEvent},model:{value:e.allCheck,callback:function(t){e.allCheck=t},expression:"allCheck"}},[e._v("当页全选 ")]),"recycle"!==e.status?["soldout"!==e.tab_key&&"onsale"!==e.tab_key&&"drafts"!==e.tab_key?s("popconfirm",{attrs:{disabled:0===e.checkList.length,title:"确认上架选中商品？",width:"320.2px"},on:{confirm:function(t){return e.putOffShelf(1)}}},[s("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("上架")])],1):e._e(),"nosale"!==e.tab_key&&"drafts"!==e.tab_key?s("popconfirm",{attrs:{disabled:0===e.checkList.length,title:"确认下架选中商品？",width:"320.2px"},on:{confirm:function(t){return e.putOffShelf(0)}}},[s("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("下架")])],1):e._e(),s("popconfirm",{attrs:{disabled:0===e.checkList.length,title:"确认删除选中商品？",width:"320.2px"},on:{confirm:e.batchDeletion}},[s("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("删除")])],1),"drafts"!==e.tab_key?s("el-button",{directives:[{name:"popup",rawName:"v-popup.chooseCategory",value:e.catObject,expression:"catObject",modifiers:{chooseCategory:!0}}],staticStyle:{"margin-left":"8px"},attrs:{disabled:0===e.checkList.length,action:"setGroup",module:"goods",title:"选择分类",width:"820"}},[e._v("改分类 ")]):e._e()]:[s("popconfirm",{attrs:{disabled:0===e.checkList.length,width:"330px",title:"确认恢复商品？"},on:{confirm:e.batchRestore}},[s("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("恢复")])],1),s("popconfirm",{attrs:{disabled:0===e.checkList.length,width:"424px",title:"商品将被删除且无法撤销，确定删除？"},on:{confirm:e.batchRecycleDelete}},[s("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("删除")])],1)]],2),s("div",{staticClass:"he-tabpane-pagination"},[s("el-pagination",{attrs:{"current-page":e.page.current,"page-count":e.page.count,background:"",layout:"prev, pager, next, jumper"},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)])],1)}),c=[],d=(s("5319"),s("d8df")),u=s("c0b5"),p=s("b686"),h={components:{HelpHint:u["a"],popconfirm:d["a"],editName:p["a"]},props:{value:{type:Array},page:{type:Object},status:{type:String},loading:{type:Boolean},tab_key:{type:String},group:{type:Array}},data:function(){return{allCheck:!1,checkList:[],content:{},catObject:{returnType:"all",cat:[],result:[]},indeterminate:!1,sort:1,order:{created_time:"DESC"}}},computed:{},created:function(){},watch:{value:{handler:function(e){if(this.allCheck){var t=this,s=this.value.length;e.forEach((function(e){for(var o=0;o<s;o++){if(e.id===t.checkList[o]){t.$refs.goodsTable.toggleRowSelection(e,!1);break}t.$refs.goodsTable.toggleRowSelection(e,!0)}}))}},deep:!0},group:{handler:function(e){this.catObject.cat=e},deep:!0}},mounted:function(){this.catObject.cat=this.group},methods:{hintRender:function(){return this.$createElement("HelpHint",{props:{content:"序号越大，排序越靠前"}},"排序")},onlyNum:function(e){var t=Number(e.replace(/\D/g,""));return t>999?999:t<0?0:t},selectRow:function(){this.allCheck&&(this.allCheck=!1)},selectionChange:function(e){this.checkList=e.map((function(e){return e.id})),this.$emit("selection",this.checkList),this.allCheck=this.checkList.length===this.value.length,this.indeterminate=this.checkList.length>0&&this.checkList.length<this.value.length},selectAll:function(e){e.length>0?(this.allCheck=!0,this.indeterminate=!1):this.allCheck=!1},allCheckEvent:function(){var e=this;this.allCheck?this.value.forEach((function(t){e.$refs.goodsTable.toggleRowSelection(t,!0)})):this.$refs.goodsTable.clearSelection()},sizeChange:function(e){this.page.size=e,this.$emit("request",{page:this.page,sort:this.order})},currentChange:function(e){this.page.current=e,this.$emit("request",{page:this.page,sort:this.order})},deleteGoods:function(e){this.$emit("delete",e),this.$emit("count")},putOffShelf:function(e){var t=this;this.$heshop.goods("put",{id:this.checkList,behavior:"batchsetting"},{is_sale:e}).then((function(){t.$refs.goodsTable.clearSelection(),t.$emit("request",{page:t.page,sort:t.order}),t.$emit("count"),t.allCheck=!1;var s="";s=1===e?"上架成功":"下架成功",t.$message.success(s)})).catch((function(e){t.$refs.goodsTable.clearSelection(),t.$message.error(e.data.message)}))},restore:function(e){var t=this;this.$heshop.recycle("put",{id:e.id,include:"goods"},null).then((function(){t.$delete(t.value,e.index),t.$emit("count"),t.$message.success("恢复成功")})).catch((function(e){t.$message.error(e.data.message)}))},batchDeletion:function(){var e=this;this.$heshop.goods("delete",this.checkList).then((function(){e.$refs.goodsTable.clearSelection(),e.$emit("request",{page:e.page,sort:e.order}),e.$emit("count"),e.$message.success("删除成功"),e.allCheck=!1})).catch((function(t){e.$refs.goodsTable.clearSelection(),e.$message.error(t.data.message)}))},recycleDelete:function(e){var t=this;this.$heshop.recycle("delete",e.id,{include:"goods"}).then((function(){t.$delete(t.value,e.index),t.$emit("count"),t.$message.success("删除成功")})).catch((function(e){t.$message.error(e.data.message)}))},batchRestore:function(){var e=this;this.$heshop.recycle("put",{id:this.checkList,include:"goods"},null).then((function(){e.$emit("request",{page:e.page,sort:e.order}),e.$emit("count"),e.$message.success("恢复成功"),e.allCheck=!1})).catch((function(t){e.$message.error(t.data.message)}))},batchRecycleDelete:function(){var e=this;this.$heshop.recycle("delete",this.checkList,{include:"goods"}).then((function(){e.$emit("request",{page:e.page,sort:e.order}),e.$emit("count"),e.$message.success("删除成功"),e.allCheck=!1})).catch((function(t){e.$message.error(t.data.message)}))},sortChange:function(e){this.order={},this.order[e.prop]="ascending"==e.order?"ASC":"DESC",this.$emit("request",{page:this.page,sort:this.order})},getSortVal:function(e){this.sort=e.sort},setSort:function(e){var t=this,s=this.value[e].id;this.$heshop.goods("put",{id:s,behavior:"batchsetting"},{sort:this.sort}).then((function(){t.value[e].popover=!1,t.value[e].sort=t.sort,t.$message.success("修改成功")})).catch((function(e){t.$message.error(e.data.message)}))},cancel:function(e){this.value[e].popover=!1},setGroup:function(e){var t=this,s=e.result.map((function(e){return e.id}));this.$heshop.goods("put",{id:this.checkList,behavior:"batchsetting"},{group:s}).then((function(){t.$refs.goodsTable.clearSelection(),t.allCheck=!1,t.$message.success("修改成功")})).catch((function(e){t.$refs.goodsTable.clearSelection(),t.$message.error(e.data.message)}))}}},g=h,f=(s("1506"),s("7f8e"),s("2877")),m=Object(f["a"])(g,r,c,!1,null,"d842e0f4",null),_=m.exports,b=s("b0f2"),v=s("a964"),k=s("2638"),y=s.n(k),w=(s("b0c0"),{name:"goodsTable",components:{HelpHint:u["a"]},data:function(){return{sort:"1"}},props:{list:{type:Array},loading:{type:Boolean},tab_key:{type:String,default:function(){return"all"}},status:{type:String}},computed:{newList:{get:function(){return this.list},set:function(e){this.$emit("update:list",e)}}},methods:{hintRender:function(){return this.$createElement("HelpHint",{props:{content:"序号越大，排序越靠前"}},"排序")},routerPush:function(e,t){var s="",o={};0===e&&(s="/goods/publish",o={id:t.id}),this.$router.push({path:s,query:o})},cancel:function(e){this.newList[e].popover=!1},setSort:function(e){var t=this,s=this.newList[e].id;this.$heshop.goods("put",{id:s,behavior:"batchsetting"},{sort:this.sort}).then((function(){t.newList[e].popover=!1,t.newList[e].sort=t.sort,t.$message.success("修改成功")})).catch((function(e){t.$message.error(e.data.message)}))},onlyNum:function(e){var t=Number(e.replace(/\D/g,""));return t>999?999:t<0?0:t}},render:function(){var e=this,t=arguments[0];return t("el-table",{attrs:{data:this.newList,"row-class-name":"le-goods__row","default-sort":{prop:"created_time",order:"descending"},"cell-class-name":"le-goods__cell"}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",y()([{attrs:{label:"商品描述",width:"309"}},{scopedSlots:{default:function(e){return t("div",{class:"flex "},[t("img",{class:"le-goods__img ",attrs:{src:e.row.slideshow[0],alt:""}}),t("div",{class:"flex flex-direction flex-sub"},[t("span",{class:"he-line-2 flex-sub le-goods__name"},[e.row.name]),t("span",{class:"le-goods__description"},["货号: ",e.row.goods_sn?e.row.goods_sn:"--",t("br"),"ID:",e.row.id])])])}}}])),t("el-table-column",y()([{attrs:{"sort-orders":["ascending","descending"],label:"商品价格",prop:"price",sortable:"custom"}},{scopedSlots:{default:function(e){return"￥"+e.row.price}}}])),t("el-table-column",{attrs:{"sort-orders":["ascending","descending"],label:"库存",prop:"stocks",sortable:"custom"}}),t("el-table-column",{attrs:{"sort-orders":["ascending","descending"],label:"销量",prop:"sales",sortable:"custom"}}),t("el-table-column",y()([{attrs:{label:"创建时间",prop:"created_time",sortable:"custom"}},{scopedSlots:{default:function(t){return e.$h.timeFormat(t.row.created_time,"yyyy-mm-dd hh:MM:ss")}}}])),"drafts"!==this.tab_key&&"recycle"!==this.tab_key?t("el-table-column",y()([{attrs:{label:"商品状态",prop:"status"}},{scopedSlots:{default:function(e){return e.row.stocks>0?1==e.row.is_sale?t("span",{class:"le-success__tag"},["销售中"]):0==e.row.is_sale?t("span",{class:"le-info__tag"},["下架中"]):null:t("span",{class:"le-warning__tag"},["售罄"])}}}])):null,t("el-table-column",y()([{attrs:{"render-header":this.hintRender,prop:"sort",sortable:"custom"}},{scopedSlots:{default:function(s){return t("div",[s.row.sort,t("el-popover",{attrs:{id:s.row.id,title:" ",trigger:"click"},model:{value:s.row.popover,callback:function(t){e.$set(s.row,"popover",t)}}},[t("p",{class:"el-popconfirm__main"},[t("el-input",{on:{input:function(){e.sort=e.onlyNum(e.sort)}},model:{value:e.sort,callback:function(t){e.sort=t}}})]),t("div",{class:"el-popconfirm__action"},[t("el-button",{on:{click:e.cancel.bind(e,s.$index)},attrs:{size:"mini",type:"text"}},["取消"]),t("el-button",{on:{click:e.setSort.bind(e,s.$index)},attrs:{size:"mini",type:"primary"}},["确定"])]),t("span",{slot:"reference"},[t("he-icon",{attrs:{type:"le-icon-editor"}})])])])}}}])),t("el-table-column",y()([{attrs:{label:"访问量",prop:"visits",sortable:"custom"}},{scopedSlots:{default:function(e){return t("div",{class:"flex flex-direction le-goods__visits"},[t("span",["访问量：",e.row.visits]),t("span",["访客数：",e.row.visitors])])}}}])),t("el-table-column",y()([{attrs:{label:"操作"}},{scopedSlots:{default:function(s){return t("div",{class:"flex"},["recycle"!==e.status?t("template",[t("span",{class:"le-edit__btn",attrs:{type:"text"},on:{click:e.routerPush.bind(e,0,s.row)}},["编辑"]),t("span",{class:"le-edit__line"})]):null,"drafts"!==e.tab_key?t("template",[t("span",{class:"le-edit__btn",attrs:{hide_footer:!0,width:"791",module:"goods",title:"推广",id:s.row.id+"_promote"}},["推广"]),t("span",{class:"le-edit__line"})]):null,t("span",{class:"le-edit__btn"},["删除"])])}}}]))])}}),C=w,x=(s("84a7"),Object(f["a"])(C,o,a,!1,null,"ea1a6682",null)),$=x.exports,S={components:{goodsAll:_,popconfirm:d["a"],heloading:b["a"],goodsTable:$},data:function(){return{load:{show:!1,type:1},ruleForm:{pass:"",checkPass:"",age:""},activeName:"all",value1:"",value2:"",keyword:{tab_key:"all",search:"",group:[],price_start:"",price_end:"",time_start:"",time_end:"",sort:{}},time_start:"",time_end:"",tabCount:{all:0,onsale:0,nosale:0,soldout:0,drafts:0,recycle:0},page:{size:20,current:1},list:[],checkList:[],tableLoading:!1,catObject:{returnType:"children",cat:[],result:[]}}},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getList(e.page),e.getCount(),e.getGroup();case 3:case"end":return t.stop()}}),t)})))()},methods:{router:function(e){this.$router.push({path:e})},empty:function(){for(var e in this.keyword)this.keyword[e]="tab_key"===e?"all":"sort"===e?{created_time:"DESC"}:"group"===e?[]:"";this.time_start="",this.time_end="",this.catObject.result=[],this.page.current=1,this.getCount(),this.getList(this.page)},getSearch:function(){this.page.current=1,this.keyword.time_start=this.time_start?new Date(this.time_start).getTime().toString().substr(0,10):"",this.keyword.time_end=this.time_end?new Date(this.time_end).getTime().toString().substr(0,10):"",this.getCount(),this.getList(this.page)},getRequest:function(e){var t=e.page?e.page:{size:20,current:1};this.keyword.sort=e.sort?e.sort:{created_time:"DESC"},this.getList(t)},getList:function(e){var t=this;this.tableLoading=!0;var s=JSON.parse(JSON.stringify(this.keyword));s.group=s.group.map((function(e){return e.id})),this.$heshop.search("post",{include:"goods"},{keyword:s}).page(e.current,e.size).then((function(e){t.tableLoading=!1;var s=e.data,o=e.headers;t.list=s.map((function(e){return e.popover=!1,e})),t.page={current:+o["x-pagination-current-page"],count:+o["x-pagination-page-count"],size:+o["x-pagination-per-page"],total:+o["x-pagination-total-count"]},t.tabCount[t.activeName]=t.page.total})).catch((function(e){t.tableLoading=!1,console.error(e)}))},tableClick:function(e){},deleteGoods:function(e){var t=this;this.$heshop.goods("delete",e).then((function(){for(var s=0;s<t.list.length;s++)if(t.list[s].id===e){t.$delete(t.list,s),t.page.current<t.page.count?t.getList(t.page):t.page.current===t.page.count&&0===t.list.length&&(t.page.current--,t.getList(t.page));break}t.$message.success("删除成功")})).catch((function(e){t.$message.error(e.data.message)}))},getCount:function(){var e=this,t=JSON.parse(JSON.stringify(this.keyword));t.group=t.group.map((function(e){return e.id})),this.$heshop.tabcount("post",{include:"goods"},{keyword:t}).then((function(t){e.tabCount=t})).catch((function(t){e.$message.error(t.data.message)}))},getGroup:function(){var e=this;this.$heshop.group("get",{include:"goods"}).then((function(t){e.$set(e.catObject,"cat",t)})).catch((function(t){e.$message.error(t.data.message)}))},selection:function(e){this.checkList=e},exportGoods:function(){var e=this;this.load={show:!0,type:1},this.keyword.time_start=this.time_start?new Date(this.time_start).getTime().toString().substr(0,10):"",this.keyword.time_end=this.time_end?new Date(this.time_end).getTime().toString().substr(0,10):"";var t=this.keyword;this.$heshop.export("post",{include:"goods"},{conditions:t,id_list:this.checkList}).then((function(){e.$set(e.load,"type",2)})).catch((function(t){e.$set(e.load,"type",3)}))},openGroup:function(e){this.keyword.group=e.result,this.catObject.result=e.result,this.getSearch()},delGroup:function(e,t){var s=this,o=e.path.split("-").map(Number),a=o.length;if(3===a){for(var i=!1,n=!1,l=this.catObject.result,r=0;r<l.length;r++)if(l[r].id===o[1]){n||(n=!0,this.catObject.result.splice(r,1));for(var c=0;c<l.length;c++)l[c].id===o[2]&&(i||(i=!0,this.catObject.result.splice(c,1)))}}else if(2===a){var d=!1;this.catObject.result.forEach((function(e,t){e.id===o[1]&&(d||(d=!0,s.catObject.result.splice(t,1)))}))}this.$delete(this.keyword.group,t),this.getSearch()},oninput:function(e){return Object(v["a"])(e)},beforeLeave:function(e,t){return e!==t&&(this.page={size:20,current:1},this.keyword.tab_key=e,this.getList(this.page),!0)}}},L=S,O=(s("9b46"),Object(f["a"])(L,i,n,!1,null,"21029a27",null));t["default"]=O.exports},f920:function(e,t,s){},fbb3:function(e,t,s){}}]);