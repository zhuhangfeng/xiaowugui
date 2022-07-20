<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<!-- <navigator url="/pages/video/video">跳转</navigator> -->
		
	</view>
</template>

<script>
	export default {
		mounted(){
			this.getUserList()
		},
		methods:{
			getUserList(){
				// uni.request({
				// 	url:'http://www.weather.com.cn/data/sk/101010100.html',
				// 	success: (res) => {
				// 		console.log(res)
				// 	}
				// })
				// this.$http('http://www.weather.com.cn/data/sk/101010100.html').then((res)=>{
				// 	console.log(res)
				// })
			}
		}
	}
</script>
