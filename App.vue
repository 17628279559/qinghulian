<script>
	export default {
		globalData:{
			userInfo:{}
		},
		onLaunch: function() {
		},
		onShow: function() {
			uni.hideTabBar()
		},
		onHide: function() {
		},
		onPageNotFound(){
			uni.navigateTo({
				url:"pages/404/404"
			})
		}
	}
</script>

<style lang="scss">
	@import './tuniao-ui/index.scss';
	@import './tuniao-ui/iconfont.css';
</style>
