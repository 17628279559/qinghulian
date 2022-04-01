<template>
	<view>
		<view>我的</view>
		<my-tabbar :pageValue="pageNum"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNum:4
			}
		},
		methods: {
		}
	}
</script>

<style>

</style>
