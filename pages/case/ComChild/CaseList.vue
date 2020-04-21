<template>
    <div class="list">
            <navigator :url="'/pages/caseDetail/CaseDetail?id='+ item.id" class="item" v-for="(item,index) in caseList" :key="index">
                <div class="item-inner">
                    <div class="img" :style="{backgroundImage: 'url('+baseUrl+item.img_resource.src+')'}">
                        <div class="tag">{{item.project.project_name}}</div>
                    </div>
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="user-info">
                        <div class="ll">
                            <img :src="baseUrl+item.seller_info.img_resource.src">
                            <span>{{item.seller_info.nick_name}}</span>
                        </div>
                        <div class="rr">
                            <img src="/static/img/case/eye.png" alt="">
                            <span>{{item.view_num}}</span>
                        </div>

                    </div>
                </div>
            </navigator>
        <SearchCover></SearchCover>
    </div>
</template>

<script>
    import SearchCover from "@/components/content/Search/SearchCover";
    export default {
        name: "CaseList",
        data() {
            return {
				baseUrl:this.$baseUrl,
            }
        },
        props:{
            caseList:Array
        },
        components:{
            SearchCover
        },
        methods:{

        },

    }
</script>

<style scoped lang="scss">
.list{
    margin-top: 15px;
    padding: 5px 7.5px 0 7.5px;
    display: inline-block;
    width: 100%;
    position: relative;
    .item{
        padding: 0 7.5px 0 7.5px;
        height: 163px;
        width: 48%;
        float: left;
        margin-bottom: 10px;
		box-sizing: border-box;
        .item-inner{
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,1);
            box-shadow: 0px 0px 15px 0px rgba(102,102,102,0.1);
            border-radius: 10px;
            overflow: hidden;
            .img{
                width: 100%;
                height: 95px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                background-color: #c6c6c6;
                .tag{
                    background: linear-gradient(-60deg,rgba(138,190,247,1) 0%,rgba(101,141,245,1) 100%);
                    border-radius: 6.5px;
                    font-size: 12px;
                    font-weight: 400;
                    color: rgba(255,255,255,1);
                    display: inline-block;
                    padding: 2.5px 6px;
                    float: right;
                    margin-right: 5px;
                    margin-top: 5px;
                }
            }
            .title{
                font-size: 14px;
                font-weight: 400;
                color: rgba(50, 50, 50, 1);
                padding: 7.5px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .user-info{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 7.5px;
                .ll{
                    display: flex;
                    align-items: center;
                    img{
                        width: 24px;
                        height: 24px;
                        border-radius: 100%;
                        margin-right: 5px;
                    }
                    span{
                        font-size: 14px;
                        font-weight: 300;
                        color: rgba(135,135,135,1);
                        width: 80px;
                        overflow: hidden;
                        display: block;
                        height: 24px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        line-height: 24px;
                    }
                }
                .rr{
                    display: flex;
                    align-items: center;
                    img{
                        width: 13px;
						height: 9px;
                        margin-right: 5px;

                    }
                    span{
                        font-size: 12px;
                        font-weight: 400;
                        color: rgba(135,135,135,1);
                    }
                }
            }
        }
    }

}
</style>