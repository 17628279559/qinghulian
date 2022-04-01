<template>
	<view>
		<view class="found-content">
		  <tn-tabs  :list="fixedList" :current="current" :isScroll="false" inactiveColor="#838383"  activeColor="#95EC6A" @change="tabChange"></tn-tabs>
		</view>
		
		
		
		<my-tabbar :pageValue="pageNum"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNum:1,
				current: 1,
				fixedList: [
				  {name: '热榜', count: 10},
				  {name: '发现'},
				  {name: '关注', count: '99+'},
				]
			}
		},
		methods: {
			tabChange(index) {
			  this.current = index
			}
		}
	}
</script>

<style scoped>
	.location-img{
		width: 50rpx;
		height: 50rpx;
	}
	.found-content{
		padding-top: 50rpx;
		box-shadow: 0rpx -1rpx 10rpx rgba(0, 0, 0, 0.1);
	}
</style>
