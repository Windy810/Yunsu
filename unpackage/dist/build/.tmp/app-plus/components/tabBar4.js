(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tabBar4"],{"52c1":function(t,n,e){"use strict";e.r(n);var a=e("9392"),i=e("9717");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("f6ab");var c,u=e("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"0939e5b1",null,!1,a["a"],c);n["default"]=o.exports},5600:function(t,n,e){},"6de7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{currentPage:{type:String,default:"index"}},data:function(){return{tabBar:[{url:"index",text:"短模板",imgNormal:"../static/index_change.png",imgClick:"../static/index.png"},{url:"longIndex",text:"长模板",imgNormal:"../static/index_change.png",imgClick:"../static/index.png"},{url:"other",text:"其他示例",imgNormal:"../static/index_change.png",imgClick:"../static/index.png"}]}},created:function(){t.hideTabBar({})},computed:{},methods:{navTo:function(n){if(n.url!==this.currentPage){var e="/pages/".concat(n.url,"/").concat(n.url);t.switchTab({url:e})}else this.$parent.toTop()}}};n.default=e}).call(this,e("6e42")["default"])},9392:function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}))},9717:function(t,n,e){"use strict";e.r(n);var a=e("6de7"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},f6ab:function(t,n,e){"use strict";var a=e("5600"),i=e.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tabBar4-create-component',
    {
        'components/tabBar4-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("52c1"))
        })
    },
    [['components/tabBar4-create-component']]
]);
