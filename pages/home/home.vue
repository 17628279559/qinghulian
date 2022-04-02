<template>
	<view>
<<<<<<< HEAD
		<view class="header-box">
			<!-- d -->
			<image class="banner-swiper-img" src="/static/home-background.png" mode="aspectFill" >
			</image>
			<!-- 遮罩使用弧形框 -->
			<image class="crile" src="@/static/crile.png" mode="aspectFill" />
		</view>
		<view>
			<view class="location">
				<image class="location-img" src="/static/location.png" mode="aspectFit" >
			</view>
			<view class="location">
				<text class="location-text">{{location}}</text>
			</view>
			<view class="location">
				<image class="right" src="/static/right.png" mode="aspectFit" >
			</view>
		</view>
		<demo-title>
=======
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
>>>>>>> a107c16 (清明节更新)
			<tn-swiper 
				style="height:300"
				:list="list" 
				mode="dot"></tn-swiper>
		</demo-title>
<<<<<<< HEAD
		<demo-title>
		  <tn-notice-bar 
			:list="list.map(item=>item['text'])"
			backgroundColor="#F9F9F9" 
=======
		<demo-title>  <!--滚动通知信息 -->
		  <tn-notice-bar 
			:list="list.map(item=>item['text'])"
			backgroundColor="#F6F6F6" 
>>>>>>> a107c16 (清明节更新)
			mode="vertical" 
			radius=50
			fontSize=22
			leftIconSize=28></tn-notice-bar>
		</demo-title>
<<<<<<< HEAD
		<view class="new-content">
			<image src="/static/list.png" style="width: 50rpx;height: 50rpx;vertical-align:middle;"></image>
			<u-search 
			:show-action="false" 
			bgColor="#F9F9F9" 
=======
		<view class="search-box">  <!--目录和搜索栏 -->
			<image class="search-box__content-icon" src="/static/list.png"></image>
			<u-search 
			:show-action="false" 
			bgColor="#F6F6F6" 
>>>>>>> a107c16 (清明节更新)
			placeholder="搜索" 
			searchIconSize=16
			height =12
			margin="0rpx 0rpx 0rpx 20rpx"></u-search>
		</view>
		<view v-for="(item, index) in news" :key="index">
<<<<<<< HEAD
			<view class="massage">
				<view class="massage-logo">
					<u-icon name="chat-fill" :color="item.iconColor" size="24"></u-icon>
					<view class="massage-num">{{item.num}}</view>
				</view>
				<view class="massage-text">
					<view class="massage-text-content">{{item.textType}} | {{item.textContent}}</view>
					<view class="massage-text-herder">
						<image class="massage-text-herder-image" :src="item.herderImg" mode="aspectFill"></image>
						<text class="massage-text-herder-text">{{item.userName}}</text>
						<text class="massage-text-herder-text">{{item.update}}</text>
					</view>
				</view>
				<view class="massage-img">
					<image class="massage-img-img" :src="item.contentImg" mode="aspectFill" >
				</view>
			</view>
			<view class="border-content tn-border-solid-top line-line"></view>
=======
			<view class="published">
				<view class="published__massage-statistical">
					<u-icon name="chat-fill" :color="item.iconColor" size="24"></u-icon>
					<view class="published__massage-statistical__num">{{item.num}}</view>
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
					<image class="published__massage-image-box__image" :src="item.contentImg" mode="aspectFill" >
				</view>
			</view>
			<view class="border-content tn-border-solid-top suspend-button-size"></view>
>>>>>>> a107c16 (清明节更新)
		</view>

		<u-back-top :scroll-top="scrollTop" icon="arrow-up"></u-back-top>
		<my-tabbar :pageValue="pageNum"/>
	</view>
</template>
 
<script>
	import demoTitle from '@/libs/components/demo-title.vue'
	export default {
		components: {demoTitle},
		data() {
			return {
				pageNum:0,
				scrollTop:0,
<<<<<<< HEAD
				location:"中国传媒大学",
=======
				university_location:"中国传媒大学",
>>>>>>> a107c16 (清明节更新)
				list: [
				  {image: '/static/swiper/spring.jpg',text:'春天小赵在改bug'},
				  {image: '/static/swiper/summer.jpg',text:'夏天小赵在改bug'},
				  {image: '/static/swiper/autumn.jpg',text:'秋天小赵在改bug'},
				  {image: '/static/swiper/winter.jpg',text:'冬天小赵在改bug'},
				],
				news:[{
					num:17,
					iconColor:"#9599E2",
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					num:17,
					iconColor:"#9599E2",
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					num:17,
					iconColor:"#9599E2",
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					num:17,
					iconColor:"#9599E2",
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					num:17,
					iconColor:"#9599E2",
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					num:17,
					iconColor:"#9599E2",
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					num:17,
					iconColor:"#9599E2",
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					num:17,
					iconColor:"#9599E2",
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				},{
					num:17,
					iconColor:"#9599E2",
					textType:"求助",
					textContent:"请问大家电脑的垃圾广告弹窗怎么去掉啊啊啊啊",
					userName:"哈呀锡",
					update:"20分钟前更新",
					herderImg:"https://code.zwt666.top/img/header.jpg",
					contentImg:"https://code.zwt666.top/img/test.jpg"
				}]
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {

		}
	}
</script>

<<<<<<< HEAD
<style scoped>
	.inline{
		display:inline-flex;
	}
	.location{
		height:106rpx;
		display:inline-flex;
		vertical-align:bottom;
	}
	.location-img{
		width: 40rpx;
		height: 50rpx;
		margin:28rpx;
		display:flex;
	}
	.location-text{
		font-size: 32rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.right{
		width: 30rpx;
		height: 30rpx;
		display: flex;
		margin:41rpx 0rpx 35rpx 8rpx;
	}
	.header-box{
		width: 750upx;
		height: 60upx;
	}
	.banner-swiper-img {
		width: 750upx;
		height: 400upx;
		z-index: -1;
		box-shadow: 0 0 2px 0 rgba(108, 188, 108 , 0.8);
	}
	.crile {
		width: 750upx;
		height: 50upx;
		position: absolute;
		left: 0;
		top: 355upx;
		z-index: 0;
	}
	.new-content{
		margin-top: 25rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
	}
	.massage{
=======
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
		height:106rpx;
		display:inline-flex;
		vertical-align:bottom;
	
		&__img{
			width: 40rpx;
			height: 50rpx;
			margin:28rpx;
			display:flex;
		}
		
		&__text{
			font-size: 32rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&__right-icon{
			width: 30rpx;
			height: 30rpx;
			display: flex;
			margin:41rpx 0rpx 35rpx 8rpx;
		}
	}

	.search-box{
		margin-top: 20rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
		
		&__content-icon{
			margin-bottom:10rpx;
			width: 50rpx;
			height: 50rpx;
			vertical-align:middle;
		}
	}

	.published{
>>>>>>> a107c16 (清明节更新)
		height:180rpx;
		margin-top: 25rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
<<<<<<< HEAD
	}
	.massage-logo{
		display: inline-flex;
		margin-top: 30rpx;
		margin-right: 30rpx;
		width:46rpx;
		flex-wrap: wrap;
		vertical-align:top;
	}
	.massage-text{
		display: inline-flex;
		margin-top: 30rpx;
		width: 470rpx;
		vertical-align:top;
		flex-wrap: wrap;
	}
	.massage-text-content{
		display:flex;
		flex: 1 0 100%;
	}
	.massage-img{
		display: inline-flex;
		margin-top: 30rpx;
		vertical-align:top;
	}
	.massage-img-img{
		width:160rpx;
		height:110rpx;
		margin-top: 10rpx;
		border-radius: 10rpx;
	}
	.massage-num{
		text-align: center;
		font-size: 20rpx;
		width: 100%;
		color: #838383;
	}
	.massage-text-herder{
		display: flex;
		height:90rpx;
	}
	.massage-text-herder-image{
		display: inline-flex;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		width:50rpx;
		height:50rpx;
		border-radius: 25rpx;
	}
	.massage-text-herder-text{
		font-size: 20rpx;
		color: #838383;
		margin-left: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.line-line{
		margin-left: 76rpx;
	}
	.massage-img image{
		transition:all .2s ease 0s;
	}
	.massage-img:hover image{
		transform:scale(.9) rotate(3deg);
	}
=======
		
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
>>>>>>> a107c16 (清明节更新)
</style>
