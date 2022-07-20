<template>
	<view>
		<view v-text="msg" @tap="isCo =! isCo" :class="isCo? 'content':'content2'"></view>
		<view v-for="item in 10" :key="item">
		</view>
		
		<view>
			<input type="text" v-model="Text">
			<button @tap="sumbit">提交</button>
			<view v-for="item in List" :key="item">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:'heool',
				isCo:true,
				Text:'',
				List:[]
			}
		},
		methods: {
			sumbit(){
				if(this.List.indexOf(this.Text) === -1){
					this.List.push(this.Text)
					this.Text=''
				}else{
					this.Text=''
				}
			}
		}
	}
</script>

<style>
.content{
	background-color: aquamarine;
}
.content2{
	background-color: black;
}
</style>
