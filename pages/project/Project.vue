<template>
    <div class="main">
		<view class="list" v-if="projectList.length>1">
				<navigator :url="'/pages/projectDetail/ProjectDetail?class_id='+ item.classify_id + '&id=' + item.id" class="item" v-for="(item,index) in projectList" :key="index">
				    <img :src="item.img_resource.src">
				    <p>{{item.project_name}}</p>
				</navigator>
		</view>
		
       <ContactBottom></ContactBottom>
	   <AuthMain></AuthMain>
    </div>
</template>

<script>
    import {reqProjectList} from '@/network/projectReq'

    export default {
        name: "Project",
        data() {
            return {
                projectList:[]
            }
        },
        created(){
            this.getProjectList()
        },
        methods:{
            getProjectList(){
                reqProjectList().then(res=>{
                    this.projectList = res.data
                })
            },
			onShareAppMessage() {
				return {
					title: this.$store.state.companyMsg.seller_company.name,
					path: this.$Route.path + '?sid=' + this.$store.state.sid,
				}
			}

        },

    }
</script>

<style scoped lang="scss">
.list{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
    .item{
        width: 120px;
        height: 121.4px;
        text-align: center;
        /* padding: 0.3rem 0; */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        img{
            height: 40px;
            width: 40px;
        }
        p{
            font-size: 12px;
            font-weight: 400;
            color: rgba(106,106,106,1);
            line-height: 18px;
            margin-top: 10px;
        }
    }
}
</style>