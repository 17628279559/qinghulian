<template>
  <view class="demo-title">
    <view class="content" :class="[{'content--padding': contentPadding}]">
      <slot></slot>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'demo-title',
    props: {
	  // 顶部空隙

      // 标题类型
      type: {
        type: String,
        default: 'first'
      },
      // 标题
      title: {
        type: String,
        default: ''
      },
      // 左图标
      leftIcon: {
        type: String,
        default: 'star'
      },
      // 右图标
      rightIcon: {
        type: String,
        default: 'star'
      },
      // 内容容器是否有两边边距
      contentPadding: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  
  .content {
    margin-top: 10rpx;
    
    &--padding {
      margin-left: 15rpx;
      margin-right: 15rpx;
    }
  }
</style>
