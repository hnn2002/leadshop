(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["store-changelog"],{3168:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"le-matter"},[s("el-dialog",{staticClass:"update-dialog",attrs:{title:"系统是否进行二次开发？",visible:t.dialogVisible,width:"420px","append-to-body":"","before-close":function(t){t()}},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("div",{staticClass:"update-info"},[s("div",{staticClass:"update-info-item",on:{click:t.toUpdateURL}},[s("i",{staticClass:"le-icon le-icon-weiercikaifa update-icon"}),s("span",{staticClass:"update-span"},[t._v("未二次开发")]),s("i",{staticClass:"le-icon le-icon-arrow-right update-right"})]),s("div",{staticClass:"update-info-item",on:{click:t.toUpdatee}},[s("i",{staticClass:"le-icon le-icon-ercikaifa update-icon"}),s("span",{staticClass:"update-span"},[t._v("已二次开发")]),s("i",{staticClass:"le-icon le-icon-arrow-right update-right"})])])]),s("div",{staticClass:"le-header flex align-center",on:{click:t.routerIndex}},[t.auth&&t.copyright_information||!t.isAuth?t.auth&&t.copyright_information?[s("img",{staticClass:"le-header-log",staticStyle:{width:"146.25px",height:"36px"},attrs:{width:"260",height:"64",src:t.copyright_information.brand_name,alt:""}}),s("div",{staticClass:"le-header-name"},[t._v("更新日志")])]:t._e():[s("img",{staticClass:"le-header-log",attrs:{src:i("9ef1"),alt:""}}),s("div",{staticClass:"le-header-name"},[t._v("LEADSHOP更新日志")])]],2),s("div",{staticClass:"le-body"},[s("el-scrollbar",{staticStyle:{height:"100%"}},[s("div",{staticClass:"le-card"},[t._l(t.list,(function(e,i){return s("div",{key:i,staticClass:"le-time-item",class:t.list.length-1===i?"":"le-border"},[s("div",{staticClass:"le-dot",class:e.is_last_version?"le-dot-last":"le-dot-default"}),s("div",{staticClass:"le-left"},[s("div",{staticClass:"le-version"},[e.is_last_version?s("span",{staticClass:"le-version-new"},[t._v("new")]):t._e(),t._v(" V"+t._s(e.version)+" ")]),s("div",{staticClass:"le-time"},[t._v(t._s(e.time))])]),s("div",{staticClass:"le-content"},[s("div",{staticClass:"flex align-center le-content-header"},[e.is_last_version?s("button",{staticClass:"le-button",on:{click:function(e){t.dialogVisible=!0}}},[t._v("一键更新")]):t._e(),e.is_need?s("span",{staticClass:"le-prompt"},[t._v("此版本需上传小程序包重新发布")]):t._e(),e.host_version?s("div",{staticClass:"le-host-version"},[s("span",{staticClass:"le-icon le-icon-positioning"},[t._v(" 您当前的版本")])]):t._e()]),s("div",{staticClass:"le-content-info"},[t._l(e.content.slice(0,e.is_collapse?e.content.length:2),(function(e,i){return s("div",{key:i,staticClass:"le-content-info-item flex align-top"},[s("span",{staticClass:"le-tag le-icon",class:1==e.type?"le-icon-add":2==e.type?"le-icon-youhua":"le-icon-xiufu"},[t._v(" "+t._s(1==e.type?"新增":2==e.type?"优化":"修复")+" ")]),s("span",{staticClass:"le-content-info-item__text flex-sub"},[t._v(t._s(e.text))])])})),e.content.length>2?s("div",{staticClass:"le-more flex",on:{click:function(t){e.is_collapse=!e.is_collapse}}},[s("span",[t._v(t._s(e.is_collapse?"收起":"展开"))]),s("span",{staticClass:"le-icon",class:e.is_collapse?"le-icon-arrow-top":"le-icon-arrow-down"})]):t._e()],2)])])})),s("div",{staticClass:"flex justify-center le-pagination"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next, jumper","current-page":t.pagination.current,"page-count":t.pagination.count},on:{"current-change":t.currentChange}})],1)],2)])],1)],1)},n=[],a=i("1c03"),o=(i("2769"),i("0756"),i("7736")),l={name:"changelog",computed:Object(a["a"])({},Object(o["c"])({getStore:"setting/getStore",auth:"setting/getAuth",copyright_information:"setting/getCopyright"})),data:function(){return{dialogVisible:!1,pagination:{current:1,count:1},list:[],last_version:"1.0.0",isAuth:!1}},methods:{currentChange:function(t){this.pagination.current=t,this.getList()},toUpdatee:function(){var t=this,e=this;this.$confirm('<h3 style="text-align:center;height:22px; line-height:22px;vertical-align:top; font-size:18px;font-weight: 400;color: #262626;"><i style="color:#FF8226;font-size:22px; padding-right:12px;" class="le-icon le-icon-zhushi"></i><span style="vertical-align:middle">注意</span></h3> <p style="color: #8C8C8C;font-size: 12px;">二次开发后请慎用一键更新功能！由于二次开发所导致的系统问题，官方无法处理！</p>',"",{dangerouslyUseHTMLString:!0,distinguishCancelAndClose:!0,confirmButtonText:"仍要更新",cancelButtonText:"取消更新"}).then((function(){t.$heshop.cloud("post",{action:"update"}).then((function(t){var e=t;location.href="/leadshop.php?token="+e})).catch((function(){this.$message.error("网络开小差， 请刷新重试")}))})).catch((function(){e.dialogVisible=!1}))},toUpdateURL:function(){this.$heshop.cloud("post",{action:"update"}).then((function(t){var e=t;location.href="/leadshop.php?token="+e})).catch((function(){this.$message.error("网络开小差， 请刷新重试")}))},getList:function(){var t=this;this.$heshop.cloud("get").page(this.pagination.current,5).then((function(e){for(var i=e.version.list,s=0;s<i.length;s++)i[s].is_collapse=!1,i[s].version==e.version.host_version&&(i[s].host_version=!0),i[s].version===e.version.last_version.version&&(i[s].is_last_version=!0);t.list=e.version.list,t.pagination={current:e.version.pagination.current_page,count:e.version.pagination.page_count},t.isAuth=!0})).catch((function(t){console.error(t)}))},routerIndex:function(){this.$router.replace({path:"panel/index"})}},mounted:function(){this.getList()}},c=l,r=(i("76c5"),i("4ac2")),p=Object(r["a"])(c,s,n,!1,null,"2dfbe10a",null);e["default"]=p.exports},"76c5":function(t,e,i){"use strict";i("ad6f")},"9ef1":function(t,e,i){t.exports=i.p+"img/leashop.dc582fec.png"},ad6f:function(t,e,i){}}]);