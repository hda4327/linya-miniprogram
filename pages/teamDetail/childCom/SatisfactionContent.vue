<template>
    <div class="satisfaction-content">
        <div class="item item1" @click="saveSatisfied(0)"><span :style="{color:activeIndex===0?'rgb(0, 183, 113)':'rgba(50,50,50,1)'}">非常满意</span><image :src="smilingImg(0)" alt=""></div>
        <div class="item item2" @click="saveSatisfied(1)"><span :style="{color:activeIndex===1?'rgb(76, 150, 255)':'rgba(50,50,50,1)'}">满意</span><image :src="smilingImg(1)" alt=""></div>
        <div class="item item3" @click="saveSatisfied(2)"><span :style="{color:activeIndex===2?'rgb(255, 150, 0)':'rgba(50,50,50,1)'}">一般</span><image :src="smilingImg(2)" alt=""></div>
        <div class="item case-btn">机构病例</div>
    </div>
</template>

<script>
    import {saveScore} from '@/network/teamReq'

    export default {
        name: "SatisfactionContent",
        data() {
            return {
                smilingImgList:[
                    [require('@/static/img/doctor/smiling@2x-1.png'), require('@/static/img/doctor/smiling@2x-1-n2.png')],
                    [require('@/static/img/doctor/smiling@2x-2.png'), require('@/static/img/doctor/smiling@2x-2-n2.png')],
                    [require('@/static/img/doctor/smiling@2x-3.png'), require('@/static/img/doctor/smiling@2x-3-n2.png')],
                ],
                activeIndex: -1,
                satisfiedListC: this.satisfiedList,
            }
        },
        props:{
            satisfiedList:{
                type:Array
            },
			tit: Number
        },
		
        methods:{
            saveSatisfied(i){
                if (this.activeIndex !==i){
                    //只要smilingState其中有一个是true
                   if (this.activeIndex !== -1){
                       this.changeSatisfaction(this.activeIndex, -1)
                   }
                    this.changeSatisfaction(i, 1)
                    this.activeIndex = i

                }else {
                    this.changeSatisfaction(i, -1)
                    this.activeIndex = -1

                }
            },
            changeSatisfaction(i, add){
                const params = {
                    team_id: this.tit,
                    type: i+1,
                    number: this.satisfiedList[i]+add
                }
                this.satisfiedListC[i] += add
                saveScore(params)
            }
        },
        computed:{
            smilingImg(){
                return function(i){
                    return this.activeIndex!==i?this.smilingImgList[i][0]:this.smilingImgList[i][1]
                }
            },

        }
    }
</script>

<style scoped lang="scss">
.satisfaction-content{
    display: flex;
    justify-content: space-between;
    bottom: 0;
    /*z-index: 6;*/
    width: 330px;
    margin: 0 auto;
    margin-top: 10px;
    .item{
        background: rgba(255,255,255,1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(50,50,50,1);
        padding: 4px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        image{
            width: 11px;
            height: 11px;
            margin-left: 5px;
        }
    }
    .case-btn{
        color: #fff;
        background: rgba(76,150,255,1);
    }
}
</style>