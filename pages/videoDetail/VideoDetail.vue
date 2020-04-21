<template>
    <view class="main">
		<view class="top-bg">
			<image src="/static/img/common/top-bg3.png"></image>
		</view>
		<CompanyInfo></CompanyInfo>
		<VideoContent :videoInfo="videoInfo"></VideoContent>
		<CompanyBottom :isShowLog="false"></CompanyBottom>
		<TipContent></TipContent>
		
		<SupportTip></SupportTip>
		<ContactBottom></ContactBottom>
		<AuthMain></AuthMain>
    </view>
</template>

<script>
	import {reqVideoDetail} from '@/network/videoReq.js'
	
	import VideoContent from './childCom/videoContent.vue'
	import CompanyInfo from './childCom/CompanyInfo.vue'
	import TipContent from './childCom/TipContent.vue'
	import CompanyBottom from '@/components/content/companyInfo/CompanyBottom.vue'
	
    export default {
		
        name: "videoDetail",
        data(){
			return {
				videoId:'',
				videoInfo: {}
			}
        },
		onLoad(option) {
			this.videoId = option.video_id
			this.getVideoDetail(this.videoId)
		},
        components:{
			VideoContent,
			CompanyInfo,
			TipContent,
			CompanyBottom
        },
		methods:{
			getVideoDetail(videoId){
				reqVideoDetail(videoId).then(res=>{
					
					this.videoInfo = res.data
				})
			},
			onShareAppMessage() {
				return {
					title: this.$store.state.companyMsg.seller_company.name,
					path: this.$Route.path + '?sid=' + this.$store.state.sid + "&video_id=" + this.videoId,
				}
			}
		}
    }
</script>

<style scoped lang="scss">
	.top-bg{
		image{
			height: 180px;
			width: 100%;
		}
	}
</style>
