(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-setup"],{"0e28":function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"l",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"m",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"n",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"g",(function(){return v})),n.d(t,"p",(function(){return y})),n.d(t,"f",(function(){return _})),n.d(t,"o",(function(){return w})),n.d(t,"q",(function(){return k})),n.d(t,"h",(function(){return $})),n.d(t,"a",(function(){return P})),n.d(t,"r",(function(){return x}));n("d3b7"),n("ac1f"),n("841c");var a=n("2b0e"),o=(n("159b"),n("b64b"),n("d81d"),["X-PAGINATION-TOTAL-COUNT","X-PAGINATION-PER-PAGE","X-PAGINATION-PAGE-COUNT","X-PAGINATION-CURRENT-PAGE"]);function r(e){Object.keys(e.headers).forEach((function(t){e.headers[t.toUpperCase()]=e.headers[t],delete e.headers[t]}));var t={current:1,pageCount:1,totalCount:1};o.forEach((function(t){Object.keys(e.headers).map((function(n){t===n&&(e.headers[n]=parseInt(e.headers[n]))}))})),t.current=e.headers["X-PAGINATION-CURRENT-PAGE"],t.pageCount=e.headers["X-PAGINATION-PAGE-COUNT"],t.totalCount=e.headers["X-PAGINATION-TOTAL-COUNT"],e.pagination=t}var l=a["default"].prototype.$heshop,i=a["default"].prototype.$message.error;function c(e){var t=e.tabKey,n=void 0===t?"all":t,a=e.page,o=void 0===a?1:a;return new Promise((function(e){l.search("post",{include:"goods"},{keyword:{tab_key:n}}).page(o,10).then((function(t){r(t);var n=t.data,a=t.pagination;e({data:n,pagination:a})})).catch((function(e){i(e.data.message)}))}))}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){l.finance("get").page(e,10).then((function(e){r(e);var n=e.data,a=e.pagination;t({data:n,pagination:a})})).catch((function(e){i(e.data.message)}))}))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){l.search("post",{include:"promoterorder"},t).page(e,10).then((function(e){r(e);var t=e.data,a=e.pagination;n({data:t,pagination:a})})).catch((function(e){i(e.data.message)}))}))}function d(){return new Promise((function(e){l.promoterlevel("get").then((function(t){e(t)})).catch((function(e){i(e.data.message)}))}))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){l.promotermaterial("get").page(e,10).then((function(e){r(e);var n=e.data,a=e.pagination;t({data:n,pagination:a})})).catch((function(e){i(e.data.message)}))}))}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t){l.promotermaterial("post",e).then((function(e){t(e)})).catch((function(e){i(e.data.message)}))}))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){l.promoterzone("get",t).page(e,10).then((function(e){r(e);var t=e.data,a=e.pagination;n({data:t,pagination:a})})).catch((function(e){i(e.data.message)}))}))}function b(e){return new Promise((function(t){l.promoterzone("post",e).then((function(e){t(e)})).catch((function(e){i(e.data.message)}))}))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){l.setting("post",{keyword:"commission_setting",content:e}).then((function(e){t(e)})).catch((function(e){n(e)}))}))}function h(){return new Promise((function(e,t){l.search("post",{include:"setting"},{keyword:"commission_setting"}).then((function(t){e(t)})).catch((function(e){i(e.data.message),t()}))}))}function v(){return new Promise((function(e,t){l.search("post",{include:"setting"},{keyword:"promoter_setting"}).then((function(t){e(t)})).catch((function(e){i(e.data.message),t()}))}))}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){l.setting("post",{keyword:"promoter_setting",content:e}).then((function(e){t(e)})).catch((function(e){n(e)}))}))}function _(){return new Promise((function(e,t){l.search("post",{include:"setting"},{keyword:"promoter_rank"}).then((function(t){e(t)})).catch((function(e){i(e.data.message),t()}))}))}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){l.setting("post",{keyword:"promoter_rank",content:e}).then((function(e){t(e)})).catch((function(e){n(e)}))}))}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){l.setting("post",{keyword:"promoter_recruit_make",content:e}).then((function(e){t(e)})).catch((function(e){n(e)}))}))}function $(){return new Promise((function(e,t){l.search("post",{include:"setting"},{keyword:"promoter_recruit_make"}).then((function(t){e(t.content)})).catch((function(e){i(e.data.message),t()}))}))}function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(a,o){l.promoter("put",{id:e,behavior:t},n).then((function(e){console.log(e),a(e)})).catch((function(e){i(e.data.message),o()}))}))}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{uid:"",mobile:""};return new Promise((function(t,n){l.promoter("get",{behavior:"transfer_search",from_uid:e.uid,mobile:e.mobile}).then((function(e){console.log(e),t(e)})).catch((function(e){n(e)}))}))}},"2ca4":function(e,t,n){},"30ad":function(e,t,n){e.exports=n.p+"static/img/mobile-user-center.9a73942a.png"},"41c8":function(e,t,n){"use strict";n.r(t);var a,o,r=n("2638"),l=n.n(r),i=(n("b0c0"),n("a434"),n("d81d"),n("30ad")),c=n.n(i),s=n("57f9"),u=n("0e28"),d=n("8236"),f={mixins:[d["a"]],components:{goodsSelect:s["a"]},data:function(){var e=this,t=/(^[\d]|^[1-9][\d]*)($|[\\.][\d]{0,2}$)/,n=/^[1-9]\d*$/;return{loading:!0,disabled:!0,form:{status:1,level_number:1,self_buy:1,center_show:1,need_check:0,need_apply:0,apply_content:[{name:"姓名"}],conditions:{type:1,buy_amount:"",buy_number:"",goods_list:[]},bind_way:1,bind_type:1,bind_days:"",use_agreement:1,agreement_title:"",agreement_content:""},rules:{become:[{required:!0,validator:function(a,o,r){var l=e.form.conditions.type;if(2===l){var i=e.form.conditions.buy_amount,c="请输入0~9999999的整数或小数";if(!t.test(i))return void r(c);e.$_.toSafeInteger(i)>9999999&&r(c),r()}else if(3===l){var s=e.form.conditions.buy_number,u="请输入0~9999999的整数";if(!n.test(s))return void r(u);e.$_.toSafeInteger(s)>9999999&&r(u)}r()}}],bind_days:[{required:!0,validator:function(t,a,o){n.test(a)?(e.$_.toSafeInteger(a)>3e4&&o("请输入0~30000的整数"),o()):o("请输入0~30000的整数")}}]}}},mounted:function(){var e=this;Object(u["g"])().then((function(t){e.form=t.content,e.loading=!1,e.disabled=!1})).catch((function(){e.disabled=!1,e.loading=!1}))},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){if(!t)return!1;e.loading=!0,Object(u["p"])(e.form).then((function(){e.loading=!1})).catch((function(){e.loading=!1}))}))},routerManual:function(){this.$router.push({path:"/promoter/manual"})},routerLevel:function(){this.$router.push({path:"/promoter/level"})}},render:function(){var e=this,t=arguments[0],n=this,a=[{label:1,name:"无条件"},{label:2,name:"累计消费金额"},{label:3,name:"累计消费次数"},{label:4,name:"购买任意商品"},{label:5,name:"购买指定商品"}];return t("div",{class:"le-main"},[t("el-form",l()([{attrs:{"label-width":"193px"},ref:"form",directives:[{name:"loading",value:n.loading}]},{props:{model:n.form,rules:n.rules}}]),[t("div",{class:"le-card"},[t("div",{class:"le-card-head flex align-center"},[t("span",{class:"le-card-line"}),t("span",["基础信息"]),t("el-button",{attrs:{type:"text"},class:"le-manual",on:{click:n.routerManual}},["《分销商使用手册》"])]),t("div",{class:"le-card-body"},[t("el-form-item",{attrs:{label:"是否启用分销商"}},[t("el-radio-group",{model:{value:n.form.status,callback:function(t){e.$set(n.form,"status",t)}}},[t("el-radio",{attrs:{label:1}},["启用"]),t("el-radio",{attrs:{label:0}},["禁用"])])]),t("el-form-item",{attrs:{label:"分销商层级"}},[t("el-radio-group",{model:{value:n.form.level_number,callback:function(t){e.$set(n.form,"level_number",t)}}},[t("el-radio",{attrs:{label:1}},["一级分销"]),t("el-radio",{attrs:{label:2}},["二级分销"]),t("el-radio",{attrs:{label:3}},["三级分销"])]),t("div",{class:"le-prompt-text"},["前往",t("el-button",{attrs:{type:"text"},class:"le-prompt--button",on:{click:n.routerLevel}},["分销商等级"]),"设置佣金比例"])]),t("el-form-item",{attrs:{label:"分销自购"}},[t("el-radio-group",{model:{value:n.form.self_buy,callback:function(t){e.$set(n.form,"self_buy",t)}}},[t("el-radio",{attrs:{label:1}},["不允许"]),t("el-radio",{attrs:{label:2}},["自购返佣"]),t("el-radio",{attrs:{label:3}},["自购优惠"])]),t("div",{class:"le-prompt-text"},["选择自购优惠，则原本的佣金作为优惠金额减免，只需对剩下的金额付款"])]),t("el-form-item",{attrs:{label:"分销中心开放人群"}},[t("el-radio-group",{model:{value:n.form.center_show,callback:function(t){e.$set(n.form,"center_show",t)}}},[t("el-radio",{attrs:{label:1}},["仅开放给分销商"]),t("el-radio",{attrs:{label:2}},["向所有用户开放"])]),t("div",{class:"le-prompt-text"},["选择仅开放给分销商，则仅分销商的个人中心显示出分销中心入口",t("el-popover",{attrs:{placement:"right",trigger:"hover"},scopedSlots:{default:function(){return t("img",{attrs:{src:c.a,width:"225",height:"400",alt:""}})},reference:function(){return t("el-button",{attrs:{type:"text"},class:"le-prompt--button"},["查看示例"])}}})])])])]),t("div",{class:"le-card le-card-margin "},[t("div",{class:"le-card-head flex align-center"},[t("span",{class:"le-card-line"}),t("span",["分销商资格"])]),t("div",{class:"le-card-body"},[t("el-form-item",{attrs:{label:"成为分销商",prop:"become"}},[t("div",{class:"le-title"},["是否需要审核"]),t("el-radio-group",{model:{value:n.form.need_check,callback:function(t){e.$set(n.form,"need_check",t)}}},[t("el-radio",{attrs:{label:0}},["无需审核"]),t("el-radio",{attrs:{label:1}},["需审核"])]),t("div",{class:"le-title"},["是否需要填写申请信息"]),t("el-radio-group",{model:{value:n.form.need_apply,callback:function(t){e.$set(n.form,"need_apply",t)}}},[t("el-radio",{attrs:{label:0}},["无需填写"]),t("el-radio",{attrs:{label:1}},["需填写"])]),function(){if(1===n.form.need_apply)return[[t("el-table",{attrs:{data:n.form.apply_content,"row-class-name":"le-table-row"},class:"le-info--table"},[t("el-table-column",{attrs:{label:"信息名称",width:"288"},scopedSlots:{default:function(n){var a=!1;return 0===n.$index&&(a=!0),t("el-input",{attrs:{placeholder:"请输入信息名称",disabled:a,maxlength:8,"show-word-limit":!0},model:{value:n.row.name,callback:function(t){e.$set(n.row,"name",t)}}})}}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:{default:function(e){if(0!==e.$index)return t("el-button",{attrs:{type:"text"},on:{click:function(){return n.form.apply_content.splice(e.$index,1)}}},["移除"])}}})])],[t("div",{class:"le-info--table_footer"},[function(){var e=!1;return n.form.apply_content.length>=5&&(e=!0),t("el-button",{attrs:{disabled:e,plain:!0},on:{click:function(){return n.form.apply_content.push({name:""})}}},["添加申请信息"])}(),t("span",{class:"le-prompt-text"},["最多添加5条申请信息"])])]]}(),t("div",{class:"le-title"},["满足的条件"]),t("el-radio-group",{model:{value:n.form.conditions.type,callback:function(t){e.$set(n.form.conditions,"type",t)}}},[a.map((function(e,n){return t("el-radio",{key:n,attrs:{label:e.label}},[e.name])}))]),function(){switch(n.form.conditions.type){case 2:return t("div",{class:"le-condition"},[t("span",{class:"le-title"},["累计消费金额"]),t("el-input",{class:"le-small--input",model:{value:n.form.conditions.buy_amount,callback:function(t){e.$set(n.form.conditions,"buy_amount",t)}}},[t("template",{slot:"append"},["元"])])]);case 3:return t("div",{class:"le-condition"},[t("span",{class:"le-title"},["累计消费次数"]),t("el-input",{class:"le-small--input",model:{value:n.form.conditions.buy_number,callback:function(t){e.$set(n.form.conditions,"buy_number",t)}}},[t("template",{slot:"append"},["次"])])]);case 5:return t("div",{class:"le-condition"},[t("el-button",{attrs:{plain:!0},on:{click:function(){n.$refs.goodsSelect.open()}}},["选择商品"]),t("goods-select",{ref:"goodsSelect",attrs:{type:"checkbox",limit:1e3,"is-tips":!1,"select-style":{backgroundColor:"#ffffff"}},model:{value:n.form.conditions.goods_list,callback:function(t){e.$set(n.form.conditions,"goods_list",t)}}}),t("el-table",{attrs:{"max-height":368,data:n.form.conditions.goods_list,"row-class-name":"le-table-row"},class:"le-goods--table"},[t("el-table-column",{attrs:{label:"商品"},scopedSlots:{default:function(e){return t("div",{class:"flex"},[t("el-image",{class:"le-goods--image",attrs:{src:e.row.slideshow[0]}},[t("div",{slot:"error",class:"image-slot"},[t("i",{class:"el-icon-picture-outline"})])]),t("div",{class:"he-line-2 flex-sub le-goods--name"},[e.row.name])])}}}),t("el-table-column",{attrs:{label:"价格"},scopedSlots:{default:function(e){return"￥".concat(e.row.price)}}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:{default:function(e){return t("el-button",{attrs:{type:"text"},on:{click:function(){return n.form.conditions.goods_list.splice(e.$index,1)}}},["移除"])}}})])])}}()])])]),t("div",{class:"le-card le-card-margin "},[t("div",{class:"le-card-head flex align-center"},[t("span",{class:"le-card-line"}),t("span",["分销下线"])]),t("div",{class:"le-card-body"},[t("el-form-item",{attrs:{label:"成为下线条件"}},[t("el-radio-group",{model:{value:n.form.bind_way,callback:function(t){e.$set(n.form,"bind_way",t)}}},[t("el-radio",{attrs:{label:1}},["首次点击分享链接"]),t("el-radio",{attrs:{label:2}},["首次付款"])])]),t("el-form-item",{attrs:{label:"绑定关系模式"}},[t("el-radio-group",{model:{value:n.form.bind_type,callback:function(t){e.$set(n.form,"bind_type",t)}}},[t("el-radio",{attrs:{label:1}},["永久绑定模式"]),t("el-radio",{attrs:{label:2}},["保护期模式"])])]),function(){if(2===n.form.bind_type)return t("el-form-item",{attrs:{label:"保护期","label-width":"250px",prop:"bind_days"},class:"le-noleabel"},[t("el-input",{class:"le-small--input",model:{value:n.form.bind_days,callback:function(t){e.$set(n.form,"bind_days",t)}}},[t("template",{slot:"append"},["天"])]),t("span",{class:"le-title"},["之后解除关系"])])}()])]),t("div",{class:"le-card le-card-margin "},[t("div",{class:"le-card-head flex align-center"},[t("span",{class:"le-card-line"}),t("span",["分销协议"])]),t("div",{class:"le-card-body"},[t("el-form-item",{attrs:{label:"是否启用协议"}},[t("el-radio-group",{model:{value:n.form.use_agreement,callback:function(t){e.$set(n.form,"use_agreement",t)}}},[t("el-radio",{attrs:{label:1}},["启用"]),t("el-radio",{attrs:{label:0}},["禁用"])]),t("div",{class:"le-prompt-text"},["启用后将显示在分销商招募令页面"])]),function(){if(1===n.form.use_agreement)return[[t("el-form-item",{attrs:{label:"协议标题"}},[t("el-input",{attrs:{maxlength:10,"show-word-limit":!0,placeholder:"请输入协议标题"},model:{value:n.form.agreement_title,callback:function(t){e.$set(n.form,"agreement_title",t)}}})])],[t("el-form-item",{attrs:{label:"协议内容"}},[t("el-input",{attrs:{type:"textarea",placeholder:"请输入协议内容",rows:"15"},model:{value:n.form.agreement_content,callback:function(t){e.$set(n.form,"agreement_content",t)}}})])]]}()])])]),t("div",{class:"le-cardpin"},[t("el-button",{attrs:{type:"primary",disabled:n.disabled,loading:n.loading&&!n.disabled},on:{click:n.submit}},["保存"])])])}},m=f,p=(n("b783"),n("2877")),b=Object(p["a"])(m,a,o,!1,null,"2b9b7e20",null);t["default"]=b.exports},8236:function(e,t,n){"use strict";n("ac1f"),n("5319"),n("159b"),n("b64b");t["a"]={data:function(){},methods:{replaceQuery:function(){var e=Object.assign({},this.$route.query,this.form);this.$router.replace({query:e})},getQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["page"],t=this.$route.query;return Object.keys(t).forEach((function(n){for(var a=0;a<e.length;a++)e[a]===n&&(isNaN(t[n])?t[n]=1:t[n]=parseInt(t[n]))})),Object.assign(this.form,t)},emptyStatus:function(){this.$router.replace({query:{}})}},filters:{}}},b783:function(e,t,n){"use strict";n("2ca4")}}]);
//# sourceMappingURL=promoter-setup.c9163c6c.js.map