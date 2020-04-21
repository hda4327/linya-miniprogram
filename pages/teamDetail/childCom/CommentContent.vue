<template>
	
    <div class="comment-main">
        <div class="title">全部评论</div>
        <div class="list">
            <div class="item" v-for="(item,index) in commentList" :key="index">
                    <div class="comment-user">
                        <img class="user-head" :src="item.wx_user.headimgurl" alt="">
                        <div class="user-msg">
                            <span class="user-name">{{item.wx_user.nickname}}</span>
                            <span class="commit-time">{{item.add_time}}</span>
                        </div>

                        <div class="user-satisfaction-part">
                            <img class="satisfaction-icon" :src="selectedType(item).img" alt="">
                            <span class="user-satisfaction" :style="{color:selectedType(item).color}">{{selectedType(item).tip}}</span>
                        </div>
                    </div>
                    <section class="comment-detail">{{item.content}}</section>
            </div>
        </div>
    </div>
</template>

<script>
    import {reqCommentList} from '@/network/teamReq'
    export default {
        name: "CommentContent",
        data() {
            return {
                smilingImgList: [
                    {img:require('@/static/img/doctor/smiling@2x-3-n2.png'), color:'rgba(255, 150, 0, 1)', tip:'很差'},
                    {img:require('@/static/img/doctor/smiling@2x-3-n2.png'), color:'rgba(255, 150, 0, 1)', tip:'一般'},
                    {img:require('@/static/img/doctor/smiling@2x-2-n2.png'), color:'rgba(76, 150, 255, 1)', tip:'还不错'},
                    {img:require('@/static/img/doctor/smiling@2x-1-n2.png'), color:'rgba(0, 183, 113, 1)', tip:'很满意'},
                    {img:require('@/static/img/doctor/smiling@2x-1-n2.png'), color:'rgba(0, 183, 113, 1)', tip:'非常满意'},
                ],
                commentList:{},
			
            }
        },
		props:{
			tit: Number
		},
        created() {
            
        },
		watch:{
			tit(newValue){
				if(newValue){
					this.getCommentList()
				}
			}
		},
        methods:{
            getCommentList(){
                reqCommentList(this.tit).then(res=>{
                    this.commentList = res.data
                })
            }
        },
        computed:{
            selectedType(){
                return function (i) {
                    return this.smilingImgList[i.type-1]
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.comment-main{
    background-color: #fff;
    margin-top: 15px;
    width: 100%;
    .title{
        height: 45px;
        border-bottom: 1px solid rgba(220,220,220,1);
        // padding-left: 20.5px;
        padding-top: 15px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(50,50,50,1);
    }
    .list{
        .item{
            padding: 0 20px 0 20px;
            position: relative;
            .comment-user{
                position: relative;
                .user-head {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }
            .user-msg{
                margin-left: 14px;
                height: 40px;
                display: inline-block;
                line-height: 15px;
                .user-name{
                    display: inline-block;
                    font-size: 15px;
                    font-weight: 400;
                    color: rgba(50,50,50,1);
                }
                .commit-time{
                    display: block;
                    margin-top: 12.5px;
                    font-size: 12px;
                    color: rgba(134,134,134,1);
                    font-weight: 400;
                    line-height: 12px;
                }
            }
            .user-satisfaction-part{
                position: absolute;
                right: 0;
                top: 14.5px;
                font-size: 12px;
                font-weight: 400;
                height: 12px;
                display: flex;
                align-items: center;
                img{
                    width: 12px;
                    height: 12px;
                }
                .user-satisfaction{
                    display: block;
                    margin-left: 5px;
                }
            }
            .comment-detail{
                margin-top: 13.5px;
                white-space: pre-wrap;
                word-wrap: break-word;
                word-break: break-all;
            }
        }
        .item:after{
            content:'';
            width: 330px;
            height: 1px;
            background-color: rgba(220,220,220,1);
            position: absolute;
            top: 100%;
            /*width: 13%;*/

        }
        .item:last-of-type:after{
            content: none;
        }
    }
}
</style>