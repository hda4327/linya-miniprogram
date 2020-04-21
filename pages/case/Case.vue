<template>
    <div class="case-main">
		<Global></Global>
        <div class="fix-content">
            <CaseNav :categoryList="categoryList" @changeTab="changeTab" ref="nav"></CaseNav>
            <Search @search="search"></Search>
        </div>
        <div style="height: 64.5px"></div>
        <Scroll  class="scroll" :bounceTop="false">
            <CaseList :caseList="caseList"></CaseList>
        </Scroll>
<SupportTip></SupportTip>
<ContactBottom></ContactBottom>
<AuthMain></AuthMain>
    </div>
</template>

<script>
    import CaseNav from "./ComChild/CaseNav";
    import CaseList from "./ComChild/CaseList";
    import Search from "components/content/Search/Search";
    import {reqCaseCat, reqCaseList} from 'network/caseReq'
    import Scroll from "../../components/common/scroll/Scroll";

    export default {
        name: "Case",
        data() {
            return {
                categoryList: [],
                caseList: [],
            }
        },
        components: {
            CaseNav,
            CaseList,
            Search,
            Scroll
        },
        created() {
            this.getCaseCat()
        },
        methods: {
            search(title) {
                let typeId = this.$refs.nav.currentTabIndex
                this.getCaseList(typeId, title)
            },
            getCaseCat() {
                reqCaseCat().then(res => {
                    this.categoryList = res.data
                    let reqCaseId = this.categoryList[0].id
                    this.getCaseList(reqCaseId)
                })
            },

            getCaseList(project_id, title = '') {
                let params = {project_id, title}
                reqCaseList(params).then(res => {
                    this.caseList = res.data.data
                })
            },

            changeTab(i) {
                this.getCaseList(i)
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
    .case-main {
        position: relative;
		
		
        .fix-content {
            position: fixed;
            top: 86px;
            left: 0;
            right: 0;
            z-index: 99;
            background: #fff;
        }
        .scroll{
            /*height: calc(100% - 100px);*/
            height: 500px;
        }
    }
</style>