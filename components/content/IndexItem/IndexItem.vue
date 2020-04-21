<template>
    <div class="index-item">
        <div class="item-title">
            <span class="title">{{title}}</span>
            <navigator :url="toPath" class="right">
                <span class="more">更多</span>
                <img src="/static/img/home/right-arrow.png" alt="">
            </navigator>
        </div>
        <slot></slot>

    </div>
    
</template>

<script>
    export default {
        name: "IndexItem",
        data() {
            return {}
        },
        props:{
            title:{
                required:true,
                type: String,
            },
            toPath:{
                default:'',
                type: String
            }

        }
    }
</script>

<style scoped lang="scss">
    .index-item{
        margin-top: 7px;
        background: #fff;
        padding: 0 15px;

        .item-title{
            padding: 14px 0;
            .title{
                color: #1a1a1a;
                font-weight: 700;
                font-size: 16px;
            }
            .right{
                float: right;
                width: 38px;
                display: flex;
                justify-content: space-between;
                align-items: baseline;

                .more{
                    color: #999;
                    font-weight: 400;
                    font-size: 13px;
                }
                img{
                    width: 6px;
                    height: 10px;
                }
            }
        }
    }
    
</style>