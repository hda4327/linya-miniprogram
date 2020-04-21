<template>
    <div class="main">
        <div class="title">送个小礼物吧</div>
        <div class="gift-list" >
            <div class="gift-item" v-for="(item,index) in giftList" :style="{borderColor:selectedIndex===index?'rgb(76, 150, 255)':'rgba(210, 210, 210, 1)'}" @click="selectedIndex=index" :key="index">
                <div class="name">{{item.name}}</div>
                <div class="img"><image :src="baseUrl + item.pic" alt=""></div>
                <div class="price">
                    ¥{{item.price}}.00
                </div>
                <div class="num">已收到{{item.num}}份</div>
                <div class="selected-ico" :style="{backgroundColor: selectedIndex===index?'rgb(76, 150, 255)':'rgb(210, 210, 210)'}">
                    <image src="/static/img/doctor/gift-selected.png" alt="">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {reqGiftList} from '@/network/teamReq'
    export default {
        name: "GiftContent",
        data() {
            return {
                giftList:{},
                selectedIndex: -1,
				baseUrl: this.$baseUrl
            }
        },
		props:{
			tit: Number
		},
        
		watch:{
			tit(newValue){
				if(newValue){
					this.getGiftList()
				}
			}
		},
        methods:{
            getGiftList(){
                reqGiftList(this.tit).then(res=>{
                    this.giftList = res.data
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.main{
    width: 350px;
    margin-top: 15px;
    padding: 15px 18.5px;
    height: 221px;
    background-color: #fff;
    .title{

    }
    .gift-list{
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        height: 161.5px;
        text-align: center;

        .gift-item{
            width: 104px;
            height: 152px;
            border: 1px solid rgba(210, 210, 210, 1);
            border-radius: 10px;
            display: inline-block;
            box-sizing: content-box;
            text-align: center;
            position: relative;

            .name{
                width: 100%;
                height: 29px;
                background: rgba(76,150,255,0.1);
                font-size: 14px;
                font-weight: 400;
                color: rgba(76,150,255,1);
                text-align: center;
                line-height:29px;
            }
            .img{
                image{
                    width: 68px;
                    height: 68px;
                }

            }
            .price{
                display: block;
                color: rgba(237, 97, 42, 1);
                font-size: 14px;
                line-height: 14px;
                font-weight: 400;
            }
            .num{
                font-size: 12px;
                font-weight: 400;
                color: rgba(50,50,50,1);
                margin-top: 8.5px;
                line-height: 12px;
            }
            .selected-ico{
                border-radius: 50%;

                height: 20px;
                width: 20px;
                position: absolute;
                bottom: -10px;
                left: 42px;
                display: flex;
                justify-content: center;
                align-items: center;
                image{
                    width: 10px;
                    height: 7.5px;
                }
            }
        }
    }
}
</style>