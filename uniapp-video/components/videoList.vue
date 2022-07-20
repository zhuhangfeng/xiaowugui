<template>
	<view class="content">
		<view class="swiper-box">
			<swiper class="swiper" :vertical="true" @change="swiperChange" @touchstart="touchStart" @touchend="touchEnd">
				<swiper-item  v-for="(item,index) in videoList" :key="item.id">
					<view class="swiper-item">
						<video-play @dblClick="dblClick" ref="myVideo" :videoItem="item" :index='index'></video-play>
					</view>
					<view class="swiper-text">
						<list-left :videoItem="item"></list-left>
					</view>
					<view class="swiper-right">
						<list-right ref="aixinChange" :videoItem="item"></list-right>
					</view>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script>
	import videoPlay from "./videoPlay.vue"
	import listLeft from "./listLeft.vue"
	import listRight from "./listRight.vue"
	var timer = null;
	export default {
		name: "videoList",
		components: {
			videoPlay,
			listLeft,
			listRight
		},
		data() {
			return {
				videoList: [],
				start:0,
				end:0,
				page:0
			};
		},
		created() {
			this.getList()
		},
		watch:{
			page(newvalue,oldvalue){
				console.log(newvalue,oldvalue)
				if(newvalue == this.videoList.length-1){
					this.getList()
				}
			}
		},
		methods: {
			dblClick(){
				this.$refs.aixinChange[this.page].colorChange()
				console.log('111')
			},
			getList() {
				uni.request({
					url: 'https://api.apiopen.top/api/getHaoKanVideo?page=0&size=5',
					method: 'get',
					success: (res) => {
						// console.log(res)
						res.data.result.list.forEach(item=>{
							this.videoList.push(item)
						})
						
					}
				})
			},
			
			touchStart(res){
				this.start = res.changedTouches[0].clientY
				// console.log('start',res.changedTouches[0].clientY)
			},
			touchEnd(res){
				this.end = res.changedTouches[0].clientY
				// console.log('end',res.changedTouches[0].clientY)
			},
			
			swiperChange(res) {
				clearTimeout(timer)
				this.page = res.detail.current
				timer = setTimeout(()=>{
					console.log(res,this.start,this.end)
					if(this.start>this.end){
						console.log('上滑')
						this.$refs.myVideo[this.page].player()
						this.$refs.myVideo[this.page-1].pauser()
						this.start=0
						this.end=0
					}else{
						console.log('下滑')
						this.$refs.myVideo[this.page].player()
						this.$refs.myVideo[this.page+1].pauser()
						this.start=0
						this.end=0
					}
				})
				
			},
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100%;
	}

	.swiper-box {
		width: 100%;
		height: 100%;
	}

	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
	}

	.swiper-text {
		position: absolute;
		bottom: 50px;
		left: 10px;
		color: #fff;
		z-index: 20;
	}

	.swiper-right {
		position: absolute;
		right: 10px;
		bottom: 50px;
		color: #fff;
		z-index: 20;
	}
</style>
