<template>
    <div class="nav-content">
        <div class="nav">
            <div class="nav-scroll">
                <span class="nav-item" v-for="(item, index) in categoryList" @click="changeTab(item.id)" :class="currentTabIndex===index?'active':''">
                    {{item.project_name}}
                </span>
            </div>
        </div>


    </div>
</template>

<script>

    export default {
        name: "CaseNav",
        data() {
            return {
                currentTabIndex: 0,
            }
        },
        props:{
            categoryList:Array
        },
        methods:{
            changeTab(i){
                if (i!==this.currentTabIndex){
                    this.currentTabIndex = i
                    this.$emit('changeTab', i)
                }

            }
        }
    }
</script>

<style scoped lang="scss">
    .nav-content{
        padding: 0 10px;


        .nav{
            overflow-x: scroll;
            height: 35px;
            line-height: 33px;
            background: #FAF8F8;

            .nav-scroll{
                width: max-content;
                height: 100%;
                .nav-item{
                    font-size: 15px;
                    font-weight: 400;
                    color: rgba(156,156,156,1);
                    float: left;
                    padding: 0 7.5px;
                    box-sizing: inherit;
                    height: 80%;
                    display: inline-block;

                }
                .active{
                    color: rgb(86, 130, 242);
                    border-top: none;
                    border-right: none;
                    border-bottom: 1px solid rgb(86, 130, 242);
                    border-left: none;
                    border-image: initial;
                }
            }


        }
    }

</style>