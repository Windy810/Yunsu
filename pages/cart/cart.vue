<template>
  <view class="cart">
    <view class="header" :style="{position:headerPosition,top:headerTop}">
      <view class="title">购物车</view>
    </view>
    <!-- 占位 -->
    <view class="place"></view>
    <!-- 购物车为空 -->
    <view v-if="cartList.length === 0" class="empty">
      <image src="/static/emptyCart.jpg" mode="aspectFit"></image>
      <view v-if="token" class="empty-tips">
        空空如也
        <navigator class="navigator" v-if="token" url="../category/category" open-type="navigate">随便逛逛></navigator>
      </view>
      <view v-else class="empty-tips">
        空空如也
        <view class="navigator" @tap="navTo('/pages/public/logintype')">去登陆></view>
      </view>
    </view>
    <!-- 购物车列表 -->
    <view class="goods-list" v-else>
      <view class="row" v-for="(row,index) in cartList" :key="index">
        <!-- 删除按钮 -->
        <view class="menu" @tap.stop="deleteCartItem(row.sku_id, 'one')">
          <i class="iconfont icon iconiconfontshanchu1"></i>
        </view>
        <!-- 商品 -->
        <view class="carrier" :class="[theIndex==index?'open':oldIndex==index?'close':'']"
              @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)"
              @touchend="touchEnd(index,$event)">
          <!-- checkbox -->
          <view class="checkbox-box" @tap="selected(index)">
            <view class="checkbox">
              <view :class="[row.selected?'on':'']"></view>
            </view>
          </view>
          <!-- 商品信息 -->
          <view class="goods-info" @tap="navTo(`/pages/product/product?id=${row.product.id}`)">
            <view class="img">
              <image :src="row.product_img"></image>
            </view>
            <view class="info">
              <view class="title in2line">{{row.product_name}}</view>
              <view class="spec" @tap.stop="toggleSpec(row)">{{row.sku_name || '基础版'}}</view>
              <view class="price-number">
                <view class="price">{{row.sku && row.sku.price}}</view>
                <view class="number">
                  <view class="sub" @tap.stop="sub(row, index)">
                    <i class="iconfont icon icon-jianhao"></i>
                  </view>
                  <view class="input" @tap.stop="discard">
                    <input type="number" v-model="row.number" @input.stop="numberChange(row, $event,index)"/>
                  </view>
                  <view class="add" @tap.stop="add(row, index)">
                    <i class="iconfont icon iconjia1"></i>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 脚部菜单 -->
    <view class="footer" :style="{bottom: footerbottom}" v-if="cartList.length !== 0">
      <view class="checkbox-box" @tap="allSelect">
        <view class="checkbox">
          <view :class="[isAllselected?'on':'']"></view>
        </view>
        <view class="text">全选</view>
      </view>
      <view class="delBtn del" @tap="deleteCartItem" v-if="selectedList.length>0">删除</view>
      <view class="delBtn" @tap="clearCart" v-if="selectedList.length>0">清空</view>
      <view class="settlement">
        <view class="sum">合计:
          <view class="money">￥{{sumPrice}}</view>
        </view>
        <view class="btn" @tap="createOrder">结算({{selectedList.length}})</view>
      </view>
    </view>
    <!-- 规格-模态层弹窗 -->
    <view
        class="popup spec"
        :class="specClass"
        @touchmove.stop.prevent="stopPrevent"
        @tap="hideSpec"
    >
      <!-- 遮罩层 -->
      <view class="mask" @tap="hideSpec"></view>
      <view class="layer attr-content" @tap.stop="stopPrevent">
        <view class="a-t">
          <image :src="showTypeImage || productDetail.picture"></image>
          <view class="right">
            <text class="title">{{ productDetail.name }}</text>
            <text class="price">¥{{ currentSkuPrice || productDetail.minSkuPrice }}</text>
            <text class="stock">库存：{{ currentStock || productDetail.stock }}件</text>
            <view class="selected" v-if="specSelected.length > 0">
              已选：
              <text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
                {{sItem.title}}
              </text>
              <text v-show="specSelected.length > 0">
                * {{ cartCount }}
              </text>
            </view>
          </view>
        </view>
        <view v-for="(item,index) in specList" :key="index" class="attr-list">
          <text>{{item.title}}</text>
          <view class="item-list">
            <view class="tit"
                  v-for="(childItem, childIndex) in specChildList"
                  v-if="childItem.base_spec_id === item.base_spec_id"
                  :key="childIndex"
                  :class="{selected: childItem.selected}"
                  :style="childItem.selected && parseInt(item.show_type) === 2 ? styleObject: ''"
                  @tap="selectSpec(childIndex, childItem.base_spec_id, item.show_type)"
            >
              <text v-show="parseInt(item.show_type) === 1">
                {{childItem.title }}
              </text>
              <text v-show="parseInt(item.show_type) === 2">
                {{childItem.title }}
              </text>
              <view v-show="parseInt(item.show_type) === 3">
                <image
                    class="img"
                    :src="childItem.data || productDetail.picture"
                    mode="aspectFill"
                ></image>
                {{childItem.title }}
              </view>
            </view>
          </view>
        </view>
        <button class="btn" @tap="toggleSpec">完成</button>
      </view>
    </view>
    
    <!--页面加载动画-->
    <rf-loading v-if="loading"></rf-loading>
  </view>
</template>

<script>
	import {
		cartItemClear,
		cartItemDel,
		cartItemList,
		cartItemUpdateNum,
		cartItemUpdateSku,
		productDetail
	} from "@/api/product";
	export default {
		data() {
			return {
				sumPrice: '0.00',
				headerPosition: "fixed",
				headerTop: null,
				statusTop: null,
				showHeader: true,
				selectedList: [],
				isAllselected: false,
				//控制滑动效果
				theIndex: null,
				oldIndex: null,
				isStop: false,
				cartList: [],
				token: null,
				oldDiscount: 0,
				footerbottom: 0,
				specClass: 'none',
				showTypeImage: null,
				productDetail: {},
				specSelected: [],
				specChildList: [],
				specList: [],
				currentStock: 0,
				currentSkuPrice: 0,
				cartCount: 0,
				currentSkuId: null,
				currentNewSkuId: null,
				styleObject: {},
        loading: true,
			}
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
			this.headerTop = e.scrollTop >= 0 ? null : 0;
			this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			this.selectedList.length = 0;
			this.isAllselected = false;
			this.sumPrice = 0;
			this.getCartItemList('refresh');
		},
		onShow() {
			//兼容H5下结算条位置
			// #ifdef H5
			this.footerbottom = document.getElementsByTagName('uni-tabbar')[0].offsetHeight + 'px';
			// #endif
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			this.initData();
		},
		methods: {
			//规格弹窗开关
			toggleSpec(row) {
				if (this.specClass === 'show') {
					if (!this.token) {
						this.specClass = 'none';
						this.$api.msg('请您先登录！');
						return;
					}
					if (this.specSelected.length < this.productDetail.base_attribute_format.length) {
						this.$api.msg('请先选择规格');
						return;
					}
					this.handleCartItemUpdateSku(this.currentSkuId, this.currentNewSkuId);
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				} else if (this.specClass === 'none') {
					this.specClass = 'show';
					if (row) {
						this.specChildList = [];
						this.cartCount = row.number;
						this.getProductDetail(row);
					}
				}
			},
			//选择规格
			selectSpec(index, pid, type) {
				let list = this.specChildList;
				list.forEach(item => {
					if (item.base_spec_id === pid) {
						this.$set(item, 'selected', false);
					}
				});
				if (parseInt(type, 10) === 3) {
					this.showTypeImage = list[index].data;
				}
				if (parseInt(type, 10) === 2) {
					this.styleObject = {
						color: list[index].data,
						// border: `1px solid ${list[index].data}`,
					};
				}
				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = [];
				list.forEach(item => {
					if (item.selected === true) {
						this.specSelected.push(item);
					}
				})
				let skuStr = [];
				this.specSelected.forEach(item => {
					skuStr.push(item.base_spec_value_id)
				})
				this.productDetail.sku.forEach(item => {
					if (item.data === skuStr.join('-')) {
						this.currentStock = item.stock;
						this.currentSkuPrice = item.price;
						this.currentNewSkuId = item.id;
						return;
					}
				})
			},
			// 获取产品详情
			async getProductDetail(row) {
				this.currentSkuId = row.sku_id;
				this.currentNewSkuId = row.sku_id;
				await this.$get(`${productDetail}`, {
					id: row.product_id,
				}).then(async r => {
					this.productDetail = r.data;
					this.specList = this.productDetail.base_attribute_format;
					this.specList.forEach(item => {
						this.specChildList = [...this.specChildList, ...item.value]
					});
					/**
					 * 修复选择规格存储错误
					 * 将这几行代码替换即可
					 * 选择的规格存放在specSelected中
					 */
					this.specSelected = [];
					this.specChildList.forEach(item => {
						if (row.sku_name.indexOf(item.title) !== -1) {
							item.selected = true;
							this.specSelected.push(item);
						}
					})

					let skuStr = [];
					this.specSelected.forEach(item => {
						skuStr.push(item.base_spec_value_id)
					});
					this.productDetail.sku.forEach(item => {
						if (item.data === skuStr.join('-')) {
							this.currentStock = item.stock;
							this.currentSkuPrice = item.price;
							return;
						}
					});
				}).catch(err => {
					console.log(err)
				})
			},
			hideSpec() {
				this.specClass = 'hide';
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
			},
			stopPrevent() {
			},
			// 删除选中购物车商品
			async deleteCartItem(id, type) {
				const sku_ids = []
				if (type) {
					sku_ids.push(parseInt(id, 10))
				} else {
					for (let i = 0; i < this.cartList.length; i++) {
						if (this.cartList[i].selected) {
							sku_ids.push(parseInt(this.cartList[i].sku_id, 10));
						}
					}
				}
				await this.$post(`${cartItemDel}`, {
					sku_ids: JSON.stringify(sku_ids)
				}).then(r => {
					this.selectedList.length = 0;
					this.isAllselected = false;
					this.sumPrice = 0;
					this.getCartItemList();
					this.oldIndex = null;
					this.theIndex = null;
				}).catch(err => {
					console.log(err)
				})
			},
			// 修改购物车商品sku
			async handleCartItemUpdateSku(sku_id, new_sku_id) {
				await this.$post(`${cartItemUpdateSku}`, {
					sku_id,
					new_sku_id
				}).then(() => {
					this.selectedList.length = 0;
					this.isAllselected = false;
					this.sumPrice = 0;
					this.getCartItemList();
				}).catch(err => {
					console.log(err)
				})
			},
			// 数据初始化
			initData() {
				this.token = uni.getStorageSync('accessToken') || undefined
				if (this.token) {
          this.theIndex = null;
          this.oldIndex = null;
					this.selectedList.length = 0;
					this.isAllselected = false;
					this.sumPrice = 0;
					this.getCartItemList();
				} else {
				  this.loading = false;
					this.selectedList.length = 0;
				}
			},
			// 通用跳转
			navTo(url) {
				uni.navigateTo({
					url
				})
			},
			// 获取购物车列表
			async getCartItemList(type) {
				await this.$get(`${cartItemList}`, {}, {}, this).then(r => {
				  this.loading = false;
					if (type === 'refresh') {
						uni.stopPullDownRefresh();
					}
					this.cartList = r.data;
					uni.setStorageSync('cartNum', r.data.length)
					if (r.data.length == 0) {
						uni.removeTabBarBadge({index: 3});
						return;
					}
					uni.setTabBarBadge({
						index: 3,
						text: r.data.length.toString()
					});
				}).catch(() => {
				  this.loading = false;
					if (type === 'refresh') {
						uni.stopPullDownRefresh();
					}
				})
			},
			// 清空购物车
			clearCart() {
				uni.showModal({
					content: '清空购物车？',
					success: async (e) => {
						if (e.confirm) {
							await this.$post(`${cartItemClear}`).then(r => {
								this.selectedList.length = 0;
								this.isAllselected = false;
								this.sumPrice = 0;
								this.getCartItemList();
							}).catch(err => {
								console.log(err)
							})
						}
					}
				})
			},
			// 控制左滑删除效果
			touchStart(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				//初始坐标
				this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
			},
			touchMove(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];

				if (this.isStop || Math.abs(moveX) < 5) {
					return;
				}
				if (Math.abs(moveY) > Math.abs(moveX)) {
					// 竖向滑动-不触发左滑效果
					this.isStop = true;
					return;
				}

				if (moveX < 0) {
					this.theIndex = index;
					this.isStop = true;
				} else if (moveX > 0) {
					if (this.theIndex != null && this.oldIndex == this.theIndex) {
						this.oldIndex = index;
						this.theIndex = null;
						this.isStop = true;
						setTimeout(() => {
							this.oldIndex = null;
						}, 150)
					}
				}
			},
			touchEnd(index, $event) {
				//结束禁止触发效果
				this.isStop = false;
			},
			// 选中商品
			selected(index) {
				this.cartList[index].selected = this.cartList[index].selected ? false : true;
				let i = this.selectedList.indexOf(this.cartList[index].id);
				i > -1 ? this.selectedList.splice(i, 1) : this.selectedList.push(this.cartList[index].id);
				this.isAllselected = this.selectedList.length == this.cartList.length;
				this.sum();
			},
			// 全选商品
			allSelect() {
				let len = this.cartList.length;
				let arr = [];
				for (let i = 0; i < len; i++) {
					this.cartList[i].selected = this.isAllselected ? false : true;
					arr.push(this.cartList[i].id);
				}
				this.selectedList = this.isAllselected ? [] : arr;
				this.isAllselected = this.isAllselected || this.cartList.length == 0 ? false : true;
				this.sum();
			},
			// 减少数量(执行接口)
			sub(item, index) {
				if (this.cartList[index].number <= 1) {
					return;
				}
				this.cartList[index].number--;
				this.numberChange(item);
			},
			// 增加数量(执行接口)
			add(item, index) {
				this.cartList[index].number++;
				this.numberChange(item, undefined, index, 'add');
			},
			// 控制可输入购物车商品数量
			discard() {
			},
			// 监听购物车商品数量改变
			async numberChange(item, data, index, type) {
				if (data) {
					this.cartList[index].number = data.detail.value;
				}
				
				await this.$post(`${cartItemUpdateNum}`, {
					sku_id: item.sku_id,
					num: item.number
				}).then(r => {
					if (r.code === 200) {
						this.sum();
					} else {
						if (type === 'add') {
							this.cartList[index].number--;
						}
						this.$api.msg(r.message);
					}
				}).catch(err => {
					if (type === 'add') {
						this.cartList[index].number--;
					}
					console.log(err)
				})
			},
			// 创建订单
			async createOrder() {
				if (this.selectedList.length === 0) return;
				const data = {};
				const ids = [];
				let len = this.cartList.length;
				for (let i = 0; i < len; i++) {
					if (this.cartList[i].selected) {
						ids.push(parseInt(this.cartList[i].id, 10));
					}
				}
				data.type = 'cart';
				data.data = ids.join(',');
				this.selectedList.length = 0;
				this.isAllselected = false;
				this.sumPrice = 0;
				this.navTo(`/pages/order/createOrder?data=${JSON.stringify(data)}`);
			},
			// 合计
			sum() {
				this.sumPrice = 0;
				let len = this.cartList.length;
				const arr = []
				for (let i = 0; i < len; i++) {
					if (this.cartList[i].selected) {
						arr.push(this.cartList[i]);
						this.sumPrice = this.arrSort(arr);
					}
				}
				this.sumPrice = this.sumPrice.toFixed(2);
			},
			// 向下舍去小数点后两位
			floor(val) {
				return Math.floor(val * 100) / 100;
			},
			// 计算相同商品不同规格价格
			arrSort(arr) {
				const map = {},
					dest = [];
				for (let i = 0; i < arr.length; i++) {
					const ai = arr[i];
					if (!map[ai.product.id]) {
						dest.push({
							id: ai.product.id,
							num: 0,
							price: 0,
							data: [ai]
						});
						map[ai.product.id] = ai;
					} else {
						for (let j = 0; j < dest.length; j++) {
							const dj = dest[j];
							if (dj.data[0].product.id === ai.product.id) {
								dj.data.push(ai);
								break;
							}
						}
					}
				}
				const discountArr = []
				dest.forEach(item => {
					item.data.forEach(item2 => {
						item.num += parseInt(item2.number, 10)
						item.price += parseInt(item2.number, 10) * item2.price;
					})
					const ladderPreferential = item.data[0].ladderPreferential;
					for (let i = 0; i < ladderPreferential.length; i++) {
						if (item.num >= parseInt(ladderPreferential[i].quantity, 10)) {
							ladderPreferential[i].num = item.num
							ladderPreferential[i].itemPrice = item.data[0].price
							ladderPreferential[i].totalPrice = item.price
							discountArr.push(ladderPreferential[i])
							break;
						}
					}
				});
				let amount = 0;
				let discount = 0;
				discountArr.forEach(item2 => {
					if (parseInt(item2.type, 10) === 1) {
						discount += item2.price * item2.num
					} else {
						discount += (item2.totalPrice - this.floor(item2.itemPrice * item2.price / 100) * item2.num)
					}
				});
				dest.forEach(item => {
					amount += item.price;
				});
				return amount - discount;
			}
		}
	}
</script>
<style lang="scss">
  page {
    position: relative;
    background-color: #fff;
  }

  .checkbox-box {
    display: flex;
    align-items: center;

    .checkbox {
      width: 35upx;
      height: 35upx;
      border-radius: 100%;
      border: solid 2upx $base-color;
      display: flex;
      justify-content: center;
      align-items: center;

      .on {
        width: 25upx;
        height: 25upx;
        border-radius: 100%;
        background-color: $base-color;
      }
    }

    .text {
      font-size: 28upx;
      margin-left: 10upx;
    }
  }

  .status {
    width: 100%;
    height: 0;
    position: fixed;
    z-index: 10;
    background-color: #fff;
    top: 0;
    /*  #ifdef  APP-PLUS  */
    height: var(--status-bar-height); //覆盖样式
    /*  #endif  */
  }

  .header {
    width: 92%;
    padding: 0 4%;
    height: 100upx;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: #fff;
    /*  #ifdef  APP-PLUS  */
    top: var(--status-bar-height);
    /*  #endif  */
    .title {
      font-size: 36upx;
    }

  }

  .place {
    background-color: #ffffff;
    height: 100upx;
    /*  #ifdef  APP-PLUS  */
    margin-top: var(--status-bar-height);
    /*  #endif  */
  }

  .goods-list {
    width: 100%;
    padding: 20upx 0 100upx 0;

    .tis {
      width: 100%;
      height: 60upx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32upx;
    }

    .row {
      width: calc(92%);
      height: calc(22vw + 40upx);
      margin: 20upx auto;
      border-radius: 15upx;
      box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      z-index: 4;
      border: 0;

      .menu {
        .icon {
          color: #fff;
          font-size: 60upx;
        }

        position: absolute;
        width: 30%;
        height: 100%;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
        color: #fff;
        z-index: 2;
      }

      .carrier {
        @keyframes showMenu {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-30%);
          }
        }
        @keyframes closeMenu {
          0% {
            transform: translateX(-30%);
          }
          100% {
            transform: translateX(0);
          }
        }

        &.open {
          animation: showMenu 0.25s linear both;
        }

        &.close {
          animation: closeMenu 0.15s linear both;
        }

        background-color: #fff;

        .checkbox-box {
          padding-left: 20upx;
          flex-shrink: 0;
          height: 22vw;
          margin-right: 20upx;
        }

        position: absolute;
        width: 100%;
        padding: 0 0;
        height: 100%;
        z-index: 3;
        display: flex;
        align-items: center;

        .goods-info {
          width: 100%;
          display: flex;
          padding-right: 20upx;

          .img {
            width: 22vw;
            height: 22vw;
            border-radius: 10upx;
            overflow: hidden;
            flex-shrink: 0;
            margin-right: 10upx;

            image {
              width: 22vw;
              height: 22vw;
            }
          }

          .info {
            width: 100%;
            height: 22vw;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            position: relative;

            .title {
              width: 100%;
              font-size: $font-base;
              line-height: 40upx;
              height: 80upx
            }

            .spec {
              margin-top: 10upx;
              font-size: 20upx;
              background-color: #f3f3f3;
              color: #a7a7a7;
              height: 20upx;
              display: flex;
              align-items: center;
              padding: 0 10upx;
              border-radius: 15upx;
              margin-bottom: 20vw;
            }

            .price-number {
              position: absolute;
              width: 100%;
              bottom: 0upx;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              font-size: 28upx;
              height: 60upx;
              .price {
                &:before{
                  content: '￥';
                  font-size: 26upx;
                }
              }
              .number {
                display: flex;
                justify-content: center;
                align-items: flex-end;

                .input {
                  width: 60upx;
                  height: 60upx;
                  margin: 0 10upx;
                  background-color: #f3f3f3;

                  input {
                    width: 60upx;
                    height: 60upx;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-size: 26upx;
                    color: $base-color;
                  }
                }

                .sub, .add {
                  width: 45upx;
                  height: 45upx;
                  background-color: #f3f3f3;
                  border-radius: 5upx;

                  .icon {
                    font-size: 22upx;
                    width: 45upx;
                    height: 45upx;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .empty {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    padding-bottom: 100upx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #fff;

    image {
      width: 240upx;
      height: 160upx;
      margin-bottom: 30upx;
    }

    .empty-tips {
      display: flex;
      font-size: $font-sm+2upx;
      color: $font-color-disabled;

      .navigator {
        color: $uni-color-primary;
        margin-left: 16upx;
      }
    }
  }

  .footer {
    width: 100%;
    padding: 0 2%;
    background-color: #fbfbfb;
    height: 100upx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28upx;
    position: fixed;
    bottom: 0upx;
    z-index: 5;

    .delBtn {
      border: solid 1upx $base-color;
      color: $base-color;
      padding: 0 24upx;
      height: 42upx;
      border-radius: 24upx;
      font-size: $font-sm;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .settlement {
      width: 52%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .sum {
        font-size: $font-base;
        margin-right: 8upx;
        display: flex;
        justify-content: flex-end;

        .money {
          font-weight: 600;
        }
      }

      .btn {
        padding: 0 26upx;
        height: 50upx;
        background-color: $base-color;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30upx;
      }
    }
  }

  /*  弹出层 */
  .popup {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;

    &.show {
      display: block;

      .mask {
        animation: showPopup 0.2s linear both;
      }

      .layer {
        animation: showLayer 0.2s linear both;
      }
    }

    &.hide {
      .mask {
        animation: hidePopup 0.2s linear both;
      }

      .layer {
        animation: hideLayer 0.2s linear both;
      }
    }

    &.none {
      display: none;
    }

    .mask {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .layer {
      position: fixed;
      z-index: 99;
      bottom: 90upx;
      width: 100%;
      border-radius: 10upx 10upx 0 0;
      background-color: #fff;

      .content {
        width: 100%;
        padding: 20upx 0;
      }

      .btn {
        height: 66upx;
        line-height: 66upx;
        border-radius: 100upx;
        background: $uni-color-primary;
        font-size: $font-base + 2upx;
        color: #fff;
        margin: 30upx 30upx 20upx;
      }
    }

    .layer-service {
      min-height: 600upx;

      .btn {
        width: calc(100% - 60upx);
        position: absolute;
        bottom: 0;
      }
    }

    &.service {
      min-height: 600upx;

      .row {
        margin: 30upx;

        .title {
          font-size: 30upx;
          margin: 10upx 0;
        }

        .description {
          font-size: 28upx;
          color: #999;
        }
      }
    }

    @keyframes showPopup {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes hidePopup {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes showLayer {
      0% {
        transform: translateY(120%);
      }
      100% {
        transform: translateY(0%);
      }
    }
    @keyframes hideLayer {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(120%);
      }
    }
  }

  /* 规格选择弹窗 */
  .attr-content {
    padding: 10upx 30upx;

    .select-count {
      padding: 30upx 0 10upx;
      margin: 20upx 0;
      border-top: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      position: relative;
      font-size: $font-base + 6upx;
      color: $font-color-base;
      line-height: 60upx;

      .step {
        position: absolute;
        left: 60vw;
        bottom: 10upx;
      }
    }

    .a-t {
      display: flex;

      image {
        width: 170upx;
        height: 170upx;
        flex-shrink: 0;
        margin-top: -40upx;
        border-radius: 8upx;;
      }

      .right {
        display: flex;
        flex-direction: column;
        padding-left: 24upx;
        font-size: $font-sm + 2upx;
        color: $font-color-base;
        line-height: 42upx;

        .price {
          font-size: $font-lg;
          color: $uni-color-primary;
          margin-bottom: 10upx;
        }

        .selected-text {
          margin-right: 10upx;
        }
      }
    }

    .attr-list {
      display: flex;
      flex-direction: column;
      font-size: $font-base + 2upx;
      color: $font-color-base;
      padding-top: 30upx;
      padding-left: 10upx;
    }

    .item-list {
      padding: 20upx 0 0;
      display: flex;
      flex-wrap: wrap;

      .tit {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #eee;
        margin-right: 20upx;
        margin-bottom: 20upx;
        border-radius: 100upx;
        min-width: 60upx;
        height: 60upx;
        padding: 0 20upx;
        font-size: $font-base;
        color: $font-color-dark;

        .img {
          width: 36upx;
          height: 24upx;
          margin: 0 4upx;
        }
      }

      .selected {
        background: #fbebee;
        color: $uni-color-primary;
      }
    }
  }
</style>
