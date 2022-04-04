<template>
	<view>
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
	export default {
		props:["pageNum","switchTabbar"],
		data() {
			return {
			}
		},
		methods: {
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
