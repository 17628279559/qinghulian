<template>
	<view class="myWaterFullContent">
		<image class="myWaterFullContent__image" :src="data.mainImage" mode="widthFix"/>
		<view class="myWaterFullContent__info">
			<view>
				<image class="myWaterFullContent__info__image" :src="data.header_image" mode="aspectFill"></image>
			</view>
			<text class="myWaterFullContent__info__text">{{data.textType}} | {{ data.text.length < 12 ? data.text : data.text.slice(0,12)+"..."  }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "myWaterFullContent",
		props: {
			data: {
				// 瀑布流数据
				type: Object,
				required: true,
			},
		},
		data() {
			return {
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.myWaterFullContent{
		padding: 10rpx;
		margin: 15rpx 5rpx;
		display: flex;
		flex-wrap: wrap;
		&__image{
			width: 100%;
			max-height: 400rpx;
			border-radius: 20rpx;
			box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.11);
		}
		
		&__info{
			display: flex;
			&__image{
				margin:8rpx;
				height: 42rpx;
				width:42rpx;
				border-radius: 21rpx;
			}
			&__text{
				margin-top:15rpx;
				font-size: 26rpx;
			}
		}
	}
</style>
