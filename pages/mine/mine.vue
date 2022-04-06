<template>
	<view>
		<view class="header-background">
			<image class="header-background__img" :src="user.background_img" mode="aspectFill" >
			</image>
		</view>
		<view class="setting">
			<image class="setting__icon" src="/static/setting.png" mode="aspectFit" >
		</view>
		<view class="user-info">
			<view class="user-info__header">
				<image class="user-info__header__img" :src="user.header_image"></image>
			</view>
			<view class="user-info__nameId">
				<view class="user-info__nameId__name">
					{{user.name}}
				</view>
				<view class="user-info__nameId__id">
					{{`ID:${user.id}`}}
				</view>
			</view>
			<view class="user-info__school">
				<image class="user-info__school__img" :src="user.school_image"></image>
				<view class="user-info__school__authenticated">
					<tn-tag  v-if="user.authenticated" width="90rpx" size="sm" height="32rpx" backgroundColor="#D7D7D7" fontColor="tn-color-white" margin="0rpx 10rpx" shape="circle">已认证</tn-tag>
					<tn-tag v-else fontColor="tn-color-white" size="sm" width="90rpx" height="32rpx" backgroundColor="#D7D7D7" margin="0rpx 10rpx" shape="circle">未认证</tn-tag>
				</view>
			</view>
			<view class="user-info__reputation">
				<view class="user-info__reputation__leaves">
					<image class="user-info__reputation__leaves__image" src="/static/w-leaves.png"></image>
				</view>
				<view class="user-info__reputation__rect">
					<tn-tag fontColor="#FFFFFF" size="sm" width="140rpx" height="36rpx" backgroundColor="#95EC6A" margin="4rpx 5rpx">{{`信誉度:${user.reputation}`}}</tn-tag>
				</view>
			</view>
		</view>
		<view class="individuality-signature">
			{{user.individuality_signature}}
		</view>
		<view class="gzfshz">
			<view class="gzfshz__gz">
				<text style="color:#D9D9D9;font-size: 24rpx;">关注</text>
				<text style="margin-top: 15rpx;">{{user.focus}}</text>
			</view>
			<view class="gzfshz__gz">
				<text style="color:#D9D9D9;font-size: 24rpx;">粉丝</text>
				<text style="margin-top: 15rpx;">{{user.fans}}</text>
			</view>
			<view class="gzfshz__gz">
				<text style="color:#D9D9D9;font-size: 24rpx;">获赞</text>
				<text style="margin-top: 15rpx;">{{user.praise}}</text>
			</view>
		</view>
		<view class="content">
			<image class="content__bgground" src="/static/bg.png"></view>
			<tn-tabs barBottom="0rpx" :list="fixedList" :current="mcurrent" :isScroll="false" :showBar="true" inactiveColor="#838383" gutter="30" activeColor="#95EC6A" @change="tabChange"></tn-tabs>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mcurrent:0,
				user:{
					background_img:"https://code.zwt666.top/img/header.jpg",
					header_image:"https://code.zwt666.top/img/header.jpg",
					name:"哈喽哈喽嘿？",
					id:2597534417,
					school_image:"https://code.zwt666.top/img/school.webp",
					authenticated:true,
					reputation:99,
					individuality_signature:"这个家伙很懒，什么都没写",
					focus:67,
					fans:56,
					praise:127,
					
				},
				fixedList: [
				  {name: '发布'},
				  {name: '点赞'},
				  {name: '收藏'},
				]
				
			}
		},
		methods: {
			tabChange(index) {
			  this.mcurrent = index;
			  uni.pageScrollTo({
			           scrollTop: 0, //距离页面顶部的距离
			           duration: 0,
			  });
			},
		}
	}
</script>

<style lang="scss" scoped>
	.header-background{
		width: 750upx;
		height: 60upx;
	
		&__img {
			width: 750upx;
			height: 550upx;
			z-index: -1;
		}
	}
	.setting{
		height:80rpx;
		width: 100%;
		margin-bottom: 30rpx;
		display:inline-flex;
		vertical-align:bottom;
		align-items: center;
		
		&__icon{
			width: 60rpx;
			height: 60rpx;
			margin:0 28rpx;
		}
	}
	.user-info{
		display: flex;
		color:#FFFFFF;
		&__header{
			vertical-align:top;
			margin:10rpx 30rpx;
			margin-right: 15rpx;
			&__img{
				width: 120rpx;
				height: 120rpx;
				border-radius: 60rpx;
				border: 6rpx solid #FFF;
			}
		}
		&__nameId{
			vertical-align:top;
			padding-top:20rpx;
			&__name{
				font-size: 32rpx;
			}
			&__id{
				font-size:25rpx;
				opacity: 0.8;
				color:#F9F9F9;
			}
		}
		&__school{
			vertical-align:top;
			padding-top:20rpx;
			display: flex;
			&__img{
				margin: 4rpx 0rpx;
				margin-right: 2rpx;
				width: 36rpx;
				height: 36rpx;
				border-radius: 18rpx;
			}
			&__authenticated{
				margin: 4rpx 0;
				opacity: 0.9;
			}
		}
		&__reputation{
			margin-left: auto;
			vertical-align:top;
			padding-top:20rpx;
			position: relative;
			left: 5rpx;
			display: flex;
			&__leaves{
				vertical-align:top;
				display:inline-flex;
				position: relative;
				left: 25rpx;
				z-index: 20;
				width: 50rpx;
				height: 50rpx;
				border-radius: 25rpx;
				background-color: #31DA10;
				&__image{
					width: 28rpx;
					height: 28rpx;
					left: 0; 
					right:0;
					top:0; 
					bottom: 0;
					margin: auto;
				}
			}
			&__rect{
				margin-top: 4rpx;
				
				vertical-align:top;
				display:inline-flex;
			}
		}
	}
	.individuality-signature{
		margin-left: 30rpx;
		margin-bottom: 30rpx;
		color: #FFFFFF;
		font-size:25rpx;
	}
	.gzfshz{
		margin-left: 30rpx;
		display: flex;
		color: #FFFFFF;
		font-size:26rpx;
		&__gz{
			width: 60rpx;
			margin-right: 40rpx;
			display: flex;
			flex-wrap:wrap;
			justify-content: center;
		}
	}
	.content{
		margin: 15rpx;
		margin-top: 25rpx;
		height:1rpx;
		&__bgground{
			height:1000rpx;
			width:100%;
			border-radius: 30rpx;
			box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.09);
			
		}
		&__hd{
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
	}
</style>
