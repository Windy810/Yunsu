<script>

	import Vue from 'vue'
	import pageAnimation from './components/page-animation'

	export default {
		mixins: [pageAnimation],
		onLaunch () {
			uni.getSystemInfo({
				success (e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			});
      if (!uni.getStorageSync('accessToken')) {
        uni.removeTabBarBadge({
          index: 3
        });
      } else {
          if(uni.getStorageSync('cartNum') == 0) {
            uni.removeTabBarBadge({
              index: 3
            });
          } else {
             uni.setTabBarBadge({
              index: 3,
              text: uni.getStorageSync('cartNum').toString()
            });
          }
      }
		},
		onHide () {
		},
	}
</script>

<style lang='scss'>
	@import url("/common/colorui/main.css");
	@import url("/common/colorui/icon.css");
	@import url("/common/colorui/animation.css");
	@import url("/common/css/iconfont/iconfont.css");
	@import url("/common/css/reset.scss");
	@import url("/common/css/uni.scss");
  /*@import "@/common/css/reset";*/
  /*@import "@/common/css/uni";*/
</style>
