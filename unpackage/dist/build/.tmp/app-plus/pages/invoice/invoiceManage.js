(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invoice/invoiceManage"],{"1e34":function(e,t,n){},"499e":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(n("4795")),r=n("1c7a");n("4529");function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n,a,i,r,c){try{var u=e[r](c),o=u.value}catch(f){return void n(f)}u.done?t(o):Promise.resolve(o).then(a,i)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var r=e.apply(t,n);function c(e){s(r,a,i,c,u,"next",e)}function u(e){s(r,a,i,c,u,"throw",e)}c(void 0)}))}}var d={data:function(){return{invoiceData:{type:2,title:"",duty_paragraph:"",is_default:""},invoiceType:[{name:"公司",value:1},{name:"个人",value:2}]}},onLoad:function(e){this.initData(e)},methods:{initData:function(t){var n=this;return l(i.default.mark((function a(){var r;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r="新增发票","edit"!==t.type){a.next=5;break}return r="编辑发票",a.next=5,n.getInvoiceDetail(t.id);case 5:n.manageType=t.type,e.setNavigationBarTitle({title:r});case 7:case"end":return a.stop()}}),a)})))()},getInvoiceDetail:function(e){var t=this;return l(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$get("".concat(r.invoiceDetail),{id:e}).then(function(){var e=l(i.default.mark((function e(n){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.invoiceData=n.data;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){a("log",e," at pages\\invoice\\invoiceManage.vue:79")}));case 2:case"end":return n.stop()}}),n)})))()},handleTitleChange:function(e){this.invoiceData.title=e.detail.value},handleInvoiceTypeChange:function(e){this.invoiceData.type=e.detail.value},handleDutyParagraphChange:function(e){this.invoiceData.duty_paragraph=e.detail.value},switchChange:function(e){this.invoiceData.is_default=e.detail.value?"1":"0"},confirm:function(){var e=this.invoiceData;e.title?1!==e.type||e.duty_paragraph?"edit"===this.manageType?this.handleInvoiceUpdate(e):this.handleInvoiceCreate(e):this.$api.msg("请填写发票税号"):this.$api.msg("请填写发票抬头")},handleInvoiceUpdate:function(t){var n=this;return l(i.default.mark((function c(){return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,n.$put("".concat(r.invoiceUpdate,"?id=").concat(t.id),{type:t.type,title:t.title,duty_paragraph:t.duty_paragraph,is_default:t.is_default}).then((function(t){n.$api.msg("恭喜您, 发票修改成功！"),e.navigateBack({url:"/pages/invoice/invoice"})})).catch((function(e){a("log",e," at pages\\invoice\\invoiceManage.vue:125")}));case 2:case"end":return i.stop()}}),c)})))()},handleInvoiceCreate:function(t){var n=this;return l(i.default.mark((function c(){return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,n.$post("".concat(r.invoiceCreate),o({},t)).then((function(t){n.$api.msg("恭喜您, 发票添加成功！"),e.navigateBack({url:"/pages/invoice/invoice"})})).catch((function(e){a("log",e," at pages\\invoice\\invoiceManage.vue:137")}));case 2:case"end":return i.stop()}}),c)})))()}}};t.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},5633:function(e,t,n){"use strict";n.r(t);var a=n("ece4"),i=n("b878");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("d47d");var c,u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=o.exports},b878:function(e,t,n){"use strict";n.r(t);var a=n("499e"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},d184:function(e,t,n){"use strict";(function(e){n("1026"),n("921b");a(n("66fd"));var t=a(n("5633"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},d47d:function(e,t,n){"use strict";var a=n("1e34"),i=n.n(a);i.a},ece4:function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement,n=(e._self._c,parseInt(e.invoiceData.type,10));e.$mp.data=Object.assign({},{$root:{m0:n}})},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))}},[["d184","common/runtime","common/vendor"]]]);