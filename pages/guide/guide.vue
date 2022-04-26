<template>
	<view>
		<tn-nav-bar :height="160" :isBack="false" fixed>
			<view class="head">
				<image class="head__img" src="/static/location.png" mode="aspectFit" >
				<view class="head__text">{{university_location}}</view>
				<image class="head__right-icon" src="/static/right.png" mode="aspectFit" >
			</view>
		</tn-nav-bar>
		<view class="description">
			<view>
				地标一览
			</view>
		</view>
		<view class="campus-icon">
			<tn-grid :align="align" :hoverClass="hoverClass">
			  <block v-for="(item, cindex) in campusIcon" :key="cindex">
			    <tn-grid-item style="width: 25%;" @click="openModal(item.name)">
			      <view class="campus-icon__item" >
			        <image class="campus-icon__item__image" :src="[`https://code.zwt666.top/img/map/${item.url}.png`]" mode="aspectFit"></image>
			      </view>
			    </tn-grid-item>
			  </block>
			</tn-grid>
		</view>
		<tn-modal
		  v-model="show"
		  :width="width"
		  :radius="radius"
		  :fontSize="fontSize"
		  :showCloseBtn="true"
		  :maskCloseable="true"
		  :zoom="true"
		  :custom="true"
		>
			<view class="modal-tuqi">
				<view class="modal-tuqi__title">
					{{content}}
				</view>
				<image class="modal-tuqi__image" src="https://code.zwt666.top/img/tsg.jpg" lazy-load="true"></image>
				<view class="modal-tuqi__description">
					又名“中传大阅城” 开放自习座位、研讨间。开放时间：8:00 - 22:30,特殊节假日另行通知
				</view>
				<a class="modal-tuqi__link" href="#">点击跳转公众号</a>
			</view>
		</tn-modal>	
		<tn-toast ref="toast"></tn-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:"",
				show: false,
				width: '80%',
				radius: 12,
				fontSize:30,
				university_location:"中国传媒大学",
				hoverClass: 'tn-hover',
				align:'center',
				campusIcon:[
					{index:0,name:"校医院",url:"xyy"},
					{index:1,name:"33号楼",url:"x/33h"},
					{index:2,name:"32号楼",url:"x/32h"},
					{index:3,name:"44号楼",url:"x/44h"},
					{index:4,name:"北苑食堂",url:"eat/north"},
					{index:5,name:"31号楼",url:"x/31h"},
					{index:6,name:"图书馆",url:"tsg"},
					{index:7,name:"45号楼",url:"x/45h"},
					{index:8,name:"办公楼",url:"x/bgl"},
					{index:9,name:"博学楼",url:"bxl"},
					{index:10,name:"钢琴湖",url:"gqh"},
					{index:11,name:"52号楼",url:"x/52h"},
					{index:12,name:"草地",url:"cd"},
					{index:13,name:"草地",url:"cd"},
					{index:14,name:"星光超市",url:"eat/lighting"},
					{index:15,name:"53号楼",url:"x/53h"},
					{index:16,name:"草地",url:"cd"},
					{index:17,name:"草地",url:"cd"},
					{index:18,name:"草地",url:"cd"},
					{index:19,name:"草地",url:"cd"},
					{index:20,name:"草地",url:"cd"},
					{index:21,name:"明德楼",url:"mdl"},
					{index:22,name:"草地",url:"cd"},
					{index:23,name:"28号楼",url:"x/28h"},
					{index:24,name:"电视台",url:"dst"},
					{index:25,name:"明德湖",url:"mdh"},
					{index:26,name:"草地",url:"cd"},
					{index:27,name:"草地",url:"cd"},
					{index:28,name:"草地",url:"cd"},
					{index:29,name:"立德楼",url:"ldl"},
					{index:30,name:"29号楼",url:"x/29h"},
					{index:31,name:"风雨操场",url:"cc"},
					{index:32,name:"草地",url:"cd"},
					{index:33,name:"草地",url:"cd"},
					{index:34,name:"南苑食堂",url:"eat/south"},
					{index:35,name:"30号楼",url:"x/30h"},
					{index:36,name:"西配楼",url:"xpl"},
					{index:37,name:"主楼",url:"zl"},
					{index:38,name:"东配楼",url:"dpl"},
					{index:39,name:"24号楼",url:"x/24h"}
				]
			}
		},
		mounted() {
			if(!this.$member.isShow){
				this.openToast();
			}
			this.$member.isShow = true;
		},
		methods: {
			openToast() {
			  this.$refs.toast.show({
				title: "",
				content: "左右滑动查看更多",
				icon: "",
				image: "",
			    duration: 2000
			  })
			},
			openModal(name) {
			  this.show = true;
			  this.content = name;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.head{
		display: flex;
		flex: 1;
		text-align: left;
		align-items: center;
		
		&__img{
			display: inline-flex;
			margin: 0 28rpx;
			width: 40rpx;
			height: 50rpx;
			vertical-align:middle;
		}
		
		&__text{
			font-size: 32rpx;
			display: inline-flex;
			vertical-align:bottom;
		}
		
		&__right-icon{
			width: 30rpx;
			height: 30rpx;
			margin-left: 8rpx;
			display: inline-flex;
			vertical-align:bottom;
		}
	}
	.description{
		margin:30rpx;
		margin-top: 190rpx;
		whith:100%;
		display: flex;
		justify-content:center;
	}
	.campus-icon{
		display: block;
		margin-top:15rpx;
		margin-left: 50rpx;
		margin-right: 50rpx;
		margin-bottom: 80rpx;
		&__item{
			width: 90rpx;
			height: 90rpx;
			font-size: 50rpx;
			border-radius: 10rpx;
			margin: 25rpx 25rpx;
			position: relative;
			z-index: 1;
			
			&::after {
			  content: " ";
			  position: absolute;
			  z-index: -1;
			  width: 100%;
			  height: 100%;
			  left: 0;
			  bottom: 0;
			  border-radius: inherit;
			  opacity: 1;
			  transform: scale(1, 1);
			  background-size: 100% 100%;
			  background-image: url(/static/icon_bg6.png);
			}
			
			&__image{
				width: 100rpx;
				height: 100rpx;
			}
		}
	}
	.modal-tuqi{
		width: 100%;
		margin-top: 35rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap:wrap;
		&__title{
			font-size: 30rpx;
			margin-bottom: 15rpx;
		}
		&__image{
			width:500rpx;
			height: 280rpx;
		}
		&__description{
			margin:15rpx 0;
		}
		
		&__link{
			width:100%;
			font-size: 24rpx;
			color:#95EC6A;
			text-decoration: underline;
		}
	}
</style>
