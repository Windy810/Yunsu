(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupon-detail"],{"0b14":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.list[data-v-1c167cde]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;position:relative}.sub-list[data-v-1c167cde]{width:100%;padding-top:%?10?%}.sub-list .tis[data-v-1c167cde]{width:100%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%}.sub-list .row[data-v-1c167cde]{width:92%;height:24vw;margin:%?10?% auto;border-radius:%?8?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;overflow:hidden;z-index:4;border:0}.sub-list .row .menu[data-v-1c167cde]{position:absolute;width:28%;height:100%;right:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#47885e;color:#fff;z-index:2}.sub-list .row .menu .icon[data-v-1c167cde]{color:#fff;font-size:%?50?%}.sub-list .row .carrier[data-v-1c167cde]{background-color:#fff;position:absolute;width:100%;padding:0 0;height:100%;z-index:3;display:-webkit-box;display:-webkit-flex;display:flex}.sub-list .row .carrier .left[data-v-1c167cde]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative}.sub-list .row .carrier .left .title[data-v-1c167cde]{padding-top:3vw;width:90%;margin:0 5%;font-size:%?36?%}.sub-list .row .carrier .left .title .cell-icon[data-v-1c167cde]{display:inline-block;height:%?32?%;margin-top:%?15?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.sub-list .row .carrier .left .title .cell-icon.hb[data-v-1c167cde]{background:#ffaa0e}.sub-list .row .carrier .left .title .cell-icon.lpk[data-v-1c167cde]{background:#3ab54a}.sub-list .row .carrier .left .term[data-v-1c167cde]{width:90%;margin:0 5%;font-size:%?26?%;color:#999}.sub-list .row .carrier .left .usage[data-v-1c167cde]{width:90%;margin:0 5%;font-size:%?26?%;color:#909399}.sub-list .row .carrier .left .gap-top[data-v-1c167cde], .sub-list .row .carrier .left .gap-bottom[data-v-1c167cde]{position:absolute;width:%?20?%;height:%?20?%;right:%?-10?%;border-radius:100%;background-color:#f5f5f5}.sub-list .row .carrier .left .gap-top[data-v-1c167cde]{top:%?-10?%}.sub-list .row .carrier .left .gap-bottom[data-v-1c167cde]{bottom:%?-10?%}.sub-list .row .carrier .left .used[data-v-1c167cde]{position:absolute;right:%?10?%;bottom:%?5?%;font-size:%?24?%;color:#47885e}.sub-list .row .carrier .left .shixiao[data-v-1c167cde]{position:absolute;right:0;top:%?-20?%;font-size:%?150?%;z-index:6;color:hsla(0,0%,60%,.2)}.sub-list .row .carrier .right[data-v-1c167cde]{width:28%;color:#fff;text-align:center;background:-webkit-linear-gradient(left,rgba(250,67,106,.72),rgba(250,67,106,.64));background:linear-gradient(90deg,rgba(250,67,106,.72),rgba(250,67,106,.64))}.sub-list .row .carrier .right .ticket[data-v-1c167cde], .sub-list .row .carrier .right .criteria[data-v-1c167cde]{width:100%}.sub-list .row .carrier .right .ticket[data-v-1c167cde]{padding-top:%?20?%}.sub-list .row .carrier .right .ticket .num[data-v-1c167cde]{font-size:%?44?%;font-weight:600;line-height:1.2}.sub-list .row .carrier .right .ticket .unit[data-v-1c167cde]{font-size:%?24?%}.sub-list .row .carrier .right .criteria[data-v-1c167cde]{font-size:%?28?%}.sub-list .row .carrier .right .btn-group[data-v-1c167cde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.sub-list .row .carrier .right .btn-group .use[data-v-1c167cde]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:0 %?6?%;height:%?40?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;background-color:#fff;color:#47885e;border-radius:%?40?%;padding:0 %?4?%}.drawer .close .btn[data-v-1c167cde]{width:%?320?%;height:%?76?%;line-height:%?76?%;border-radius:50px;margin-top:%?70?%;background:#9dd181;color:#fff;font-size:%?32?%;border:none}.drawer .close .btn[data-v-1c167cde]:after{border-radius:100px}',""]),t.exports=e},"4b67":function(t,e,i){"use strict";var a={"uni-drawer":i("a3d2").default,"uni-list":i("f02f").default,"uni-list-item":i("646a").default,"rf-loading":i("ad54").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"coupon-detail",style:{backgroundColor:0===t.couponList.length?"#fff":""}},[i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"sub-list valid",style:{marginTop:3===t.state?"40upx":0}},t._l(t.couponList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"row"},[i("v-uni-view",{staticClass:"carrier"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"in1line title"},[i("v-uni-text",{staticClass:"cell-icon"},[t._v(t._s(2===parseInt(e.range_type,10)?"限":"全"))]),t._v(t._s(e.title))],1),2!==t.state?i("v-uni-view",{staticClass:"term"},[t._v(t._s(t._f("time")(e.start_time))+" ~ "+t._s(t._f("time")(e.end_time)))]):i("v-uni-view",{staticClass:"term"},[t._v("使用时间："+t._s(t._f("timeFull")(e.use_time)))]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:3===t.state,expression:"state === 3"}],staticClass:"icon shixiao"}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===t.state,expression:"state === 2"}],staticClass:"used"},[t._v("已使用")]),i("v-uni-view",{staticClass:"usage"},[t._v(t._s(0===parseInt(e.max_fetch,10)?"不限":"每人限领 "+e.max_fetch)+"\n\t\t\t\t\t\t\t\t总领取 "+t._s(e.get_count)),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:e.percentage,expression:"row.percentage"}]},[t._v("剩余"+t._s(e.percentage)+"%")])],1)],1),i("v-uni-view",{staticClass:"right",class:{invalid:1!==t.state}},[i("v-uni-view",{staticClass:"ticket"},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(e.money?"￥"+e.money:e.discount+"折"))])],1),i("v-uni-view",{staticClass:"criteria"},[t._v("满"+t._s(e.at_least)+"使用")]),i("v-uni-view",{staticClass:"btn-group"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===parseInt(e.range_type,10),expression:"parseInt(row.range_type, 10) === 2"}],staticClass:"use view",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show(e)}}},[t._v("商品")]),i("v-uni-view",{staticClass:"use",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getCoupon(e)}}},[t._v("领取")])],1)],1)],1)],1)})),1)],1),i("uni-drawer",{staticClass:"drawer",attrs:{visible:t.showRight,mode:"right"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDrawer()}}},[t._l(t.currentCoupon.usableProduct,(function(e){return i("uni-list",{key:e.id},[i("uni-list-item",{staticClass:"in1line",attrs:{title:e.name.split("】")[0],note:e.name.split("】")[1]},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/product/product?id="+e.id)}}})],1)})),i("v-uni-view",{staticClass:"close"},[i("v-uni-button",{staticClass:"btn",attrs:{plain:"true",size:"small",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)}}},[t._v("关闭")])],1)],2),0!==t.couponList.length||t.loading?t._e():i("empty",{attrs:{info:"暂无优惠券"}}),t.loading?i("rf-loading"):t._e()],1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},7720:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("3b8d")),r=i("1c7a"),s=a(i("3ed1")),o=a(i("e4d2")),c=a(i("9386")),l=a(i("a3d2")),u=a(i("f02f")),d=a(i("646a")),f={components:{rfLoadMore:s.default,empty:o.default,uniDrawer:l.default,uniList:u.default,uniListItem:d.default},data:function(){return{headerTop:0,typeClass:"valid",theIndex:null,oldIndex:null,state:1,isStop:!1,couponList:[],loadingType:"more",token:null,page:1,showRight:!1,currentCoupon:{},loading:!0}},filters:{time:function(t){return(0,c.default)(1e3*t).format("YYYY-MM-DD")},timeFull:function(t){return(0,c.default)(1e3*t).format("YYYY-MM-DD HH:mm:ss")}},onLoad:function(t){this.initData(t)},methods:{show:function(t){0!==t.usableProduct.length&&(this.currentCoupon=t,this.showRight=!0)},hide:function(){this.showRight=!1},closeDrawer:function(){this.showRight=!1},initData:function(t){this.token=uni.getStorageSync("accessToken")||void 0,this.token,this.getMyCouponDetail(t.id)},getCoupon:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.token){t.next=3;break}return this.$api.msg("请您先登录！"),t.abrupt("return");case 3:if(0!=e.is_get){t.next=6;break}return this.$api.msg("该优惠券暂不可领取！"),t.abrupt("return");case 6:return t.next=8,this.$post("".concat(r.couponReceive),{id:e.id}).then((function(t){i.$api.msg("领取成功"),setTimeout((function(){i.couponList=[],i.getMyCouponDetail(id)}),1500)})).catch((function(t){console.log(t)}));case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),navTo:function(t,e){e?uni.switchTab({url:t}):"login"!==t&&uni.navigateTo({url:t})},getMyCouponDetail:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(r.couponDetail),{id:e}).then((function(t){i.loading=!1,i.couponList.push(t.data)})).catch((function(){i.loading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}};e.default=f},8102:function(t,e,i){"use strict";i.r(e);var a=i("4b67"),n=i("8eef");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("9a9a");var s,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"1c167cde",null,!1,a["a"],s);e["default"]=c.exports},"8eef":function(t,e,i){"use strict";i.r(e);var a=i("7720"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"9a9a":function(t,e,i){"use strict";var a=i("c84e"),n=i.n(a);n.a},c84e:function(t,e,i){var a=i("0b14");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ee0acd98",a,!0,{sourceMap:!1,shadowMode:!1})}}]);