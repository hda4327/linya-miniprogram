<template>
	<view class="main">
		<div class="fixed-content">
			<div class="top-name">{{comName}}</div>
			<!-- <div class="top-name"></div> -->
			<MainTopTab></MainTopTab>
		</div>
		<!--        清除fixed dom的高度-->
		<div style="height: 86px"></div>
	</view>
</template>

<script>
	import MainTopTab from "@/pages/home/childComponent/MainTopTab";
	
	export default {
		name: "Global",
		data() {
			return {
				companyInfo: '',
				// comName: '',
			}
		},
		mounted() {
			// this.$nextTick(()=>{
				// setTimeout(res=>{
					// this.companyInfo = 
				// },500)
				
				
			// })
		},
		components: {
			MainTopTab,
		},
		computed:{
			comName(){
				let com = this.$store.state.companyMsg.seller_company
					return com ? com.name: ''
				
			}
		},
		watch:{
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../static/css/base.css";
	
	.fixed-content{
		z-index: 99;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		
		.top-name {
			line-height: 41px;
			height: 41px;
			text-align: center;
			background: white;
			width: 100%;
			font-weight: 700;
			color: rgba(26, 26, 26, 1);
			font-size: 16px;
			border-bottom: 1px solid rgba(244, 244, 244, 1);
			/* position: fixed; */
			
		}
	}
</style>
