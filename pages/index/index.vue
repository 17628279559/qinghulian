<template>
	<view>
		<Home v-if="pageNum === 0"></Home>
		<Found v-if="pageNum === 1"></Found>
		<Release v-if="pageNum === 2"></Release>
		<Guide v-if="pageNum === 3"></Guide>
		<Mine v-if="pageNum === 4"></Mine>
		
		<u-back-top :scroll-top="scrollTop" icon="arrow-up"></u-back-top>
		<u-tabbar
			:value="pageNum"
			@change="switchTabbar"
			:fixed="true"
			:placeholder="true"
			:border="false"
			:animation="true"
			:safeAreaInsetBottom="false"
			activeColor="#95EC6A"
		>
			<u-tabbar-item text="首页">	
				<image
					class = "bar-icon"
					slot="active-icon"
					src="/static/tabbar-icons/home/2.png"
					mode="aspectFit"
				></image>
				<image
					class = "bar-icon"
					slot="inactive-icon"
					src="/static/tabbar-icons/home/1.png"
					mode="aspectFit"
				></image>	
			</u-tabbar-item>
			<u-tabbar-item text="发现">
				<image
					class = "bar-icon"
					slot="active-icon"
					src="/static/tabbar-icons/found/2.png"
					mode="aspectFit"
				></image>
				<image
					class = "bar-icon"
					slot="inactive-icon"
					src="/static/tabbar-icons/found/1.png"
					mode="aspectFit"
				></image>	
			</u-tabbar-item>
			<u-tabbar-item >
				<image
					class="bar-circle"
					slot="active-icon"
					src="/static/tabbar-icons/release/1.png"
					mode="scaleToFill"
				></image>
				<image
					class="bar-circle"
					slot="inactive-icon"
					src="/static/tabbar-icons/release/1.png"
					mode="scaleToFill"
				></image>
			</u-tabbar-item>
			<u-tabbar-item text="指南" >
				<image
					class = "bar-icon"
					slot="active-icon"
					src="/static/tabbar-icons/guide/2.png"
					mode="aspectFit"
				></image>
				<image
					class = "bar-icon"
					slot="inactive-icon"
					src="/static/tabbar-icons/guide/1.png"
					mode="aspectFit"
				></image>	
			</u-tabbar-item>
			<u-tabbar-item text="我的" >
				<image
					class = "bar-icon"
					slot="active-icon"
					src="/static/tabbar-icons/mine/2.png"
					mode="aspectFit"
				></image>
				<image
					class = "bar-icon"
					slot="inactive-icon"
					src="/static/tabbar-icons/mine/1.png"
					mode="aspectFit"
				></image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import Home from "../home/home.vue"
	import Found from "../found/found.vue"
	import Release from "../release/release.vue"
	import Guide from "../guide/guide.vue"
	import Mine from "../mine/mine.vue"
export default {
	components: {
	    Home,
	    Found,
		Release,
	    Guide,
	    Mine
	  },
	  data() {
	    return {
		// tabbar当前被选中的序号
		  pageNum:0,
	      scrollTop:0,
	      // 自定义底栏对应页面的加载情况
	      tabberPageLoadFlag: []
	    }
	  },
	  onLoad(options) {
	    const index = Number(options.index || 0)
	    // 根据底部tabbar菜单列表设置对应页面的加载情况
	    this.switchTabbar(index)
	  },
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
    onReachBottom() {
    },
    methods: {
      // 切换导航
      async switchTabbar(index) {
        await this._switchTabbarPage(index); 
		uni.pageScrollTo({
		         scrollTop: 0, //距离页面顶部的距离
		         duration: 0,
		});
      },
      
      // 导航页面滚动到底部
      tabbarPageScrollLower(e) {
      },
      
      // 切换导航页面
      _switchTabbarPage(index) {
        this.pageNum = index;
      }
    }
  }
</script>

<style>
	.bar-icon{
		width: 55rpx;
		position: relative;
		display: block;
		height: 55rpx;
		font-size: 30rpx;
	}
	  
	.bar-circle {
		position: relative;
		display: block;
		margin-bottom: 55rpx;
		line-height: 120rpx;
		width: 120rpx !important;
		height: 120rpx !important;
		overflow: hidden;
		border-radius: 50%;
		box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(69, 156, 26, 0.3);
	}
</style>
