<template>
	<view class="content">
		<view class="userPic">
			<image :src="videoItem.userPic" mode=""></image>
			<view class="iconfont icon-jiahao iconJia">
			</view>
		</view>
		<view class="iconfont icon-aixin_shixin icon" :class="isColor?'isRed':'isWhite'" @click="isColor =!isColor">
			<view style="font-size: 12px;color: #FFF;">
				 9.4w
			</view>
		</view>
		<view class="iconfont icon-pinglun icon">
			<view style="font-size: 12px;">
				 4956
			</view>
		</view>
		<view class="iconfont icon-arrow- icon">
			<view style="font-size: 12px;">
				 6654
			</view>
		</view>
		<view class="iconfont icon-vynil iconStyle" >
		</view>
	</view>
</template>

<script>
	export default {
		name:"listRight",
		props:['videoItem'],
		data() {
			return {
				isColor:false
			};
		},
		mounted(){
			// uni.$on('dblclick',(value)=>{
			// 	this.isColor = value
			// })
		},
		methods:{
			colorChange(){
				this.isColor = true
			}
		}
	}
</script>

<style>
	.content{
		text-align: center;
	}
	.icon{
		font-size: 25px;
		margin: 25px auto;
		width: 25px;
		height: 25px;
		text-align: center;
	}
.iconStyle{
	font-size: 30px;
	animation: rotate 1.5s linear 0.2s infinite;
	width: 30px;
	height: 30px;
	margin: 0 auto;
}
.userPic {
	width: 35px;
	height: 35px;
	border: 2px solid #fff;
	border-radius: 50%;
	position: relative;
}
.iconJia{
	position: absolute;
	background-color: red;
	border-radius: 50%;
	left: 9px;
	bottom: -9px;
}
.userPic image{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
@keyframes rotate { 
	0%{
		transform: rotate(0deg);
	}
	100%{
		transform: rotate(360deg);
	}
}

.isRed{
	color: red;
}
.isWhite{
	color: white;
}
</style>