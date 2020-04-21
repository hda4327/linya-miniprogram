<template>
    <div class="main">
		<Global></Global>
        <div class="fixed-content">
            <Search @search="search"></Search>
        </div>
        <div style="height: 42px"></div>
        <scroll-view   @scrolltolower="pullUpLoad" class="scroll" scroll-y="true">
            <CoupeList :coupeList="coupeList"></CoupeList>
        </scroll-view>
		
		<SupportTip></SupportTip>
		<ContactBottom></ContactBottom>
		<AuthMain></AuthMain>

    </div>
</template>

<script>
    import {reqCoupeList} from "../../network/homeReq";
    import CoupeList from "./ComChild/CoupeList";
    import Search from "../../components/content/Search/Search";
    export default {
        name: "Coupe",
        data(){
            return{
                params:{
                    page: 1,
                    num: 10,
                    title: ''
                },
                coupeList:[]
            }
        },
        created() {
            this.getCoupeList()
        },
        components:{
            CoupeList,
            Search,
        },
        methods:{
            getCoupeList(type){

                reqCoupeList(this.params).then(res=>{
                    if (res.data.length){
                        this.coupeList = type==='search'?res.data:[...this.coupeList, ...res.data]
                        // this.$nextTick(()=>{
                        //     this.$refs.scroll.refresh()
                        //     this.$refs.scroll.finishPullUp()
                        // })
                    }


                })
            },
            search(title){
                this.params.title = title
                this.getCoupeList('search')
            },

            pullUpLoad(){
                this.params.page += 1
                this.getCoupeList()

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

<style scoped lang="scss">
.fixed-content{
    position: fixed;
    top: 86px;
    left: 0;
    right: 0;
}
    .scroll{
        height: 550px;
    }
</style>