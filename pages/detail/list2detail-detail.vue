<template>
	<div>
    <view>
        <view class="banner">
            <yy-video-player class="banner-img" :auto-play="false" :url="url"  :poster="poster" :danmu-list="danmuList"  :show-back-btn="false" :show-download-btn="false"></yy-video-player>
            <view class="banner-title">{{banner.title}}</view>
        </view>
        <view class="article-meta">
          <!--  
			<text class="article-author">{{banner.author_name}}</text>
            <text class="article-text">发表于</text>
            <text class="article-time">{{banner.published_at}}</text>
		-->	
			<text>农场主：windy\n农场地址：哈尔滨市松北区中源大道北200米\n农场简介： 设有 “南果园”“红掌园”“现代化温室”“加工配送中心”
			“蔬菜种植区”等参观区，可为顾客展示现代化的节水灌溉设备、自动控温控湿设备、阳台无土种植设备、自动分选包装
			设备、洁净工厂栽培技术、生物防治技术等，同时讲解天安农业产品安全管理和追溯系统，介绍有趣的农业和蔬菜知识；
			带顾客在“南果园”里领略南国风情，在“红掌园”中穿行缤纷“花海”</text>
        </view>
        <view class="article-content">
            
        
		    <ynGallery
		     :galleryheight="165" 
		      bkstart="#ffffff" 
		      bkend="#ffffff" 
		     :imgviewwidth="105" 
		     :imgviewheight="105" 
		     :showbadge="false"
		      badegtype="trian" 
		      badegwidth="25" 
		      badegheight="25" 
		     :showdec="true" 
		     :images="testimgs" 
		     @clickimg="onclickimg">
		    </ynGallery>  
			<text style="font-size: 15px;">
				水果:{{Msg}}元/斤
			</text>
			<rich-text :nodes="htmlString">哈哈哈哈哈哈哈哈哈哈哈\n哈哈哈哈哈哈哈\n哈哈哈哈哈哈哈哈哈哈\n</rich-text>
		</view>
        <!-- #ifdef MP-WEIXIN -->
        <ad v-if="htmlString" unit-id="adunit-01b7a010bf53d74e"></ad>
        <!-- #endif -->
    </view>
	
	<!-- 底部操作菜单 -->
	<view class="page-bottom">
		<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
			<i class="iconfont iconxiatubiao--copy"></i>
			<text>首页</text>
		</navigator>
		<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn cart">
			<i class="iconfont icongouwuche"></i>
			<text>购物车</text>
			<rf-badge v-if="cartNum && cartNum > 0" type="error" size="small" class="badge" :text="cartNum"></rf-badge>
		</navigator>
		<view class="p-b-btn" :class="{active: favorite}" @tap="toFavorite">
			<i class="iconfont iconshoucang"></i>
			<text>收藏</text>
		</view>
	
		<view class="action-btn-group">
			<button type="primary" class="action-btn no-border buy-now-btn" :disabled="(currentStock || productDetail.stock) == 0" @tap="addCart('buy')">立即拼单</button>
			<button type="primary"
							:disabled="productDetail.point_exchange_type == 2 || productDetail.point_exchange_type == 4 || (currentStock || productDetail.stock) == 0"
							class=" action-btn no-border add-cart-btn"
							@tap="addCart('cart')">加入购物车</button>
		</view>
	</view>
	</div>
</template>

<script>
	import yyVideoPlayer from '@/components/yy-video-player/yy-video-player.nvue';
	import ynGallery from 'components/YnComponents/ynGallery/ynGallery.vue'
    export default {
		components: {
			ynGallery,
			yyVideoPlayer
		},
        data() {
            return {
				url: 'http://39.106.161.37/WeChat_20200505203621.mp4',
				poster: '../../static/tool5.jpg',
				danmuList: [
					{
						text: '哇，这也太好看了吧',
						color: '#aaff7f',
						time: 1
					},
					{
						text: '我想去这儿旅游，买东西',
						color: '#deffbe',
						time: 3
					}
				],
                title: 'list-triplex-row',
                banner: {
					"title":"天顺农场",
					"author_name":"windy",
					"published_at":"2020/3/22"
				},
                htmlString: "",
				testimgs :[{url:"/static/temp/cate9.jpg"},{url:"/static/temp/cate10.jpg"},{url:"/static/temp/cate11.jpg"},{url:"/static/temp/cate12.jpg"},{url:"/static/temp/cate13.jpg"}],
				Msg: "0",
				favorite: true,
            }
        },
        onShareAppMessage() {
            return {
                title: this.banner.title,
                path: '/pages/template/list2detail-detail/list2detail-detail?detailDate=' + JSON.stringify(this.banner)
            }
        },
        onLoad(event) {
            // 目前在某些平台参数会被主动 decode，暂时这样处理。
            try {
                this.banner = JSON.parse(decodeURIComponent(event.detailDate));
            } catch (error) {
                this.banner = JSON.parse(event.detailDate);
            }

            this.getDetail();
            uni.setNavigationBarTitle({
                title: this.banner.title
            });
			
			this.setimgs();
        },
		onShow() {
			if (this.videoContext) {
				this.videoContext.play();
			}
		},
		onReady: function() {
			this.videoContext = uni.createVideoContext('video', this);
		},
		onHide: function() {
			if (this.videoContext) {
				this.videoContext.stop();
			}
		},
        methods: {
            getDetail() {
                uni.request({
                    url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.banner.post_id,
                    success: (data) => {
                        if (data.statusCode == 200) {
                            this.htmlString = data.data.content.replace(/\\/g, "").replace(/<img/g,
                                "<img style=\"display:none;\"");
                        }
                    },
                    fail: () => {
                        console.log('fail');
                    }
                })
            },
			onclickimg(imgviewobj) {
				if (imgviewobj.index != undefined)
					this.Msg = `${imgviewobj.index}`;
			},
			setimgs() {
				var imgs=[];
				for (let i in this.testimgs) {									
					 let imgobj={
						  dec:'大蒜i元/斤',                   //图像描述信息
						  badeg:'hot',                 //角标文字
						  badegcolor:'#000000',     //角标颜色
						  url:'',                   //图源  
						  dominant:''               //主色  
					};
					imgobj.url=this.testimgs[i].url;
					imgobj.dominant = this.retcolor(); //随机主色
					imgobj.dec = '大蒜i元/斤'; //描述  
					imgobj.badeg = i; //角标文字
					imgobj.badegcolor = (i % 2) == 0 ? 'red' : 'LimeGreen'; //角标颜色
					
					imgs.push(imgobj)
				}
				this.testimgs=imgs;
        },
		toFavorite(){
			this.favorite = !this.favorite;
		},
		buy(){
			uni.navigateTo({
				url: `/pages/order/createOrder`
			})
		}
		
    }
}
</script>

<style lang='scss'>
    view {
        font-size: 28upx;
        line-height: 1.8;
    }

    .banner {
        height: 550upx;
        overflow: hidden;
        position: relative;
		width:100%;
    }

    .banner-img {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		line-height: 300upx;
		text-align: center;
		broder-radius: 6upx;
		margin-bottom: 50upx;
    }

    .banner-title {
        max-height: 84upx;
        overflow: hidden;
        position: absolute;
        left: 30upx;
        bottom: 30upx;
        width: 90%;
        font-size: 50upx;
        font-weight: 400;
        line-height: 50upx;
        color: black;
        z-index: 11;
    }

    .article-meta {
        padding: 20upx 40upx;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        color: gray;
    }

    .article-text {
        font-size: 26upx;
        line-height: 50upx;
        margin: 0 20upx;
    }

    .article-author,
    .article-time {
        font-size: 30upx;
    }

    .article-content {
        padding: 0 30upx;
        overflow: hidden;
        font-size: 30upx;
        margin-bottom: 30upx;
		text-align: center;
    }
	
	/* 底部操作菜单 */
	.page-bottom{
		position:fixed;
		left: 30upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 16upx;
		.cart {
			position: relative;
			.badge {
				position: absolute;
				top: -8upx;
				right: 0upx;
			}
		}
		.p-b-btn{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;
			.iconfont{
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}
			&.active, &.active .iconfont{
				color: $uni-color-primary;
			}
			.icon-fenxiang2{
				font-size: 42upx;
				transform: translateY(-2upx);
			}
			.icon-shoucang{
				font-size: 46upx;
			}
			.red {
				color: $base-color;
			}
		}
		.action-btn-group{
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #c6faa3;
			box-shadow: 1px 2px 5px rgba(0, 85, 0, 102);
			background: linear-gradient(to right, #aaff7f,#4dc27e,#0eb543);
			margin: 0 20upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255,255,255,.5);
			}
			.action-btn{
				display:flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base ;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
	
</style>
