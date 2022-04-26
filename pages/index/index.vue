<template>
	<view>
		<Home v-if="pageNum === 0"></Home>
		<Found v-if="pageNum === 1"></Found>
		<Guide v-if="pageNum === 3"></Guide>
		<Mine v-if="pageNum === 4"></Mine>


		<u-back-top :scroll-top="scrollTop" icon="arrow-up"></u-back-top>
		<u-tabbar :value="pageNum" @change="switchTabbar" :fixed="true" :placeholder="true" :border="false"
			:animation="true" :safeAreaInsetBottom="false" activeColor="#95EC6A">
			<u-tabbar-item text="首页">
				<image class="bar-icon" slot="active-icon" src="/static/tabbar-icons/home/2.png" mode="aspectFit">
				</image>
				<image class="bar-icon" slot="inactive-icon" src="/static/tabbar-icons/home/1.png" mode="aspectFit">
				</image>
			</u-tabbar-item>
			<u-tabbar-item text="发现">
				<image class="bar-icon" slot="active-icon" src="/static/tabbar-icons/found/2.png" mode="aspectFit">
				</image>
				<image class="bar-icon" slot="inactive-icon" src="/static/tabbar-icons/found/1.png" mode="aspectFit">
				</image>
			</u-tabbar-item>
			<u-tabbar-item>
				<image class="bar-circle" slot="active-icon" src="/static/tabbar-icons/release/1.png"
					mode="scaleToFill"></image>
				<image class="bar-circle" slot="inactive-icon" src="/static/tabbar-icons/release/1.png"
					mode="scaleToFill"></image>
			</u-tabbar-item>
			<u-tabbar-item text="指南">
				<image class="bar-icon" slot="active-icon" src="/static/tabbar-icons/guide/2.png" mode="aspectFit">
				</image>
				<image class="bar-icon" slot="inactive-icon" src="/static/tabbar-icons/guide/1.png" mode="aspectFit">
				</image>
			</u-tabbar-item>
			<u-tabbar-item text="我的">
				<image class="bar-icon" slot="active-icon" src="/static/tabbar-icons/mine/2.png" mode="aspectFit">
				</image>
				<image class="bar-icon" slot="inactive-icon" src="/static/tabbar-icons/mine/1.png" mode="aspectFit">
				</image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import Home from "../home/home.vue"
	import Found from "../found/found.vue"
	import Guide from "../guide/guide.vue"
	import Mine from "../mine/mine.vue"
	import cloudApi from "../../common/cloudApi.js"
	export default {
		components: {
			Home,
			Found,
			Guide,
			Mine
		},
		data() {
			return {
				// tabbar当前被选中的序号
				token: "",
				pageNum: 0,
				scrollTop: 0,
			}
		},
		async onLoad(options) {
			uni.login({
				provider: "weixin",
				success: res => {
					let code = res.code;
					uniCloud.callFunction({
						name: "login",
						data: {
							code,
						},
						success: (res) => {
							getApp().globalData.userInfo = res.result.user
							this.token = res.result.token
							if (!getApp().globalData.userInfo.hasOwnProperty('avatarUrl')){
								this.modal()
							}
						}
					})
				}
			})
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onReachBottom() {},
		methods: {
			// 切换导航
			async switchTabbar(index) {
				if (index !== 2) {
					await this._switchTabbarPage(index);
					uni.pageScrollTo({
						scrollTop: 0, //距离页面顶部的距离
						duration: 0,
					});
				} else {
					uni.navigateTo({
						url: "/subpages/release/release",
						animationType: 'slide-in-bottom',
						animationDuration: 100
					})
				}
			},
			getWxInfo() {
				let _this=this
				uni.getUserProfile({
					desc: "用于展示您的头像",
					success: (res) => {
						console.log("用于展示您的头像")
						cloudApi.call({
							name: "updateUserInfo",
							data: {
								userInfo:res.userInfo,
								token: _this.token
							},
							success: (nres) => {
								getApp().globalData.userInfo = nres.result.data
							}
						})
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},

			modal(){
				let _this = this
				uni.showModal({
				    title: '温馨提示',
				    content: '亲,需要微信授权才可以使用小程序功能嗷',
				    success: function (res) {
				        if (res.confirm) {
				            _this.getWxInfo()
				        } else if (res.cancel) {
				            uni.navigateBackMiniProgram()
				        }
				    }
				});
			},
			// 导航页面滚动到底部
			tabbarPageScrollLower(e) {},

			// 切换导航页面
			_switchTabbarPage(index) {
				this.pageNum = index;
			}
		}
	}
</script>

<style lang="scss">
	.bar-icon {
		width: 55rpx;
		position: relative;
		display: block;
		height: 55rpx;
		font-size: 30rpx;
		margin-bottom: 10rpx;
	}

	.bar-circle {
		position: relative;
		display: block;
		margin-bottom: 70rpx;
		line-height: 120rpx;
		width: 120rpx !important;
		height: 120rpx !important;
		overflow: hidden;
		border-radius: 50%;
		box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(69, 156, 26, 0.3);
	}
	
	.modal-tuqi{
		width: 100%;
		margin-top: 35rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap:wrap;
			
		&__title{
			font-size: 30rpx;
			margin-bottom: 15rpx;
		}
		&__button{
			display: flex;
		}
	}
</style>
