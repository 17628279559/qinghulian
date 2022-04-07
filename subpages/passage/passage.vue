<template>
	<view>
		<tn-nav-bar :height="160" backIcon="close" bgcolor="#95EC6A" :useUicon="false" barsize=24 fixed>
			<view class="header-content">
				<image class="header-content__image" src="https://code.zwt666.top/img/header.jpg" mode="aspectFill" ></image>
				<text class="header-content__name">哈喽哈喽嘿？</text>
			</view>
		</tn-nav-bar>
		<view class="search-box">  <!--目录和搜索栏 -->
			<u-search 
			:show-action="false" 
			bgColor="#FFFFFF" 
			placeholder="搜索" 
			searchIconSize=18
			height =14
			margin="0rpx 0rpx 0rpx 0rpx"></u-search>
		</view>
		<view v-for="(item, mindex) in message_list" :key="mindex">
			<view class="news">
				<tn-avatar :badge="true" size="80rpx" :badgeText="item.messageNum" badgeBgColor="#FF0000" badgeColor="#FFFFFF" :badgeSize="28" :badgePosition="[6, 6]" :src="item.header"></tn-avatar>
				<view style="flex-wrap: wrap;flex-grow: 1; ">
					<view class="news__nameTime">
						<view class="news__nameTime__name">
							{{item.name}}
						</view>
						<view class="news__nameTime__time">
							{{item.time}}
						</view>
					</view>
					<view class="news__content">
						<text>{{item.text}}</text>
					</view>
				</view>
			</view>
		<image class="news__line" src="/static/line.png" />
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message_list:[
					{header:"https://code.zwt666.top/img/header.jpg",messageNum:"1",name:"西奥修",time:"中午12:13",text:"你到哪了？"},
					{header:"https://code.zwt666.top/img/header.jpg",messageNum:"1",name:"Laaaaal",time:"昨天",text:"啥意思嘞？我不太理解..."},
					{header:"https://code.zwt666.top/img/header.jpg",messageNum:"",name:"肥啾",time:"星期五",text:"ok"},
					{header:"https://code.zwt666.top/img/header.jpg",messageNum:"",name:"Asteria",time:"2022-3-21",text:"[动画表情]"},
					{header:"https://code.zwt666.top/img/header.jpg",messageNum:"",name:"珊狭芝啾的歌",time:"2022-3-18",text:"[皱眉]"},
					{header:"https://code.zwt666.top/img/header.jpg",messageNum:"",name:"日文打不出来",time:"2022-3-15",text:"请问这些通知是在哪里看的呀？"},
					{header:"https://code.zwt666.top/img/header.jpg",messageNum:"",name:"欧克",time:"2022-3-14",text:"[拜拜]"},
					{header:"https://code.zwt666.top/img/header.jpg",messageNum:"",name:"six fits",time:"2022-3-10",text:"笑死"}					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.header-content{
		display:flex;
		&__image{
				display: inline-flex;
				margin-left: 10rpx;
				margin-top: 50rpx;
				width:56rpx;
				height:56rpx;
				border-radius: 28rpx;
		}
		
		&__name{
			margin-left: 20rpx;
			color: #FFFFFF;
			font-size:28rpx;
		}
	}
	.search-box{
		display: flex;
		margin:30rpx;
		margin-top: 180rpx;
		&__content-icon{
			width: 50rpx;
			height: 50rpx;
			vertical-align:middle;
		}
	}
	.news{
		display: flex;
		width:100%;
		padding: 20rpx;
		padding-bottom: 0rpx;
		flex-wrap: wrap;
		&__nameTime{
			display: flex;
			flex-grow: 1;
			&__name{
				vertical-align:top;
				margin:6rpx 20rpx;
			}
			&__time{
				vertical-align:top;
				margin:8rpx 20rpx;
				text-align: right;
				font-size: 25rpx;
				color: #AAAAAA;
				margin-left: auto;
			}
		}
		&__content{
			margin:0rpx 20rpx;
			font-size: 27rpx;
			color: #AAAAAA;
		}
		&__line{
			width:100%;
			margin-left: 64rpx;
			height: 3rpx;
			position: relative;
			bottom: 10rpx;
		}
	}
</style>
