(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods-groupTemplate"],{"16ae":function(t,e,n){"use strict";n("bb19")},"79ea":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"le-matter"},[n("el-button",{directives:[{name:"popup",rawName:"v-popup.groupTemplate",modifiers:{groupTemplate:!0}}],attrs:{type:"primary",module:"goods",title:"新增规格模板",width:"788",action:"getGroup"}},[t._v("新增规格模板 ")]),n("el-form",{staticClass:"le-card le-search",attrs:{"label-width":"96px"},nativeOn:{submit:function(t){t.preventDefault()}}},[n("el-form-item",{attrs:{label:"规格搜索"}},[n("el-input",{attrs:{placeholder:"输入规格名称搜索",clearable:""},on:{clear:function(e){return t.getList(1)}},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("el-button",{staticClass:"le-search-btn",attrs:{type:"primary"},on:{click:function(e){return t.getList(1)}}},[t._v("筛选 ")]),n("el-button",{on:{click:t.empty}},[t._v("清空")])],1),n("div",{staticClass:"le-card le-list"},[n("div",{staticClass:"le-operating"},[n("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("当页全选 ")]),n("el-button",{attrs:{disabled:0===t.checkList.length},on:{click:t.delAll}},[t._v("删除 ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"templateTable",staticClass:"le-table",attrs:{data:t.list,"row-key":t.rowKey,"row-class-name":"le-table-row"},on:{"selection-change":t.selectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{label:"规格名",prop:"param_name","min-width":"260px"}}),n("el-table-column",{attrs:{label:"规格值","min-width":"746px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.param_data.join("; "))+" ")]}}])}),n("el-table-column",{attrs:{label:"操作","min-width":"210px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"le-table-edit flex align-center"},[n("span",{directives:[{name:"popup",rawName:"v-popup.groupTemplate",value:{item:e.row,index:e.$index},expression:"{ item: scope.row, index: scope.$index }",modifiers:{groupTemplate:!0}}],staticClass:"le-button-text",attrs:{module:"goods",id:"group_template_"+e.row.id,title:"编译规格模板",width:"788"}},[t._v("编辑")]),n("span",{staticClass:"le-line-text"}),n("span",{staticClass:"le-button-text",on:{click:function(n){return t.delItem(e.row.id,e.$index)}}},[t._v("删除")])])]}}])})],1),n("div",{staticClass:"le-operating flex justify-between"},[n("div",{},[n("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("当页全选 ")]),n("el-button",{attrs:{disabled:0===t.checkList.length},on:{click:t.delAll}},[t._v("删除 ")])],1),n("el-pagination",{attrs:{disabled:t.loading,"current-page":t.pagination.current,"page-count":t.pagination.count,background:"",layout:"prev, pager, next, jumper"},on:{"current-change":t.getList}})],1)],1)],1)},a=[],l=(n("5d63"),n("f667"),n("e939"),{data:function(){return{loading:!1,name:"",pagination:{current:1,count:1},list:[],checkList:[],checkAll:!1,isIndeterminate:!1}},methods:{rowKey:function(t){return t.id},getList:function(t){var e=this;this.loading=!0,this.$heshop.goodstemplate("get",{name:this.name}).page(t,15).then((function(t){console.log(t);var n=t.headers,i=t.data;e.pagination={current:+n["x-pagination-current-page"],count:+n["x-pagination-page-count"]},e.list=i,e.loading=!1})).catch((function(t){e.$message.error(t.data.message),e.loading=!1}))},getGroup:function(){this.getList(this.pagination.current)},handleCheckAllChange:function(){var t=this;this.isIndeterminate=!1,this.checkList=this.list,this.list.forEach((function(e){t.$refs.templateTable.toggleRowSelection(e,t.checkAll)}))},selectionChange:function(t){this.checkList=t,this.isIndeterminate=this.checkList.length>0&&this.checkList.length<this.list.length,this.checkList.length===this.list.length&&(this.checkAll=!0),0===this.checkList.length&&(this.checkAll=!1)},empty:function(){this.name="",this.getList(1)},delItem:function(t,e){var n=this;this.$confirm("是否确认删除此条规格模板？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){n.$heshop.goodstemplate("delete",t).then((function(){if(n.$delete(n.list,e),n.pagination.current>1&&0===n.list.length){var t=n.pagination.current-1;n.getList(t)}else n.pagination.current>=1&&0!==n.list.length&&1!==n.pagination.count&&n.getList(n.pagination.current);n.$message.success("删除成功")})).catch((function(t){n.$message.error(t.data.message)}))})).catch((function(){}))},delAll:function(){var t=this,e=this.checkList.map((function(t){return t.id}));this.$confirm("是否确认删除选中规格模板？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){t.$heshop.goodstemplate("delete",e).then((function(){var n=t.list.length-e.length;if(t.pagination.current>1&&0===n){var i=t.pagination.current-1;t.getList(i)}else t.pagination.current>=1&&0!==n&&1!==t.pagination.count&&t.getList(t.pagination.current);t.$message.success("删除成功"),t.checkList=[]})).catch((function(e){t.$message.error(e.data.message)}))})).catch((function(){}))}},mounted:function(){this.getList(1)}}),s=l,c=(n("16ae"),n("cba8")),o=Object(c["a"])(s,i,a,!1,null,"c15bbe82",null);e["default"]=o.exports},bb19:function(t,e,n){}}]);