<template>
	<view>
		<loading 
		    ref="loading"
		    :custom="false"
		    :shadeClick="true"
		    :type="1"
		    @callback="callback()">
		        <!-- <view class="test">自定义</view> -->
		</loading>
		<web-view :src="url"></web-view>
	</view>

</template>

<script>
	import loading from '../../components/xuan-loading/xuan-loading.vue'
	
	export default {
		components:{
			loading
		},
		data() {
			return {
				url:"https://viewweiwu.github.io/",
				loading: true,
			};
		},
		mounted() {
			this.open();
			setTimeout(()=>{
				this.close();
			},12000)
		},
		methods: {
			
			close:function(){
				this.$refs.loading.close();
			},
			open:function(){
				this.$refs.loading.open();
			},
			callback(){
				console.log("关闭后回掉");
			}
		}
	}
</script>

<style>

</style>
