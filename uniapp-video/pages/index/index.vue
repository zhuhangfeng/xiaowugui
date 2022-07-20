<template>
	<view class="content">
		<First-Nav></First-Nav>
		<Video-List></Video-List>
		 <Tab></Tab>
	</view>
</template>

<script>
	import Tab from '../../components/Tab.vue'
	import FirstNav from '../../components/firstNav.vue'
	import VideoList from '../../components/videoList.vue'
	export default {
		components:{
			Tab,FirstNav,VideoList
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
	}
</style>
