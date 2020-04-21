<template>
    <div class="team-nav">
        <span class="nav-item" v-for="(item,index) in navList" @click="changeType(index)" :class="{active:index===selectType}">
            {{item}}
        </span>

    </div>
</template>

<script>
    export default {
        name: "TeamNav",
        data() {
            return {
                navList: [
                    '医生',
                    '护士',
                    '前台',
                    '其他',
                ],
                selectType: 0,

            }
        },
        methods:{
            changeType(typeId){
                this.selectType = typeId
                this.$emit('changeType', typeId+1)
            }
        }

    }
</script>

<style scoped lang="scss">
.team-nav{
    width: 345px;
    height: 45px;
    background: rgba(255,255,255,1);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 17px;
    font-weight: 500;
    color: rgba(50,50,50,1);


    .active{
        color: rgba(76, 150, 255, 1);
        position: relative;
    }
    .active:before{
        content: '';
        position: absolute;
        top: 23.5px;
        background: rgba(76, 150, 255, 1);
        width: 20px;
        height: 2.5px;
        left: 20%;
        border-radius: 1.5px;
    }

}
</style>