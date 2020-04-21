<template>
    <div class="team-main">
		<Global></Global>
        <div class="top-bg">
            <image src="/static/img/doctor/doctor-banner.png" alt="">
        </div>
        <statisticsTab :teamData="teamData"></statisticsTab>
        <TeamNav @changeType="getTeamData"></TeamNav>
        <TeamList :teamData="teamData.data"></TeamList>
		
		<SupportTip></SupportTip>
		<ContactBottom></ContactBottom>
		<AuthMain></AuthMain>
    </div>
</template>

<script>
    import statisticsTab from './childCom/statisticsTab'
    import TeamNav from './childCom/TeamNav'
    import TeamList from './childCom/TeamList'
    import {getTeamList} from '@/network/teamReq'


    export default {
        name: "Team",
        data() {
            return {
                teamData: {},
                type: 1,

            }
        },
        components:{
            statisticsTab,
            TeamNav,
            TeamList,

        },
        created() {
            this.getTeamData(this.type)

        },
        methods:{
            getTeamData(type){
                getTeamList(type).then(res => {
                    this.teamData = res.data;
                })
            },
			onShareAppMessage() {
				return {
					title: this.$store.state.companyMsg.seller_company.name,
					path: this.$Route.path + '?sid=' + this.$store.state.sid,
				}
			}
            // toGetTeamData(type){
            //     this.getTeamData(type)
            // }
        }

    }
</script>

<style scoped>
.top-bg image{
    height: 210px;
    width: 100%;
}
</style>