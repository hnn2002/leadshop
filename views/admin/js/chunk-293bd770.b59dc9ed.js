(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-293bd770"],{"0086":function(e,t,s){},"02ac":function(e,t,s){"use strict";var a=s("914c"),i=s("9caa"),r=function(){function e(){Object(a["a"])(this,e)}return Object(i["a"])(e,[{key:"isFloat",value:function(e){var t=String(e).indexOf(".")+1;String(e).length;return t>0}},{key:"isIntNum",value:function(e){return!(e<0)||(0===e||"0"===e||0===e||"0.00"===e)}},{key:"isNumber",value:function(e){if(0===e||"0"===e||0===e||"0.00"===e)return!0;var t=/^\d+(\.\d+)?$/,s=/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;return!(!t.test(e)&&!s.test(e))}},{key:"isPrice",value:function(e){if(0===e||"0"===e||0===e||"0.00"===e)return!0;var t=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;return!!t.test(e)}},{key:"isEmpty",value:function(e){return("undefined"==typeof e||null==e||""==e)&&0!==e}},{key:"isLimit",value:function(e,t){return e>t}}]),e}();t["a"]=new r},"0bf7":function(e,t,s){"use strict";s("e7ec")},"4a73":function(e,t,s){"use strict";s("0086")},"8dd5":function(e,t,s){"use strict";s("b181")},"97a5":function(e,t,s){"use strict";s("c60e")},"9a5f":function(e,t,s){"use strict";s("bf83")},b181:function(e,t,s){},bf83:function(e,t,s){},c60e:function(e,t,s){},d2df:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"task-card"},[s("div",{staticClass:"task-content__body"},[s("el-form",{ref:"form",attrs:{model:e.form,"label-width":"140px"}},[s("div",{staticClass:"__body"},[s("el-form-item",{attrs:{label:"上架状态"}},[s("el-radio-group",{model:{value:e.form.goods_is_sale,callback:function(t){e.$set(e.form,"goods_is_sale",t)},expression:"form.goods_is_sale"}},[s("el-radio",{attrs:{label:1}},[e._v("立即上架")]),s("el-radio",{attrs:{label:0}},[e._v("暂不上架")])],1)],1),s("el-form-item",{attrs:{label:"选择商品"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[e._v("*")]),e._v("选择商品")]),s("TaskGoods",{ref:"taskgoods",model:{value:e.form.goods_list,callback:function(t){e.$set(e.form,"goods_list",t)},expression:"form.goods_list"}}),s("el-button",{attrs:{plain:"",disabled:e.form.goods_list.length>=10},on:{click:e.handleDialog}},[e._v("选择商品")]),s("span",{staticStyle:{"padding-left":"8px",color:"#bfbfbf"}},[e._v("单次最多添加10件商品")]),s("TaskTables",{ref:"taskTable",model:{value:e.form.goods_list,callback:function(t){e.$set(e.form,"goods_list",t)},expression:"form.goods_list"}})],1)],1),s("div",{staticClass:"task-card-footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("保存")])],1)])],1)])},i=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"task-tables"},[s("el-table",{attrs:{data:e.value,"span-method":e.arraySpanMethod}},[s("el-table-column",{attrs:{label:"Date",prop:"date"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(" 商品 ")]}},{key:"default",fn:function(t){return[s("div",{staticClass:"__goods_cover"},[s("img",{attrs:{src:e.getGoodsCover(t.row.slideshow),alt:""}}),s("div",{staticClass:"__goods_title"},[s("p",[e._v(e._s(e._f("capitalize")(t.row.name)))])])])]}}])}),s("el-table-column",{attrs:{label:"Name",prop:"name",width:"184px"},scopedSlots:e._u([{key:"header",fn:function(t){return[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[e._v("*")]),e._v("可兑换数量 "),s("el-tooltip",{staticClass:"item",attrs:{manual:!0,content:"可兑换数量与商城商品库存互相独立，互不影响",placement:"top","popper-class":"task-tooltip"}},[s("i",{staticClass:"le-icon le-icon-zhushi1",staticStyle:{position:"relative",top:"-1px","font-size":"13px",color:"#bbbfc8","vertical-align":"middle"}})])]}},{key:"default",fn:function(t){return[1==t.row.param_type?s("el-input",{attrs:{blur:"(e)=>{\n                   if(e.target.value=='') $message.error('可兑换数量不能为空')\n                   if(!isInteger(e.target.value)) $message.error('可兑换数量必须为整数')\n                   if(e.target.value>9999999) $message.error('兑换数量不能大于9999999') }"},model:{value:t.row.task_stock,callback:function(s){e.$set(t.row,"task_stock",s)},expression:"scope.row.task_stock"}},[s("template",{slot:"append"},[e._v("件")])],2):e._e(),2==t.row.param_type?s("div",{staticClass:"__specs-setting"},[s("TaskSpecs",{ref:"taskspecs"+t.$index,attrs:{goods:t.row},model:{value:t.row.param,callback:function(s){e.$set(t.row,"param",s)},expression:"scope.row.param"}}),s("el-button",{on:{click:function(s){return e.handleDialog(t.$index)}}},[e._v("多规格设置")])],1):e._e()]}}])}),s("el-table-column",{attrs:{label:"Name",prop:"name",width:"322px"},scopedSlots:e._u([{key:"header",fn:function(t){return[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[e._v("*")]),e._v("积分价格 ")]}},{key:"default",fn:function(t){return[s("el-input",{attrs:{blur:"(e)=>{ \n                      if(e.target.value=='') $message.error('积分价格不能为空')\n                      if(!isInteger(e.target.value)) $message.error('积分价格必须为整数')\n                      if(e.target.value>9999999) $message.error('积分价格不能大于9999999')\n                  }"},model:{value:t.row.task_number,callback:function(s){e.$set(t.row,"task_number",s)},expression:"scope.row.task_number"}},[s("template",{slot:"append"},[e._v("积分")])],2),s("span",{staticStyle:{display:"inline-block",width:"24px",height:"32px","line-height":"32px","text-align":"center"}},[e._v("+")]),s("el-input",{attrs:{blur:"(e)=>{ \n                      if(e.target.value=='') $message.error('积分价格不能为空')\n                      if(!isPriceNumber(e.target.value)) $message.error('积分价格格式不对') \n                      if(e.target.value>9999999) $message.error('积分价格不能大于9999999')\n                  }"},model:{value:t.row.task_price,callback:function(s){e.$set(t.row,"task_price",s)},expression:"scope.row.task_price"}},[s("template",{slot:"append"},[e._v("元")])],2)]}}])}),s("el-table-column",{attrs:{label:"Name",prop:"name",width:"184px"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(" 兑换限制 ")]}},{key:"default",fn:function(t){return[s("el-input",{attrs:{blur:"(e)=>{\n                      if(e.target.value>9999999) $message.error('兑换限制不能大于9999999')\n                      if(!isInteger(e.target.value)) $message.error('兑换限制必须为整数')\n                      if(e.target.value>scope.row.task_stock) $message.error('兑换限制不能大于可兑换数量')\n                  }"},model:{value:t.row.task_limit,callback:function(s){e.$set(t.row,"task_limit",s)},expression:"scope.row.task_limit"}},[s("template",{slot:"append"},[e._v("件/人")])],2)]}}])}),s("el-table-column",{attrs:{label:"Name",prop:"name"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(" 操作 ")]}},{key:"default",fn:function(t){return[s("el-button",{staticStyle:{padding:"9px 0"},attrs:{type:"text"},on:{click:function(s){return e.handleDelete(t)}}},[e._v("删除")])]}}])})],1)],1)},o=[],l=(s("60d6"),s("5122"),s("da02"),s("8a61"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{title:"多规格设置",visible:e.dialogVisible,width:"1038px","before-close":function(e){e()}},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("div",{staticClass:"task-dialog"},[s("div",{staticClass:"__tools"},[s("div",{staticClass:"__goods_cover"},[s("img",{attrs:{src:e.getGoodsCover(e.goods.slideshow)}}),s("div",{staticClass:"__goods_title"},[s("p",[e._v(e._s(e._f("capitalize")(e.goods.name)))])])])]),s("div",{staticClass:"__lists"},[s("TaskSpecstable",{ref:"specstable",attrs:{goods:e.goods},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.handleAffirm}},[e._v("确 定")])],1)])}),n=[],c=s("d8d0"),u=s("02ac"),d={components:{TaskSpecstable:c["a"]},props:{value:{type:[String,Number,Boolean,Object,Array],default:""},goods:{type:[String,Number,Boolean,Object,Array]}},data:function(){return{dialogVisible:!1}},filters:{capitalize:function(e){return e.length>=42?e.slice(0,39)+"...":e}},mounted:function(){},methods:{isInteger:function(e){return e%1===0},handleAffirm:function(){var e=this.$refs["specstable"].tableData,t=!0;if(e){for(var s in e){var a=e[s],i=JSON.parse(JSON.stringify(a));if(u["a"].isEmpty(i.task_stock))return this.$message.error("可兑换数量不能为空"),t=!1,!1;if(u["a"].isEmpty(i.task_number))return this.$message.error("积分值不能为空"),t=!1,!1;if(u["a"].isEmpty(i.task_price))return this.$message.error("积分价格不能为空"),t=!1,!1;if(u["a"].isFloat(i.task_stock))return this.$message.error("可兑换数量填写错误"),t=!1,!1;if(u["a"].isFloat(i.task_number))return this.$message.error("积分值填写错误"),t=!1,!1;if(u["a"].isFloat(i.task_limit))return this.$message.error("兑换限制填写错误"),t=!1,!1;if(!u["a"].isNumber(i.task_stock))return this.$message.error("可兑换数量必须是数字"),t=!1,!1;if(!u["a"].isNumber(i.task_number))return this.$message.error("积分值必须是数字"),t=!1,!1;if(!u["a"].isNumber(i.task_price))return this.$message.error("积分价格必须是数字"),t=!1,!1;if(!u["a"].isNumber(i.task_limit)&&!u["a"].isEmpty(i.task_limit))return this.$message.error("兑换限制必须是数字"),t=!1,!1;if(!u["a"].isIntNum(i.task_stock))return this.$message.error("可兑换数量不能为负数"),t=!1,!1;if(!u["a"].isIntNum(i.task_number))return this.$message.error("积分值不能为负数"),t=!1,!1;if(!u["a"].isIntNum(i.task_price))return this.$message.error("积分价格不能为负数"),t=!1,!1;if(!u["a"].isIntNum(i.task_limit)&&!u["a"].isEmpty(i.task_limit))return this.$message.error("兑换限制不能为负数"),t=!1,!1;if(u["a"].isLimit(i.task_stock,9999999))return this.$message.error("可兑换数量不能大于9999999"),t=!1,!1;if(u["a"].isLimit(i.task_number,9999999))return this.$message.error("积分值不能大于9999999"),t=!1,!1;if(u["a"].isLimit(i.task_price,9999999))return this.$message.error("积分价格不能大于9999999"),t=!1,!1;if(u["a"].isLimit(i.task_limit,9999999)&&!u["a"].isEmpty(i.task_limit))return this.$message.error("兑换限制不能大于9999999"),t=!1,!1;if(!u["a"].isPrice(i.task_price))return this.$message.error("积分价格格式不正确"),t=!1,!1;if(parseInt(i.task_limit)>parseInt(i.task_stock)&&parseInt(i.task_limit)>0)return this.$message.error("兑换限制不能大于可兑换数量"),t=!1,!1}t&&(this.$emit("input",e),this.dialogVisible=!1)}else this.$message.error("请先设置规格数据")},getGoodsCover:function(e){if(e){if("[object Array]"===Object.prototype.toString.call(e))return e[0];if("[object String]"===Object.prototype.toString.call(e))try{return JSON.parse(e)[0]}catch(t){return this.ipAddress+"/le-default-goods-bg.png"}}return this.ipAddress+"/le-default-goods-bg.png"}}},p=d,f=(s("9a5f"),s("cba8")),m=Object(f["a"])(p,l,n,!1,null,"62cd9da8",null),g=m.exports,h={components:{TaskSpecs:g},props:{value:{type:[String,Number,Boolean,Object,Array],default:function(){return[]}}},data:function(){return{search:""}},watch:{},filters:{capitalize:function(e){return e.length>=38?e.slice(0,35)+"...":e}},methods:{isPriceNumber:function(e){if("0"==e||"0."==e||"0.0"==e||"0.00"==e)return e="0",!0;var t=e.indexOf("0"),s=e.length;if(0==t&&s>1){var a=/^[0]{1}[.]{1}[0-9]{1,2}$/;return!!a.test(e)}a=/^[1-9]{1}[0-9]{0,10}[.]{0,1}[0-9]{0,2}$/;return!!a.test(e)},isInteger:function(e){return e%1===0},getGoodsCover:function(e){if(e){if("[object Array]"===Object.prototype.toString.call(e))return e[0];if("[object String]"===Object.prototype.toString.call(e))try{return JSON.parse(e)[0]}catch(t){return this.ipAddress+"/le-default-goods-bg.png"}}return this.ipAddress+"/le-default-goods-bg.png"},arraySpanMethod:function(e){var t=e.row,s=(e.column,e.rowIndex,e.columnIndex);if(2==t.param_type){if(1===s)return[1,3];if(2===s)return[0,0];if(3===s)return[0,0]}},handleDialog:function(e){var t="taskspecs"+e;this.$refs[t].dialogVisible=!0},handleEdit:function(e){console.log(e)},handleDelete:function(e){this.value.splice(e.$index,1)}}},b=h,v=(s("97a5"),Object(f["a"])(b,r,o,!1,null,"b1cc0faa",null)),_=v.exports,k=_,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{title:"选择商品",visible:e.dialogVisible,width:"879px","before-close":function(e){e()}},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("div",{staticClass:"task-dialog"},[s("div",{staticClass:"__search"},[s("el-autocomplete",{staticClass:"le-goodspage_search",attrs:{placeholder:"请输入商品名称搜索","trigger-on-focus":!1,size:"small","fetch-suggestions":e.handleQuerySearch},on:{select:e.handleGoodsGet},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleGoodsGet.apply(null,arguments)}},model:{value:e.keyword.search,callback:function(t){e.$set(e.keyword,"search",t)},expression:"keyword.search"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleGoodsGet},slot:"append"})],1)],1),s("div",{staticClass:"__lists"},[s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.goodsData,"row-key":"id"},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"55","reserve-selection":!0,selectable:e.handleSelectEnable}}),s("el-table-column",{attrs:{prop:"name",label:"商品描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"__goods_cover"},[s("img",{attrs:{src:t.row.slideshow[0]}}),s("div",{staticClass:"__goods_title"},[s("p",[e._v(e._s(e._f("capitalize")(t.row.name)))])])])]}}])}),s("el-table-column",{attrs:{prop:"date",label:"状态",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.is_sale?s("div",{staticClass:"__tag is_sale"},[e._v("销售中")]):e._e(),t.row.is_sale?e._e():s("div",{staticClass:"__tag is_shelves"},[e._v("下架中")])]}}])}),s("el-table-column",{attrs:{prop:"reduce_stocks",label:"库存",width:"130"}})],1)],1),s("div",{staticClass:"__paging"},[s("el-pagination",{attrs:{layout:"prev, pager, next,jumper",background:"","page-size":e.pageInfo.size,"current-page":e.pageInfo.current,total:e.pageInfo.total},on:{"current-change":e.handleGoodsGet}})],1)]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v("确 定")])],1)])},$=[],w=s("9d6b"),x=(s("e186"),s("f667"),s("61d9"),s("877e"),s("e939"),s("5d63"),{props:{limit:{type:[String,Number],default:10},value:{type:[String,Number,Boolean,Object,Array],default:""}},data:function(){return{selectData:[],dialogVisible:!1,keyword:{search:""},goodsData:[],pageInfo:{size:7,total:0,current:1}}},watch:{dialogVisible:function(e){var t=this;e&&this.$nextTick((function(){t.$refs.multipleTable.clearSelection(),t.selectData=JSON.parse(JSON.stringify(t.value)),t.toggleSelection(t.selectData)}))}},computed:{},filters:{capitalize:function(e){return e.length>=32?e.slice(0,29)+"...":e}},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.handleGoodsGet(1);case 1:case"end":return t.stop()}}),t)})))()},methods:{toggleSelection:function(e){var t=this;e&&e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)}))},handleToggleSelection:function(e){var t=this;e&&e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)}))},handleSelectEnable:function(e,t){return!this.value||!this.value.some((function(t){return t.id===e.id}))},handleQuerySearch:function(e,t){var s=this,a=this.keyword;this.$heshop.search("POST",{include:"goods"},{keyword:a}).page(1,5).then((function(e){var s=[];e.data.map((function(e){s.push({value:e.name})})),t(s)})).catch((function(e){s.$message.error("抱歉，网络开小差了")}))},handleSelectionChange:function(e){this.selectData=e},handleConfirm:function(){console.log("this.selectData ",this.selectData),console.log("this.value ",this.value),this.selectData.length>this.limit?this.$message.error("最多添加"+this.limit+"件商品"):(this.$emit("input",this.selectData),this.$emit("confirm",this.selectData),this.dialogVisible=!1)},handleGoodsGet:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=this.keyword;this.$heshop.search("POST",{include:"goods",task_in:1},{keyword:s}).page(t,5).then((function(t){var s=parseInt(t.headers["x-pagination-per-page"]),a=parseInt(t.headers["x-pagination-total-count"]),i=parseInt(t.headers["x-pagination-current-page"]);e.pageInfo={size:s,total:a,current:i},e.goodsData=t.data})).catch((function(t){e.$message.error("抱歉，网络开小差了")}))}}}),S=x,C=(s("0bf7"),Object(f["a"])(S,y,$,!1,null,"1aba0faa",null)),N=C.exports,D={components:{TaskTables:k,TaskGoods:N},data:function(){return{dialogVisible:!1,form:{goods_is_sale:1,goods_list:[]}}},computed:{},created:function(){},watch:{},mounted:function(){},methods:{handleDialog:function(){this.$refs.taskgoods.dialogVisible=!0},isPriceNumber:function(e){if("0"==e||"0."==e||"0.0"==e||"0.00"==e)return e="0",!0;var t=e.indexOf("0"),s=e.length;if(0==t&&s>1){var a=/^[0]{1}[.]{1}[0-9]{1,2}$/;return!!a.test(e)}a=/^[1-9]{1}[0-9]{0,10}[.]{0,1}[0-9]{0,2}$/;return!!a.test(e)},isInteger:function(e){return e%1===0},handleSubmit:function(){var e=this;if(0!==this.form.goods_list.length){var t=!0;for(var s in this.form.goods_list){var a=this.form.goods_list[s];if(1==a.param_type){var i=JSON.parse(JSON.stringify(a));if(u["a"].isEmpty(i.task_stock))return this.$message.error("可兑换数量不能为空"),t=!1,!1;if(u["a"].isEmpty(i.task_number))return this.$message.error("积分值不能为空"),t=!1,!1;if(u["a"].isEmpty(i.task_price))return this.$message.error("积分价格不能为空"),t=!1,!1;if(u["a"].isFloat(i.task_stock))return this.$message.error("可兑换数量填写错误"),t=!1,!1;if(u["a"].isFloat(i.task_number))return this.$message.error("积分值填写错误"),t=!1,!1;if(u["a"].isFloat(i.task_limit))return this.$message.error("兑换限制填写错误"),t=!1,!1;if(!u["a"].isNumber(i.task_stock))return this.$message.error("可兑换数量必须是数字"),t=!1,!1;if(!u["a"].isNumber(i.task_number))return this.$message.error("积分值必须是数字"),t=!1,!1;if(!u["a"].isNumber(i.task_price))return this.$message.error("积分价格必须是数字"),t=!1,!1;if(!u["a"].isNumber(i.task_limit)&&!u["a"].isEmpty(i.task_limit))return this.$message.error("兑换限制必须是数字"),t=!1,!1;if(!u["a"].isIntNum(i.task_stock))return this.$message.error("可兑换数量不能为负数"),t=!1,!1;if(!u["a"].isIntNum(i.task_number))return this.$message.error("积分值不能为负数"),t=!1,!1;if(!u["a"].isIntNum(i.task_price))return this.$message.error("积分价格不能为负数"),t=!1,!1;if(!u["a"].isIntNum(i.task_limit)&&!u["a"].isEmpty(i.task_limit))return this.$message.error("兑换限制不能为负数"),t=!1,!1;if(u["a"].isLimit(i.task_stock,9999999))return this.$message.error("可兑换数量不能大于9999999"),t=!1,!1;if(u["a"].isLimit(i.task_number,9999999))return this.$message.error("积分值不能大于9999999"),t=!1,!1;if(u["a"].isLimit(i.task_price,9999999))return this.$message.error("积分价格不能大于9999999"),t=!1,!1;if(u["a"].isLimit(i.task_limit,9999999)&&!u["a"].isEmpty(i.task_limit))return this.$message.error("兑换限制不能大于9999999"),t=!1,!1;if(!u["a"].isPrice(i.task_price))return this.$message.error("积分价格格式不正确"),t=!1,!1;if(parseInt(i.task_limit)>parseInt(i.task_stock)&&parseInt(i.task_limit)>0)return this.$message.error("兑换限制不能大于可兑换数量"),t=!1,!1}if(2==a.param_type&&!a.param)return this.$message.error("请设置多规格参数"),t=!1,!1}t&&this.$heshop.plugin("post",{include:"task",model:"goods"},this.form).then((function(t){e.$message({message:"添加成功",type:"success"}),e.form={goods_is_sale:1,goods_list:[]},e.$router.push({path:"/plugins/task/index"})})).catch((function(){e.$message.error("添加失败，请检查网络")}))}else this.$message.error("请选择商品")}}},I=D,O=(s("4a73"),Object(f["a"])(I,a,i,!1,null,"3ee6c243",null));t["default"]=O.exports},d8d0:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"task__specs"},[e.tableData.length?s("u-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"plTable",staticClass:"task-specs",attrs:{"show-body-overflow":!1,data:e.tableData,height:e.height,"fixed-columns-roll":"","use-virtual":"",showHeaderOverflow:"title","row-height":e.rowHeight,border:!1,"row-key":"id"},on:{"cell-click":e.dataCleansing,"selection-change":e.handleSelectionChange,select:e.selectRow,"select-all":e.selectAll}},[s("u-table-column",{attrs:{type:"selection",width:"34"}}),s("u-table-column",{attrs:{width:"282",keys:"index",label:e.labelName},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"__specs_title"},[s("p",[e._v(e._s(t.row.param_value.replace(/_/,"/")))])])]}}],null,!1,3781220125)}),s("u-table-column",{attrs:{width:"170","column-key":"id"},scopedSlots:e._u([{key:"header",fn:function(t){return[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[e._v("*")]),e._v("可兑换数量 "),s("el-tooltip",{staticClass:"item",attrs:{content:"可兑换数量与商城商品库存互相独立，互不影响",placement:"top","popper-class":"task-tooltip"}},[s("i",{staticClass:"le-icon le-icon-zhushi1",staticStyle:{position:"relative",top:"-1px","font-size":"13px",color:"#bbbfc8","vertical-align":"middle"}})])]}},{key:"default",fn:function(t){return[s("el-input",{attrs:{blur:"(e)=>{\n                   if(e.target.value=='') $message.error('可兑换数量不能为空')\n                   if(!isInteger(e.target.value)) $message.error('可兑换数量必须为整数')\n                   if(e.target.value>9999999) $message.error('兑换数量不能大于9999999') }"},model:{value:t.row.task_stock,callback:function(s){e.$set(t.row,"task_stock",s)},expression:"scope.row.task_stock"}},[s("template",{slot:"append"},[e._v("件")])],2)]}}],null,!1,618849508)}),s("u-table-column",{attrs:{width:"310"},scopedSlots:e._u([{key:"header",fn:function(t){return[s("strong",{staticStyle:{color:"red","padding-right":"3px"}},[e._v("*")]),e._v("积分价格 ")]}},{key:"default",fn:function(t){return[s("el-input",{attrs:{blur:"(e)=>{\n                      if(e.target.value=='') $message.error('积分价格不能为空')\n                      if(!isInteger(e.target.value)) $message.error('积分价格必须为整数')\n                      if(e.target.value>9999999) $message.error('积分价格不能大于9999999')\n                  }"},model:{value:t.row.task_number,callback:function(s){e.$set(t.row,"task_number",s)},expression:"scope.row.task_number"}},[s("template",{slot:"append"},[e._v("积分")])],2),s("span",{staticStyle:{display:"inline-block",width:"24px",height:"32px","line-height":"32px","text-align":"center"}},[e._v("+")]),s("el-input",{attrs:{blur:"(e)=>{\n                      if(e.target.value=='') $message.error('积分价格不能为空')\n                      if(e.target.value>9999999) $message.error('积分价格不能大于9999999')\n                  }"},model:{value:t.row.task_price,callback:function(s){e.$set(t.row,"task_price",s)},expression:"scope.row.task_price"}},[s("template",{slot:"append"},[e._v("元")])],2)]}}],null,!1,512482289)}),s("u-table-column",{attrs:{width:"160"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._v(" 兑换限制 ")]}},{key:"default",fn:function(t){return[s("el-input",{attrs:{blur:"(e)=>{\n                      if(e.target.value>9999999) $message.error('兑换限制不能大于9999999')\n                      if(!isInteger(e.target.value)) $message.error('兑换限制必须为整数')\n                      if(e.target.value>scope.row.task_stock) $message.error('兑换限制不能大于可兑换数量')\n                  }"},model:{value:t.row.task_limit,callback:function(s){e.$set(t.row,"task_limit",s)},expression:"scope.row.task_limit"}},[s("template",{slot:"append"},[e._v("件/人")])],2)]}}],null,!1,763455431)})],1):e._e(),s("div",{staticClass:"task__specs_tools"},[s("el-checkbox",{attrs:{indeterminate:e.indeterminate},on:{change:e.handleCheckAllChange,"select-all":e.selectAll},model:{value:e.allCheck,callback:function(t){e.allCheck=t},expression:"allCheck"}},[e._v("批量设置")]),e.selectData.length?s("div",{staticStyle:{display:"inline-block"}},[s("el-popover",{attrs:{placement:"bottom-start",width:"125",trigger:"click"},model:{value:e.tools[0].visible,callback:function(t){e.$set(e.tools[0],"visible",t)},expression:"tools[0].visible"}},[s("div",{staticClass:"task__specs_input"},[s("el-input",{model:{value:e.tools[0].value,callback:function(t){e.$set(e.tools[0],"value",t)},expression:"tools[0].value"}}),s("div",{staticStyle:{"padding-top":"10px"}},[s("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){e.tools[0].visible=!1}}},[e._v("取消")]),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleAffirm(0)}}},[e._v("确定")])],1)],1),s("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("可兑换数量")])],1),s("el-popover",{attrs:{placement:"bottom-start",width:"125",trigger:"click"},model:{value:e.tools[1].visible,callback:function(t){e.$set(e.tools[1],"visible",t)},expression:"tools[1].visible"}},[s("div",{staticClass:"task__specs_input"},[s("el-input",{model:{value:e.tools[1].value,callback:function(t){e.$set(e.tools[1],"value",t)},expression:"tools[1].value"}}),s("div",{staticStyle:{"padding-top":"10px"}},[s("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){e.tools[1].visible=!1}}},[e._v("取消")]),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleAffirm(1)}}},[e._v("确定")])],1)],1),s("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("积分数")])],1),s("el-popover",{attrs:{placement:"bottom-start",width:"125",trigger:"click"},model:{value:e.tools[2].visible,callback:function(t){e.$set(e.tools[2],"visible",t)},expression:"tools[2].visible"}},[s("div",{staticClass:"task__specs_input"},[s("el-input",{model:{value:e.tools[2].value,callback:function(t){e.$set(e.tools[2],"value",t)},expression:"tools[2].value"}}),s("div",{staticStyle:{"padding-top":"10px"}},[s("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){e.tools[2].visible=!1}}},[e._v("取消")]),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleAffirm(2)}}},[e._v("确定")])],1)],1),s("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("现金价格")])],1),s("el-popover",{attrs:{placement:"bottom-start",width:"125",trigger:"click"},model:{value:e.tools[3].visible,callback:function(t){e.$set(e.tools[3],"visible",t)},expression:"tools[3].visible"}},[s("div",{staticClass:"task__specs_input"},[s("el-input",{model:{value:e.tools[3].value,callback:function(t){e.$set(e.tools[3],"value",t)},expression:"tools[3].value"}}),s("div",{staticStyle:{"padding-top":"10px"}},[s("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){e.tools[3].visible=!1}}},[e._v("取消")]),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleAffirm(3)}}},[e._v("确定")])],1)],1),s("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("兑换限制")])],1)],1):e._e()],1)],1)},i=[],r=(s("60d6"),s("5122"),s("5d63"),{components:{},props:{value:{type:[String,Number,Boolean,Object,Array],default:""},goods:{type:[String,Number,Boolean,Object,Array]}},data:function(){return{labelName:"规格",loading:!1,indeterminate:!1,selectData:[],dialogVisible:!0,allCheck:!1,searchValue:"",tools:[{value:"",visible:!1},{value:"",visible:!1},{value:"",visible:!1},{value:"",visible:!1}],tableData:[],height:0,rowHeight:55}},filters:{capitalize:function(e){return e.length>=42?e.slice(0,39)+"...":e}},watch:{},mounted:function(){this.height=400,this.tableData=[],this.loading=!0,this.loadGoodsData(this.goods.id)},methods:{handleCheckAllChange:function(){this.$refs.plTable.toggleAllSelection()},handleSelectionChange:function(e){this.selectData=e,this.allCheck=this.selectData.length===this.tableData.length,this.indeterminate=this.selectData.length>0&&this.selectData.length<this.tableData.length},selectAll:function(e){e.length>0?(this.allCheck=!0,this.indeterminate=!1):this.allCheck=!1},selectRow:function(){this.allCheck&&(this.allCheck=!1)},handleAffirm:function(e){this.tools[e].visible=!1;var t=this.tools[e].value;if(t>=0)for(var s in this.tableData)switch(e){case 0:if(!this.isInteger(t))return void this.$message.error("可兑换数量必须为整数");this.tableData[s]["task_stock"]=t;break;case 1:if(!this.isInteger(t))return void this.$message.error("兑换积分必须为整数");this.tableData[s]["task_number"]=t;break;case 2:this.tableData[s]["task_price"]=t;break;case 3:if(!this.isInteger(t))return void this.$message.error("兑换限制必须为整数");this.tableData[s]["task_limit"]=t;break}else this.$message.error("批量修改的值不能为空或格式错误");this.tools[e].value=""},isInteger:function(e){return e%1===0},setHei:function(e){this.height=e},scrollBottom:function(){this.$refs.plTable.scrollBottom()},pagingScrollTopLeft:function(e){this.$refs.plTable.pagingScrollTopLeft(e,0)},loadGoodsData:function(e){var t=this;this.$heshop.goods("get",e).then((function(e){if(t.labelName="规格名称",e.param.param_data)for(var s in t.labelName="",e.param.param_data){var a=e.param.param_data[s];a.name&&(""==t.labelName?t.labelName=a.name:t.labelName+="/"+a.name)}t.$nextTick((function(){t.tableData=e.param.goods_data,t.loading=!1,setTimeout((function(){var e=document.getElementsByClassName("umy-table-beyond");for(var t in e){var s=e[t];s.removeAttribute&&s.removeAttribute("title")}}),1e3)}))})).catch((function(e){t.loading=!1}))},dataCleansing:function(){setTimeout((function(){var e=document.getElementsByClassName("umy-table-beyond");for(var t in e){var s=e[t];s.removeAttribute&&s.removeAttribute("title")}}),1e3)}}}),o=r,l=(s("8dd5"),s("cba8")),n=Object(l["a"])(o,a,i,!1,null,"0ee8ea8c",null);t["a"]=n.exports},e7ec:function(e,t,s){}}]);