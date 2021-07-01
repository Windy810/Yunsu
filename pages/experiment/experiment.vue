<template>
	<view class="container">
		<view class="set_box" v-for="(item,index) in talk" :key="index">
			<view class="set_time">
				<view>{{item.MMDD}}</view>
			</view>
			<!-- 步骤条 -->
			<view class="set-1">
				<view class="set-2">
					<view class="tlak_o" v-for="(cItem,index) in item.data" :key="index">
						<view class="docter like_">
							<view class="doc_say like_o">
								<view class="doc_head like_h">
									<text class="doc_name name_">{{cItem.doc.d_name}}</text><text class="doc_time time_">{{cItem.doc.HMS}}</text>
								</view>
								<view class="doc_talk like_talk">
									<text>{{cItem.doc.talk}}</text>
								</view>
							</view>
						</view>
						<view class="user like_">
							<view class="user_say like_o">
								<view class="user_head like_h">
									<text class="doc_name name_">{{cItem.user.u_name}}</text><text class="doc_time time_">{{cItem.user.HMS}}</text>
								</view>
								<view class="user_talk like_talk">
									<text>{{cItem.user.talk}}</text>
									<view class="like_img" v-if="cItem.user.imgUrl">
										<image :src="pic" v-for="(pic,index) in cItem.user.imgUrl" :key="index" @tap="previewImage(cItem.user.imgUrl,index)"></image>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadMoreText: "加载中...",
				showLoadMore: false,
				talk: [{
						"id": 1,
						"MMDD": "东林实验室地膜",
						"data": [{
							"doc": {
								"d_name": "云溯团队",
								"HMS": "2020/12/30",
								"talk": "云溯团队针对农场种植情况进行调研"
							},
							"user": {
								"u_name": "农场",
								"HMS": "2020/1/1",
								"talk": "有机果蔬生长由于地膜残留带来了土壤板结，耕地质量下降，作物减产，次生环境污染等负面影响",
								"imgUrl": ["/static/f1.png", "/static/f2.png",
									"/static/f3.png"
								]
							}
						}]
					},
					{
						"id": 2,
						"MMDD": "东林实验室地膜",
						"data": [{
							"doc": {
								"d_name": "云溯团队",
								"HMS": "2020/1/7",
								"talk": "通过走访，云溯帮扶团队发现我国年均地膜使用量高。残膜量50万吨，残膜率高达百分之42。项目组深入哈尔滨市繁荣村大棚种植区发现当地此问题更加严重。由此云溯团队开展关于地膜相关调研，有效改善农田环境。"
							},
							"user": {
								"u_name": "刘长莉  博士（东北林业大学生命科学学院副教授）",
								"HMS": "2020/1/8",
								"talk": "技术团队通过构建基因表达载体的方式，研发出在高盐高碱的恶劣环境下依然可以大量产出PHB的嗜盐菌；打破了原有培育菌种所需要恒温无菌的“黄金环境”研发了以秸秆作为碳源的MS培养基，进一步降低了原料成本且获得了发明专利",
								"imgUrl": ["/static/p1.png", "/static/p2.png",
									"/static/p3.png"
								]
							}
						}]
					},
					{
						"id": 3,
						"MMDD": "东林实验室地膜",
						"data": [{
								"doc": {
									"d_name": "云溯团队",
									"HMS": "2020/1/9",
									"talk": "由此云溯团队以此为溯源根本，联系到东北林业大学生命科学学院副教授硕士研究生导师刘长莉副教授。"
								},
								"user": {
									"u_name": "农场主",
									"HMS": "10:30:22",
									"talk": "获得刘教授相关专利，有效帮助农户有机种植，开发适合母婴的农产品市场，完善高效技术落地，为进一步保证，地膜可降解实现团队与哈尔滨繁荣村大棚种植户们达成协议，完成了70天的地膜试铺工作。科技改变了农民耕种",
									"imgUrl": ["/static/p4.jpg", "/static/p5.jpg"]
								}	
							},
							{
								"doc": {
									"d_name": "云溯团队",
									"HMS": "2020/4/1",
									"talk": "为进一步，保证农户，有机生产，维持可持续运营，项目组与哈尔滨金大地膜有限公司，由其生产生物地膜，农户提供玉米秸秆等PHA生物可降解地膜原料。由云溯平台提供线上销售，切实为农户打造线上线下多元闭合可持续发展之路。"
								}
							}
						]
					}
				]
			}
		},

		onPullDownRefresh() {
			this.getIndexList('refresh');
		},
		methods: {
			previewImage(imgUrl, index) {
				var current = imgUrl[index];
				console.log(current);
				uni.previewImage({
					current: current,
					urls: imgUrl
				});
			}
		}
	}
</script>

<style lang="scss">
	.set_box {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}

	/* 左侧时间 */
	.set_time {
		width: 10%;
		position: relative;

		view {
			width: 120%;
			position: absolute;
			margin-top: 60upx;
			right: -40rpx;
			color: #999999;
		}

	}


	/* 右侧内容 */


	.set-1 {
		width: 90%;
	}

	.set-2 {
		min-height: 300upx;
		border-radius: 10upx;
		width: 84%;
		margin-left: 100upx;
		margin-top: 60upx;
		padding-right: 10rpx;
		position: relative;

		.tlak_o {
			width: 100%;
			min-height: 300upx;

			.like_ {
				width: 100%;
				min-height: 100rpx;

				.like_o {
					width: 100%;
					height: 100%;

					.like_h {
						color: #999999;

						.name_ {
							margin-right: 20rpx;
							font-size: 32rpx;
						}

						.time_ {
							font-size: 24rpx;
						}
					}

					.like_talk {
						width: 95%;
						min-height: 100rpx;
						margin: 0 30rpx;

						text {
							color: #333333;
						}

						.like_img {
							width: 100%;
							min-height: 100rpx;
							display: flex;
							justify-content: flex-start;
							flex-wrap: wrap;

							image {
								width: 30%;
								height: 180rpx;
								margin-bottom: 20rpx;
								margin-right: 2%;
							}
						}
					}
				}
			}
		}
	}

	.set-2::after {
		content: '';
		/* 必须存在如果没有图标就留空 */
		top: -20upx;
		/* 定位 距离*/
		border-left: #c6c6c6 1px solid;
		/* 横线颜色 */
		left: -44upx;
		/* 定位 距离*/
		height: 120%;
		/* 高度 */
		position: absolute;
		/* 定位 */
	}

	.set-2::before {
		content: "\e64d";
		/* 必须存在如果没有图标就留空 */
		color: #c6c6c6;
		/* 设置颜色 */
		position: absolute;
		/* 定位 */
		left: -70upx;
		top: -20upx;
		/* 移动到左边 */
		font-weight: bold;
		/* 图标样式在复制的图标文件中复制相对应的图标样式必须存在 */
		font-family: "iconfont" !important;
		/* 图标样式在复制的图标文件中复制相对应的图标样式必须存在 */
		font-size: 54upx;
		/* 图标大小 */
		font-style: normal;
		/* 图标样式在复制的图标文件中复制相对应的图标样式必须存在 */
		-webkit-font-smoothing: antialiased;
		/* 图标样式在复制的图标文件中复制相对应的图标样式必须存在 */
		-moz-osx-font-smoothing: grayscale;
		/* 图标样式在复制的图标文件中复制相对应的图标样式必须存在 */
	}

	@font-face {
		font-family: "iconfont";
		src: url('//at.alicdn.com/t/font_1337773_f06f5a7las.eot?t=1565581133395');
		/* IE9 */
		src: url('//at.alicdn.com/t/font_1337773_f06f5a7las.eot?t=1565581133395#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
			url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOIAAsAAAAAB8QAAAM7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqCRIIjATYCJAMUCwwABCAFhG0HZhvNBsiemjwJqJERRCC3tX4YOM4iqNbCnr29uw8wKGBUsUAKqDyCjY5HcEzCALron1wr8wDk8hKBFpIc5yaXfWZJoIBIQkF1KlvVqWuFfZ3c/CBw0p8fcMJJsQY6uIuEMk8188LgXgfHTJceiXlrm0tGajTgaMCz2T6yyf5BXh+Ef9BdxMSIS9cTaKmvYGbzFhRXA1sZ2C0QO7cRAdhadnmkNTSEqufYLM4qNdKx9AJn+M/Hb2OiQVIWwL6rNufIIP1bj29voaZspAiK/byITqLAaEAmdvX6d7KQ+dEstCw2tjQL0FJDkvZald8e//3y+WglCIaW0E/e5R8vERWvuTWY5RYy3/ywXBtKXBEF395EBN++FCQ8V5CWsmEt4CBgHMz1Ad8rde7s2LbD7oUhT3l+eWHbhxwOB+LFrfkVL7I3FIAWdpdWvfHiYt8FltYWdzy1Pz/WfPhQ/elT7efPvUJiVlRsIj8+18X3az7+5Wb48vVrbnvo7OndVe1cPc55k2ebWG7OmMgYX01bT3vJnNlJWtemes0mn3vI/PJl80NQQqVErfcH/Ys5Fy3evrVoyyZNDLSq/cp5EyYsKTbb69bD/+5fmPs/cFwxG9ABoCNdTY+AKrwdi2npHk0Xu4vMH/Q7Wl+4+Yftkv83kMHXTiVutOlsnh68ZYPZit+hmDmRSxVwlDnvxvI8WOq3gz4VCy3xE8Id/d7H2GV2M6Ghi4ak1gcKDYORGTsaSq2Mg0rDTGhplLyTW+mEsRC5BUYadyC0dwpJWw+h0N53ZMb+glJX/6DSPgpoaUN4nLOVobGtZdYuJHAkQ7EbqiVqwMjF7UVrJSKKTmCmitNrETOpUzAiNLxZykMGxPY4wNRBIjnHEDOqh7nOzZBOR6GRUQ2SeKiKc2NiWBju+6JQieqBvbkYRMAhMkjUDVKTUAaYzufsW99fCSEUOgI20rMQr4UwJurloQihwmcg8/SGWT3v8hKTDkQkjsMgjKH0oFzHi+hgnoKM/VtpIBIulGpF1ihRmDcLz9WHnm/Uv0BZNAD40zJSFJGjjEq77dsEg1ahKoF2qbupYvP0KNS2e69WbmucSNZAOpEa5XpUagAAAA==') format('woff2'),
			url('//at.alicdn.com/t/font_1337773_f06f5a7las.woff?t=1565581133395') format('woff'),
			url('//at.alicdn.com/t/font_1337773_f06f5a7las.ttf?t=1565581133395') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
			url('//at.alicdn.com/t/font_1337773_f06f5a7las.svg?t=1565581133395#iconfont') format('svg');
		/* iOS 4.1- */
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-yuandian:before {
		content: "\e64d";
	}

	.icon-dingweiweizhi:before {
		content: "\e619";
	}
</style>
