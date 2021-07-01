<template>
	<view class="list-container">
		<view id="wf-list" class="list" v-for="(list,listIndex) of viewList" :key="listIndex">
            <view class="item" v-for="(item,index) of list.list" :key="index">
                <image :id="'id'+item.id"  @load="handleImgLoad()" @error="handleImgLoad()" :src="item.image" mode="widthFix"></image>
                <view class="desc">id:{{item.id+','+item.content}}</view>
            </view>
        </view>
	</view>
</template>

<script>
    const list = require('./data.json').list
	export default {
		data() {
			return {
				list,   //实际请求获取的列表数据
                viewList:[{list:[]},{list:[]}]  //展示到视图的列表数据
			}
		},
		methods: {
            init(){
                this.viewList[0].list = [this.list[0]]
            },
			handleImgLoad(){
                const index = this.viewList.reduce((total,current)=>total + current.list.length,0)
                if(index>this.list.length-1) return;
                const query = uni.createSelectorQuery().in(this);
                let listFlag = 0;
                query.selectAll('#wf-list').boundingClientRect(data => {
                    listFlag = data[0].bottom - data[1].bottom<0?0:1;
                    this.viewList[listFlag].list.push(this.list[index])
                }).exec()
            },
		},
        onLoad() {
            this.init()
        }
	}
</script>

<style lang="stylus" scoped>
    .list-container
        display flex
        justify-content space-between
        align-items:flex-start
        padding 0 24rpx
        padding-top 30rpx
        .list
            width calc(50% - 8rpx)
            display flex
            flex-direction column
            .item
                margin-bottom 18rpx
                border 1px solid red
                image
                    width 100%
                .desc
                    padding 16rpx
                    font-size 28rpx
</style>
