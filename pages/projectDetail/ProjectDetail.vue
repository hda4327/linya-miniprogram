<template>
	<div class="main">
		<Nav :navList="navList" @changeType="changeType"></Nav>
		<div style="height: 40px"></div>
		<!-- <keep-alive>
            <router-view :picList="picList" :proList="proList" :videoList="videoList"></router-view>
        </keep-alive> -->

		<div :style="{display:whichDetail === 'picture'?'block':'none'}">
			<Picture ref="pic" :params="params"></Picture>
		</div>
		<div :style="{display:whichDetail === 'product'?'block':'none'}">
			<Product></Product>
		</div>
		<div :style="{display:whichDetail === 'video'?'block':'none'}">
			<VideoPart :params="params"></VideoPart>
		</div>
		
	<SupportTip></SupportTip>
	<ContactBottom></ContactBottom>
	<AuthMain></AuthMain>
	</div>
</template>

<script>
	import Nav from "./ChildCom/Nav";
	import Picture from './ChildCom/Picture'
	import Product from './ChildCom/Product'
	import VideoPart from './ChildCom/VideoPart'


	export default {
		name: "projectDetail",
		data() {
			return {
				navList: [{
					title: '图解',
					path: 'picture'
				}, {
					title: '动画',
					path: 'video'
				}],

				params: {
					id: '',
					class_id: ''
				},
				// proList:[],
				// videoList: [],
				whichDetail: 'picture'
			}
		},
		onLoad(option) {
			this.params.class_id = option.class_id
			this.params.id = option.id


			// this.getVideoList()
			// this.getProductList()


		},

		components: {
			Nav,
			Picture,
			Product,
			VideoPart,
		},

		computed: {

		},
		methods: {
			changeType(which) {
				this.whichDetail = which
			},

			getVideoList() {
				let params = {
					class_id: this.class_id,
					id: this.id,
					page: 1,
					num: 10,
				}
				reqVideoList(params).then(res => {
					this.proList = res.data
				})
			},
			getProductList() {
				let params = {
					project_id: this.id,
					page: 1,
					num: 10,
				}
				reqProductList(params).then(res => {
					this.videoList = res.data
				})
			},
			onShareAppMessage() {
				return {
					title: this.$store.state.companyMsg.seller_company.name,
					path: this.$Route.path + '?sid=' + this.$store.state.sid + "&id=" + this.params.id + "&class_id=" + this.params.class_id,
				}
			}
		}

	}
</script>

<style scoped lang="scss">
	.main {
		background: #FAF8F8;
	}
</style>
