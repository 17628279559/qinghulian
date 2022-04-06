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
				<image class="user-info__school__img" :src="user.school_image" mode="aspectFill"></image>
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
			<image class="content__bgground" :style="{height:`${feedsList.length*230+300}rpx`}" src="/static/bg.png" />
		</view>
		<tn-tabs barBottom="0rpx" :list="fixedList" :current="mcurrent" :isScroll="false" :showBar="true" inactiveColor="#838383" gutter="30" activeColor="#95EC6A" @change="tabChange"></tn-tabs>
		<view v-if="groupList.length>0" class="message">
			<tn-tag fontColor="#FFFFFF" size="sm" width="340rpx" height="68rpx" backgroundColor="#95EC6A" margin="4rpx 5rpx" shape="circle">
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
			<view class="tn-flex tn-flex-wrap tn-margin-sm">
				<block v-for="(item, index) in feedsList" :key="index">
					<view class="" style="width: 50%;">
						<view class="tn-blogger-content__wrap">
							<view class="image-pic" :style="'background-image:url(' + item.mainImage + ')'">
								<view class="image-music">
								</view>
							</view> 
							<view class="tn-blogger-content__label tn-text-justify tn-padding-sm">
								<text class="tn-blogger-content__label__desc">{{ item.desc }}</text>  
							</view>
							<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-left-sm tn-padding-right-sm tn-padding-bottom-sm">
								<view class="justify-content-item tn-flex tn-flex-col-center">
									<view>
										<view class="tn-color-gray">
											<text class="tn-blogger-content__count-icon tn-icon-flower"></text> 
											<text class="tn-padding-right-sm">{{ item.collectionCount }}</text>
											<text class="tn-blogger-content__count-icon tn-icon-message"></text>
											<text class="tn-padding-right-sm">{{ item.commentCount }}</text>
											<text class="tn-blogger-content__count-icon tn-icon-like"></text>
											<text class="">{{ item.likeCount }}</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import WaterfallSns from '@/components/waterfall-sns/waterfall-sns.vue'
	export default {
		components: {
		    WaterfallSns
		},
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
						id:0,
					    userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
					    userName: '可我会像',
					    date: '2021年12月20日',
					    label: ['开源','创意'],
					    desc: '免费开源可商用组件',
					    mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype2.jpg',
					    viewUser: {
					      latestUserAvatar: [
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
					      ],
					      viewUserCount: 129
					    },
					    collectionCount: 999,
					    commentCount: 999,
					    likeCount: 999
					  },
					  {
						id:1,
					    userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
					    userName: '可我会像',
					    date: '2021年12月20日',
					    label: ['开源','创意'],
					    desc: '免费开源可商用组件',
					    mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype1.jpg',
					    viewUser: {
					      latestUserAvatar: [
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
					      ],
					      viewUserCount: 129
					    },
					    collectionCount: 265,
					    commentCount: 22,
					    likeCount: 62
					  },
					  {
						id:2,
					    userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
					    userName: '可我会像',
					    date: '2021年12月20日',
					    label: ['开源','创意'],
					    desc: '免费开源可商用组件',
					    mainImage: 'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
					    viewUser: {
					      latestUserAvatar: [
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
					      ],
					      viewUserCount: 129
					    },
					    collectionCount: 265,
					    commentCount: 22,
					    likeCount: 62
					  },
					  {
						id:3,
					    userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
					    userName: '可我会像',
					    date: '2021年12月20日',
					    label: ['开源','创意'],
					    desc: '免费开源可商用组件',
					    mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg',
					    viewUser: {
					      latestUserAvatar: [
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
					      ],
					      viewUserCount: 129
					    },
					    collectionCount: 265,
					    commentCount: 22,
					    likeCount: 62
					  },
					  {
						id:4,
					    userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
					    userName: '可我会像',
					    date: '2021年12月20日',
					    label: ['开源','创意'],
					    desc: '免费开源可商用组件',
					    mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
					    viewUser: {
					      latestUserAvatar: [
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
					      ],
					      viewUserCount: 129
					    },
					    collectionCount: 265,
					    commentCount: 22,
					    likeCount: 62
					  },
					  {
						id:5,
					    userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
					    userName: '可我会像',
					    date: '2021年12月20日',
					    label: ['开源','创意'],
					    desc: '我们都是好孩子',
					    mainImage: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
					    viewUser: {
					      latestUserAvatar: [
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
					      ],
					      viewUserCount: 129
					    },
					    collectionCount: 265,
					    commentCount: 22,
					    likeCount: 62
					  },
					  {
						id:6,
					    userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
					    userName: '可我会像',
					    date: '2021年12月20日',
					    label: ['开源','创意'],
					    desc: '免费开源可商用组件',
					    mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
					    viewUser: {
					      latestUserAvatar: [
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
					      ],
					      viewUserCount: 129
					    },
					    collectionCount: 265,
					    commentCount: 22,
					    likeCount: 62
					  },
					  {
						id:7,
					    userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
					    userName: '可我会像',
					    date: '2021年12月20日',
					    label: ['开源','创意'],
					    desc: '免费开源可商用组件',
					    mainImage: 'https://tnuiimage.tnkjapp.com/shop/card.jpg',
					    viewUser: {
					      latestUserAvatar: [
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
					        {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
					      ],
					      viewUserCount: 129
					    },
					    collectionCount: 265,
					    commentCount: 22,
					    likeCount: 62
					  }
				]
				
			}
		},
		mounted() {
			this.getGroup();
		},
		methods: {
			tabChange(index) {
			  this.mcurrent = index;
			  uni.pageScrollTo({
			           scrollTop: 0, //距离页面顶部的距离
			           duration: 0,
			  });
			},
			getGroup(){
				if(this.groupList.length < 4){
					this.showGroupList = this.groupList;
				}
				else{
					this.showGroupList = this.groupList.slice(0,3);
				}
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
			box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.09);
			
		}
	}
	.message{
		display: flex;
		flex-direction: row;
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
	.tn-blogger-content {
	  &__wrap {
	    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.12);
	    border-radius: 20rpx;
	    margin: 15rpx;
	  }
	  
	  &__info {
	    &__btn {
	      margin-right: -12rpx;
	      opacity: 0.5;
	    }
	  }
	  
	  &__label {
	    &__item {
	      line-height: 45rpx;
	      padding: 0 20rpx;
	      margin: 5rpx 18rpx 0 0;
	      
	      &--prefix {
	        color: #82B2FF;
	        padding-right: 10rpx;
	      }
	    }
	    
	    &__desc {
	      line-height: 35rpx;
	    }
	  }
	  
	  &__main-image {
	    border-radius: 16rpx 16rpx 0 0;
	    
	    &--1 {
	      max-width: 690rpx;
	      min-width: 690rpx;
	      max-height: 400rpx;
	      min-height: 400rpx;
	    }
	    
	    &--2 {
	      max-width: 260rpx;
	      max-height: 260rpx;
	    }
	    
	    &--3 {
	      height: 212rpx;
	      width: 100%;
	    }
	  }
	  
	  &__count-icon {
	    font-size: 30rpx;
	    padding-right: 5rpx;
	  }
	}
	.image-pic{
	  background-size: cover;
	  background-repeat:no-repeat;
	  // background-attachment:fixed;
	  background-position:top;
	  border-radius: 20rpx 20rpx 0 0;
	}
	.image-music{
	  padding: 150rpx 0rpx;
	  font-size: 16rpx;
	  font-weight: 300;
	  position: relative;
	}
</style>
