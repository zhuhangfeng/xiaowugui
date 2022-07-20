<template>
	<view class="city">
		<first-nav></first-nav>
		<Tab/>
	</view>
</template>

<script>
	import firstNav from '../../components/firstNav.vue'
	import Tab from '../../components/Tab.vue'
	export default {
		components:{
			firstNav,Tab
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.city{
	width: 100%;
	height: 100%;
	background-color: #000;
}
</style>
