<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			uni.hideTabBar(),
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onPageNotFound(){
			uni.navigateTo({
				url:"pages/404/404"
			})
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './tuniao-ui/index.scss';
	@import './tuniao-ui/iconfont.css';
</style>
