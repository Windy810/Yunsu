(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/detail"],{"218d":function(e,t,r){"use strict";r.r(t);var n=r("9e42"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},2557:function(e,t,r){},2644:function(e,t,r){"use strict";r.r(t);var n=r("e64e"),i=r("218d");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("5b7c");var u,o=r("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=c.exports},3257:function(e,t,r){"use strict";(function(e){r("1026"),r("921b");n(r("66fd"));var t=n(r("2644"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},"5b7c":function(e,t,r){"use strict";var n=r("2557"),i=r.n(n);i.a},"9e42":function(e,t,r){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r("4795")),a=o(r("9386")),u=r("1c7a");function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r,n,i,a,u){try{var o=e[a](u),c=o.value}catch(l){return void r(l)}o.done?t(c):Promise.resolve(c).then(n,i)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function u(e){s(a,n,i,u,o,"next",e)}function o(e){s(a,n,i,u,o,"throw",e)}u(void 0)}))}}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(){r.e("components/empty").then(function(){return resolve(r("e4d2"))}.bind(null,r)).catch(r.oe)},p=function(){r.e("components/mpvue-picker/mpvuePicker").then(function(){return resolve(r("0d13"))}.bind(null,r)).catch(r.oe)},h=function(){r.e("components/rf-image/rf-image").then(function(){return resolve(r("4e9d"))}.bind(null,r)).catch(r.oe)},m={components:{mpvuePicker:p,rfImage:h,empty:v},data:function(){return{orderDetail:{}}},computed:{orderTimeLine:function(){var e=[];return 0!=this.orderDetail.created_at&&e.push({time:this.orderDetail.created_at,value:"订单创建"}),this.orderDetail.close_time<((new Date).getTime()/1e3&&0!=this.orderDetail.pay_time)&&e.push({time:this.orderDetail.close_time,value:"未付款订单关闭时间"}),0!=this.orderDetail.pay_time&&e.push({time:this.orderDetail.pay_time,value:"订单支付"}),0!=this.orderDetail.shipping_time&&e.push({time:this.orderDetail.shipping_time,value:"买家要求发货"}),0!=this.orderDetail.consign_time&&e.push({time:this.orderDetail.consign_time,value:"卖家发货"}),0!=this.orderDetail.sign_time&&e.push({time:this.orderDetail.sign_time,value:"买家确认收货"}),0!=this.orderDetail.finish_time&&e.push({time:this.orderDetail.finish_time,value:"订单完成"}),e}},filters:d({time:function(e){return 0==e?"暂未操作":(0,a.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(e){var t=null,r=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];return r.forEach((function(r){r.key==e&&(t=r.value)})),t},filterProductStatus:function(e){var t=null;if(0!==parseInt(e.refund_status,10)){var r=[{key:1,value:"退款申请"},{key:2,value:"等待退货"},{key:3,value:"等待确认收货"},{key:4,value:"等待确认退款"},{key:5,value:"同意退款"},{key:-1,value:"退款已拒绝"},{key:-2,value:"退款已关闭"},{key:-3,value:"退款不通过"}];r.forEach((function(r){r.key==e.refund_status&&(t=r.value)}))}else if(4===parseInt(e.order_status,10)){var n=[{key:0,value:"未评价"},{key:1,value:"已评价"},{key:2,value:"已追评"}];n.forEach((function(r){r.key==e.is_evaluate&&(t=r.value)}))}else{var i=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"已完成"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];i.forEach((function(r){r.key==e.order_status&&(t=r.value)}))}return t},filterShippingType:function(e){var t=["","物流配送","买家自提","本地配送"];return t[parseInt(e,10)]}},"filterShippingType",(function(e){var t=["","物流配送","买家自提","本地配送"];return t[parseInt(e,10)]})),onLoad:function(e){this.initData(e)},methods:{navTo:function(t){e.navigateTo({url:t})},getOrderFreightFee:function(){var e=this;return f(i.default.mark((function t(){var r;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={},e.cartIds?(r.type="cart",r.data=e.cartIds):(r.data=e.product,r.type="buy_now"),r.address_id=e.addressData.id,r.company_id=e.currentCompany.value,t.next=6,e.$get("".concat(orderFreightFee),l({},r)).then((function(t){e.shippingMoney=t.data.shipping_money})).catch((function(e){n("log",e," at pages\\order\\detail.vue:309")}));case 6:case"end":return t.stop()}}),t)})))()},initData:function(e){this.getOrderDetail(e.id)},getOrderDetail:function(e){var t=this;return f(i.default.mark((function r(){return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$get("".concat(u.orderDetail),{id:e}).then((function(e){t.orderDetail=e.data})).catch((function(e){n("log",e," at pages\\order\\detail.vue:334")}));case 2:case"end":return r.stop()}}),r)})))()}}};t.default=m}).call(this,r("6e42")["default"],r("0de9")["default"])},e64e:function(e,t,r){"use strict";var n={"rf-image":function(){return r.e("components/rf-image/rf-image").then(r.bind(null,"4e9d"))}},i=function(){var e=this,t=e.$createElement,r=(e._self._c,e._f("orderStatusFilter")(e.orderDetail.order_status)),n=e.__map(e.orderDetail.product,(function(t,r){var n=e._f("filterProductStatus")(t);return{$orig:e.__get_orig(t),f1:n}})),i=e._f("filterShippingType")(e.orderDetail.shipping_type),a=parseInt(e.orderDetail.invoice&&e.orderDetail.invoice.type,10),u=e.__map(e.orderTimeLine,(function(t,r){var n=e._f("time")(t.time);return{$orig:e.__get_orig(t),f3:n}}));e.$mp.data=Object.assign({},{$root:{f0:r,l0:n,f2:i,m0:a,l1:u}})},a=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}))}},[["3257","common/runtime","common/vendor"]]]);