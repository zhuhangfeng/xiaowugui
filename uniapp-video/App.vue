<script>
	export default {
		onLaunch: function() {
			uni.hideTabBar()
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("./static/iconfont.css");
	html,body{
		height:100%;
		width:100%;
	}
	/* //at.alicdn.com/t/font_3402823_ysgl1iina3l.css
	 */
</style>


