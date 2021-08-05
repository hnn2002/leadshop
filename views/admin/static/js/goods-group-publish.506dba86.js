(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goods-group-publish"],{1507:function(e,t,s){e.exports=s.p+"static/img/group-style-C.556b2253.png"},6194:function(e,t,s){},"6d0e":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"le-matter"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{staticClass:"he-link"},[s("he-link",{attrs:{href:"goods/group"}},[e._v(" 商品分类 ")])],1),s("el-breadcrumb-item",[e._v("添加分类")])],1),s("div",{staticClass:"le-line"}),s("el-form",{attrs:{model:e.ruleForm,"label-width":"176px",rules:e.rules}},[s("div",{staticClass:"le-card-top"},[s("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[s("el-input",{attrs:{maxlength:"8","show-word-limit":""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),s("el-form-item",{attrs:{label:"上级分类",prop:"isParent"}},[s("div",[s("el-radio",{attrs:{disabled:!!e.ruleForm.id,label:0},model:{value:e.isParent,callback:function(t){e.isParent=t},expression:"isParent"}},[e._v("无上级分类")]),s("p",{staticClass:"he-tips"},[e._v("选择无上级分类，则表明此分类为一级分类")])],1),e.isParent?e._e():s("div",[s("span",{staticStyle:{"margin-right":"20px"}},[e._v("子分类层级数")]),s("el-radio",{attrs:{disabled:e.ruleForm.goods_check,label:1},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[e._v("一级")]),s("el-radio",{attrs:{disabled:e.ruleForm.goods_check,label:2},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[e._v("二级")]),s("el-radio",{attrs:{disabled:e.ruleForm.goods_check,label:3},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[e._v("三级")])],1),s("div",[s("el-radio",{attrs:{disabled:!!e.ruleForm.id,label:1},model:{value:e.isParent,callback:function(t){e.isParent=t},expression:"isParent"}},[e._v("有上级分类")]),e.catObject.result?s("el-tag",{attrs:{size:"medium",closable:!e.ruleForm.id,type:"info"},on:{close:function(t){return e.deleteTag()}}},[e._v(" "+e._s(e.catObject.result.value)+" ")]):e._e(),e.catObject.result?e._e():s("el-button",{directives:[{name:"popup",rawName:"v-popup.chooseGroup",value:e.catObject,expression:"catObject",modifiers:{chooseGroup:!0}}],staticClass:"le-select",attrs:{disabled:!(0!==e.isParent&&!e.ruleForm.id),title:"选择分类",plain:"",width:"562",module:"goods",action:"getGroup"}},[e._v("选择分类 ")]),s("p",{staticClass:"he-tips"},[e._v("选择有上级分类，则表明此分类为选中分类的子分类")]),s("el-button",{directives:[{name:"popup",rawName:"v-popup.groupManual",modifiers:{groupManual:!0}}],staticClass:"le-book",attrs:{type:"text",hide_cancel:!0,sure_btn:"我知道了",title:"Leadshop微商城分类规则",module:"goods",width:"700"}},[e._v("《必读手册》 ")])],1)]),s("el-form-item",{attrs:{label:"排序"}},[s("el-input",{model:{value:e.ruleForm.sort,callback:function(t){e.$set(e.ruleForm,"sort",t)},expression:"ruleForm.sort"}}),s("p",{staticClass:"he-tips"},[e._v("字数越大，越靠前，不填写则默认为1")])],1),s("el-form-item",{attrs:{label:"分类图标",prop:"icon"}},[s("div",{staticClass:"select-cover__120"},[s("pictureDialog",{attrs:{limit:1},scopedSlots:e._u([{key:"preview",fn:function(t){return s("div",{staticClass:"select-cover__120-edit"},[s("el-image",{attrs:{src:t.url,fit:"cover"}}),s("div",{staticClass:"select-cover__120-tips"},[s("span",[e._v("替换")]),e._v(" | "),s("span",{on:{click:function(t){return t.stopPropagation(),function(t){return e.ruleForm.icon=""}.apply(null,arguments)}}},[e._v("删除")])])],1)}}]),model:{value:e.ruleForm.icon,callback:function(t){e.$set(e.ruleForm,"icon",t)},expression:"ruleForm.icon"}},[s("div",{staticClass:"select-cover__120-add",attrs:{slot:"upload"},slot:"upload"},[s("i",{staticClass:"le-icon le-icon-add select-cover__120-icon"}),s("span",{staticClass:"select-cover__120-text"},[e._v("添加图片")])])])],1),s("p",{staticClass:"he-tips"},[e._v("建议尺寸：300*300像素")])])],1),s("div",{staticClass:"le-line"}),1===e.ruleForm.type&&0===e.isParent||1===e.isParent&&!e.$route.query.id&&e.parentShow||1===e.isParent&&e.showGoods?s("div",{staticClass:"le-card flex le-style"},[s("div",{staticClass:"le-left flex"},[s("div",{staticClass:"le-label"},[e._v("分类商品样式")]),s("div",{staticClass:"le-value"},[s("div",{staticClass:"le-select flex justify-center align-center",class:0==e.ruleForm.goods_show?"le-select__active":"",on:{click:function(t){return e.setStyle(0)}}},[s("he-icon",{staticClass:"heicon",attrs:{type:"le-icon-up-down",size:"16px"}}),s("span",[e._v("一行一个")])],1),s("div",{staticClass:"le-select flex justify-center align-center",class:1==e.ruleForm.goods_show?"le-select__active":"",on:{click:function(t){return e.setStyle(1)}}},[s("he-icon",{staticClass:"heicon",attrs:{type:"le-icon-orso",size:"16px"}}),s("span",[e._v("一行两个")])],1),s("div",{staticClass:"le-select flex justify-center align-center",class:2==e.ruleForm.goods_show?"le-select__active":"",on:{click:function(t){return e.setStyle(2)}}},[s("he-icon",{staticClass:"heicon",attrs:{type:"le-icon-combination",size:"16px"}}),s("span",[e._v("一大两小")])],1),s("div",{staticClass:"le-select flex justify-center align-center",class:3==e.ruleForm.goods_show?"le-select__active":"",on:{click:function(t){return e.setStyle(3)}}},[s("he-icon",{staticClass:"heicon",attrs:{type:"le-icon-columns",size:"16px"}}),s("span",[e._v("左图右字")])],1)])]),s("div",[s("img",{staticClass:"he-preview",attrs:{src:e.groupStyle[e.ruleForm.goods_show],alt:""}})])]):e._e()]),s("div",{staticClass:"le-cardpin"},[s("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)},a=[],i=s("1da1"),o=(s("159b"),s("b0c0"),s("99af"),s("ac1f"),s("1276"),s("96cf"),s("b4c2")),l=s("c544"),n=s("1507"),c=s("9c64"),u={name:"groupPublish",data:function(){return{ruleForm:{sort:1,parent_id:0,name:"",icon:"",image:"",goods_show:0,id:null,type:1},isParent:0,parentList:[],rules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"}],icon:[{required:!0,message:"请选择分类图标",trigger:"change"}],isParent:[{required:!0,message:"请选择上级分类",trigger:"change"}],goods_show:[{required:!0,trigger:"change"}]},groupStyle:[o,l,n,c],catObject:{cat:[],result:null},parentShow:!0}},watch:{"catObject.result":{handler:function(e){this.ruleForm.parent_id=e?e.id:0}}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$route.query.id&&e.getDetail(parseInt(e.$route.query.id)),e.getData(),console.log(e.$route.query.id);case 3:case"end":return t.stop()}}),t)})))()},methods:{save:function(){var e=this,t={include:"goods"},s=void 0;this.ruleForm.id?(t.id=parseInt(this.ruleForm.id),s="put"):s="post";var r=this.$heshop.utils.deepClone(this.ruleForm);1!=this.isParent||this.catObject.result?this.$heshop.group(s,t,r).then((function(){e.$message.success("保存成功"),e.$router.back()})).catch((function(t){t.data[0]?e.$message.error(t.data[0].message):e.$message.error(t.data.message)})):this.$message.error("上级分类不能为空")},deleteTag:function(){this.catObject.result=null},getDetail:function(e){var t=this;this.$heshop.group("get",e,{include:"goods"}).then((function(e){e.parent_id>0&&(t.isParent=1,t.getData()),t.ruleForm=e})).catch((function(e){t.$message.error(e.data.message)}))},getData:function(){var e=this;this.$heshop.group("get",{include:"goods"}).then((function(t){var s=e.$heshop.toTree({parentKey:"parent_id",idKey:"id",parentId:0,childrenKey:"children"}).on(t).get();s.forEach((function(t){t.value=t.name,e.parentList.push(t),t.children&&t.children.forEach((function(s){s.type=t.type,s.value="".concat(t.value," > ").concat(s.name),e.parentList.push(s),s.children&&s.children.forEach((function(t){e.parentList.push(t),t.value="".concat(s.value," > ").concat(t.name)}))}))})),e.parentList.forEach((function(t){t.id===e.ruleForm.parent_id&&(e.catObject.result=t)}))})).catch((function(t){e.$message.error(t.data.message)}))},setStyle:function(e){this.ruleForm.goods_show=e},getGroup:function(e){var t=e.result,s=t.type,r=t.path;3===s&&2==r.split("-").length||3!==s?(console.log("无自己"),this.parentShow=!0):this.parentShow=!1}},computed:{showGoods:function(){return!!this.$route.query.id&&this.ruleForm.path.split("-").length===this.ruleForm.type}}},p=u,d=(s("792b"),s("2877")),m=Object(d["a"])(p,r,a,!1,null,"4ea95c84",null);t["default"]=m.exports},"792b":function(e,t,s){"use strict";s("6194")},"9c64":function(e,t,s){e.exports=s.p+"static/img/group-style-D.6d9462c8.png"},b4c2:function(e,t,s){e.exports=s.p+"static/img/group-style-A.8c35c1f2.png"},c544:function(e,t,s){e.exports=s.p+"static/img/group-style-B.2fce5f6e.png"}}]);
//# sourceMappingURL=goods-group-publish.506dba86.js.map