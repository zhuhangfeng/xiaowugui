<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	//根据自己包的位置
		// import {https} from '@/config/api.js'

	import {getList} from '@/config/api.js'
	export default {
		data() {
			return {
				title: 'nihao'
			}
		},
		onLoad() {
			this.getListData()
			//  https('/product/getBaseCategoryList','get').then(async (res)=>{
			// 	// console.log(res.data.data[0].)
			// 	 this.title = await res.data.data[0].categoryName
			// })
			// console.log(uni)
		},
		methods: {
			//then,catch
			//  getListData(){
			// 		getList().then((res)=>{
			// 			console.log(res)
			// 		}).catch((error)=>{
			// 			console.log('error',error)
			// 		})
			// },
			async getListData(){
				try{
					var list =  await getList()
					console.log(list[0].categoryName)
					this.title = list[0].categoryName
				}catch(error){
					console.log(error)
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
