(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order/order-waybillEdit"],{"0be3":function(e,a,r){},"6e31":function(e,a,r){"use strict";r("0be3")},a1647:function(e,a,r){"use strict";r.r(a);var t,l,i=r("2638"),o=r.n(i),s=(r("4de4"),r("d81d"),r("b0c0"),r("1b9d")),n={name:"waybill-edit",data:function(){return{form:{mobile:"",name:"",address:"",code:"",area:[]},rules:{area:[{required:!0,message:"发货地区不能为空"}],name:[{required:!0,message:"姓名不能为空"}],mobile:[{required:!0,message:"联系方式不能为空"}],address:[{required:!0,message:"发货详细地址不能为空"}],code:[{required:!0,message:"快递公司不能为空"}]},district:[],companyList:[],loading:!1,disabled:!1}},methods:{routerBack:function(){this.$router.back(-1)},submit:function(){var e=this;this.$refs["form"].validate((function(a){if(a){e.loading=!0;var r=e.$_.cloneDeep(e.form);r.province=r.area[0],r.city=r.area[1],r.district=r.area[2],delete r.area,e.$route.query.id?Object(s["e"])(r).then((function(){e.routerBack(),e.loading=!1})):Object(s["a"])(r).then((function(){e.routerBack(),e.loading=!1}))}}))}},mounted:function(){var e=this;Object(s["d"])().then((function(a){e.district=a})),Object(s["c"])().then((function(a){e.companyList=a.filter((function(e){if(e.is_waybill)return e}))})),this.$route.query.id&&(this.loading=!0,this.disabled=!0,Object(s["f"])(this.$route.query.id).then((function(a){e.form=a,e.form.area=[a.province,a.city,a.district],e.loading=!1,e.disabled=!1})))},render:function(){var e=this,a=arguments[0],r=this;return a("div",{class:"le-main"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"},class:"he-link-text"},[a("el-breadcrumb-item",{class:"he-link"},[a("a",{on:{click:r.routerBack}},[" 电子面单"])]),a("el-breadcrumb-item",[function(){return r.$route.query.id?"编辑":"新增"}(),"电子面单"])]),a("el-form",o()([{attrs:{"label-width":"193px"},ref:"form",directives:[{name:"loading",value:r.loading}]},{props:{rules:r.rules,model:r.form}}]),[a("div",{class:"le-card"},[a("div",{class:"le-card--head flex align-center"},[a("span",{class:"le-sign"}),a("span",["快递公司"])]),a("el-form-item",{attrs:{label:"快递公司",prop:"code"}},[a("el-select",{attrs:{placeholder:"请选择快递公司"},model:{value:r.form.code,callback:function(a){e.$set(r.form,"code",a)}}},[r.companyList.map((function(e,r){return a("el-option",{key:r,attrs:{label:e.value,value:e.label}})}))])])]),a("div",{class:"le-card"},[a("div",{class:"le-card--head flex align-center"},[a("span",{class:"le-sign"}),a("span",["发货人信息"])]),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:r.form.name,callback:function(a){e.$set(r.form,"name",a)}}})]),a("el-form-item",{attrs:{label:"联系方式",prop:"mobile"}},[a("el-input",{attrs:{placeholder:"请输入联系方式"},model:{value:r.form.mobile,callback:function(a){e.$set(r.form,"mobile",a)}}})]),a("el-form-item",{attrs:{label:"发货地区",prop:"area"}},[a("el-cascader",o()([{attrs:{options:r.district,placeholder:"请选择发货地区"}},{props:{expandTrigger:"hover"}},{model:{value:r.form.area,callback:function(a){e.$set(r.form,"area",a)}}}]))]),a("el-form-item",{attrs:{label:"发货详细地址",prop:"address"}},[a("el-input",{attrs:{placeholder:"请输入发货详细地址"},model:{value:r.form.address,callback:function(a){e.$set(r.form,"address",a)}}})])])]),a("div",{class:"le-cardpin"},[a("el-button",{attrs:{type:"primary",disabled:r.disabled,loading:r.loading&&!r.disabled},on:{click:r.submit}},["保存"])])])}},c=n,d=(r("6e31"),r("2877")),u=Object(d["a"])(c,t,l,!1,null,"c4cd3b06",null);a["default"]=u.exports}}]);