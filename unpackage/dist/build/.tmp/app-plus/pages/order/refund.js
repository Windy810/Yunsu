(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/refund"],{"1e98":function(e,t,n){},"29b5":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("4795")),o=u(n("9386")),a=n("1c7a"),i=n("f01b");function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return f(e)||d(e)||l(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function f(e){if(Array.isArray(e))return h(e)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){m(a,r,o,i,u,"next",e)}function u(e){m(a,r,o,i,u,"throw",e)}i(void 0)}))}}var y=function(){n.e("components/rf-load-more/rf-load-more").then(function(){return resolve(n("3ed1"))}.bind(null,n)).catch(n.oe)},O=function(){n.e("components/empty").then(function(){return resolve(n("e4d2"))}.bind(null,n)).catch(n.oe)},w=function(){n.e("components/rf-count-down/rf-count-down").then(function(){return resolve(n("3289"))}.bind(null,n)).catch(n.oe)},k={components:{rfLoadMore:y,empty:O,rfCountDown:w},data:function(){return{loadingType:"more",orderList:[],page:1,loading:!0}},computed:{second:function(){return function(e){return Math.floor(900-(new Date/1e3-e))}}},filters:{time:function(e){return(0,o.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(e){var t=null,n=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];return n.forEach((function(n){n.key==e&&(t=n.value)})),t}},onShow:function(){this.initData()},onLoad:function(e){this.tabCurrentIndex=+e.state+1},onPullDownRefresh:function(){this.page=1,this.orderList.length=0,this.getOrderList("refresh")},onReachBottom:function(){this.page++,this.getOrderList()},methods:{timeUp:function(e){this.handleOrderClose(e.id)},handleOrderOperation:function(e,t,n){switch(t){case"detail":this.toOrderDetail(e.id);break;case"evaluation":this.handleOrderEvaluation(e,"evaluation");break;case"close":this.handleOrderClose(e.id);break;case"delete":this.handleOrderDelete(e.id);break;case"shipping":this.navTo("/pages/order/shipping?id=".concat(e.id));break;case"refund":this.handleOrderEvaluation(e,"refund",n);break;case"delivery":this.handleOrderTakeDelivery(e.id);break}},navTo:function(t){e.navigateTo({url:t})},handleOrderEvaluation:function(t,n,r){e.navigateTo({url:"/pages/order/orderItem?id=".concat(t.id)})},toOrderDetail:function(t){e.navigateTo({url:"/pages/order/detail?id=".concat(t)})},handleOrderClose:function(e){var t=this;return b(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$get("".concat(i.orderClose),{id:e}).then((function(){t.page=1,t.orderList.length=0,t.getOrderList()}));case 2:case"end":return n.stop()}}),n)})))()},handleOrderDelete:function(e){var t=this;return b(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$del("".concat(a.orderDelete,"?id=").concat(e),{}).then((function(){t.$api.msg("订单删除成功"),setTimeout((function(){t.page=1,t.orderList.length=0,t.getOrderList()}),500)}));case 2:case"end":return n.stop()}}),n)})))()},handleOrderTakeDelivery:function(e){var t=this;return b(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$get("".concat(a.orderTakeDelivery),{id:e}).then((function(){t.page=1,t.orderList.length=0,t.getOrderList()}));case 2:case"end":return n.stop()}}),n)})))()},handlePayment:function(t){return b(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.navigateTo({url:"/pages/money/pay?id=".concat(t.id)});case 1:case"end":return n.stop()}}),n)})))()},initData:function(){this.orderList.length=0,this.page=1,this.getOrderList()},getOrderList:function(t){var n=this;return b(r.default.mark((function o(){var i;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={},i.page=n.page,i.synthesize_status=-1,r.next=5,n.$get("".concat(a.orderList),v({},i)).then((function(r){n.loading=!1,"refresh"===t&&e.stopPullDownRefresh(),n.loadingType=10===r.data.length?"more":"nomore",n.orderList=[].concat(c(n.orderList),c(r.data))})).catch((function(){n.loading=!1,"refresh"===t&&e.stopPullDownRefresh()}));case 5:case"end":return r.stop()}}),o)})))()},getMoreOrderList:function(){this.page++,this.getOrderList()}}};t.default=k}).call(this,n("6e42")["default"])},"2a59":function(e,t,n){"use strict";n.r(t);var r=n("35b4"),o=n("64a0");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("97e4");var i,u=n("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=c.exports},"35b4":function(e,t,n){"use strict";var r={"rf-count-down":function(){return n.e("components/rf-count-down/rf-count-down").then(n.bind(null,"3289"))},"rf-load-more":function(){return n.e("components/rf-load-more/rf-load-more").then(n.bind(null,"3ed1"))},"rf-loading":function(){return n.e("components/rf-loading/rf-loading").then(n.bind(null,"ad54"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.orderList,(function(t,n){var r=parseInt(t.order_status,10),o=e._f("orderStatusFilter")(t.order_status),a=e.second(t.created_at);return{$orig:e.__get_orig(t),m0:r,f0:o,m1:a}})));e.$mp.data=Object.assign({},{$root:{l0:n}})},a=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))},"64a0":function(e,t,n){"use strict";n.r(t);var r=n("29b5"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},"97e4":function(e,t,n){"use strict";var r=n("1e98"),o=n.n(r);o.a},ce5a:function(e,t,n){"use strict";(function(e){n("1026"),n("921b");r(n("66fd"));var t=r(n("2a59"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["ce5a","common/runtime","common/vendor"]]]);