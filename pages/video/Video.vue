<template>
    <view class="main">
		<VideoSearch :typeList="typeList" @changeType="changeType"></VideoSearch>
		<VideoList :videoList="videoList"></VideoList>
		<SupportTip></SupportTip>
		<ContactBottom></ContactBottom>
		<AuthMain></AuthMain>
    </view>
</template>

<script>
	import VideoSearch from './childCom/VideoSearch.vue'
	import VideoList from './childCom/VideoList.vue'
	import {reqVideoTypeList, reqVideoList} from '@/network/videoReq.js'
	import SupportTip from '@/components/content/supportTip/SupportTip.vue'
    export default {
        name: "video",
        data(){
			return {
				typeList:[],
				videoList: [],
				videoListParam:{title:'', type:469},
			}
        },
        components:{
			VideoSearch,
			VideoList,
			SupportTip
        },
		onLoad() {
			this.getVideoTypeList()
			
			this.getVideoList(this.videoListParam)
		},
		methods:{
			getVideoTypeList(){
				let sid = this.$store.state.sid
				reqVideoTypeList(sid).then(res=>{
					this.typeList = res.data
				})
			},
			getVideoList(params){
				reqVideoList(params).then(res=>{
					this.videoList = res.data
				})
			},
			changeType(typeId){
				this.videoListParam['type'] = typeId
				this.getVideoList(this.videoListParam)
			},
			onShareAppMessage() {
				return {
					title: this.$store.state.companyMsg.seller_company.name,
					path: this.$Route.path + '?sid=' + this.$store.state.sid,
				}
			}
			
		}
    }
</script>

<style scoped>

</style>
