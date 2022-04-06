<template>
	<view>
		<tn-nav-bar :height="160" backIcon="close" :useUicon="false" barsize=24 fixed>
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
			<textarea class="published__text" placeholder="添加正文"></textarea>
			
			<view class="published__chose-image">
				<tn-image-upload
				  ref="imageUpload"
				  :action="action"
				  :formData="formData"
				  :fileList="fileList"
				  :disabled="disabled"
				  :autoUpload="autoUpload"
				  :maxCount="maxCount"
				  :showUploadList="showUploadList"
				  :showProgress="showProgress"
				  :deleteable="deleteable"
				  :customBtn="customBtn"
				  :beforeUpload="beforeUpload"
				  @on-list-change="listChange"
				  @on-oversize="oversize"
				  @on-exceed="exceed"
				  @on-choose-complete="chooseComplete"
				  @on-choose-fail="chooseFail"
				  @on-uploaded="uploaded"
				  @on-success="uploadSuccess"
				  @on-change="uploadChange"
				  @on-progress="uploadProgress"
				  @on-error="uploadError"
				  @on-remove="fileRemove"
				>
				  <view v-if="!showUploadList" slot="file" style="width: 100%;">
				    <view v-for="(item,index) in lists" :key="index" class="tn-image-upload__item">
				      <image
				        class="tn-image-upload__item__image"
				        :src="item.url || item.path"
				        mode="aspectFill"
				      ></image>
				    </view>
				  </view>
				  <view v-if="customBtn" slot="addBtn" class="tn-image-upload__custom-btn" hover-class="tn-hover-class" hover-stay-time="150">
				    <view>添加图片</view>
				  </view>
				</tn-image-upload>
			</view>
		</form>
		<view class="border-content tn-border-solid-top"></view>
		<view class="send">
			<image class="send__video-image" src="@/static/video.png" mode="aspectFit"></image>
			<view class="send__button">
				<tn-button backgroundColor="#95EC6A" fontColor="#FFFFFF" margin="0rpx" >发布</tn-button>
			</view>
		</view>
		<view class="border-content tn-border-solid-top"></view>
		
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
				],
				action: 'https://zwt666.top/api/upload',
				formData: {
				  image: null
				},
				fileList: [],
				showUploadList: true,
				customBtn: false,
				autoUpload: false,
				showProgress: true,
				deleteable: true,
				customSStyle: false,
				maxCount: 6,
				disabled: false,
				lists: [],
				tips:[],
			}
		},
		methods: {
			changetag(item){
				this.chose = item.index;
				this.choseTag = item.value;
			},
			getTagWidth(length){
				return `${100+(length-2)*20}rpx`;
			},
			beforeUpload(index, lists) {
			  this.formData.image = lists[index].file
			  return true
			},
			listChange(lists, index) {
			  console.log('上传文件列表发生改变', lists, index);
			  this.lists.splice(0, this.lists.length)
			  this.$nextTick(() => {
			    this.lists = this.$t.deepClone(lists)
			    if (this.customSStyle && lists.length > 4) {
			      this.fullWindowsScroll = true
			    } else {
			      this.$refs.demoTemplate.updateSectionScrollView()
			    }
			  })
			},
			oversize(val, lists, index) {
			},
			exceed(val, lists, index) {
			},
			chooseComplete(lists, index) {
			  console.log('文件选择成功', lists, index);
			},
			chooseFail(err) {
			  console.log('文件选择失败', err);
			},
			uploaded(lists, index) {
			  console.log('全部上传文件处理完成', lists, index);
			},
			uploadSuccess(data, currentIndex, lists, index) {
			},
			uploadChange(res, currentIndex, lists, index) {
			  console.log('文件上传信息有变', res, currentIndex, lists, index);
			},
			uploadProgress(res, currentIndex, lists, index) {
			  console.log('文件上传进度', res, currentIndex, lists, index);
			},
			uploadError(err, currentIndex, lists, index) {
			},
			fileRemove(currentIndex, lists, index) {
			  console.log('文件移除成功', currentIndex, lists, index);
			},
		},
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
			height:180rpx;
			font-size: 30rpx;
			left:0;
			right:0;
			width:auto;
		}
		
		&__chose-image{
			whith:100%;
			margin: 30rpx 20rpx;
		}
	}
	.send{
		margin:20rpx 30rpx;
		
		&__video-image{
			width:60rpx;
			height:60rpx;
			vertical-align:top;
		}
		
		&__button{
			display: inline-flex;
			text-align: right;
			margin: 0;
			margin-left:510rpx;
			vertical-align:top;
		}
	}
</style>