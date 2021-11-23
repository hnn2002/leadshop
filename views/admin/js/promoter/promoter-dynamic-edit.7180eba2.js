(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter/promoter-dynamic-edit"],{"08e7":function(e,t,l){"use strict";l("f2f8")},"0a53":function(e,t,l){"use strict";l.r(t);var i,r,a=l("2638"),c=l.n(a),s=(l("d3b7"),l("159b"),l("d81d"),l("9911"),l("b0c0"),l("9932")),o=l.n(s),n=l("5a02"),d=l.n(n),f=l("ffa4"),u=l.n(f),m=l("69a5"),v=l.n(m),p=l("f704"),g=l.n(p),b=l("8bf9"),A=l.n(b),h=l("00ee"),w=l("b76a"),_=l.n(w),k=l("0e28"),y={name:"dynamic-edit",components:{vuedraggable:_.a,hyperlinkSelect:h["a"]},data:function(){return{loading:!1,form:{name:"",type:1,content:"",pic_list:[],video_list:[],link:{}},rules:{name:[{required:!0,message:"动态名称不能为空",trigger:"blur"}],content:[{required:!0,message:"素材文案不能为空",trigger:"blur"}],pic_list:[{required:!0,message:"图片不能为空",trigger:"change"}],video_list:[{required:!0,message:"视频不能为空",trigger:"change"}],video_cover:[{required:!0,message:"视频封面不能为空",trigger:"change"}]}}},methods:{routerBack:function(){this.$router.back(-1)},submit:function(){var e=this;this.$refs["form"].validate((function(t){if(!t)return!1;e.loading=!0;var l=e.$_.cloneDeep(e.form);e.$route.query.id?Object(k["h"])(e.$route.query.id,l).then((function(){e.routerBack()})).finally((function(){e.loading=!1})):Object(k["e"])(l).then((function(){e.routerBack()})).finally((function(){e.loading=!1}))}))},arrayConcat:function(e){var t=this;this.$refs["form"].clearValidate("pic_list"),e.forEach((function(e){t.form.pic_list.push(e)}))},deleteImg:function(e){event.stopPropagation(),this.$delete(this.form.pic_list,e)}},render:function(){var e=this,t=arguments[0],l=this;return t("div",{class:"le-main"},[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[t("a",{on:{click:l.routerBack}},["空间动态"])]),t("el-breadcrumb-item",[l.$route.query.id?"编辑动态":"添加动态"])]),t("el-form",c()([{ref:"form",directives:[{name:"loading",value:l.loading}]},{props:{model:l.form,rules:l.rules}},{class:"flex le-content",attrs:{"label-width":"124px"}}]),[t("div",{class:"le-left le-card"},[t("div",{class:"le-left--content"},[t("div",{class:"le-text"},["动态"]),t("img",{attrs:{src:o.a,alt:"",width:"338",height:"80"}}),t("img",{attrs:{src:v.a,alt:"",width:"338",height:"170"}}),t("div",{class:"le-left--list"},[t("div",{class:"le-left--user flex align-center"},[t("img",{attrs:{src:A.a,alt:"",width:"32",height:"32"},class:"le-logo"}),t("div",[t("div",{class:"le-name"},["leadshop"]),t("div",{class:"le-time"},["2021-04-14 11:48:55"])])]),t("div",{class:"le-content--text"},[function(){return l.form.content?l.form.content:"动态文案"}()]),function(){return 1===l.form.type?t("div",{class:"le-picture flex flex-wrap"},[function(){return l.form.pic_list.length>0?l.form.pic_list.map((function(e,l){return t("img",{class:"le-image",attrs:{src:e,width:"98",height:"98"},key:l})})):t("img",{attrs:{src:d.a,width:"98",height:"98"}})}()]):(e=l.$_.isEmpty(l.form.video_cover)?u.a:l.form.video_cover,t("img",{class:"le-video ",attrs:{src:e,width:"312",height:"176"}}));var e}(),t("div",{class:["flex align-center le-footer",l.$_.isEmpty(l.form.link)?"justify-end":"justify-between"]},[function(){if(!l.$_.isEmpty(l.form.link))return t("span",{class:"le-more"},["查看详情"])}(),t("div",{class:"le-button flex align-center"},[t("img",{attrs:{src:g.a,width:"16",height:"16",alt:""},class:"le-like--icon"}),t("span",["点赞"])])])])])]),t("div",{class:"le-right le-card flex-sub"},[t("div",{class:"le-card-head flex align-center"},[t("span",{class:"le-card-line"}),t("span",["编辑动态"])]),t("el-form-item",{attrs:{label:"动态名称",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入素材名称","show-word-limit":!0,maxlength:10},model:{value:l.form.name,callback:function(t){e.$set(l.form,"name",t)}}})]),t("el-form-item",{attrs:{label:"动态类型"}},[t("el-radio-group",{on:{change:function(){l.$refs["form"].clearValidate("pic_list")}},model:{value:l.form.type,callback:function(t){e.$set(l.form,"type",t)}}},[t("el-radio",{attrs:{label:1}},["图片"]),t("el-radio",{attrs:{label:2}},["视频"])])]),t("el-form-item",{attrs:{label:"动态文案",prop:"content"},class:"le-textarea"},[t("el-input",{attrs:{resize:"none",rows:13,placeholder:"请输入动态文案",type:"textarea","show-word-limit":!0},model:{value:l.form.content,callback:function(t){e.$set(l.form,"content",t)}}})]),function(){return 1===l.form.type?t("el-form-item",{attrs:{label:"图片",prop:"pic_list"},class:"le-pic_list",key:"pic_list"},[t("div",[t(_.a,{model:{value:l.form.pic_list,callback:function(t){e.$set(l.form,"pic_list",t)}}},[l.form.pic_list.map((function(i,r){return t("div",{key:r,class:[{"le-label__require-image":0===r},"le-label__require-item"]},[t("div",{class:"select-cover__120"},[t("pictureDialog",{scopedSlots:{upload:function(){return t("div",{class:"select-cover__120-add"},[t("i",{class:"le-icon le-icon-add select-cover__120-icon"}),t("span",{class:"select-cover__120-text"},["添加图片"])])},preview:function(e){return t("div",{class:"select-cover__120-edit"},[t("el-image",{attrs:{src:e.url,fit:"cover"}}),t("div",{class:"select-cover__120-tips"},[t("span",["替换"])," |",t("span",{on:{click:l.deleteImg.bind(l,r)}},["删除"])])])}},model:{value:l.form.pic_list[r],callback:function(t){e.$set(l.form.pic_list,r,t)}}})])])})),function(){if(l.form.pic_list.length<9)return t("div",{class:"select-cover__120 le-label__require-item"},[t("pictureDialog",{on:{confirm:l.arrayConcat},attrs:{limit:9-l.form.pic_list.length,max:9},scopedSlots:{upload:function(){return t("div",{class:"select-cover__120-add"},[t("i",{class:"le-icon le-icon-add select-cover__120-icon"}),t("span",{class:"select-cover__120-text"},["添加图片"])])},preview:function(){return t("div",[t("i",{class:"le-icon le-icon-add select-cover__120-icon"}),t("span",{class:"select-cover__120-text"},["添加图片"])])}}})])}()])]),t("div",{class:"le-prompt-text"},["建议尺寸：1000像素 * 1000像素，可拖拽改变图片顺序，最多上传9张"])]):[[t("el-form-item",{attrs:{label:"视频",prop:"video_list"},key:"video_list"},[t("div",{class:"select-cover__120"},[t("videoDialog",{scopedSlots:{upload:function(){return t("div",{class:"select-cover__120-add"},[t("i",{class:"le-icon le-icon-add select-cover__120-icon"}),t("span",{class:"select-cover__120-text"},["添加视频"])])},preview:function(e){return t("div",{class:"select-cover__120-edit"},[t("el-image",{attrs:{src:e.url.cover,fit:"cover"}}),t("div",{class:"select-cover__120-tips"},["替换视频"])])}},model:{value:l.form.video_list,callback:function(t){e.$set(l.form,"video_list",t)}}})]),t("div",{class:"le-prompt-text"},["建议时长：10~30秒，宽高比 16:9"])])],[t("el-form-item",{attrs:{label:"视频封面",prop:"video_cover"},key:"video_cover"},[t("div",{class:"select-cover__120"},[t("pictureDialog",{attrs:{limit:1},scopedSlots:{upload:function(){return t("div",{class:"select-cover__120-add"},[t("i",{class:"le-icon le-icon-add select-cover__120-icon"}),t("span",{class:"select-cover__120-text"},["添加图片"])])},preview:function(e){return t("div",{class:"select-cover__120-edit"},[t("el-image",{attrs:{src:e.url,fit:"cover"}}),t("div",{class:"select-cover__120-tips"},[t("span",["替换"])," |",t("span",{on:{click:function(e){e.stopPropagation(),l.form.video_cover=""}}},["删除"])])])}},model:{value:l.form.video_cover,callback:function(t){e.$set(l.form,"video_cover",t)}}})]),t("div",{class:"le-prompt-text"},["建议尺寸：750像素 * 422像素"])])]]}(),t("el-form-item",{attrs:{label:"跳转链接"}},[t(h["a"],{class:"le-link",model:{value:l.form.link,callback:function(t){e.$set(l.form,"link",t)}}},["请选择跳转链接"])])])]),t("div",{class:"le-cardpin"},[t("el-button",{attrs:{type:"primary",loading:l.loading},on:{click:l.submit}},["保存"])])])},mounted:function(){var e=this;this.$route.query.id&&Object(k["A"])(this.$route.query.id).then((function(t){e.form=t}))}},q=y,x=(l("08e7"),l("2877")),V=Object(x["a"])(q,i,r,!1,null,"b6a0ef96",null);t["default"]=V.exports},"69a5":function(e,t,l){e.exports=l.p+"img/mobile-dynamic.2571c1cc.png"},"8bf9":function(e,t){e.exports="data:image/png;base64,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"},f2f8:function(e,t,l){},f704:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACMElEQVQ4T6WTX4RUcRTHv+f8fu0QvcRY9VhU0p+nyD60YliSntqHkrTGnT8So+yWEleUNSVDsjN3dmwS+zB6SS8xYnqLKJvURj021jxGmvG7v5Mz9q4xmod0uFzH/Xx/5/c930v4z6KEr9frk865aSI6yczbROS9MeZVv9/3zKz9KQCx9/61tbYdBMGGsipAS0tLu5n5BoAzAGTzYSJa996DiPZt9gbfA3jhvV8sFos/aHl5eWccxwpfAvAmjuOGtfaXiFwQkdNEgyFfEtEz59x2Y0wWwAkAT4wxixRF0ZSIPAXwzTl3udvtfg/D0FcqlclUKjWtdK/Xa5dKpY0wDDmdTu+x1j4GsJeILlK1Ws0S0S0A91qt1kqz2YwTX8IwtPoehqFLerOzsyaTycwBuCkid6lWq+VE5DoR3c7lcqtEpB6MLRHRqc8BuAOgrAbOMHME4C0zX0ncHaeg2/LePwJw3Hsf6AS7VAnAjF7DWtvIZrM//ybQaDR2OOfURL1ym5lLpCPV6/WDIlIBcMB7f39iYmJlVEThfr8/x8zzAL4AuNrpdD4NdqQitVrtCICHAPaLSHlYJIGJaAHAusL5fH5N/dpKogakWq0ORDQ4IvJARFaZ2QM4D2BeRL4qXCgU1jaDNUjVcA1EiEjhQ0TUAvAbwCkAn0Xk2jCcRHnUL/XkcBzHZSI6JiK61nfGmIUgCD4mJyfQ6ARb/SiKjorIWW14758Xi8UPo/C4Cf7pB/8DegoC5u2SmuoAAAAASUVORK5CYII="}}]);