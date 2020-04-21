<template>
    <div class="main">
        <header class="top-bg">
			<image src="/static/img/doctor/doctor-top-bg.png" mode=""></image>
        </header>
        <DoctorContent :doctorData="doctorData"></DoctorContent>
        <SatisfactionContent :satisfiedList="satisfiedList" :tit='doctorId'></SatisfactionContent>
        <template v-if="doctorData.wx_img_resource">
            <DoctorWx :wxImg="wxImageUrl" :name="doctorData.name"></DoctorWx>
        </template>
        <template v-if="doctorData.photo_resource.length">
            <AtlasContent :photoResource="doctorData.photo_resource"></AtlasContent>
        </template>
      <!--  <GiftContent :tit='doctorId'></GiftContent>
        <CommentContent :tit='doctorId'></CommentContent> -->
		<ContactBottom></ContactBottom>
		<AuthMain></AuthMain>
    </div>

</template>

<script>
    import {getTeamDetail} from '@/network/teamReq'
    import DoctorContent from "./childCom/DoctorContent";
    import SatisfactionContent from "./childCom/SatisfactionContent";
    import DoctorWx from "./childCom/DoctorWx";
    import GiftContent from "./childCom/GiftContent";
    import AtlasContent from "./childCom/AtlasContent";
    import CommentContent from "./childCom/CommentContent";


    export default {
        name: "TeamDetail",
        data() {
            return {
				baseUrl: this.$baseUrl,
                doctorId: '',
                doctorData: {},
                swiperOption:{},
                satisfiedList: []
            }
        },
        components: {
            DoctorContent,
            SatisfactionContent,
            DoctorWx,
            AtlasContent,
            GiftContent,
            CommentContent
        },
		onLoad(option) {
			this.doctorId = option.tit
			this.reqTeamDetail()
		},
        
        methods: {
            reqTeamDetail() {
                getTeamDetail(this.doctorId).then(res => {
                    this.doctorData = res.data;
                    this.satisfiedList.push(res.data.very_satisfied)
                    this.satisfiedList.push(res.data.satisfied)
                    this.satisfiedList.push(res.data.commonly)
                })
            },
			onShareAppMessage() {
				return {
					title: this.$store.state.companyMsg.seller_company.name,
					path: this.$Route.path + '?sid=' + this.$store.state.sid + "&tit=" + this.doctorId,
				}
			}

        },
        computed: {
            wxImageUrl() {
				if(this.doctorData.wx_img_resource){
					return this.baseUrl + this.doctorData.wx_img_resource.src
				}
                
            }
        }


    }
</script>

<style scoped lang="scss">

    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
		width: 100%;

        .top-bg{
			width: 100%;
			
			image{
				width: 100%;
				height: 205px;
				/* padding-top: 1.58rem; */
			}
		} 
			


    }

</style>