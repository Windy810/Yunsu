(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/about/about"],{"18ea":function(t,n,e){},"1fbd":function(t,n,e){"use strict";var i={"uni-list":function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"f02f"))},"uni-list-item":function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"646a"))},"rf-image":function(){return e.e("components/rf-image/rf-image").then(e.bind(null,"4e9d"))}},u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},3457:function(t,n,e){"use strict";var i=e("18ea"),u=e.n(i);u.a},6629:function(t,n,e){"use strict";(function(t){e("1026"),e("921b");i(e("66fd"));var n=i(e("665b"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"665b":function(t,n,e){"use strict";e.r(n);var i=e("1fbd"),u=e("b9c8");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("3457");var r,a=e("f0c5"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=c.exports},"8d86":function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(e("4795")),o=e("119a");function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,i,u,o,r){try{var a=t[o](r),c=a.value}catch(f){return void e(f)}a.done?n(c):Promise.resolve(c).then(i,u)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(i,u){var o=t.apply(n,e);function r(t){a(o,i,u,r,c,"next",t)}function c(t){a(o,i,u,r,c,"throw",t)}r(void 0)}))}}var f=function(){e.e("components/uni-list/uni-list").then(function(){return resolve(e("f02f"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/rf-image/rf-image").then(function(){return resolve(e("4e9d"))}.bind(null,e)).catch(e.oe)},s=function(){e.e("components/uni-list-item/uni-list-item").then(function(){return resolve(e("646a"))}.bind(null,e)).catch(e.oe)},d={data:function(){return{aboutInfo:{},navList:[{title:"商城介绍",url:""},{title:"注册协议",url:"protocol_register"},{title:"充值协议",url:"protocol_recharge"},{title:"隐私协议",url:"protocol_privacy"}]}},components:{uniList:f,uniListItem:s,rfImage:l},onLoad:function(){this.initData()},methods:{initData:function(){this.token=t.getStorageSync("accessToken")||void 0,this.token&&this.getConfigList()},getConfigList:function(){var n=this;return c(u.default.mark((function e(){var r;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.getStorageSync("userInfo"),r){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,n.$get("".concat(o.merchantView),{id:r.merchant_id,field:"web_qrcode"}).then((function(t){n.aboutInfo=t.data})).catch((function(t){i("log",t," at pages\\about\\about.vue:81")}));case 5:case"end":return e.stop()}}),e)})))()},navTo:function(n){t.navigateTo({url:n})}}};n.default=d}).call(this,e("6e42")["default"],e("0de9")["default"])},b9c8:function(t,n,e){"use strict";e.r(n);var i=e("8d86"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a}},[["6629","common/runtime","common/vendor"]]]);