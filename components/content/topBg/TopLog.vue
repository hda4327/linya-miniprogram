<template>
    <div class="top-log">
        <img :src="baseUrl+about.seller_company.img_resource.src" alt="" class="com-log">
        <div class="name">
            {{about.seller_company.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopLog",
        data() {
            return {
                baseUrl:this.$baseUrl,
            }
        },
        computed:{
            about(){
                return this.$store.state.companyMsg
            }
        }
    }
</script>

<style scoped lang="scss">
    .top-log{
        position: relative;
        margin-bottom: 10px;
    }
.com-log{
    width: 78px;
    height: 78px;
    border-radius: 100%;
    border: 1px solid #fff;
    /* background: red; */
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -39px;
    top: -39px;
}
    .name{
        font-size: 16px;
        font-weight: 400;
        color: rgba(50,50,50,1);
        background: #ffffff;
        text-align: center;
        padding-top: 45px;
    }

</style>