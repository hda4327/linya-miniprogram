<template>
    <div class="main">
        <template v-if="caseData.img_resource">
            <div class="top" :style="{backgroundImage:'url('+ baseUrl + caseData.img_resource.src +')'}">
            </div>
        </template>
        <DetailContent :caseData="caseData"></DetailContent>
		
		<CompanyBottom></CompanyBottom>
		<SupportTip></SupportTip>
		<ContactBottom></ContactBottom>
		<AuthMain></AuthMain>
    </div>
</template>

<script>
    import {reqCaseDetail} from '@/network/caseReq'
    import DetailContent from "./ComChild/DetailContent";
	import CompanyBottom from '@/components/content/companyInfo/CompanyBottom.vue'
    export default {
        name: "CaseDetail",
        data(){
            return {
                id: '',
                caseData:{},
				baseUrl:this.$baseUrl,
            }
        },
        components:{
            DetailContent,
			CompanyBottom
        },
        created() {
            
        },
		onLoad(option) {
			this.id = option.id
			this.getCaseDetail(this.id)
		},
        methods:{
            getCaseDetail(id){
                reqCaseDetail(id).then(res=>{
                    this.caseData = res.data
                })
            },
			onShareAppMessage() {
				return {
					title: this.$store.state.companyMsg.seller_company.name,
					path: this.$Route.path + '?sid=' + this.$store.state.sid + "&id=" + this.id,
				}
			}
        }

    }
</script>

<style scoped lang="scss">
.top{
    width: 100%;
    height: 165px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>