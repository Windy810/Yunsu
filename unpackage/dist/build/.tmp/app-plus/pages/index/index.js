(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1592:function(e,t,n){"use strict";n.r(t);var a=n("4867"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},4867:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("4795")),o=n("f01b"),i=n("119a"),c=n("4529");function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,a,r,o,i){try{var c=e[o](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(a,r)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){s(o,a,r,i,c,"next",e)}function c(e){s(o,a,r,i,c,"throw",e)}i(void 0)}))}}var f=function(){n.e("components/uni-grid/uni-grid").then(function(){return resolve(n("3724"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/uni-grid-item/uni-grid-item").then(function(){return resolve(n("c7e8"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/uni-icons/uni-icons").then(function(){return resolve(n("47d9"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/rf-swipe-dot/rf-swipe-dot").then(function(){return resolve(n("07f1"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/rf-floor-index/rf-floor-index").then(function(){return resolve(n("4cf3"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("components/rf-search-bar/rf-search-bar").then(function(){return resolve(n("3012"))}.bind(null,n)).catch(n.oe)},w=function(){n.e("components/rf-swiper-slide/rf-swiper-slide").then(function(){return resolve(n("0e75"))}.bind(null,n)).catch(n.oe)},x={components:{uniGrid:f,uniIcons:g,uniGridItem:l,rfFloorIndex:p,rfSwipeDot:h,rfSearchBar:v,rfSwiperSlide:w},data:function(){return{titleNViewBackground:"rgb(147, 202, 118)",swiperCurrent:0,swiperLength:3,carouselListt:[{background:"rgb(147, 202, 118)"},{background:"rgb(236, 216, 60)"},{background:"rgb(205, 215, 218)"}],goodsList:[],location:"",current:0,headerShow:!0,carouselList:{},hotProductList:[],recommendProductList:[],guessYouLikeProductList:[],newProductList:[],productCateList:[],brandList:[],config:{},index:0,merchantList:[],announceList:[],loading:!0,hotSearchDefault:"请输入关键字"}},onShow:function(){e.getStorageSync("accessToken")&&e.getStorageSync("cartNum")&&(0==e.getStorageSync("cartNum")?e.removeTabBarBadge({index:3}):e.setTabBarBadge({index:3,text:e.getStorageSync("cartNum").toString()})),this.initData()},onShareAppMessage:function(){return{title:"欢迎来到云溯商城",path:"/pages/index/index"}},onPullDownRefresh:function(){this.getIndexList("refresh")},methods:{bindPickerChange:function(t){e.setStorageSync("merchantId",this.merchantList[t.target.value].id),e.setStorageSync("merchantIndex",t.target.value),this.index=t.target.value,e.removeStorage({key:"userInfo"}),e.removeStorage({key:"accessToken"}),this.getIndexList()},handleDotChange:function(e){this.current=e.detail.current},initData:function(){e.removeStorageSync("cateTop"),this.getIndexList()},navToList:function(t){e.navigateTo({url:"/pages/product/list?cate_id=".concat(t)})},indexTopToDetailPage:function(t,n){var a,r,o;switch(n?(o=n,r=t):(r=t.type,o=t.id),r){case"product_view":a="/pages/product/product?id=".concat(o);break;case"article_view":this.$api.msg("article_view");break;case"coupon_view":a="/pages/coupon/detail?id=".concat(o);break;case"helper_view":this.$api.msg("helper_view");break;case"product_list_for_cate":a="/pages/product/list?cate_id=".concat(o);break;default:break}a&&e.navigateTo({url:a})},toProductList:function(t){e.navigateTo({url:"/pages/product/list?params=".concat(JSON.stringify(t))})},getIndexList:function(t){var n=this;return d(r.default.mark((function a(){return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$get("".concat(o.indexList),{}).then(function(){var a=d(r.default.mark((function a(o){return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.loading=!1,n.getMerchantIndex(),n.getNotifyAnnounceIndex(),"refresh"===t&&e.stopPullDownRefresh(),n.productCateList=o.data.cate,n.carouselList=o.data.adv,n.search=o.data.search,e.setStorageSync("search",n.search),n.hotSearchDefault="请输入关键字"+(o.data.search.hot_search_default?"如:"+o.data.search.hot_search_default:""),e.setStorage({key:"hotSearchDefault",data:o.data.search.hot_search_default}),n.hotProductList=o.data.product_hot,n.recommendProductList=o.data.product_recommend,n.guessYouLikeProductList=o.data.guess_you_like,n.newProductList=o.data.product_new,n.config=o.data.config;case 15:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(){n.loading=!1}));case 2:case"end":return a.stop()}}),a)})))()},getMerchantIndex:function(){var t=this;return d(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$get("".concat(i.merchantIndex),{}).then((function(n){t.merchantList=n.data,t.index=e.getStorageSync("merchantIndex")||n.data.length-1}));case 2:case"end":return n.stop()}}),n)})))()},getNotifyAnnounceIndex:function(){var e=this;return d(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$get("".concat(c.notifyAnnounceIndex),{}).then((function(t){e.announceList=t.data}));case 2:case"end":return t.stop()}}),t)})))()},loadData:function(){var e=this;return d(r.default.mark((function t(){var n,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.json("carouselListt");case 2:return n=t.sent,e.titleNViewBackground=n[0].background,e.swiperLength=n.length,e.carouselListt=n,t.next=8,e.$api.json("goodsList");case 8:a=t.sent,e.goodsList=a||[];case 10:case"end":return t.stop()}}),t)})))()},swiperChange:function(e){var t=e.detail.current;this.swiperCurrent=t,this.titleNViewBackground=this.carouselListt[t].background},navToCategoryPage:function(t){a("log","事件执行了"," at pages\\index\\index.vue:437"),e.navigateTo({url:'../category/category?id=2&name="云蔬菜"'})},navToCoursePage:function(){a("log","事件执行了"," at pages\\index\\index.vue:446"),e.navigateTo({url:"../course/index"})},navToDiscussPage:function(){a("log","事件执行了"," at pages\\index\\index.vue:452"),e.navigateTo({url:"../discuss/index"})},navToTrvelPage:function(){a("log","事件执行了"," at pages\\index\\index.vue:458"),e.navigateTo({url:"../other/other"})},navToGamePage:function(t){e.navigateTo({url:"/pages/webview/webview"})},toSearch:function(){e.navigateTo({url:"/pages/search/search?search=".concat(JSON.stringify(this.search))})},toNotice:function(){e.navigateTo({url:"/pages/notice/notice"})},toCategory:function(){e.navigateTo({url:"/pages/category/category"})},navToDetailPage:function(t){var n=t.id;e.navigateTo({url:"/pages/product/product?id=".concat(n)})}},onNavigationBarSearchInputClicked:function(){var e=d(r.default.mark((function e(t){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$api.msg("点击了搜索框");case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onNavigationBarButtonTap:function(t){var n=this,r=t.index;if(0===r)e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(n.location=e,a("log",e.address," at pages\\index\\index.vue:511"),n.$api.msg("定位成功"))},fail:function(e){a("log",e," at pages\\index\\index.vue:516"),n.$api.msg("获取定位失败")}});else if(1===r){var o=getCurrentPages(),i=o[o.length-1],c=i.$getAppWebview();c.hideTitleNViewButtonRedDot({index:r}),e.navigateTo({url:"/pages/notice/notice"})}}};t.default=x}).call(this,n("6e42")["default"],n("0de9")["default"])},"5e01":function(e,t,n){"use strict";n.r(t);var a=n("7d02"),r=n("1592");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("7e8f");var i,c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=u.exports},"7d02":function(e,t,n){"use strict";var a={"rf-search-bar":function(){return n.e("components/rf-search-bar/rf-search-bar").then(n.bind(null,"3012"))}},r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}))},"7e8f":function(e,t,n){"use strict";var a=n("9237"),r=n.n(a);r.a},9237:function(e,t,n){},d9d7:function(e,t,n){"use strict";(function(e){n("1026"),n("921b");a(n("66fd"));var t=a(n("5e01"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["d9d7","common/runtime","common/vendor"]]]);