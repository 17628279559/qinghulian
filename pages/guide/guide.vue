<template>
	<view>
		<view>导航</view>
		<my-tabbar :pageValue="pageNum"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageNum:3
			}
		},
		methods: {
		
		}
	}
</script>

<style>

</style>
