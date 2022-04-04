<template>
	<view>
		<tn-nav-bar :height="140" backIcon="close" barsize=24 fixed>
			<view class="header-content">
				<image class="header-content__image" src="https://code.zwt666.top/img/header.jpg" mode="aspectFill" ></image>
				<text class="header-content__name">哈喽哈喽嘿？</text>
			</view>
		</tn-nav-bar>
		<tn-scroll-list :indicator="false">
		  <view class="tn-flex tn-margin-sm">
		    <block v-for="(item, index) in 14" :key="index">
				<tn-tag backgroundColor="tn-cool-bg-color-7" fontColor="tn-color-white" margin="10rpx 10rpx" shape="circle">{{item.value}}</tn-tag>
		    </block>
		  </view>
		</tn-scroll-list>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
			}
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>
	.header-content{
		display:flex;
		&__image{
				display: inline-flex;
				margin-top: 42rpx;
				width:56rpx;
				height:56rpx;
				border-radius: 28rpx;
		}
		
		&__name{
			margin-left: 20rpx;
			color: #434343;
			font-size:28rpx;
		}
	}
</style>