(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/about/detail"],{"168a":function(t,n,e){},9762:function(t,n,e){"use strict";e.r(n);var a=e("a4c6"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},a4c6:function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("4795")),o=e("4529"),r=e("119a");function u(t){return t&&t.__esModule?t:{default:t}}function c(t,n,e,a,i,o,r){try{var u=t[o](r),c=u.value}catch(f){return void e(f)}u.done?n(c):Promise.resolve(c).then(a,i)}function f(t){return function(){var n=this,e=arguments;return new Promise((function(a,i){var o=t.apply(n,e);function r(t){c(o,a,i,r,u,"next",t)}function u(t){c(o,a,i,r,u,"throw",t)}r(void 0)}))}}var l=function(){e.e("components/empty").then(function(){return resolve(e("e4d2"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/rf-image/rf-image").then(function(){return resolve(e("4e9d"))}.bind(null,e)).catch(e.oe)},s={components:{empty:l,rfImage:d},data:function(){return{detail:{},title:null,loading:!0}},onLoad:function(t){this.initData(t)},methods:{initData:function(n){this.title=n.title,t.setNavigationBarTitle({title:n.title}),this.getConfigList(n.field)},getConfigList:function(n){var e=this;return f(i.default.mark((function u(){var c;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(-1===n.indexOf("protocol")){i.next=5;break}return i.next=3,e.$get("".concat(o.configList),{field:n}).then((function(t){e.loading=!1,e.detail=t.data})).catch((function(t){e.loading=!1,a("log",t," at pages\\about\\detail.vue:80")}));case 3:i.next=10;break;case 5:if(c=t.getStorageSync("userInfo"),c){i.next=8;break}return i.abrupt("return");case 8:return i.next=10,e.$get("".concat(r.merchantView),{id:c.merchant_id,field:n}).then((function(t){e.loading=!1,e.detail=t.data})).catch((function(t){e.loading=!1,a("log",t," at pages\\about\\detail.vue:94")}));case 10:case"end":return i.stop()}}),u)})))()}}};n.default=s}).call(this,e("6e42")["default"],e("0de9")["default"])},cbe9:function(t,n,e){"use strict";e.r(n);var a=e("ef49"),i=e("9762");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("d2f1");var r,u=e("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=c.exports},d2f1:function(t,n,e){"use strict";var a=e("168a"),i=e.n(a);i.a},ef49:function(t,n,e){"use strict";var a={"rf-image":function(){return e.e("components/rf-image/rf-image").then(e.bind(null,"4e9d"))},"rf-loading":function(){return e.e("components/rf-loading/rf-loading").then(e.bind(null,"ad54"))}},i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}))},efc1:function(t,n,e){"use strict";(function(t){e("1026"),e("921b");a(e("66fd"));var n=a(e("cbe9"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["efc1","common/runtime","common/vendor"]]]);