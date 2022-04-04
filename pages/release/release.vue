<template>
	<view>
		<tn-nav-bar :height="160" backIcon="close" barsize=24 fixed>
			<view class="header-content">
				<image class="header-content__image" src="https://code.zwt666.top/img/header.jpg" mode="aspectFill" ></image>
				<text class="header-content__name">哈喽哈喽嘿？</text>
			</view>
		</tn-nav-bar>
		<view class="tag-list">
			<tn-scroll-list :indicator="false">
			  <view class="tn-flex tn-margin-sm">
			    <block v-for="(item, index) in tag" :key="index">
					<view class="tag" @click="changetag(item)">
						<tn-tag v-if="index === chose" :width="getTagWidth(item.value.length)" backgroundColor="tn-cool-bg-color-7" fontColor="tn-color-white" margin="0rpx 10rpx" shape="circle">{{item.value}}</tn-tag>
						<tn-tag v-else :plain="true" :width="getTagWidth(item.value.length)" backgroundColor="#848484" margin="0rpx 10rpx" shape="circle">{{item.value}}</tn-tag>
					</view>
			    </block>
			  </view>
			</tn-scroll-list>
		</view>
		<view class="border-content tn-border-solid-top"></view>
		<form action="">
			<view class="published">
				<text class="published__tag">{{choseTag}}</text>
				<text class="published__split">|</text>
				<input class="published__title" placeholder="填写标题更容易被看到哦"></text>
			</view>
			<view class="border-content tn-border-solid-top"></view>
			<input class="published__text" placeholder="添加正文"></text>
		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				chose:-1,
				choseTag:"请选择标签",
				tag:[
					{index:0,value:"#组队"},
					{index:1,value:"#表白"},
					{index:2,value:"#二手闲置"},
					{index:3,value:"#求问"},
					{index:4,value:"#代取"},
					{index:5,value:"#拼车"},
					{index:6,value:"#求购"},
					{index:7,value:"#招聘"},
					{index:8,value:"#其他"}
				]
			}
		},
		methods: {
			changetag(item){
				this.chose = item.index;
				this.choseTag = item.value;
			},
			getTagWidth(length){
				return `${100+(length-2)*20}rpx`;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.header-content{
		display:flex;
		&__image{
				display: inline-flex;
				margin-top: 50rpx;
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
	.tag-list{
		margin-top:168rpx;
		margin-bottom: 6rpx;
	}
	.published{
		display: flex;
		padding: 20rpx 20rpx;
		font-size: 34rpx;
		vertical-align:top;
		&__tag{
			margin-top: 0rpx;
			color: #434343;
			vertical-align:top;
		}
		
		&__split{
			font-size: 36rpx;
			margin:0rpx 10rpx;
			vertical-align:top;
		}
		
		&__title{
			vertical-align:top;
		}
		
		&__text{
			margin:30rpx 20rpx;
			font-size: 30rpx;
		}
	}
</style>