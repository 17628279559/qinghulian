<template>
	<view>
		<h1>还在开发</h1>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			let timer = setTimeout(()=>{
				clearTimeout(timer)
				uni.navigateTo({
					url:'pages/index/index'
				})
			},2000)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
