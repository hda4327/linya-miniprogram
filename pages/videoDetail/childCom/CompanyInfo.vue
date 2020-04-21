<template>
	<view class="info-main">
		<view class="img-content">
			<image :src="baseUrl + companyInfo.seller_company.img_resource.src" ></image>
		</view>
		<view class="title">{{companyInfo.seller_company.name}}</view>

	</view>
</template>

<script>
	export default {
		name: "CompanyInfo",
		data() {
			return {
				baseUrl: this.$baseUrl,
				companyInfo: {}
			}
		},
		created() {
			this.companyInfo = this.$store.state.companyMsg
		},
		components: {

		}
	}
</script>

<style scoped lang="scss">
	.info-main {
		position: relative;

		.img-content{
			width: 100%;
			height: 80px;
			position: absolute;
			bottom: 10px;
			top: -39px;
			display: flex;

			image{
				width: 78px;
				height: 78px;
				border-radius: 100%;
				margin: auto;
				border: 1px solid #fff;
			}
		}
		
		.title {
			font-size: 16px;
			font-weight: 400;
			color: rgba(50, 50, 50, 1);
			background: #ffffff;
			text-align: center;
			padding-top: 45px;
		}
	
	}
</style>
