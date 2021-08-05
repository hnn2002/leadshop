(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fa87d26"],{1420:function(e,o,r){},"26a0":function(e,o,r){"use strict";r("1420")},a0ce:function(e,o,r){"use strict";r.r(o);var t=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",staticClass:"le-main le-card",attrs:{rules:e.rules,model:e.form,"label-width":"217px"}},[r("el-form-item",{staticClass:"le-search--id",attrs:{label:"选择商品",prop:"goods"}},[r("el-button",{attrs:{plain:"",disabled:Object.keys(e.form.goods).length>0},on:{click:e.getGoodDetail}},[e._v("选择商品")]),r("goods-select",{ref:"goodsSelect",attrs:{"is-tips":!1,"select-style":{backgroundColor:"#ffffff"}},on:{confirm:e.confirmGoods},model:{value:e.form.goods,callback:function(o){e.$set(e.form,"goods",o)},expression:"form.goods"}}),Object.keys(e.form.goods).length>0?r("div",{staticClass:"flex le-goods"},[r("el-image",{staticClass:"le-goods--image",attrs:{src:e.form.goods.slideshow[0]}}),r("div",{staticClass:"le-goods--name flex-sub"},[e._v(" "+e._s(e.form.goods.name)+" ")]),e.disabledEdit?e._e():r("el-button",{attrs:{type:"text"},on:{click:function(o){e.form.goods={}}}},[e._v("移除")])],1):e._e()],1),r("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[r("el-input",{attrs:{disabled:e.disabledEdit,maxlength:"14","show-word-limit":"",placeholder:"请输入商品名称"},model:{value:e.form.goods_name,callback:function(o){e.$set(e.form,"goods_name",o)},expression:"form.goods_name"}})],1),r("el-form-item",{attrs:{label:"商品封面",prop:"pic_url"}},[r("div",{staticClass:"select-cover__120",class:[e.disabledEdit?"le-still":""]},[r("pictureDialog",{attrs:{disabled:e.disabledEdit,limit:1},scopedSlots:e._u([{key:"preview",fn:function(o){return r("div",{staticClass:"select-cover__120-edit"},[r("el-image",{attrs:{src:o.url,fit:"cover"}}),e.disabledEdit?e._e():r("div",{staticClass:"select-cover__120-tips"},[r("span",[e._v("替换")]),e._v(" | "),r("span",{on:{click:function(o){return o.stopPropagation(),function(o){return e.form.pic_url=""}.apply(null,arguments)}}},[e._v("删除")])])],1)}}]),model:{value:e.form.pic_url,callback:function(o){e.$set(e.form,"pic_url",o)},expression:"form.pic_url"}},[r("div",{staticClass:"select-cover__120-add",attrs:{slot:"upload"},slot:"upload"},[r("i",{staticClass:"le-icon le-icon-add select-cover__120-icon"}),r("span",{staticClass:"select-cover__120-text"},[e._v("添加图片")])])])],1),r("div",{staticClass:"le-prompt-text"},[e._v("建议尺寸：300像素 * 300像素，图片大小不得超过1M")])]),r("el-form-item",{attrs:{label:"商品价格",prop:"price_type"}},[r("el-radio-group",{on:{change:e.priceTypeChange},model:{value:e.form.price_type,callback:function(o){e.$set(e.form,"price_type",o)},expression:"form.price_type"}},[r("el-radio",{attrs:{label:1}},[e._v("一口价")]),r("el-radio",{attrs:{label:2}},[e._v("价格区间")]),r("el-radio",{attrs:{label:3}},[e._v("折扣价")])],1),1===e.form.price_type?r("div",[r("el-input",{on:{input:function(o){return e.formatNum(e.form.price,"price")}},model:{value:e.form.price,callback:function(o){e.$set(e.form,"price",o)},expression:"form.price"}},[r("template",{slot:"append"},[e._v("元")])],2)],1):2===e.form.price_type?r("div",{staticClass:"le-small-input"},[r("el-input",{on:{input:function(o){return e.formatNum(e.form.price,"price")}},model:{value:e.form.price,callback:function(o){e.$set(e.form,"price",o)},expression:"form.price"}},[r("template",{slot:"append"},[e._v("元")])],2),r("span",[e._v("至")]),r("el-input",{on:{input:function(o){return e.formatNum(e.form.price2,"price2")}},model:{value:e.form.price2,callback:function(o){e.$set(e.form,"price2",o)},expression:"form.price2"}},[r("template",{slot:"append"},[e._v("元")])],2)],1):3===e.form.price_type?r("div",{staticClass:"le-small-input"},[r("span",[e._v("原价")]),r("el-input",{on:{input:function(o){return e.formatNum(e.form.price,"price")}},model:{value:e.form.price,callback:function(o){e.$set(e.form,"price",o)},expression:"form.price"}},[r("template",{slot:"append"},[e._v("元")])],2),r("span",[e._v("现价")]),r("el-input",{on:{input:function(o){return e.formatNum(e.form.price2,"price2")}},model:{value:e.form.price2,callback:function(o){e.$set(e.form,"price2",o)},expression:"form.price2"}},[r("template",{slot:"append"},[e._v("元")])],2)],1):e._e()],1)],1),r("div",{staticClass:"le-cardpin"},[r("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.submit}},[e._v("保存")])],1)],1)},i=[],s=r("1da1"),a=(r("96cf"),r("b64b"),r("b0c0"),r("d3b7"),r("25f0"),r("ac1f"),r("5319"),r("8b43")),l={components:{goodsSelect:a["a"]},data:function(){var e=this,o=function(e,o,r){isNaN(o)&&r("请输入正整数"),r()},r=function(o,r,t){1===r?e.form.price||t("请输入商品价格"):2===r?(e.form.price&&e.form.price2||t("请输入商品价格"),e.form.price>e.form.price2&&t("请正确书写价格区间")):3===r&&(e.form.price&&e.form.price2||t("请输入商品价格")),t()},t=function(e,o,r){o.length>14&&r("商品名称最大为14字符"),r()},i=function(e,o,r){o&&0!==Object.keys(o).length||r("请选择商品"),r()};return{is_show:null,form:{my_goods_id:null,goods_name:"",pic_url:"",price_type:1,price:"",price2:"",page_url:"",goods:{}},rules:{my_goods_id:[{validator:o,trigger:"blur"}],price_type:[{required:!0,message:"请输入商品价格",trigger:"blur"},{validator:r,trigger:"blur"}],pic_url:[{required:!0,message:"请添加商品封面",trigger:"blur"}],goods_name:[{required:!0,message:"请添加商品名称",trigger:"blur"},{validator:t,trigger:"blur"}],goods:[{required:!0,validator:i,trigger:"blur"}]},loading:!1}},computed:{disabledEdit:function(){return this.$route.query.status&&"2"===this.$route.query.status}},created:function(){},watch:{},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function o(){var r,t;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r=e.$route.query.goodsId,r&&(t=JSON.parse(localStorage.getItem("editLiveGood")),console.log(t),e.form=t,t.is_show||(e.is_show=!0),e.form={my_goods_id:null,goods_name:t.name,pic_url:t.cover_img_base64,price_type:t.price_type,price:t.price,price2:t.price2,page_url:t.new_url,goods_id:t.goods_id,goods:t.goods?t.goods:{}});case 2:case"end":return o.stop()}}),o)})))()},methods:{priceTypeChange:function(){this.form.price="",this.form.price2="",this.$refs["form"].clearValidate("price_type")},getGoodDetail:function(){this.$refs.goodsSelect.handleClick()},submit:function(){var e=this;this.$refs["form"].clearValidate(),this.$refs["form"].validate((function(o){if(o){e.loading=!0;var r=JSON.parse(JSON.stringify(e.form));r.page_url=r.goods.id,delete r.my_goods_id,delete r.goods,e.$heshop.livegoods("post",r).then((function(){e.loading=!1,e.$router.back()})).catch((function(o){e.loading=!1,e.$message.error(o.data.message)}))}}))},formatNum:function(e,o){var r=e.toString();r=r.replace(/。/g,"."),r=r.replace(/[^\d.]/g,""),r=r.replace(/^\./g,""),r=r.replace(/\.{2,}/g,""),r=r.replace(".","$#$").replace(/\./g,"").replace("$#$","."),r=r.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),this.form[o]=r},confirmGoods:function(e){this.form.goods_name=e.name}}},c=l,n=(r("26a0"),r("2877")),p=Object(n["a"])(c,t,i,!1,null,"4b84cbbc",null);o["default"]=p.exports}}]);
//# sourceMappingURL=chunk-5fa87d26.9a7fa7f3.js.map