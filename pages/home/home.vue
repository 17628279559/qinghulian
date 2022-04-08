<template>
	<view>
		<view class="header-swaper-background">
			<!-- d -->
			<image class="header-swaper-background__banner-img" src="/static/home-background.png" mode="aspectFill" >
			</image>
			<!-- 遮罩使用弧形框 -->
			<image class="header-swaper-background__arc-image" src="@/static/crile.png" mode="aspectFill" />
		</view>
		<view>
			<view class="university-location">
				<image class="university-location__img" src="/static/location.png" mode="aspectFit" >
			</view>
			<view class="university-location">
				<text class="university-location__text">{{university_location}}</text>
			</view>
			<view class="university-location">
				<image class="university-location__right-icon" src="/static/right.png" mode="aspectFit" >
			</view>
		</view>
		<demo-title>  <!--滑动展示 -->
			<tn-swiper 
				style="height:350"
				:list="swaper_list" 
				mode="dot"></tn-swiper>
		</demo-title>
		<demo-title>  <!--滚动通知信息 -->
		  <tn-notice-bar 
			:list="notice_list.map(item=>item.text)"
			backgroundColor="#FFFFFF" 
			mode="vertical" 
			radius=50
			fontSize=22
			leftIconSize=28></tn-notice-bar>
		</demo-title>
		<view class="search-box">  <!--目录和搜索栏 -->
			<image class="search-box__content-icon" src="/static/list.png"></image>
			<u-search 
			:show-action="false" 
			bgColor="#FFFFFF" 
			placeholder="输入标签或关键字" 
			searchIconSize=16
			height =10
			margin="0rpx 0rpx 0rpx 20rpx"></u-search>
		</view>
		<view v-for="(item, index) in home_news" :key="index">
			<view class="published">
				<view class="published__massage-statistical">
					<u-icon name="chat-fill" :color="item.color" size="24"></u-icon>
					<view class="published__massage-statistical__num">{{item.comments_num}}</view>
				</view>
				<view class="published__massage-text">
					<view class="published__massage-text__content">{{item.textType}} | {{item.textContent}}</view>
					<view class="published__massage-text__user">
						<image class="published__massage-text__user__image" :src="item.herderImg" mode="aspectFill"></image>
						<text class="published__massage-text__user__text">{{item.userName}}</text>
						<text class="published__massage-text__user__text">{{item.update}}</text>
					</view>
				</view>
				<view class="published__massage-image-box">
					<image class="published__massage-image-box__image" :src="item.contentImg" mode="aspectFill">
				</view>
			</view>
			<view class="border-content tn-border-solid-top suspend-button-size"></view>
		</view>
	</view>
</template>
 
<script>
	import demoTitle from '@/libs/components/demo-title.vue'
	export default {
		components: {demoTitle},
		data() {
			return {
				scrollTop:0,
				clindex:0,
				university_location:"中国传媒大学",
				swaper_list:[
				  {articleId:123,image: 'https://code.zwt666.top/img/swiper/spring.jpg'},
				  {articleId:123,image: 'https://code.zwt666.top/img/swiper/summer.jpg'},
				  {articleId:123,image: 'https://code.zwt666.top/img/swiper/autumn.jpg'},
				  {articleId:123,image: 'https://code.zwt666.top/img/swiper/winter.jpg'},
				],
				notice_list: [
				  {articleId: 123,text:'春天小赵在改bug'},
				  {articleId: 123,text:'夏天小赵在改bug'},
				  {articleId: 123,text:'秋天小赵在改bug'},
				  {articleId: 123,text:'冬天小赵在改bug'},
				],
				home_news:[{
					comments_num:17,
					color:'#E93EFF',
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					comments_num:17,
					color:'#33FFFF',
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					comments_num:17,
					color:'#FF0000',
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					comments_num:17,
					color:'#BBFF00',
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					comments_num:17,
					color:'#33FFFF',
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					comments_num:17,
					color:'#33FFFF',
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					comments_num:17,
					color:'#33FFFF',
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					comments_num:17,
					color:'#33FFFF',
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					comments_num:17,
					color:'#33FFFF',
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				}]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.header-swaper-background{
		width: 750upx;
		height: 60upx;
	
		&__banner-img {
			width: 750upx;
			height: 400upx;
			z-index: -1;
			box-shadow: 0 0 4rpx 0 rgba(108, 188, 108 , 0.8);
		}
		
		&__arc-image {
			width: 750upx;
			height: 50upx;
			position: absolute;
			left: 0;
			top: 355upx;
			z-index: 0;
		}
	}
	.university-location{
		height:80rpx;
		margin-bottom: 15rpx;
		display:inline-flex;
		vertical-align:bottom;
		align-items: center;
		
		&__img{
			width: 40rpx;
			height: 50rpx;
			margin:0 28rpx;
			display:flex;
		}
		
		&__text{
			font-size: 32rpx;
			display: flex;
			justify-content: center;
		}
		&__right-icon{
			width: 30rpx;
			height: 30rpx;
			display: flex;
			margin-left: 8rpx;
		}
	}

	.search-box{
		display: flex;
		margin-top: 20rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
		&__content-icon{
			width: 50rpx;
			height: 50rpx;
			vertical-align:middle;
		}
	}

	.published{

		height:180rpx;
		margin-top: 25rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
		
		&__massage-statistical{
			display: inline-flex;
			margin-top: 30rpx;
			margin-right: 30rpx;
			width:46rpx;
			flex-wrap: wrap;
			vertical-align:top;
			
			&__num{
				text-align: center;
				font-size: 20rpx;
				width: 100%;
				color: #838383;
			}
		}
		
		&__massage-text{
			display: inline-flex;
			margin-top: 30rpx;
			width: 470rpx;
			vertical-align:top;
			flex-wrap: wrap;
			
			&__content{
				display:flex;
				flex: 1 0 100%;
			}
			
			&__user{
				display: flex;
				height:90rpx;
				
				&__image{
					display: inline-flex;
					margin-top: 20rpx;
					margin-bottom: 20rpx;
					width:50rpx;
					height:50rpx;
					border-radius: 25rpx;
				}
				
				&__text{
					font-size: 20rpx;
					color: #838383;
					margin-left: 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
		&__massage-image-box{
			display: inline-flex;
			margin-top: 30rpx;
			vertical-align:top;
			
			&__image{
				width:160rpx;
				height:110rpx;
				margin-top: 10rpx;
				border-radius: 10rpx;
				transition:all .2s ease 0s;
			}
			
			&:hover image{
				transform:scale(.9) rotate(3deg);
			}
		}
	}
	.suspend-button-size{
		margin-left: 76rpx;
	}

</style>
