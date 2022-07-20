<template>
	<view>
		<h1>我是子组件</h1>
		父组件传过来的:{{text}}
		<button @tap="change">传值给父组件</button>
	</view>
</template>

<script>
	export default{
		props:['text'],
		methods:{
			change(){
				// console.log(this.text1(0))
				// this.text1(123)
				this.$emit('text1',123)
			}
		}
	}
</script>

<style>
</style>