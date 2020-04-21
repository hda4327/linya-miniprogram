<template>
    <div class="statistics">
        <div class="item">
            <p class="title">{{visitCount}}</p>
            <p class="hint">访客量</p>
        </div>
        <div class="item">
            <p class="title">{{caseCount}}</p>
            <p class="hint">病例</p>
        </div>
        <div class="item">
            <p class="title">{{doctorCount}}</p>
            <p class="hint">医生</p>
        </div>
        <div class="item">
            <p class="title">{{discoverCount}}</p>
            <p class="hint">科普</p>
        </div>
    </div>
</template>

<script>
    import {getHomeStatistics} from '@/network/homeReq'

    export default {
        name: "statisticsShow",
        data() {
            return {
                visitCount: 0,
                caseCount: 0,
                doctorCount: 0,
                discoverCount: 0
            }
        },
        mounted() {
            getHomeStatistics().then(res=>{
                const dataL = res.data
                this.visitCount = dataL.visit_count
                this.caseCount = dataL.case_count
                this.doctorCount = dataL.doctor_count
                this.discoverCount = dataL.discover_count

            })
        },
    }
</script>

<style scoped lang='scss'>
.statistics{
    display: flex;
    text-align: center;
    height: 55px;
    align-items: center;
    font-weight: 400;
    color: rgba(26,26,26,1);
    padding-bottom: 15px;
    background: #fff;


    .item{
        flex: 1;
        .title{
            font-size: 18px;
        }
        .hint{
            font-size: 12px;
            margin-top: 5px;
        }
    }

}
</style>