(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/YnComponents/ynGallery/ynGallery"],{"2e81":function(e,t,i){"use strict";i.r(t);var a=i("822a"),n=i("8e57");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("d1f0");var l,f=i("f0c5"),o=Object(f["a"])(n["default"],a["b"],a["c"],!1,null,"fa98d1e6",null,!1,a["a"],l);t["default"]=o.exports},"822a":function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=(e._self._c,parseInt(e.badegheight));e.$mp.data=Object.assign({},{$root:{m0:i}})},r=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}))},"8e57":function(e,t,i){"use strict";i.r(t);var a=i("da5a"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},d1f0:function(e,t,i){"use strict";var a=i("f9af"),n=i.n(a);n.a},da5a:function(e,t,i){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("4795"));function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t,i,a,n,r,l){try{var f=e[r](l),o=f.value}catch(s){return void i(s)}f.done?t(o):Promise.resolve(o).then(a,n)}function f(e){return function(){var t=this,i=arguments;return new Promise((function(a,n){var r=e.apply(t,i);function f(e){l(r,a,n,f,o,"next",e)}function o(e){l(r,a,n,f,o,"throw",e)}f(void 0)}))}}var o=function(){i.e("components/YnComponents/ynTriangleBadge/ynTriangleBadge").then(function(){return resolve(i("8cdf"))}.bind(null,i)).catch(i.oe)},s={components:{ynTriangleBadge:o},name:"ynGallery",props:{bkstart:{type:[String],default:"#000000"},bkend:{type:[String],default:"#000000"},galleryheight:{type:[Number,String],default:165},images:{type:Array},imgviewwidth:{type:[Number],default:parseInt(85)},imgviewheight:{type:[Number],default:parseInt(105.75)},showbadge:{type:[Boolean],default:!1},showdec:{type:[Boolean],default:!1},badegtype:{type:[String],default:"trian"},badegwidth:{type:[String],default:"25"},badegheight:{type:[String],default:"25"}},data:function(){return{bkstartcolor:this.bkstart,bkendcolor:this.bkend,badegcolor:"red",TTT:null,istouchmove:!1,isEndTouch:!0,screencenterpos:0,activeviewindex:0,offset:0,scrollLeft:0,newleft:0,oldleft:{scrollleft:0},sviewlst:{leftview:{},rightview:{},imgsview:[]},toview:"viewitem0"}},created:function(){this.images.length>0&&(this.screencenterpos=parseInt(e.upx2px(750)/2),this.upDataScrollviewLayout(this.activeviewindex))},mounted:function(){},watch:{images:function(){var t=this;return f(n.default.mark((function i(){return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:t,a("log","watch监控到images属性变化"," at components\\YnComponents\\ynGallery\\ynGallery.vue:159"),t.screencenterpos=parseInt(e.upx2px(750)/2),a("log","屏幕中点pos位置:"+t.screencenterpos+"px"," at components\\YnComponents\\ynGallery\\ynGallery.vue:161"),t.upDataScrollviewLayout(t.activeviewindex);case 5:case"end":return i.stop()}}),i)})))()}},computed:{bkstyle:function(){return"radial-gradient(circle,".concat(this.bkstartcolor,", ").concat(this.bkendcolor,")")}},methods:{SetBkRightAnimate:function(e){var t=this,i=10,a=this.gradientColor(e,this.bkendcolor,i),n=10,r=setInterval((function(){t.bkstartcolor=a[n-1],n--,n<5&&clearInterval(r)}),50)},endscroll:function(e){},scroll:function(e){this.newleft=e.mp.detail.scrollLeft,this.oldleft.scrollleft=this.newleft;var t=e.mp.detail.scrollLeft+this.screencenterpos;for(var i in this.sviewlst.imgsview){var a=this.sviewlst.imgsview[i];if(a.l<=t&&a.r>=t){var n=a.l+parseInt(a.w/2),r=t-n;this.offset=r,this.upDataScrollviewLayout(i);break}}},clickimg:function(e,t){this.activeviewindex=e,this.scrollLeft=this.sviewlst.imgsview[e].l-parseInt(this.screencenterpos)+parseInt(this.sviewlst.imgsview[e].w/2),this.$emit("clickimg",t)},touchStartHandle:function(e){this.istouchmove=!1,this.isEndTouch=!1},touchMoveHandle:function(e){this.istouchmove=!0},touchEndHandle:function(e){this.isEndTouch=!0},animationstartHandle:function(){},animationendHandle:function(){var e=this.sviewlst.imgsview[this.activeviewindex].dominant;this.SetBkRightAnimate(e)},upDataScrollviewLayout:function(e){a("log","检测到 initScrollviewLayout"," at components\\YnComponents\\ynGallery\\ynGallery.vue:253");this.upbkcolor=!1;if(!(this.images.length<=0)){var t=this.offset,i={dec:"left view"};i.w=this.screencenterpos,i.h=this.imgviewheight,i.l=0,i.r=i.l+i.w;var n=[],r=0;while(r<=this.images.length-1){var l={index:r,url:"",dec:"",badeg:"",badegcolor:this.badegcolor,dominant:this.bkstartcolor,w:0,h:0,l:0,r:0},f=Object.assign(l,this.images[r]);f.w=this.imgviewwidth,f.h=this.imgviewheight,f.l=0==r?i.r+0:n[r-1].r+0,f.r=f.l+f.w,n.push(f),r++}var o={dec:"right view"};o.w=this.screencenterpos,o.h=this.imgviewheight,n.length<=0?o.l=i.r+0:o.l=n[n.length-1].r+0,o.r=o.l+o.w;var s=1,c=1,d=1;if(n.length>0){var u=e,h=parseInt(u)-1,g=parseInt(u)+1,v=1.18*this.imgviewwidth/2,b=Math.abs(t)/v;if(0==t&&(d=1.18,s=1,c=1),t>0&&(d=1+.18*(1-b/2),c=1.18-d+1,s=1),t<0&&(d=1+.18*(1-b/2),s=1.18-d+1,c=1),!(u>=0&&u<=n.length-1))return void a("log","焦点图越界"," at components\\YnComponents\\ynGallery\\ynGallery.vue:360");n[u].w=this.imgviewwidth*d,n[u].h=this.imgviewheight*d,t<0&&h>=0&&(n[h].w=this.imgviewwidth*s,n[h].h=this.imgviewheight*s),t>0&&g<=n.length-1&&(n[g].w=this.imgviewwidth*c,n[g].h=this.imgviewheight*c)}if(n.length>0){i.w=i.w-n[0].w/2,i.r=i.l+i.w;for(var w=0;w<=n.length-1;w++)n[w].l=0==w?i.r+0:n[w-1].r+0,n[w].r=n[w].l+n[w].w;o.w=o.w-n[n.length-1].w/2+0,o.l=n[n.length-1].r+0,o.r=o.l+o.w}var m={leftview:i,rightview:o,imgsview:n};this.activeviewindex=e,this.sviewlst=m,this.$nextTick((function(){var e=this;if(1==this.istouchmove){clearTimeout(e.TTT);var t=e.activeviewindex;setTimeout((function(){e.activeviewindex==t&&e.$emit("clickimg",e.sviewlst.imgsview[e.activeviewindex])}),300)}}))}},gradientColor:function(e,t,i){for(var a=this.colorToRgb(e),n=a[0],r=a[1],l=a[2],f=this.colorToRgb(t),o=f[0],s=f[1],c=f[2],d=(o-n)/i,u=(s-r)/i,h=(c-l)/i,g=[],v=0;v<i;v++){var b=this.colorToHex("rgb("+parseInt(d*v+n)+","+parseInt(u*v+r)+","+parseInt(h*v+l)+")");g.push(b)}return g},colorToRgb:function(e){var t={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},i=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;e=e.toLowerCase();if("#"!=e.slice(0,1))for(var a in t)if(a==e)e="#"+t[a];if(e&&i.test(e)){if(4===e.length){for(var n="#",r=1;r<4;r+=1)n+=e.slice(r,r+1).concat(e.slice(r,r+1));e=n}var l=[];for(r=1;r<7;r+=2)l.push(parseInt("0x"+e.slice(r,r+2)));return l}return e},colorToHex:function(e){var t=e,i=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(/^(rgb|RGB)/.test(t)){for(var a=t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),n="#",r=0;r<a.length;r++){var l=Number(a[r]).toString(16);l=l<10?"0"+l:l,"0"===l&&(l+=l),n+=l}return 7!==n.length&&(n=t),n}if(!i.test(t))return t;var f=t.replace(/#/,"").split("");if(6===f.length)return t;if(3===f.length){var o="#";for(r=0;r<f.length;r+=1)o+=f[r]+f[r];return o}}}};t.default=s}).call(this,i("6e42")["default"],i("0de9")["default"])},f9af:function(e,t,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/YnComponents/ynGallery/ynGallery-create-component',
    {
        'components/YnComponents/ynGallery/ynGallery-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("2e81"))
        })
    },
    [['components/YnComponents/ynGallery/ynGallery-create-component']]
]);