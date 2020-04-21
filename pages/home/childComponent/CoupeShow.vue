<template>
    <div class="coupe-show">
        <IndexItem title="口腔科普" :toPath="toPath">
            <navigator v-for="(item, index) in coupeList" v-if="index<2" class="coupe-content" :url="detailPath + '?id='+ item.id" :key="index">
                <div class="coupe-item">
                    <image :src="item.imgsrc" alt="" class="left" mode="aspectFit"> </image>
                    <div class="right">
                        <div class="content">
                            {{item.title}}
                        </div>
                        <div class="time">
                            {{getTime(item.add_time)}}
                        </div>
                    </div>

                </div>
            </navigator>
        </IndexItem>
    </div>
</template>

<script>
    import IndexItem from "@/components/content/IndexItem/IndexItem.vue";
    import {reqCoupeList} from '@/network/homeReq'
    // import {getDateDiff} from '../../../common/global_method'
    export default {
        name: "CoupeShow",
        data() {
            return {
                baseUrl: this.$baseUrl,
                coupeList : {},
				detailPath:'/pages/coupeDetail/CoupeDetail',
				toPath:'/pages/coupe/Coupe'
            }
        },
        mounted() {
            reqCoupeList({}).then(res => {
                this.coupeList = res.data
            })
        },
        components:{
            IndexItem
        },
        computed:{
            getTime(){
                return (time)=>{
                    return this.METHOD.getDateDiff(time)
                }
            }
        },
        methods:{

        },
        filters:{
            // getTimeStr(time){
            //     console.log(getDateDiff(time))
            //     return getDateDiff(time)
            //
            // }
        }
    }
</script>

<style scoped lang="scss">
.coupe-item{
    display: flex;
    padding: 8px 0;
    .left{
        width: 90px;
        height: 90px;
		flex: 90px 0 0;

        border-radius: 5px;
		will-change: transform;
    }
    .right{
        display: flex;
        padding-left: 16px;
        flex-flow: column;
        justify-content: space-between;
        .content{
            color: #323232;
            font-weight: 400;
            font-size: 15px;
        }
        .time{
            color: #999;
            font-weight: 400;
            font-size: 12px;
        }
    }
}
.coupe-item:first-child{
    border-bottom: 1px solid #e7e7e7;
}
</style>