<template>
    <navigator url="/pages/about/About" class="company-info" v-if="companyMsg.seller_company">
        <div class="company-top">
            <div class="com-log" :style="{backgroundImage:'url('+baseUrl + companyMsg.seller_company.img_resource.src+')'}">
            </div>
            <div class="com-center">
                <div class="com-name">{{companyMsg.seller_company.name}} <image src="/static/img/common/vip-ico.png" alt="" v-if="isShowVip"></div>
                <div class="com-notice">{{companyMsg.notice}}</div>
                <div class="com-address">{{companyMsg.address}}</div>
            </div>
            <div class="com-right" :class="isShowVip?'flex-center':''">
                <image src="/static/img/home/right-arrow.png" alt="">
            </div>
        </div>



    </navigator>
</template>

<script>


    export default {
        name: "company-info",
        data() {
            return {
                baseUrl:this.$baseUrl,
            }
        },
        props:{
            isShowVip:{
                default:false,
                type:[String, Boolean]
            }
        },

        computed: {
            companyMsg() {
                return this.$store.state.companyMsg
            }
        }
    }
</script>

<style scoped>
    .company-info{
        height: 90px;
        width: 100%;
    }
    .company-top{
        display: flex;
        padding: 15px;
        background: #fff;
    }
    .com-log {
        width: 63px;
        height: 63px;
        border-radius: 5px;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .com-center{
        padding-left: 8px;
        width: 240px;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .com-center .com-name{
        font-size: 17px;

    }
    .com-center .com-name image{
        width: 16px;
        height: 13px;
        margin-left: 6px;
        vertical-align: middle;

    }

    .com-center .com-notice{
        font-size: 11px;
        margin-top: 5px;
    }
    .com-center .com-address{
        font-size: 11px;
    }
    .com-right{
        margin-left: 1rem;

    }
    .com-right image{
        height: 11px;
        width: 6.5px;
        margin-top: 6.5px;
    }
    .flex-center{
        display: flex;
        align-items: center;
    }

</style>