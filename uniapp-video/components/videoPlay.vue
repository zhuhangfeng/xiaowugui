<template>
	<view class="video-box">
		<video @click="isPlay" id="myVideo" :autoplay="autoplay" class="video" controls="true" :src="videoItem.playUrl"></video>
		<view v-show="!isplay" class="iconfont icon-kaishi1 iconStyle">
			
		</view>
	</view>
</template>

<script>
	var timer = null;
	export default {
		name:"videoPlay",
		props:["videoItem","index"],
		onReady:function(res){
			this.videoContext = uni.createVideoContext('myVideo',this)
		},
		data() {
			return {
				isplay:false,
				dblClick:false,
				autoplay:false
			}; 
		},
		mounted(){
			if(this.index == 0){
				this.autoplay = true,
				this.isplay = true
			}
			console.log(this.index)
		},
		methods: {
			isPlay(){
				clearTimeout(timer)
				this.dblClick =! this.dblClick
				timer = setTimeout(()=> {
					if(this.dblClick){
						if(this.isplay){
							this.pauser()
						}else{
							this.newplayer()
						}
					}else{
						this.$emit('dblClick')
					}
					this.dblClick = false
				}, 300);
				
				
			},
			player() {
				if(!this.isplay){
					this.videoContext.seek(0)
					this.videoContext.play()
					this.isplay = true
				}
			},
			pauser(){
				if(this.isplay){
					this.videoContext.pause()
					this.isplay = false
				}
			},
			newplayer(){
				if(!this.isplay){
					this.videoContext.play()
					this.isplay = true
				}
			}
		},
	}
</script>

<style>
	.video-box{
		width: 100%;
		height: 100%;
	}
.video{
	width: 100%;
	height: 100%;
}
.iconStyle{
	    position: absolute;
	    bottom: 42%;
	    left: 50%;
	    z-index: 15;
	    transform: translate(-50%, -42%);
	    font-size: 58px;
	    color: rgb(255,255,255,0.4);
}
</style>