(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order-bulkShipping"],{1586:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"le-matter",attrs:{"label-width":"120px",model:e.form,rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[a("div",{staticClass:"le-announcement"},[e._v(" 批量发货注意事项： "),a("br"),e._v(" 1. 请先按照模板填写订单号、物流公司、物流单号信息。物流单号不可写成E+22的科学计数法"),a("br"),e._v(" 2. 未成功发货的订单，可下载【失败记录】查看详细的失败原因，对症修改"),a("br"),e._v(" 3. 发货订单数据，最大不超过1000条（支持csv、xls、xlsx，文件大小请控制在2MB以内）"),a("br"),e._v(" 4. 物流公司名称，请填写全称，如圆通速递，不可填写为圆通"),a("br")]),a("div",{staticClass:"le-header le-card"},[a("el-form-item",{attrs:{label:"批量发货类型"}},[a("el-radio-group",{on:{change:e.changeRadio},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-radio",{attrs:{label:1}},[e._v("手动填写物流信息（传统模式）")]),a("el-radio",{attrs:{label:2}},[e._v("自动获取电子面单")])],1),a("div",{staticClass:"le-prompt-text"},[e._v(" 选择自动获取电子面单，则发货模板中 "),a("span",{staticStyle:{color:"#262626"}},[e._v("仅需要填写订单号")]),e._v("，快递单号将自动获取 ")]),1===e.form.type?a("div",{staticClass:"le-editor"},[a("el-button",{staticClass:"le-button le-text",attrs:{plain:""}},[a("a",{attrs:{href:e.origin+"/static/files/bulk-shipping-template.xlsx",download:"批量发货模板.xlsx"}},[e._v("下载批量发货模板")])]),a("button",{staticClass:"le-button le-default",on:{click:e.bulkShipping}},[e._v("批量发货")]),a("input",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.csv,application/vnd.ms-excel"},on:{change:e.upload}})],1):e._e()],1),2===e.form.type?a("el-form-item",{attrs:{label:"物流公司",prop:"logistics_company"}},[a("el-select",{attrs:{placeholder:"请选择物流公司"},on:{change:e.getAddress},model:{value:e.form.logistics_company,callback:function(t){e.$set(e.form,"logistics_company",t)},expression:"form.logistics_company"}},e._l(e.express,(function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),2===e.form.type&&e.addressList.length>0?a("el-form-item",{attrs:{label:"发货地址",prop:"radio"}},[a("el-scrollbar",{staticClass:"he-address"},e._l(e.addressList,(function(t,s){return a("div",{key:s,staticClass:"he-address__item"},[a("el-radio",{style:e.form.radio===t.id?"background: rgba(98, 60, 235, 0.1);":"",attrs:{label:t.id,border:""},model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}},[e._v(" ("+e._s(t.name)+" 发) "+e._s(t.province)+e._s(t.city)+e._s(t.district)+e._s(t.address)+" "+e._s(t.mobile))])],1)})),0)],1):e._e(),2===e.form.type?a("el-form-item",{staticClass:"le-editor",attrs:{label:""}},[a("el-button",{attrs:{plain:"",disabled:!e.form.radio},on:{click:e.downloadFile}},[e._v(" 下载批量发货模板 ")]),a("el-button",{staticClass:"le-waybill--btn",attrs:{type:"primary",disabled:!e.form.logistics_company||!e.form.radio},on:{click:e.bulkShipping}},[e._v("批量发货")]),a("input",{ref:"uploadWaybill",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.csv,application/vnd.ms-excel"},on:{change:e.upload}})],1):e._e()],1),a("div",{staticClass:"le-search le-card"},[a("span",{staticClass:"le-label"},[e._v("发货时间")]),a("el-date-picker",{staticClass:"le-search-date",attrs:{type:"datetime",placeholder:"开始日期"},model:{value:e.time_start,callback:function(t){e.time_start=t},expression:"time_start"}}),a("span",{staticClass:"le-label"},[e._v("至")]),a("el-date-picker",{staticClass:"le-search-date",attrs:{type:"datetime",placeholder:"结束日期"},model:{value:e.time_end,callback:function(t){e.time_end=t},expression:"time_end"}}),a("div",{staticClass:"le-editor"},[a("button",{staticClass:"le-button le-default",on:{click:e.getSearch}},[e._v("筛选")]),a("el-button",{staticStyle:{"margin-left":"10px"},on:{click:e.empty}},[e._v("清空")])],1)],1),a("div",{staticClass:"le-body le-card"},[a("el-table",{staticClass:"le-table",attrs:{"row-class-name":"le-table-row",height:"680",data:e.list}},[a("el-table-column",{attrs:{label:"发货编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.handle_sn)+" ")]}}])}),a("el-table-column",{attrs:{label:"发货订单数"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.order_number)+" ")]}}])}),a("el-table-column",{attrs:{label:"成功发货订单数"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.success_number)+" ")]}}])}),a("el-table-column",{attrs:{label:"操作时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("timeFormat")(t.row.created_time,"yyyy-mm-dd hh:MM:ss"))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.order_number!==t.row.success_number?a("button",{staticClass:"le-button le-text le-table--operating__btn",on:{click:function(a){return e.exportData(t.row.id)}}},[e._v(" 失败记录 ")]):[e._v(" — — ")]]}}])})],1),a("div",{staticClass:"le-pagination flex justify-end align-center"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next, jumper","current-page":e.page.current,"page-count":e.page.count},on:{"current-change":e.currentChange}})],1)],1),a("he-loading",{attrs:{title:"文件上传处理中，请稍后...",show:e.loading}}),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"30%",top:"35vh"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticStyle:{"text-align":"center","margin-top":"43px"}},[a("i",{staticClass:"le-icon le-icon-zhushi"}),a("div",{staticClass:"le-dialog-text"},[e._v(" "+e._s(1===e.dialogType?"文件格式错误，请使用csv、xls、xlsx的格式文件":2===e.dialogType?"文件大小超过2MB，请压缩或删减内容后上传":"订单数据量超过1000条，请删减后分多次上传")+" ")])]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("重新上传")])],1)])],1)},i=[],o=(a("da02"),a("d014"),a("5d63"),a("f667"),a("61d9"),a("877e"),a("e939"),a("049f"),a("7d53")),l=a("c886"),r=a.n(l),n={name:"bulkShipping",components:{heLoading:o["a"]},data:function(){return{origin:"",list:[],time_start:"",time_end:"",loading:!1,page:{size:20,current:1,count:1},dialogVisible:!1,dialogType:1,form:{radio:null,logistics_company:"",type:1},express:[],addressList:[],copyData:{},rules:{logistics_company:[{required:!0,message:"物流公司不能为空"}],radio:[{required:!0,message:"发货地址不能为空"}]}}},methods:{currentChange:function(e){this.page.current=e,this.getList()},bulkShipping:function(){if(1===this.form.type)this.$refs.upload.click();else{if(!this.form.logistics_company||!this.form.radio)return;this.$refs.uploadWaybill.click()}},getSearch:function(){this.page.current=1,this.getList()},empty:function(){this.time_start="",this.time_end="",this.page.current=1,this.getList()},getList:function(){var e=this,t={};this.time_start&&(t.time_start=new Date(this.time_start).getTime().toString().substr(0,10)),this.time_end&&(t.time_end=new Date(this.time_end).getTime().toString().substr(0,10)),this.$heshop.orderhandle("get",t).page(this.page.current,this.page.size).then((function(t){var a=t.data,s=t.headers;e.list=a,e.page={current:+s["x-pagination-current-page"],count:+s["x-pagination-page-count"],size:+s["x-pagination-per-page"],total:+s["x-pagination-total-count"]}})).catch((function(){e.$message.error("获取失败")}))},upload:function(){var e=null;e=1===this.form.type?this.$refs.upload.files:this.$refs.uploadWaybill.files,this.readExcel(e)},readExcel:function(e){var t=this,a=this;if(e.length<=0)return!1;if(!/\.(csv|xls|xlsx)$/.test(e[0].name.toLowerCase()))return this.dialogVisible=!0,this.dialogType=1,!1;if(e[0].size/1024/1024>2)return console.log(e[0].size),this.dialogVisible=!0,this.dialogType=2,!1;this.loading=!0;var s=new FileReader;s.onload=function(e){try{var s=e.target.result,i=r.a.read(s,{type:"binary"}),o=i.SheetNames[0],l=r.a.utils.sheet_to_json(i.Sheets[o]),n=[];if(n.length>1e3)return t.dialogVisible=!0,t.dialogType=3,!1;if(l.forEach((function(e){var a,s,i,o;1===t.form.type?n.push([null!==(a=e["订单号"])&&void 0!==a?a:"",null!==(s=e["物流公司"])&&void 0!==s?s:"",null!==(i=e["物流单号"])&&void 0!==i?i:""]):n.push([null!==(o=e["订单号"])&&void 0!==o?o:""])})),1===t.form.type)a.$heshop.orderhandle("post",n).then((function(){a.$message.success("操作成功"),a.loading=!1,a.getList()})).catch((function(e){console.error(e),a.loading=!1,a.$message.error(e.data.message)}));else{var c={};c.list=n,c.waybill_id=t.form.radio,a.$heshop.orderhandle("post",{behavior:"waybill"},c).then((function(){a.$message.success("操作成功"),a.loading=!1,a.getList()})).catch((function(e){console.error(e),a.loading=!1,a.$message.error(e.data.message)}))}1===t.form.type?a.$refs.upload.value="":a.$refs.uploadWaybill.value=""}catch(d){a.loading=!1,a.$message.error("系统错误")}},s.readAsBinaryString(e[0])},exportData:function(e){var t=this;this.loading=!0,this.$heshop.orderhandle("get",e).then((function(e){var s=[];s=e.error_data.length>0&&e.error_data[0].length>2?["订单号","物流公司","物流单号","失败描述"]:["订单号","失败描述"];var i=e.error_data;Promise.resolve().then(function(){t.$h.Export2Excel.export_json_to_excel({header:s,data:i,filename:name+"批量发货失败记录("+t.$moment(new Date).format("YYYYMMDDHHmmss")+")"}),t.loading=!1}.bind(null,a)).catch(a.oe)})).catch((function(e){t.loading=!1,t.$message.error(e.data.message)}))},changeRadio:function(e){var t=this;if(console.log(e),console.log(this.form),1===e&&(this.copyData=this.$_.cloneDeep(this.form)),2===e){var a=this;this.$heshop.search("post",{include:"setting"},{keyword:"waybilljson"}).then((function(e){a.express=e.map((function(e){return{value:e.name,label:e.name,code:e.code}})),t.$_.isEmpty(t.copyData)||(t.form=t.$_.cloneDeep(t.copyData),t.form.type=2)}))}else this.form.logistics_company="",this.form.radio=null},getAddress:function(){for(var e=this,t=0;t<this.express.length;t++)this.express[t].value===this.form.logistics_company.trim()&&(this.form.code=this.express[t].code);this.$heshop.waybill("get",{behavior:"option",code:this.form.code}).then((function(t){e.addressList=t.data,t.data.length>0?(e.form.radio=t.data[0].id,t.data.forEach((function(t){1===t.status&&(e.form.radio=t.id)}))):e.form.radio=null})).catch((function(t){e.$message.error(t.data.message)}))},downloadFile:function(){var e=document.createElement("a");e.setAttribute("download","批量发货模板.xlsx"),e.setAttribute("href",this.origin+"/static/files/bulk-shipping-template-waybill.xlsx"),e.click()}},mounted:function(){this.origin=window.location.origin,this.getList()}},c=n,d=(a("28e2"),a("cba8")),u=Object(d["a"])(c,s,i,!1,null,"55d19524",null);t["default"]=u.exports},"28e2":function(e,t,a){"use strict";a("df0f")},df0f:function(e,t,a){}}]);