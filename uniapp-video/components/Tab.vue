<template>
	<view class="tab">
		<view class="">
			首页
		</view>
		<view class="">
			朋友
		</view>
		<view class="iconfont icon-jiahao iconStyle">
			
		</view>
		<view class="">
			消息
		</view>
		<view class="">
			我的
		</view>
	</view>
</template>

<script>
	export default {
		name:"Tab",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.tab{
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		width: 100%;
		height: 50px;
		justify-content: space-around;
		align-items: center;
		background-color: black;
		color: #fff;
	}
	.iconStyle{
		background-color: #fff;
		width: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 25px;
		border-radius: 5px;
		color: black;
	}
</style>