(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"0528":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.rf-floor-index .banner[data-v-f6022edc]{width:92%;margin:%?20?% 4% 0}.rf-floor-index .banner uni-image[data-v-f6022edc]{width:100%;height:25vw;border-radius:%?20?%;box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.05)}.rf-floor-index .f-header[data-v-f6022edc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?40?% 20% %?20?%}.rf-floor-index .f-header .line[data-v-f6022edc]{border-bottom:%?1?% solid rgba(0,0,0,.15);width:%?120?%}.rf-floor-index .f-header .name[data-v-f6022edc]{margin:0 %?20?%}.rf-floor-index .hot-floor[data-v-f6022edc]{width:100%;overflow:hidden;margin-bottom:%?20?%}.rf-floor-index .hot-floor .floor-img-box[data-v-f6022edc]{width:100%;height:%?320?%;position:relative}.rf-floor-index .hot-floor .floor-img-box[data-v-f6022edc]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:-webkit-linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8);background:linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8)}.rf-floor-index .hot-floor .floor-img[data-v-f6022edc]{width:100%;height:100%}.rf-floor-index .hot-floor .floor-list[data-v-f6022edc]{white-space:nowrap;padding:%?20?%;padding-right:%?50?%;border-radius:%?6?%;margin-top:%?-140?%;margin-left:%?30?%;background:#fff;box-shadow:1px 1px 5px rgba(0,0,0,.2);position:relative;z-index:1}.rf-floor-index .hot-floor .scoll-wrapper[data-v-f6022edc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.rf-floor-index .hot-floor .floor-item[data-v-f6022edc]{width:%?180?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.rf-floor-index .hot-floor .floor-item uni-image[data-v-f6022edc]{width:%?180?%;height:%?180?%;border-radius:%?6?%}.rf-floor-index .hot-floor .floor-item .price[data-v-f6022edc]{color:#9dd181}.rf-floor-index .hot-floor .more[data-v-f6022edc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;width:%?180?%;height:%?180?%;border-radius:%?6?%;background:#f3f3f3;font-size:%?28?%;color:#909399}.rf-floor-index .hot-floor .more uni-text[data-v-f6022edc]:first-child{margin-bottom:%?4?%}',""]),t.exports=e},1993:function(t,e,i){"use strict";var a=i("c049"),n=i.n(a);n.a},"242a":function(t,e,i){"use strict";i.r(e);var a=i("29f3"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"29f3":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("6b54"),i("386d"),i("96cf");var n=a(i("3b8d")),r=i("f01b"),o=a(i("3012")),c=i("4529"),s=a(i("e4d2")),l={components:{rfSearchBar:o.default,empty:s.default},data:function(){return{hotSearchDefault:"请输入关键字",fList:[],sList:[],tList:[],showCategoryIndex:4,categoryList:[],search:{},cateTop:{},animation:"animation-slide-right",loading:!0}},onShow:function(){this.initData()},methods:{navToList:function(t){uni.navigateTo({url:"/pages/product/list?cate_id=".concat(t)})},initData:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.search=uni.getStorageSync("search")||{},this.hotSearchDefault="请输入关键字 "+(this.search.hot_search_default?"如: "+this.search.hot_search_default:""),this.getProductCate(),this.initTabBarBadge();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),initTabBarBadge:function(){if(uni.getStorageSync("accessToken")&&uni.getStorageSync("cartNum")){if(0==uni.getStorageSync("cartNum"))return void uni.removeTabBarBadge({index:3});uni.setTabBarBadge({index:3,text:uni.getStorageSync("cartNum").toString()})}},getProductCate:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.fList=[],this.sList=[],this.tList=[],t.next=5,this.$get("".concat(r.productCate)).then((function(t){e.loading=!1,e.cateTop=uni.getStorageSync("cateTop"),e.cateTop||e.getAdvList(),e.categoryList=t.data,console.log(t.data);for(var i=0;i<t.data.length;i++)if(t.data[i].child.length>0){e.showCategoryIndex=i;break}})).catch((function(){e.loading=!1}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getAdvList:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(c.advList),{location:"cate_top"}).then((function(t){e.cateTop=t.data.cate_top[0]}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),showCategory:function(t){var e=this;this.showCategoryIndex=t,this.animation="animation-slide-right",setTimeout((function(){e.animation=""}),1e3)},toSearch:function(){uni.navigateTo({url:"/pages/search/search?search=".concat(JSON.stringify(this.search))})},toIndex:function(){uni.reLaunch({url:"/pages/index/index"})},indexTopToDetailPage:function(t,e){if(t&&e){switch(t){case"product_view":e="/pages/product/product?id=".concat(e);break;case"article_view":this.$api.msg("article_view");break;case"coupon_view":e="/pages/coupon/detail?id=".concat(e);break;case"helper_view":this.$api.msg("helper_view");break;case"product_list_for_cate":e="/pages/product/list?cate_id=".concat(e);break;default:break}uni.navigateTo({url:e})}}}};e.default=l},"2ae2":function(t,e,i){"use strict";var a=i("8c4e"),n=i.n(a);n.a},3012:function(t,e,i){"use strict";i.r(e);var a=i("6b99"),n=i("8817");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("dce6");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"d8c59316",null,!1,a["a"],o);e["default"]=s.exports},"35b4":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("83d7")),r={components:{rfRecommend:n.default},props:{src:{type:String,default:"empty"},isRecommendShow:{type:Boolean,default:!0},info:{type:String,default:""},list:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{}};e.default=r},"3c13":function(t,e,i){"use strict";i.r(e);var a=i("ae48"),n=i("242a");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("2ae2");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"4fef992f",null,!1,a["a"],o);e["default"]=s.exports},4529:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.notifyAnnounceView=e.notifyAnnounceIndex=e.wechatConfig=e.configList=e.payCreate=e.advList=e.transmitCreate=e.collectDel=e.collectCreate=e.provinceList=void 0;var a="/tiny-shop/v1/common/provinces/index";e.provinceList=a;var n="/tiny-shop/v1/common/collect/create";e.collectCreate=n;var r="/tiny-shop/v1/common/collect/delete";e.collectDel=r;var o="/tiny-shop/v1/common/transmit/create";e.transmitCreate=o;var c="/tiny-shop/v1/common/adv/index";e.advList=c;var s="/tiny-shop/v1/common/config/index";e.configList=s;var l="/tiny-shop/v1/common/pay/create";e.payCreate=l;var d="/tiny-shop/v1/third-party/wechat-js-sdk";e.wechatConfig=d;var f="/tiny-shop/v1/common/notify-announce/index";e.notifyAnnounceIndex=f;var u="/tiny-shop/v1/common/notify-announce/view";e.notifyAnnounceView=u},"481d":function(t,e,i){var a=i("60ee");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("fb2d3f6c",a,!0,{sourceMap:!1,shadowMode:!1})},"4b81":function(t,e,i){"use strict";i.r(e);var a=i("d381"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"60ee":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.rf-search-bar[data-v-d8c59316]{background-color:#fff}.rf-search-bar .status[data-v-d8c59316]{width:100%;height:0;position:fixed;z-index:10;background-color:#fff;top:0}.rf-search-bar .header[data-v-d8c59316]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background-color:#fff}.rf-search-bar .header .addr[data-v-d8c59316]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.rf-search-bar .header .addr .iconfont[data-v-d8c59316]{height:%?60?%;margin-right:%?6?%;margin-left:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?35?%;color:#47885e}.rf-search-bar .header .input-box[data-v-d8c59316]{width:100%;height:%?60?%;background-color:#f5f5f5;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 %?20?% 0 %?10?%}.rf-search-bar .header .input-box .icon[data-v-d8c59316]{z-index:9;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.rf-search-bar .header .input-box uni-input[data-v-d8c59316]{width:100%;padding-left:%?28?%;height:%?28?%;color:#888;font-size:%?28?%}.rf-search-bar .place[data-v-d8c59316]{height:%?90?%}',""]),t.exports=e},6627:function(t,e,i){"use strict";var a={"rf-recommend":i("83d7").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"empty"},[i("v-uni-view",{staticClass:"empty-content",class:{emptyOnly:!t.isRecommendShow}},[i("i",{staticClass:"iconfont iconnodata-search"}),i("v-uni-text",{staticClass:"empty-content-info"},[t._v(t._s(t.info))])],1),t.isRecommendShow?i("rf-recommend",{staticClass:"recommend",attrs:{list:t.list}}):t._e()],1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},"6b99":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rf-search-bar"},[t.headerShow?i("v-uni-view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop,opacity:t.afterHeaderOpacity}}):t._e(),t.headerShow?i("v-uni-view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop,opacity:t.afterHeaderOpacity}},[i("v-uni-view",{staticClass:"addr",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.link.apply(void 0,arguments)}}},[i("i",{staticClass:"iconfont",class:t.icon}),t._v(t._s(t.title))]),t.inputDisabled?i("v-uni-view",{staticClass:"input-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.discard.apply(void 0,arguments)}}},[i("v-uni-input",{staticStyle:{color:"#888"},attrs:{value:t.placeholder,placeholder:t.placeholder?"":"请输入关键字","placeholder-style":"color:#ccc;"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSearchValueChange.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"icon search",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)}}})],1):i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{disabled:!0,value:t.placeholder,"placeholder-style":"color:#ccc;"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"icon search"})],1)],1):t._e(),t.headerShow?i("v-uni-view",{staticClass:"place"}):t._e()],1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},"83d7":function(t,e,i){"use strict";i.r(e);var a=i("b6af"),n=i("4b81");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("c96c");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"f6022edc",null,!1,a["a"],o);e["default"]=s.exports},8817:function(t,e,i){"use strict";i.r(e);var a=i("9e53"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"8a11":function(t,e,i){"use strict";i.r(e);var a=i("35b4"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"8abb":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-4fef992f]{background-color:#fff}.category[data-v-4fef992f]{\n  /*模块分类*/}.category .category-list[data-v-4fef992f]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex}.category .category-list .left[data-v-4fef992f], .category .category-list .right[data-v-4fef992f]{position:absolute;top:%?100?%;bottom:%?0?%}.category .category-list .left[data-v-4fef992f]{width:24%;left:%?0?%;background-color:#f2f2f2}.category .category-list .left .row[data-v-4fef992f]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.category .category-list .left .row .text[data-v-4fef992f]{width:100%;position:relative;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#3c3c3c}.category .category-list .left .row .text .block[data-v-4fef992f]{position:absolute;width:%?0?%;left:0}.category .category-list .left .row.on[data-v-4fef992f]{height:%?100?%;background-color:#fff}.category .category-list .left .row.on .text[data-v-4fef992f]{font-size:%?30?%;font-weight:600;color:#2d2d2d}.category .category-list .left .row.on .text .block[data-v-4fef992f]{width:%?10?%;height:80%;top:10%;background-color:#abd87e}.category .category-list .right[data-v-4fef992f]{width:76%;left:24%;background-color:#fff}.category .category-list .right .category[data-v-4fef992f]{width:calc(100%);padding:%?20?% %?15?%}.category .category-list .right .category .banner[data-v-4fef992f]{width:96%;margin:0 auto %?20?%;height:24.262vw;border-radius:%?10?%;overflow:hidden;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.3)}.category .category-list .right .category .banner uni-image[data-v-4fef992f]{width:100%;height:24.262vw}.category .category-list .right .category .list[data-v-4fef992f]{margin-top:%?40?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.category .category-list .right .category .list .box[data-v-4fef992f]{width:calc(71.44vw / 3);margin-bottom:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.category .category-list .right .category .list .box uni-image[data-v-4fef992f]{width:64%;height:calc(71.44vw / 3 * .64);border-radius:50%;overflow:hidden;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.3)}.category .category-list .right .category .list .box .text[data-v-4fef992f]{margin-top:%?8?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%}.category .category-list .right .category .no-data[data-v-4fef992f]{margin:%?48?% 0;color:#909399;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.category .category-list .right .category .no-data .iconfont[data-v-4fef992f]{margin-right:%?20?%;font-size:%?48?%}body.?%PAGE?%[data-v-4fef992f]{background-color:#fff}',""]),t.exports=e},"8c4e":function(t,e,i){var a=i("8abb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5cf157f3",a,!0,{sourceMap:!1,shadowMode:!1})},"9abd":function(t,e,i){var a=i("0528");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2ed3dd2f",a,!0,{sourceMap:!1,shadowMode:!1})},"9e53":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("3b8d")),r={props:{headerShow:{type:Boolean,default:!0},inputDisabled:{type:Boolean,default:!1},placeholder:{type:String,default:"请输入关键字"},icon:{type:String,default:null},title:{type:String,default:null}},data:function(){return{afterHeaderOpacity:.6,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,searchValue:this.placeholder}},methods:{handleSearchValueChange:function(t){this.searchValue=t.detail.value},discard:function(){},link:function(){this.$emit("link")},toSearch:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$emit("search",{searchValue:this.searchValue});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=r},a54c:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.empty[data-v-737a70ac]{background-color:#fff}.empty .empty-content[data-v-737a70ac]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?20?% 0 %?80?%}.empty .empty-content .empty-content-info[data-v-737a70ac]{font-size:%?26?%}.empty .empty-content .iconfont[data-v-737a70ac]{font-size:%?240?%;color:#47885e}.empty .empty-content-image[data-v-737a70ac]{width:%?200?%;height:%?200?%}.empty .emptyOnly[data-v-737a70ac]{position:fixed;left:0;top:0;right:0;bottom:0}',""]),t.exports=e},ae48:function(t,e,i){"use strict";var a={"rf-search-bar":i("3012").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"category"},[i("rf-search-bar",{attrs:{icon:"iconxiatubiao--copy",title:"主页",placeholder:t.hotSearchDefault},on:{link:function(e){arguments[0]=e=t.$handleEvent(e),t.toIndex.apply(void 0,arguments)},search:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)}}}),0!==t.categoryList.length||t.loading?i("v-uni-view",{staticClass:"category-list"},[i("v-uni-scroll-view",{staticClass:"left",attrs:{"scroll-y":"true"}},t._l(t.categoryList,(function(e,a){return e.child.length>0?i("v-uni-view",{key:e.id,staticClass:"row",class:[a==t.showCategoryIndex?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showCategory(a)}}},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"block"}),t._v(t._s(e.title))],1)],1):t._e()})),1),i("v-uni-scroll-view",{staticClass:"right",class:t.animation,attrs:{"scroll-y":"true"}},t._l(t.categoryList,(function(e,a){return a==t.showCategoryIndex&&e.child.length>0?i("v-uni-view",{key:e.id,staticClass:"category"},[i("v-uni-view",{staticClass:"banner",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.indexTopToDetailPage(t.cateTop.jump_type,t.cateTop.jump_link)}}},[i("v-uni-image",{attrs:{src:t.cateTop&&t.cateTop.cover,mode:"aspectFill"}})],1),t._l(e.child,(function(e,a){return i("v-uni-view",{key:a,staticClass:"box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToList(e.id)}}},[i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.title))]),e.child.length>0?i("v-uni-view",{staticClass:"list"},t._l(e.child,(function(e,a){return i("v-uni-view",{key:a,staticClass:"box",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.navToList(e.id)}}},[i("v-uni-image",{attrs:{src:e.cover}}),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.title))])],1)})),1):i("v-uni-view",{staticClass:"no-data"},[i("i",{staticClass:"iconfont icon404"}),t._v("暂无子分类")])],1)}))],2):t._e()})),1)],1):i("empty",{attrs:{info:"暂无产品分类~"}}),t.loading?i("v-uni-view",{staticClass:"cu-load load-modal"},[i("v-uni-image",{attrs:{src:"/static/rage.png",mode:"aspectFit"}}),i("v-uni-view",{staticClass:"gray-text"},[t._v("加载中...")])],1):t._e()],1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},b6af:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rf-floor-index"},[i("v-uni-view",{staticClass:"f-header"},[i("v-uni-view",{staticClass:"line"}),i("v-uni-text",{staticClass:"name"},[t._v("为你推荐")]),i("v-uni-view",{staticClass:"line"})],1),i("v-uni-view",{staticClass:"rf-product-list"},t._l(t.guessYouLikeList.length>0?t.guessYouLikeList:[0,0,0,0,0,0],(function(e,a){return i("v-uni-view",{key:a,staticClass:"product-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo(0===e?"":e.id)}}},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{attrs:{src:e.picture,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"sketch"},[t._v(t._s(e.sketch))])],1),e.name?i("v-uni-text",{staticClass:"title clamp in2line"},[t._v(t._s(e.name))]):t._e(),e.name?i("v-uni-view",{staticClass:"last-line"},[i("v-uni-text",{staticClass:"price in1line"},[t._v(t._s(e.price)),e.market_price>e.price?i("v-uni-text",{staticClass:"m-price"},[t._v("¥ "+t._s(e.market_price))]):t._e()],1),i("v-uni-text",{staticClass:"sales in1line"},[i("v-uni-text",{staticClass:"red"},[t._v(t._s(e.sales))]),t._v("付款")],1)],1):t._e()],1)})),1)],1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},c049:function(t,e,i){var a=i("a54c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7e0a7b42",a,!0,{sourceMap:!1,shadowMode:!1})},c96c:function(t,e,i){"use strict";var a=i("9abd"),n=i.n(a);n.a},d381:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("3b8d")),r=i("f01b"),o={name:"rfRecommend",props:{list:{type:Array,default:function(){return[{},{}]}}},data:function(){return{guessYouLikeList:[]}},mounted:function(){this.initData()},methods:{initData:function(){0===this.list.length?this.getGuessYouLikeList():this.guessYouLikeList=this.list},getGuessYouLikeList:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(r.guessYouLikeList),{page:this.page}).then((function(t){e.guessYouLikeList=t.data})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),navTo:function(t){t&&uni.navigateTo({url:"/pages/product/product?id=".concat(t," ")})}}};e.default=o},dce6:function(t,e,i){"use strict";var a=i("481d"),n=i.n(a);n.a},e4d2:function(t,e,i){"use strict";i.r(e);var a=i("6627"),n=i("8a11");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("1993");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"737a70ac",null,!1,a["a"],o);e["default"]=s.exports},f01b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cartItemCount=e.cartItemUpdateSku=e.orderProductExpressDetails=e.orderPreview=e.evaluateList=e.orderFreightFee=e.orderPay=e.orderClose=e.orderCreate=e.cartItemUpdateNum=e.cartItemClear=e.cartItemDel=e.cartItemList=e.cartItemCreate=e.productDetail=e.guessYouLikeList=e.productList=e.productCateList=e.productCate=e.indexList=void 0;var a="/tiny-shop/v1/index/index";e.indexList=a;var n="/tiny-shop/v1/product/cate/index";e.productCate=n;var r="/tiny-shop/v1/product/cate/list";e.productCateList=r;var o="/tiny-shop/v1/product/product/index";e.productList=o;var c="/tiny-shop/v1/product/product/view";e.productDetail=c;var s="/tiny-shop/v1/product/product/guess-you-like";e.guessYouLikeList=s;var l="/tiny-shop/v1/member/cart-item/create";e.cartItemCreate=l;var d="/tiny-shop/v1/member/cart-item/index";e.cartItemList=d;var f="/tiny-shop/v1/member/cart-item/count";e.cartItemCount=f;var u="/tiny-shop/v1/member/cart-item/delete-ids";e.cartItemDel=u;var p="/tiny-shop/v1/member/cart-item/clear";e.cartItemClear=p;var h="/tiny-shop/v1/member/cart-item/update-num";e.cartItemUpdateNum=h;var v="/tiny-shop/v1/member/cart-item/update-sku";e.cartItemUpdateSku=v;var g="/tiny-shop/v1/order/order/create";e.orderCreate=g;var b="/tiny-shop/v1/order/order/preview";e.orderPreview=b;var y="/tiny-shop/v1/member/order/close";e.orderClose=y;var w="/tiny-shop/v1/common/pay/create";e.orderPay=w;var m="/tiny-shop/v1/order/order/freight-fee";e.orderFreightFee=m;var x="/tiny-shop/v1/product/evaluate/index";e.evaluateList=x;var k="/tiny-shop/v1/member/order-product-express/details";e.orderProductExpressDetails=k}}]);