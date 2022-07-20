<template>
	<view class="content">
		<view class="username">
			@{{videoItem.userName}}
		</view>
		<view class="title">
			{{videoItem.title}}
		</view>
		<view class="music">
			<view class="music2">
				海阔天空
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"listLeft",
		props:['videoItem'],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.content{
		font-size: 16px;
	}
	.title{
		width: 200px;
		font-size: 12px;
		margin: 10px 0;
	}
	.music{
		width: 100px;
		white-space: nowrap;
		overflow: hidden;
		font-size: 12px;
	}
	.music2{
		width: 200px;
		animation: identifier 4s linear 0.2s infinite;
	}
	@keyframes identifier {
		0%{
			transform: translate3d(80%,0,0);
		}
		100%{
			transform: translate3d(-80%,0,0);
		}
	}
</style>