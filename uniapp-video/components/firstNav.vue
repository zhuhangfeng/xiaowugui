<template>
	<view class="firstNav">
		<view class="iconfont icon-sousuotianchong iconStyle">
			
		</view>
		<view class="firstNavText">
			<view class="home" :class="isColor?'isWhite':'isHuise'" @click="homeClick">
				首页
			</view>
			<view class="guanzhu" :class="isColor?'isHuise':'isWhite'" @click="cityClick">
				同城
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"firstNav",
		data() {
			return {
				isColor:true
			};
		},
		methods:{
			homeClick(){
				this.isColor = true
				uni.navigateTo({
					url: '/pages/index/index'
				});
			},
			cityClick(){
				this.isColor = false
				uni.navigateTo({
					url: '/pages/city/city'
				});
			}
		}
	}
</script>

<style>
.firstNav{
	color: white;
	width: 100%;
	position: fixed;
	top: 20px;
	left: 0;
	display: flex;
	align-items: center;
	background-color: transparent;
	z-index: 5;
}
.iconStyle{
	position: absolute;
	left: 20px;
	font-size: 20px;
}
.firstNavText{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.home{
	margin: 10px;
}
.guanzhu{
	margin: 10px;
	
}
.isWhite{
	color: #fff;
}
.isHuise{
	color: gainsboro;
}
</style>