(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57c71766"],{"3dd1":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"le-matter"},[a("el-breadcrumb",{staticClass:"he-link-text",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[a("he-link",{attrs:{href:"plugins/features"}},[e._v("营销玩法")])],1),a("el-breadcrumb-item",{staticClass:"he-link"},[a("he-link",{attrs:{href:"features/coupon/index"}},[e._v("优惠券管理")])],1),a("el-breadcrumb-item",[e._v(" "+e._s(e.$route.query.isEdit?"编辑成功":"新建成功")+" ")])],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"le-success flex flex-direction align-center"},[e.loading?e._e():[a("img",{staticClass:"le-success-icon",attrs:{src:s("bcf5")}}),a("div",{staticClass:"le-success-text"},[e._v("优惠券"+e._s(e.$route.query.isEdit?"编辑":"创建")+"成功")]),a("el-button",{directives:[{name:"popup",rawName:"v-popup.promote",value:{data:e.detail,promoteType:"coupon"},expression:"{ data: detail, promoteType: 'coupon' }",modifiers:{promote:!0}}],staticClass:"le-success-btn",attrs:{module:"goods",title:"推广",hide_footer:!0,width:"791"}},[e._v("立即推广")]),a("div",{staticClass:"le-table-edit flex align-center"},[a("span",{staticClass:"le-button-text",on:{click:function(t){return e.router("/features/coupon/detail")}}},[e._v("继续添加")]),a("span",{staticClass:"le-line-text"}),a("span",{staticClass:"le-button-text",on:{click:function(t){return e.router("/features/coupon/index")}}},[e._v("优惠券管理")])])]],2)],1)},i=[],n=(s("2769"),s("0756"),{name:"success",data:function(){return{detail:{},loading:!0}},mounted:function(){this.getDetail()},methods:{router:function(e){this.$router.replace({path:e})},getDetail:function(){var e=this;console.log(this.$route.query.id),this.$heshop.coupon("get",parseInt(this.$route.query.id)).then((function(t){console.log(t),e.detail=t,e.loading=!1})).catch((function(t){e.loading=!1,e.$message.error(t.data.message)}))}}}),o=n,r=(s("db74"),s("5d22")),c=Object(r["a"])(o,a,i,!1,null,"09511a2a",null);t["default"]=c.exports},"997a":function(e,t,s){},bcf5:function(e,t,s){e.exports=s.p+"img/coupon-success-icon.aa2851d5.png"},db74:function(e,t,s){"use strict";s("997a")}}]);
//# sourceMappingURL=chunk-57c71766.01921eed.js.map