<template>
	<view>
		<view class="header-background">
			<image class="header-background__img" :src="background_img" mode="aspectFill" >
			</image>
		</view>
		<view class="setting">
			<image class="setting__icon" src="/static/setting.png" mode="aspectFit" >
		</view>
		<view class="user-info">
			<view class="user-info__header">
				<image class="user-info__header__img" :src="userInfo.avatarUrl" mode="aspectFill"></image>
			</view>
			<view class="user-info__nameId">
				<view class="user-info__nameId__name">
					{{userInfo.user_name}}
				</view>
				<view class="user-info__nameId__id">
					{{`ID:${id}`}}
				</view>
			</view>
			<view class="user-info__school">
				<image class="user-info__school__img" :src="school" mode="aspectFill"></image>
				<view class="user-info__school__authenticated">
					<tn-tag  v-if="userInfo.authenticated" width="90rpx" size="sm" height="32rpx" backgroundColor="#D7D7D7" fontColor="tn-color-white" margin="0rpx 10rpx" shape="circle">已认证</tn-tag>
					<tn-tag v-else fontColor="tn-color-white" size="sm" width="90rpx" height="32rpx" backgroundColor="#D7D7D7" margin="0rpx 10rpx" shape="circle">未认证</tn-tag>
				</view>
			</view>
			<view class="user-info__reputation">
				<view class="user-info__reputation__leaves">
					<image class="user-info__reputation__leaves__image" src="/static/w-leaves.png"></image>
				</view>
				<view class="user-info__reputation__rect">
					<tn-tag fontColor="#FFFFFF" size="sm" width="140rpx" height="36rpx" backgroundColor="#95EC6A" margin="4rpx 5rpx">{{`信誉度:${userInfo.reputation}`}}</tn-tag>
				</view>
			</view>
		</view>
		<view class="individuality-signature">
			{{userInfo.individuality_signature}}
		</view>
		<view class="gzfshz">
			<view class="gzfshz__gz">
				<text style="color:#D9D9D9;font-size: 24rpx;">关注</text>
				<text style="margin-top: 15rpx;">{{userInfo.focus}}</text>
			</view>
			<view class="gzfshz__gz">
				<text style="color:#D9D9D9;font-size: 24rpx;">粉丝</text>
				<text style="margin-top: 15rpx;">{{userInfo.fans}}</text>
			</view>
			<view class="gzfshz__gz">
				<text style="color:#D9D9D9;font-size: 24rpx;">获赞</text>
				<text style="margin-top: 15rpx;">{{userInfo.praise}}</text>
			</view>
		</view>
		<view class="content">
			<image class="content__bgground" :style="{height:`200rpx`}" src="/static/bg.png" />
		</view>
		<tn-tabs barBottom="0rpx" :list="fixedList" :current="mcurrent" :isScroll="false" :showBar="true" inactiveColor="#838383" gutter="30" activeColor="#95EC6A" @change="tabChange"></tn-tabs>
		<view v-if="groupList.length>0" class="message">
			<tn-tag fontColor="#FFFFFF" size="sm" width="340rpx" height="68rpx" backgroundColor="#95EC6A" margin="6rpx 5rpx" shape="circle" @click="enter_message">
				<view class="message__header">
				  <tn-avatar-group size="58rpx" :lists="showGroupList"></tn-avatar-group>
				</view>
				<view class="message__header">
				  <text>{{`${groupList.length}条新消息`}}</text>
				</view>
				<view class="message__header">
				  <image class="message__right-icon" src="/static/white-right.png" mode="aspectFit" />
				</view>
			</tn-tag>
		</view>
		<view class="publishedd">
			<image class="publishedd__line" src="/static/line.png" />
			<u-waterfall v-model="feedsList">
				<template v-slot:left="{leftList}">
					<view v-for="(item, index) in leftList" :key="index">
						<myWaterFullContent :data="item"></myWaterFullContent>	
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view v-for="(item, index) in rightList" :key="index">
						<myWaterFullContent :data="item"></myWaterFullContent>
					</view>
				</template>
			</u-waterfall>	
		</view>
	</view>
</template>

<script>
	import myWaterFullContent from '@/components/myWaterFullContent/myWaterFullContent.vue'
	export default {
		components: {
		    myWaterFullContent
		},
		data() {
			return {
				mcurrent:0,
				background_img:"https://code.zwt666.top/img/header.jpg",
				id:2597534417,
				school:"https://code.zwt666.top/img/school.webp",
				userInfo:{},
				fixedList: [
				  {name: '发布'},
				  {name: '点赞'},
				  {name: '收藏'},
				],
				groupList: [
				  {src: 'https://code.zwt666.top/img/header.jpg'},
				  {src: 'https://code.zwt666.top/img/header.jpg'},
				  {src: 'https://code.zwt666.top/img/header.jpg'},
				  {src: 'https://code.zwt666.top/img/header.jpg'},
				  {src: 'https://code.zwt666.top/img/header.jpg'},
				  {src: 'https://code.zwt666.top/img/header.jpg'},
				  {src: 'https://code.zwt666.top/img/header.jpg'}
				],
				showGroupList:[],
				feedsList:[
					  {
					    text: '测试长度',
					    mainImage: 'https://code.zwt666.top/img/tsg.jpg',
						header_image:"https://code.zwt666.top/img/header.jpg",
						textType:"求助",
					  },
					  {
					    text: '测试长度测试长度',
					    mainImage: 'https://code.zwt666.top/img/2.jpg',
						header_image:"https://code.zwt666.top/img/header.jpg",
						textType:"表白",
					  },
					  {
					    text: '测试长度测试长度测试长度',
					    mainImage: 'https://code.zwt666.top/img/header.jpg',
						header_image:"https://code.zwt666.top/img/header.jpg",
						textType:"闲置出售",
					  },
					  {
					    text: '测试长度测试长度测试长度测试长度',
					    mainImage: 'https://code.zwt666.top/img/school.jpg',
						header_image:"https://code.zwt666.top/img/header.jpg",
						textType:"实习",
					  },
					  {
					    text: '测试长度测试长度测试长度测试长度测试长度',
					    mainImage: 'https://code.zwt666.top/img/3.jpg',
						header_image:"https://code.zwt666.top/img/header.jpg",
						textType:"交友",
					  },
					  {
					    text: '测试长度测试长度测试长度测试长度测试长度测试长度',
					    mainImage: 'https://code.zwt666.top/img/1.jpg',
						header_image:"https://code.zwt666.top/img/header.jpg",
						textType:"歪比巴卜",
					  },
					  {
					    text: '测试长度测试长度测试长度测试长度测试长度测试长度测试长度',
					    mainImage: 'https://code.zwt666.top/img/school.jpg',
						header_image:"https://code.zwt666.top/img/header.jpg",
						textType:"租房",
					  },
					  {
					    text: '测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度',
					    mainImage: 'https://code.zwt666.top/img/header.jpg',
						header_image:"https://code.zwt666.top/img/header.jpg",
						textType:"十步杀一人",
					  }
				]
				
			}
		},
		mounted() {
			this.userInfo = getApp().globalData.userInfo
			this.getGroup();
		},
		methods: {
			tabChange(index) {
			  this.mcurrent = index;
				
			  // 切换feedsList以达到目的
			},
			getGroup(){
				if(this.groupList.length < 4){
					this.showGroupList = this.groupList;
				}
				else{
					this.showGroupList = this.groupList.slice(0,3);
				}
			},
			enter_message(){
				uni.navigateTo({
					url: '/subpages/passage/passage',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
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
				border: 4rpx solid #FFF;
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
				margin: 4rpx;
				width: 36rpx;
				height: 36rpx;
				border-radius: 19rpx;
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
				z-index: 10;
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
			
		}
	}
	.message{
		display: flex;
		justify-content: center;
		
		&__header{
			margin-right: 10rpx;
			font-size: 29rpx;
			display: inline-flex;
		}
		&__right-icon{
			width: 30rpx;
			height: 30rpx;
		}
		
	}
	.publishedd{
		position: relative;
		bottom: 14rpx;
		margin: 0 30rpx;
		&__line{
			width:100%;
			height: 2rpx;
		}
	}
</style>
