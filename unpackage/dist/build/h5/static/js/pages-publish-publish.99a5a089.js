(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-publish-publish"],{"0ee1":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("3b8d")),s=[],u=500;function r(e,t){return o.apply(this,arguments)}function o(){return o=(0,a.default)(regeneratorRuntime.mark((function e(t,n){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=0;case 1:if(!(i<t.length)){e.next=9;break}return e.next=4,c(t[i]);case 4:a=e.sent,s.push(a);case 6:i++,e.next=1;break;case 9:n&&n(s),s=[];case 11:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function c(e){return l.apply(this,arguments)}function l(){return l=(0,a.default)(regeneratorRuntime.mark((function e(t){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.slice(-4),"Android"!=plus.os.name){e.next=4;break}if(~n.indexOf("jpg")||~n.indexOf("png")||~n.indexOf("jpeg")){e.next=4;break}return e.abrupt("return",t);case 4:return e.next=6,d(t);case 6:if(i=e.sent,!(i.width<u)){e.next=9;break}return e.abrupt("return",t);case 9:return e.abrupt("return",new Promise((function(e,n){plus.zip.compressImage({src:t,dst:t,overwrite:!0,quality:100,width:u+"px"},(function(t){e(t.target)}),(function(e){n(e)}))})));case 10:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(e){return new Promise((function(t,n){uni.getImageInfo({src:e,success:function(e){t(e)}})}))}var p={compress:r};t.default=p},"5d04":function(e,t,n){"use strict";var i=n("6185"),a=n.n(i);a.a},6185:function(e,t,n){var i=n("7a7e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("6668a6c2",i,!0,{sourceMap:!1,shadowMode:!1})},"7a7e":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".footer[data-v-643b9984]{margin-top:%?80?%}.cell-pd[data-v-643b9984]{padding:%?20?% %?30?%}.uni-textarea[data-v-643b9984]{width:auto;padding:%?20?% %?25?%;line-height:1.6;height:%?150?%}.uni-list[data-v-643b9984]::before{height:0}.uni-list[data-v-643b9984]:after{height:0}.list-pd[data-v-643b9984]{margin-top:0}.close-view[data-v-643b9984]{text-align:center;line-height:%?30?%;height:%?35?%;width:%?35?%;background:#ef5350;color:#fff;position:absolute;top:%?1?%;right:%?1?%;font-size:%?35?%;border-radius:%?8?%}.page[data-v-643b9984]{width:%?750?%;height:100%}",""]),e.exports=t},"9fcc":function(e,t,n){"use strict";n.r(t);var i=n("b587"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},b587:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("3b8d")),s=(i(n("0ee1")),[["camera"],["album"],["camera","album"]]),u=[["compressed"],["original"],["compressed","original"]],r={data:function(){return{input_content:"",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9],startX:0,movedX:0,endX:0}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{publish:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,n,i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.input_content){e.next=3;break}return uni.showModal({content:"内容不能为空",showCancel:!1}),e.abrupt("return");case 3:return uni.showLoading({title:"发布中"}),e.next=6,this.getLocation();case 6:for(t=e.sent,n=[],i=0,a=this.imageList.length;i<a;i++)s={name:"image-"+i,uri:this.imageList[i]},n.push(s);uni.uploadFile({url:"moment/moments",files:n,filePath:"",name:"",formData:{user_id:"1",text:this.input_content,longitude:t.longitude,latitude:t.latitude},success:function(e){uni.hideLoading(),uni.showToast({icon:"success",title:"发布成功"}),uni.navigateBack({delta:1})},fail:function(e){console.log("e: "+JSON.stringify(e)),uni.hideLoading(),uni.showToast({icon:"none",title:"发布失败,请检查网络"})}});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getLocation:function(){return new Promise((function(e,t){uni.getLocation({type:"wgs84",success:function(t){e(t)},fail:function(e){t(e)}})}))},close:function(e){this.imageList.splice(e,1)},chooseImage:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(9!==this.imageList.length){e.next=7;break}return e.next=3,this.isFullImg();case 3:if(t=e.sent,console.log("是否继续?",t),t){e.next=7;break}return e.abrupt("return");case 7:uni.chooseImage({sourceType:s[this.sourceTypeIndex],sizeType:u[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){n.imageList=n.imageList.concat(e.tempFilePaths)}});case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),isFullImg:function(){var e=this;return new Promise((function(t){uni.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(n){n.confirm?(e.imageList=[],t(!0)):t(!1)},fail:function(){t(!1)}})}))},previewImage:function(e){var t=e.target.dataset.src;uni.previewImage({current:t,urls:this.imageList})},touchStart:function(e){this.startX=e.mp.changedTouches[0].pageX},touchEnd:function(e){this.endX=e.mp.changedTouches[0].pageX,this.endX-this.startX>200&&uni.navigateBack()}}};t.default=r},c2ca:function(e,t,n){"use strict";n.r(t);var i=n("d457"),a=n("9fcc");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("5d04");var u,r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"643b9984",null,!1,i["a"],u);t["default"]=o.exports},d457:function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page",on:{touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.touchStart.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.touchEnd.apply(void 0,arguments)}}},[n("v-uni-form",[n("v-uni-view",{staticClass:"uni-textarea"},[n("v-uni-textarea",{attrs:{placeholder:"这一刻的想法..."},model:{value:e.input_content,callback:function(t){e.input_content=t},expression:"input_content"}})],1),n("v-uni-view",{staticClass:"uni-list list-pd"},[n("v-uni-view",{staticClass:"uni-list-cell cell-pd"},[n("v-uni-view",{staticClass:"uni-uploader"},[n("v-uni-view",{staticClass:"uni-uploader-head"},[n("v-uni-view",{staticClass:"uni-uploader-title"}),n("v-uni-view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/9")])],1),n("v-uni-view",{staticClass:"uni-uploader-body"},[n("v-uni-view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,(function(t,i){return[n("v-uni-view",{key:i+"_0",staticClass:"uni-uploader__file",staticStyle:{position:"relative"}},[n("v-uni-image",{staticClass:"uni-uploader__img",attrs:{mode:"aspectFill",src:t,"data-src":t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"close-view",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close(i)}}},[e._v("×")])],1)]})),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.imageList.length<9,expression:"imageList.length < 9"}],staticClass:"uni-uploader__input-box"},[n("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}})],1)],2)],1)],1)],1)],1),n("v-uni-view",{staticClass:"footer"},[n("v-uni-button",{staticClass:"feedback-submit",attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.publish.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},s=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))}}]);