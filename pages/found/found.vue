<template>
	<view class="foundPage">
		<tn-nav-bar :height="160" backIcon="search" fixed>		
			<view class="foundPage__content">
				<tn-tabs :list="fixedList" :current="current" :isScroll="true" :showBar="true" inactiveColor="#838383" gutter="30" activeColor="#95EC6A" @change="tabChange"></tn-tabs>
			</view>
		</tn-nav-bar>
		
		<view class="foundPage__hidden" :class="{foundPage__display:current == 0}">
			<view class="topSearch">
				<view v-for="(item, tindex) in topSearchNews" :key="tindex">
					<view class="topSearch__news" :class="{topSearch__news__index0:item.index == 0}">
						<image v-if="item.index == 0" class="topSearch__news__inline topSearch__news__index0__image" src="/static/top.png"></image>
						<text v-else class="topSearch__news__inline topSearch__news__index" :style="{'color':item.color}">{{item.index}}</text>
						<text class="topSearch__news__inline topSearch__news__text">{{item.content}}</text>
						<image v-if="item.index > 0" class="topSearch__news__inline topSearch__news__image" src="/static/leaves.png"></image>
						<text v-if="item.index > 0" class="topSearch__news__inline topSearch__news__count">{{item.count}}</text>
						<view class="border-content tn-border-solid-top"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="foundPage__hidden" :class="{foundPage__display:current == 1}">
			<my-attention :foundPageNews="foundPageNews"></my-attention>
		</view>
		<view class="foundPage__hidden" :class="{foundPage__display:current == 2}">
			<my-attention :foundPageNews="foundPageNews"></my-attention>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1,
				scrollTop:0,
				topSearchNews:[
					{content:"受疫情影响将延期返校",index:0},
					{content:"四六级开启分批报名",index:1,count:5498,color:"#F83A36"},
					{content:"中传雪景",index:2,count:5356,color:"#E68C14"},
					{content:"挑战杯大创组队",index:3,count:4786,color:"#E68C14"},
					{content:"钢琴湖落水小哥",index:4,count:4390,color:"#F5DC70"},
					{content:"网易实习收留新传心碎考研人",index:5,count:3807,color:"#F5DC70"},
					{content:"疫情结束一起去旅行吧",index:6,count:2870,color:"#F5DC70"},
					{content:"我们的冬奥",index:7,count:2670,color:"#F5DC70"},
					{content:"中国传媒大学考研成绩",index:8,count:2365,color:"#F5DC70"},
					{content:"材料评议",index:9,count:1875,color:"#F5DC70"},
					{content:"非毕业生返校申请",index:10,count:1201,color:"#F5DC70"},
					{content:"大学生就业与创业指导智慧树答案",index:11,count:1120,color:"#F5DC70"},
					{content:"凑字",index:12,count:832,color:"#F5DC70"},
					{content:"凑字",index:13,count:666,color:"#F5DC70"},
					{content:"凑字",index:14,count:543,color:"#F5DC70"},
					{content:"凑字",index:15,count:432,color:"#F5DC70"},
					{content:"凑字",index:16,count:414,color:"#F5DC70"},
					{content:"凑字",index:17,count:322,color:"#F5DC70"},
					{content:"凑字",index:18,count:311,color:"#F5DC70"},
					{content:"凑字",index:19,count:213,color:"#F5DC70"},
					{content:"凑字",index:12,count:832,color:"#F5DC70"},
					{content:"凑字",index:13,count:666,color:"#F5DC70"},
					{content:"凑字",index:14,count:543,color:"#F5DC70"},
					{content:"凑字",index:15,count:432,color:"#F5DC70"},
					{content:"凑字",index:16,count:414,color:"#F5DC70"},
					{content:"凑字",index:17,count:322,color:"#F5DC70"},
					{content:"凑字",index:18,count:311,color:"#F5DC70"},
					{content:"凑字",index:19,count:213,color:"#F5DC70"},
					{content:"凑字",index:12,count:832,color:"#F5DC70"},
					{content:"凑字",index:13,count:666,color:"#F5DC70"},
					{content:"凑字",index:14,count:543,color:"#F5DC70"},
					{content:"凑字",index:15,count:432,color:"#F5DC70"},
					{content:"凑字",index:16,count:414,color:"#F5DC70"},
					{content:"凑字",index:17,count:322,color:"#F5DC70"},
					{content:"凑字",index:18,count:311,color:"#F5DC70"},
					{content:"凑字",index:19,count:213,color:"#F5DC70"}
				],
				foundPageNews:[
					{
						headerUrl:"https://code.zwt666.top/img/school.webp",
						name:"中国传媒大学",
						time:"19:42",
						text:"冰雪小白杨以每一个“我”的爱与热忱汇聚起“我们”的无限能量！谨以短片《我们》纪念“我们”一起向未来的时光，纪念这段义无反顾的青春奔赴",
						multimediaType:"image",
						imageUrl:"https://code.zwt666.top/img/school.jpg",
						share:"602",
						talk:"123",
						like:"2532"
						},{
						headerUrl:"https://code.zwt666.top/img/school.webp",
						name:"中国传媒大学",
						time:"19:42",
						text:"冰雪小白杨以每一个“我”的爱与热忱汇聚起“我们”的无限能量！谨以短片《我们》纪念“我们”一起向未来的时光，纪念这段义无反顾的青春奔赴",
						multimediaType:"image",
						imageUrl:"https://code.zwt666.top/img/school.jpg",
						share:"602",
						talk:"123",
						like:"2532"
						},{
						headerUrl:"https://code.zwt666.top/img/school.webp",
						name:"中国传媒大学",
						time:"19:42",
						text:"冰雪小白杨以每一个“我”的爱与热忱汇聚起“我们”的无限能量！谨以短片《我们》纪念“我们”一起向未来的时光，纪念这段义无反顾的青春奔赴",
						multimediaType:"image",
						imageUrl:"https://code.zwt666.top/img/school.jpg",
						share:"602",
						talk:"123",
						like:"2532"
						},{
						headerUrl:"https://code.zwt666.top/img/school.webp",
						name:"中国传媒大学",
						time:"19:42",
						text:"冰雪小白杨以每一个“我”的爱与热忱汇聚起“我们”的无限能量！谨以短片《我们》纪念“我们”一起向未来的时光，纪念这段义无反顾的青春奔赴",
						multimediaType:"image",
						imageUrl:"https://code.zwt666.top/img/school.jpg",
						share:"602",
						talk:"123",
						like:"2532"
						},{
						headerUrl:"https://code.zwt666.top/img/school.webp",
						name:"中国传媒大学",
						time:"19:42",
						text:"冰雪小白杨以每一个“我”的爱与热忱汇聚起“我们”的无限能量！谨以短片《我们》纪念“我们”一起向未来的时光，纪念这段义无反顾的青春奔赴",
						multimediaType:"image",
						imageUrl:"https://code.zwt666.top/img/school.jpg",
						share:"602",
						talk:"123",
						like:"2532"
						}
				],
				fixedList: [
				  {name: '热榜'},
				  {name: '发现'},
				  {name: '关注', count: 34},
				]
			}
		},
		methods: {
			tabChange(index) {
			  this.current = index;
			  uni.pageScrollTo({
			           scrollTop: 0, //距离页面顶部的距离
			           duration: 0,
			  });
			},
			share(){
				
			},
			talk(){
				
			},
			share(){
				
			}
		}
	}
</script>
<style lang="scss" scoped>
	.foundPage{
		&__content{
			padding-top: 30rpx;
			box-shadow: 0rpx -1rpx 10rpx rgba(0, 0, 0, 0.1);
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
		
		&__hidden{
			margin-top:150rpx;
			display: none;
		}
		
		&__display{
			display: block;
		}
	}
	.topSearch{
		border-radius: 20rpx;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.09);
		margin: 40rpx;
		margin-top: 190rpx;
		color:#636363;
		&__news{
			display: block;
			margin-top: 20rpx;
			&__index0{
				padding-top: 20rpx;
				&__image{
					width:40rpx;
					height:40rpx;
					margin-left: 10rpx;
					margin-right: 10rpx;
				}
			}
			
			&__inline{
				display: inline-flex;
				vertical-align:middle;
				margin-top: 5rpx;
				margin-bottom: 20rpx;
			}
			
			&__image{
				margin-left: 20rpx;
				width: 30rpx;
				height: 30rpx;
			}
			
			&__index{
				margin-top:10rpx;
				font-size: 34rpx;
				font-style: oblique;
				width:40rpx;
				height:40rpx;
				margin-left: 20rpx;
			}
			&__text{
				font-size: 30rpx;
			}

			&__count{
				font-size: 24rpx;
				margin-left: 20rpx;
				margin-bottom: 12rpx;
			}
		}
	}
	
</style>
