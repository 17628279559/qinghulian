<template>
	<view class="founded">
		<view v-for="(item, findex) in foundPageNews" :key="findex">
			<view class="founded__head">
				<image class="founded__head__image" :src="item.headerUrl" mode="aspectFill"></image>
			</view>
			<view class="founded__content">
				<view class="founded__content__released">
					<view class="founded__content__released__name">{{item.name}}
					</view>
					<view class="founded__content__released__time">{{item.time}}
					</view>
				</view>
				<view class="founded__content__text">
					{{item.text}})
				</view>
				<!-- 视频这块先空着 -->
				<view v-if="item.multimediaType == 'vedio'" class="founded__content__vedio">	
				</view>
				<view v-else class="founded__content__multimedia">
					<image class="founded__content__multimedia__image" :src="item.imageUrl" mode="aspectFit"></image>
				</view>
				<view class="founded__content__like">
					<view class="founded__content__like__left">
						<image class="founded__content__like__left__image" src="/static/like/share/1.png" @click="share"></image>
						<text class="founded__content__like__left__txt">{{item.share}}</text>
					</view>
					<view class="founded__content__like__middle">
						<image class="founded__content__like__middle__image" src="/static/like/talk/1.png"  @click="talk"></image>
						<text class="founded__content__like__left__txt">{{item.talk}}</text>
					</view>							
					<view class="founded__content__like__right">
						<image class="founded__content__like__right__image" src="/static/like/like/1.png" @click="like"></image>
						<text class="founded__content__like__left__txt">{{item.like}}</text>
					</view>
				</view>
			</view>
			<view class="border-content tn-border-solid-top"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"attention",
		props:{
			foundPageNews:{
				type:Array,
				default() {
				  return []
				}
			}
		},
		
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.founded{
		margin-top: 160rpx;
		&__head{
			margin-top:20rpx;
			margin-left: 30rpx;
			display: inline-flex;
			width:100rpx;
			&__image{
				width:70rpx;
				height:70rpx;
				border-radius: 35rpx;
			}
		}
		
		&__content{
			margin-top:20rpx;
			margin-right: 30rpx;
			display:inline-flex;
			width: 570rpx;
			vertical-align:top;
			flex-wrap: wrap;
			&__released{
				display:inline-flex;
				&__name{
					color: #13227A;
					font-size: 28rpx;
				}
				&__time{
					color: #838383;
					font-size: 22rpx;
					margin-left: 15rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
			&__text{
				margin-top: 10rpx;
				font-size: 26rpx;
			}
			
			&__multimedia{
				margin-top: 10rpx;
				&__image{
					width: 500rpx;
					height:280rpx;
				}
			}
			
			&__like{
				display: flex;
				margin-bottom: 8rpx;
				&__left{
					width:140rpx;
					&__image{
						display: inline-flex;
						width: 30rpx;
						height:28rpx;
					}
					&__txt{
						color: #838383;
						font-size: 24rpx;
						margin-left: 5rpx;
					}
				}
				&__middle{
					width:140rpx;
					margin-left: 70rpx;
					&__image{
						width: 30rpx;
						height:28rpx;
					}
				}
				&__right{
					margin-left: 70rpx;
					&__image{
						width: 30rpx;
						height:28rpx;
					}
				}
			}
		}
	}
</style>
