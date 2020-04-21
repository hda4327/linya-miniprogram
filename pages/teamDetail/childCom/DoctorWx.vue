<template>
    <div class="wx-content">
        <div class="left-content">
            <div class="name">
                加{{name}}为好友
            </div>
            <div class="tip">
                长按二维码识别添加
            </div>

        </div>
        <div class="right-content">
            <img :src="wxImg" alt="" class="code">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DoctorWx",
        data() {
            return {}
        },
        props:{
            name:String,
            wxImg:String,
        }
    }
</script>

<style scoped lang="scss">
.wx-content{
    height: 125px;
    width: 350px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    .left-content{
        .name{

        }
        .tip{
            font-size: 14px;
            font-weight: 400;
            color: rgba(50,50,50,1);
            height: 30px;
            width: 150px;
            line-height: 30px;
            margin-top: 15px;
            border: 1px solid rgba(50,50,50,1);
            text-align: center;
        }
    }
    .right-content{

        .code{
            width: 85px;
            height: 85px;
        }

    }
}
</style>