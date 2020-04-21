<template>
    <div class="main">
        <template v-if="coupeData.imgsrc">
            <div class="top" :style="{backgroundImage:'url(' + coupeData.imgsrc +')'}">
            </div>
        </template>
        <DetailContent :coupeData="coupeData"></DetailContent>
		
		<CompanyBottom></CompanyBottom>
		<SupportTip></SupportTip>
		<ContactBottom></ContactBottom>
		<AuthMain></AuthMain>
    </div>
</template>

<script>
    import {reqCoupeDetail} from '@/network/coupeReq'
    import DetailContent from "./ComChild/DetailContent";
	import CompanyBottom from '@/components/content/companyInfo/CompanyBottom.vue'

    export default {
        name: "CoupeDetail",
        data(){
            return {
                id: '',
                coupeData:{},
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
			let queryObj = option || this.$Route.query
			console.log('queryObj', queryObj)
			console.log('query', this.$Route.query)
			this.id = queryObj.id 
			this.getCoupeDetail(this.id)
		},
        methods:{
            getCoupeDetail(id){
                reqCoupeDetail(id).then(res=>{
                    this.coupeData = res.data
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