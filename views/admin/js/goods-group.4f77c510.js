(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods-group"],{"100f":function(e,t,s){"use strict";s("a4ad")},"4bf3":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"le-matter le-card"},[s("div",[s("el-autocomplete",{staticClass:"he-input",attrs:{placeholder:"输入分类搜索","trigger-on-focus":!1,"fetch-suggestions":function(t,s){e.querySearch(t,s,"searchList")}},on:{select:function(t){e.handleSelect(t)}},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSelect(null)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getSearch},slot:"append"})],1),s("he-link",{attrs:{href:"goods/groupPublish"}},[s("el-button",{attrs:{type:"primary"}},[e._v("添加分类")])],1)],1),s("div",{staticClass:"le-line"}),s("div",{staticClass:"flex"},[s("div",{staticClass:"flex-sub"},[e._m(0),s("div",{staticClass:"he-attr__body"},[s("div",{staticClass:"he-attr__group he-group__title"},[s("span",{staticClass:"he-group__name"},[e._v("分类名称")]),s("span",{staticClass:"he-group__sort"},[e._v("排序 "),s("el-popover",{attrs:{content:"序号越大，排序越靠前",placement:"top",trigger:"hover",width:"180"}},[s("i",{staticClass:"el-icon-warning",attrs:{slot:"reference"},slot:"reference"})])],1),s("span",{staticClass:"he-group__handle"},[e._v("操作")])]),0===e.first.length?s("div",{staticClass:"he-group__empty"},[e._v("该分类下暂无内容")]):e._e(),s("el-scrollbar",{staticStyle:{height:"472px"}},e._l(e.first,(function(t,o){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}],key:o,staticClass:"he-attr__group",style:(e.chooseIndex.first===o?"border: 1px solid #623CEB;":"")+(1===t.is_show?"":"background: rgba(0, 0, 0, 0.05);"),on:{click:function(t){return e.chooseClick("first",o)}}},[s("div",{staticClass:"he-group__name el-row--flex is-align-middle"},[s("el-image",{style:"width: 28px; height: 28px; border-radius: 50%;"+(1==t.is_show?"":"opacity: 0.5;"),attrs:{src:t.icon}},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),s("div",{staticClass:"he-title",style:1==t.is_show?"":"color:#BFBFBF;"},[e._v(" "+e._s(t.name)+" ")])],1),s("div",{staticClass:"he-group__sort le_goods__main-goodstitle le_goods__main-sort"},[e._v(" "+e._s(t.sort)+" "),s("el-popover",{attrs:{title:" ",trigger:"click"},model:{value:t.popover,callback:function(s){e.$set(t,"popover",s)},expression:"item.popover"}},[s("div",{staticClass:"el-popconfirm"},[s("p",{staticClass:"el-popconfirm__main"},[s("el-input",{model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}})],1),s("div",{staticClass:"el-popconfirm__action"},[s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return t.stopPropagation(),e.cancel(o,"first")}}},[e._v("取消 ")]),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return t.stopPropagation(),e.sortChange(o,"first")}}},[e._v("确定 ")])],1)]),s("span",{attrs:{slot:"reference"},on:{click:function(s){return e.editSort(t)}},slot:"reference"},[s("he-icon",{staticClass:"le_goods__main-sortedit",attrs:{type:"le-icon-editor"}})],1)])],1),s("div",{staticClass:"he-group__handle"},[s("he-link",{attrs:{href:"goods/groupPublish",query:{id:t.id}}},[s("el-popover",{attrs:{placement:"top",trigger:"hover",content:"编辑"}},[s("i",{staticClass:"le-icon le-icon-fenlei-bianji",attrs:{slot:"reference"},slot:"reference"})])],1),s("el-popover",{attrs:{placement:"top",trigger:"hover",content:"推广"}},[s("i",{directives:[{name:"popup",rawName:"v-popup.promote",value:{promoteType:"group",data:t},expression:"{\n                                        promoteType: 'group',\n                                        data: item,\n                                    }",modifiers:{promote:!0}}],staticClass:"le-icon le-icon-fenlei-fenxiang",attrs:{slot:"reference",title:"推广",top:"25vh",module:"goods",width:"791",id:t.id+"_promote1",hide_footer:!0},slot:"reference"})]),s("el-popover",{attrs:{placement:"top",trigger:"hover",content:"删除"}},[s("i",{staticClass:"le-icon le-icon-fenlei-shanchu",attrs:{slot:"reference"},on:{click:function(t){return e.deleteGroup({key:"first",index:o})}},slot:"reference"})]),s("el-popover",{attrs:{placement:"top",trigger:"hover",content:1==t.is_show?"隐藏":"显示"}},[s("i",{class:"le-icon le-icon-"+(1==t.is_show?"eye":"hidden"),staticStyle:{"font-size":"18px"},attrs:{slot:"reference"},on:{click:function(t){return e.showChange({key:"first",index:o})}},slot:"reference"})])],1)])})),0)],1)]),s("div",{staticClass:"flex-sub"},[e._m(1),s("div",{staticClass:"he-attr__body"},[s("div",{staticClass:"he-attr__group he-group__title"},[s("span",{staticClass:"he-group__name"},[e._v("分类名称")]),s("span",{staticClass:"he-group__sort"},[e._v("排序 "),s("el-popover",{attrs:{content:"序号越大，排序越靠前",placement:"top",trigger:"hover",width:"180"}},[s("i",{staticClass:"el-icon-warning",attrs:{slot:"reference"},slot:"reference"})])],1),s("span",{staticClass:"he-group__handle"},[e._v("操作")])]),0===e.second.length?s("div",{staticClass:"he-group__empty"},[e._v("该分类下暂无内容")]):e._e(),s("el-scrollbar",{staticStyle:{height:"472px"}},e._l(e.second,(function(t,o){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}],key:o,staticClass:"he-attr__group",style:(e.chooseIndex.second===o?"border: 1px solid #623CEB;":"")+(1===t.is_show?"":"background: rgba(0, 0, 0, 0.05);"),on:{click:function(t){return e.chooseClick("second",o)}}},[s("div",{staticClass:"he-group__name el-row--flex is-align-middle"},[s("el-image",{style:"width: 28px; height: 28px; border-radius: 50%;"+(1==t.is_show?"":"opacity: 0.5;"),attrs:{src:t.icon}},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),s("div",{staticClass:"he-title",style:1==t.is_show?"":"color:#BFBFBF;"},[e._v(" "+e._s(t.name)+" ")])],1),s("div",{staticClass:"he-group__sort le_goods__main-goodstitle le_goods__main-sort"},[e._v(" "+e._s(t.sort)+" "),s("el-popover",{attrs:{title:" ",trigger:"click"},model:{value:t.popover,callback:function(s){e.$set(t,"popover",s)},expression:"item.popover"}},[s("div",{staticClass:"el-popconfirm"},[s("p",{staticClass:"el-popconfirm__main"},[s("el-input",{model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}})],1),s("div",{staticClass:"el-popconfirm__action"},[s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return t.stopPropagation(),e.cancel(o,"second")}}},[e._v(" 取消 ")]),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return t.stopPropagation(),e.sortChange(o,"second")}}},[e._v("确定 ")])],1)]),s("span",{attrs:{slot:"reference"},on:{click:function(s){return e.editSort(t)}},slot:"reference"},[s("he-icon",{staticClass:"le_goods__main-sortedit",attrs:{type:"le-icon-editor"}})],1)])],1),s("div",{staticClass:"he-group__handle"},[s("he-link",{attrs:{href:"goods/groupPublish",query:{id:t.id}}},[s("el-popover",{attrs:{placement:"top",trigger:"hover",content:"编辑"}},[s("i",{staticClass:"le-icon le-icon-fenlei-bianji",attrs:{slot:"reference"},slot:"reference"})])],1),s("el-popover",{attrs:{placement:"top",trigger:"hover",content:"推广"}},[s("i",{directives:[{name:"popup",rawName:"v-popup.promote",value:{promoteType:"group",data:t},expression:"{\n                                        promoteType: 'group',\n                                        data: item,\n                                    }",modifiers:{promote:!0}}],staticClass:"le-icon le-icon-fenlei-fenxiang",attrs:{slot:"reference",title:"推广",top:"25vh",module:"goods",width:"791",id:t.id+"_promote1",hide_footer:!0},slot:"reference"})]),s("el-popover",{attrs:{placement:"top",trigger:"hover",content:"删除"}},[s("i",{staticClass:"le-icon le-icon-fenlei-shanchu",attrs:{slot:"reference"},on:{click:function(t){return e.deleteGroup({key:"second",index:o})}},slot:"reference"})]),s("el-popover",{attrs:{placement:"top",trigger:"hover",content:1==t.is_show?"隐藏":"显示"}},[s("i",{class:"le-icon le-icon-"+(1==t.is_show?"eye":"hidden"),staticStyle:{"font-size":"18px"},attrs:{slot:"reference"},on:{click:function(t){return e.showChange({key:"second",index:o})}},slot:"reference"})])],1)])})),0)],1)]),s("div",{staticClass:"flex-sub"},[e._m(2),s("div",{staticClass:"he-attr__body"},[s("div",{staticClass:"he-attr__group he-group__title"},[s("span",{staticClass:"he-group__name"},[e._v("分类名称")]),s("span",{staticClass:"he-group__sort"},[e._v("排序 "),s("el-popover",{attrs:{content:"序号越大，排序越靠前",placement:"top",trigger:"hover",width:"180"}},[s("i",{staticClass:"el-icon-warning",attrs:{slot:"reference"},slot:"reference"})])],1),s("span",{staticClass:"he-group__handle"},[e._v("操作")])]),0===e.third.length?s("div",{staticClass:"he-group__empty"},[e._v("该分类下暂无内容")]):e._e(),s("el-scrollbar",{staticStyle:{height:"472px"}},e._l(e.third,(function(t,o){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}],key:o,staticClass:"he-attr__group",style:1===t.is_show?"":"background: rgba(0, 0, 0, 0.05);",on:{click:function(t){return e.chooseClick("third",o)}}},[s("div",{staticClass:"he-group__name el-row--flex is-align-middle"},[s("el-image",{style:"width: 28px; height: 28px; border-radius: 50%;"+(1==t.is_show?"":"opacity: 0.5;"),attrs:{src:t.icon}},[s("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[s("i",{staticClass:"el-icon-picture-outline"})])]),s("div",{staticClass:"he-title",style:1==t.is_show?"":"color:#BFBFBF;"},[e._v(" "+e._s(t.name)+" ")])],1),s("div",{staticClass:"he-group__sort le_goods__main-goodstitle le_goods__main-sort"},[e._v(" "+e._s(t.sort)+" "),s("el-popover",{attrs:{title:" ",trigger:"click"},model:{value:t.popover,callback:function(s){e.$set(t,"popover",s)},expression:"item.popover"}},[s("div",{staticClass:"el-popconfirm"},[s("p",{staticClass:"el-popconfirm__main"},[s("el-input",{model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}})],1),s("div",{staticClass:"el-popconfirm__action"},[s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return t.stopPropagation(),e.cancel(o,"third")}}},[e._v("取消 ")]),s("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return t.stopPropagation(),e.sortChange(o,"third")}}},[e._v("确定 ")])],1)]),s("span",{attrs:{slot:"reference"},on:{click:function(s){return e.editSort(t)}},slot:"reference"},[s("he-icon",{staticClass:"le_goods__main-sortedit",attrs:{type:"le-icon-editor"}})],1)])],1),s("div",{staticClass:"he-group__handle"},[s("he-link",{attrs:{href:"goods/groupPublish",query:{id:t.id}}},[s("el-popover",{attrs:{placement:"top",trigger:"hover",content:"编辑"}},[s("i",{staticClass:"le-icon le-icon-fenlei-bianji",attrs:{slot:"reference"},slot:"reference"})])],1),s("el-popover",{attrs:{placement:"top",trigger:"hover",content:"推广"}},[s("i",{directives:[{name:"popup",rawName:"v-popup.promote",value:{promoteType:"group",data:t},expression:"{\n                                        promoteType: 'group',\n                                        data: item,\n                                    }",modifiers:{promote:!0}}],staticClass:"le-icon le-icon-fenlei-fenxiang",attrs:{slot:"reference",title:"推广",top:"25vh",module:"goods",width:"791",id:t.id+"_promote1",hide_footer:!0},slot:"reference"})]),s("el-popover",{attrs:{placement:"top",trigger:"hover",content:"删除"}},[s("i",{staticClass:"le-icon le-icon-fenlei-shanchu",attrs:{slot:"reference"},on:{click:function(t){return e.deleteGroup({key:"third",index:o})}},slot:"reference"})]),s("el-popover",{attrs:{placement:"top",trigger:"hover",content:1==t.is_show?"隐藏":"显示"}},[s("i",{class:"le-icon le-icon-"+(1==t.is_show?"eye":"hidden"),staticStyle:{"font-size":"18px"},attrs:{slot:"reference"},on:{click:function(t){return e.showChange({key:"third",index:o})}},slot:"reference"})])],1)])})),0)],1)])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"he-attr__header"},[s("span",{staticClass:"he-text"},[e._v("一级分类")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"he-attr__header"},[s("span",{staticClass:"he-text"},[e._v("二级分类")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"he-attr__header"},[s("span",{staticClass:"he-text"},[e._v("三级分类")])])}],n=s("99a5"),r=(s("eb62"),s("6afd"),s("f5bd"),s("a5c9"),s("f49b"),s("2769"),s("ecf1"),s("8639"),s("e1d4"),s("3f7e"),s("6a61"),s("d8df")),a=s("c0b5"),c={components:{HelpHint:a["a"],popconfirm:r["a"]},data:function(){return{activeName:"first",search:"",searchChoose:null,searchList:[],nameList:{},list:[],first:[],second:[],third:[],chooseIndex:{first:0,second:0},sort:0,group_show:0,style_index:0}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getList(),e.getSetting();case 2:case"end":return t.stop()}}),t)})))()},methods:{chooseClick:function(e,t){this.chooseIndex[e]=t,"first"==e&&(this.chooseIndex["second"]=0),this.listBuild()},listBuild:function(){this.first=this.list,this.second=this.first[this.chooseIndex.first].children?this.first[this.chooseIndex.first].children:[],this.third=this.second[this.chooseIndex.second]&&this.second[this.chooseIndex.second].children?this.second[this.chooseIndex.second].children:[]},getList:function(){var e=this;this.$heshop.group("get",{include:"goods"}).then((function(t){t=t.map((function(e){return e.popover=!1,e.show=!0,e})),e.list=e.$heshop.toTree({parentKey:"parent_id",idKey:"id",parentId:0,childrenKey:"children"}).on(t).get(),e.list.forEach((function(t){t.value=t.name,e.searchList.push(t),t.children&&t.children.forEach((function(s){s.type=t.type,s.value="".concat(t.value," > ").concat(s.name),e.searchList.push(s),s.children&&s.children.forEach((function(t){t.value="".concat(s.value," > ").concat(t.name),e.searchList.push(t)}))}))})),e.listBuild()})).catch((function(t){e.$message.error(t.data.message)}))},hintRender:function(){return this.$createElement("HelpHint",{props:{content:"序号越大，排序越靠前"}},"排序")},cancel:function(e,t){this.$set(this[t][e],"popover",!1)},sortChange:function(e,t){var s=this;this[t][e].popover=!1;var o=this.$heshop.utils.deepClone(this[t][e]);o.sort=this.sort,this.$heshop.group("put",{id:this[t][e].id,include:"goods"},o).then((function(){s[t][e].sort=s.sort})).catch((function(e){s.$message.error(e.data[0].message)}))},editSort:function(e){this.sort=e.sort},deleteGroup:function(e){var t=this;this.$confirm("分类删除请谨慎，确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){t.$heshop.group("delete",t[e.key][e.index].id,{include:"goods"}).then((function(){t.$message.success("删除成功"),t.$delete(t[e.key],e.index)})).catch((function(e){t.$message.error(e.data.message)}))}))},showChange:function(e){var t=this,s=1==this[e.key][e.index].is_show?0:1;this.$heshop.group("put",{id:this[e.key][e.index].id,include:"goods"},{is_show:s}).then((function(){t.childrenShowChange(e,s);var o=1==s?"显示成功":"隐藏成功";t.$message.success(o)})).catch((function(e){t.$message.error(e.data.message)}))},childrenShowChange:function(e,t){var s=this[e.key][e.index];s.is_show=t,s.children&&s.children.forEach((function(e){e.is_show=t,e.children&&e.children.forEach((function(e){e.is_show=t}))}))},catShow:function(e,t,s){e.is_run&&this.first.forEach((function(t,s){e.show?t.show=!0:t.show=e.index===s})),t.is_run&&this.second.forEach((function(e,s){t.show?e.show=!0:e.show=t.index===s})),s.is_run&&this.third.forEach((function(e,t){s.show?e.show=!0:e.show=s.index===t}))},getSearch:function(){var e=this,t={is_run:!1,show:!1,index:-1},s={is_run:!1,show:!1,index:-1},o={is_run:!1,show:!1,index:-1};if(this.search){var i=null;if(this.searchChoose?i=this.searchChoose:this.searchList.forEach((function(t){t.value==e.search&&(i=t)})),i){var n=i.path.split("-").map(Number),r=n.length;this.first.forEach((function(a,c){r>1?a.id===n[1]&&(e.chooseIndex.first=c,t={is_run:!0,show:!1,index:c}):a.id===i.id&&(e.chooseIndex.first=c,e.chooseIndex.second=0,t={is_run:!0,show:!1,index:c},s={is_run:!0,show:!0,index:-1},o={is_run:!0,show:!0,index:-1})})),r>1&&this.first[this.chooseIndex.first].children.forEach((function(t,a){r>2?t.id===n[2]&&(e.chooseIndex.second=a,s={is_run:!0,show:!1,index:a}):t.id===i.id&&(e.chooseIndex.second=a,s={is_run:!0,show:!1,index:a},o={is_run:!0,show:!0,index:-1})})),r>2&&this.first[this.chooseIndex.first].children[[this.chooseIndex.second]].children.forEach((function(e,t){e.id===i.id&&(o={is_run:!0,show:!1,index:t})})),this.listBuild()}else this.second=[],this.third=[],t={is_run:!0,show:!1,index:-1}}else this.chooseIndex={first:0,second:0},t={is_run:!0,show:!0,index:-1},s={is_run:!0,show:!0,index:-1},o={is_run:!0,show:!0,index:-1},this.listBuild();this.catShow(t,s,o)},handleSelect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.searchChoose=e,this.getSearch()},querySearch:function(e,t,s){var o=this[s],i=e?o.filter((function(t){return t.value.toLowerCase().indexOf(e.toLowerCase())>=0})):o;this.searchChoose=null;var n=JSON.parse(JSON.stringify(i));t(n)},getSetting:function(){var e=this;this.$heshop.search("post",{include:"setting"},{keyword:"goods_group_setting"}).then((function(t){t&&(e.group_show=e.style_index=t.content.group_show)})).catch((function(t){e.$message.error(t.data.message)}))},enable:function(){var e=this,t={keyword:"goods_group_setting",content:{group_show:this.style_index}};this.$heshop.setting("post",t).then((function(){e.group_show=e.style_index})).catch((function(t){e.$message.error(t.data.message)}))}}},l=c,h=(s("100f"),s("4ac2")),p=Object(h["a"])(l,o,i,!1,null,"51908c9a",null);t["default"]=p.exports},"8dd3":function(e,t,s){},a4ad:function(e,t,s){},b086:function(e,t,s){"use strict";s("8dd3")},c0b5:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[s("span",{staticStyle:{"margin-right":"8px"}},[e._t("default")],2),s("el-popover",{attrs:{trigger:"hover",content:e.content,placement:e.placement}},[s("span",{staticClass:"le-icon le-icon-zhushi1",attrs:{slot:"reference"},slot:"reference"})])],1)},i=[],n={name:"HelpHint",props:{placement:{default:"top"},content:String}},r=n,a=(s("b086"),s("4ac2")),c=Object(a["a"])(r,o,i,!1,null,"47995f73",null);t["a"]=c.exports}}]);
//# sourceMappingURL=goods-group.4f77c510.js.map