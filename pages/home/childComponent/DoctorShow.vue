<template>
    <div class="doctor-show">
        <IndexItem title="医生团队" :toPath="toPath">

            <navigator :url="toPathDetail+'?tit=' + item.id"  v-for="(item, index) in doctorList" v-if="index<2" :key="index">
				<view class="doctor-content">
					<div class="head-img" :style="{backgroundImage: 'url('+baseUrl + item.img_resource.src+')'}">
					
					</div>
					<div class="doctor-info">
					    <div class="top">
					        <span class="name">{{item.name}}</span> <span class="post">{{item.post}}</span>
					    </div>
					    <div class="bottom">
					    {{item.professional}}
					    </div>
					</div>
				</view>
                
            </navigator>
        </IndexItem>
    </div>
</template>

<script>
    import IndexItem from "@/components/content/IndexItem/IndexItem";
    import {getTeamList} from '@/network/homeReq'
    export default {
        name: "DoctorShow",
        data() {
            return {
                baseUrl: this.$baseUrl,
                doctorList: [],
				toPath: '/pages/team/Team',
				toPathDetail:'/pages/teamDetail/TeamDetail',
            }
        },
        mounted() {
            getTeamList().then(res=>{
                this.doctorList = res.data
            })
        },
        components:{
            IndexItem
        }
    }
</script>

<style scoped lang="scss">
.doctor-content{
    display: flex;
    margin-bottom: 12px;
    .head-img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-size: cover;
        background-repeat: no-repeat;

    }
    .doctor-info{
        padding-left: 10px;
        flex-flow: column;
        justify-content: space-around;
        display: flex;

        .top{
            .name{
                color: #323232;
                font-weight: 400;
                font-size: 15px;
            }
            .post{
                color: #323232;
                font-weight: 400;
                font-size: 12px;

            }
        }
        .bottom{
            color: #868686;
            font-weight: 400;
            font-size: 12px;
        }
    }
}
</style>