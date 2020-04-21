<template>
    <div class="team-list">
        <navigator :url="'/pages/teamDetail/TeamDetail?tit='+item.id" class="team-item" v-for="(item, index) in teamData" :key="index">
            <div class="doctor-info">
                <div class="top">
                    <img :src="baseUrl+item.img_resource.src" alt="" class="head-img">
                    <div class="msg">
                        <div class="msg-top">
                            <span class="name">{{item.name}}</span>
                            <span class="post">{{item.post}}</span>
                        </div>
                        <div class="msg-bottom">
                            擅长：{{item.professional}}
                        </div>

                    </div>
                    <div class="more-area">
                        <image src="/static/img/doctor/check.png" alt="">
                    </div>
                </div>
                <div class="center">
                    <div class="serve">服务数：<span class="num">{{item.commonly}}</span></div>
                    <div class="satisfy">满意度：<span class="num">{{item.degree_str}}</span></div>
                </div>
                <div class="bottom">
                    简历：{{item.intro}}
                </div>
            </div>
            <div class="contract-content">
                <div class="left">
                    <a :href="'tel:'+companyMsg.phone" class="phone">
                        <div class="ico-bg phone-bg">
                            <image src="/static/img/doctor/phone.png" class="phone-ico">
                        </div>

                        <span>咨询</span>
                    </a>
                    <div class="wx" v-if="item.wx_img_resource" @click.stop.prevent="showModal(item.wx_img_resource)">
                        <div class="ico-bg wx-bg">
                            <image src="/static/img/doctor/wx.png" class="wx-ico">
                        </div>
                        <span>微信</span>
                    </div>
                </div>
                <div class="right">
                    查看详情
                </div>
            </div>

        </navigator>
        <ImageModal :isShow="isShowModal" :imgUrl="codeSrc" @clickModal="closeModal"></ImageModal>
    </div>
</template>

<script>
    import ImageModal from "@/components/content/imageModal/ImageModal";
    export default {
        name: "TeamList",
        data() {
            return {
                baseUrl: this.$baseUrl,
                companyMsg: this.$store.state.companyMsg,
                isShowModal:false,
                codeSrc: ''
            }
        },
        components:{
            ImageModal
        },
        props: {
            teamData: {
                default() {
                    return []
                },
                type: Array
            }
        },
        methods:{
            showModal(wx){
                this.codeSrc = wx.src
                this.isShowModal = true
            },
            closeModal(){
                this.isShowModal = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .team-list{
        display: flex;
        flex-direction: column;
        .team-item {
            margin: 0 auto;
            margin-top: 15px;
            // width: 380px;
            height: 227px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
            border-radius: 10px;

            .doctor-info {
                padding: 15px;
                border-bottom: 1px solid rgba(220, 220, 220, 1);

                .top {
                    display: flex;

                    .head-img {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                    }

                    .msg {
                        width: 232.5px;
                        height: 60px;
                        display: flex;
                        flex-direction: column;
                        margin-left: 15px;
                        justify-content: space-around;

                        .msg-top {
                            display: flex;
                            align-items: center;

                            .name {
                                font-size: 17px;
                                font-weight: bold;
                                color: rgba(50, 50, 50, 1);
                            }

                            .post {
                                font-size: 14px;
                                font-weight: 400;
                                color: rgba(50, 50, 50, 1);
                                display: inline-block;
                                width: 160px;
                                margin-left: 10px;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                            }
                        }

                        .msg-bottom {
                            font-size: 12px;
                            font-weight: 400;
                            color: rgba(170, 170, 170, 1);
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                        }
                    }

                    .more-area image {
                        width: 7.5px;
                        height: 12px;
                        margin-top: 10px;
                    }
                }

                .center {
                    font-size: 13px;
                    font-weight: 400;
                    color: rgba(170, 170, 170, 1);
                    display: flex;
                    margin-top: 10px;

                    .satisfy {
                        margin-left: 35px;
                    }

                    .num {
                        color: rgba(255, 150, 0, 1);
                    }
                }

                .bottom {
                    font-size: 13px;
                    font-weight: 500;
                    color: rgba(170, 170, 170, 1);
                    margin-top: 10px;
                    width: 315px;
                    height: 36px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
            }

            .contract-content {
                display: flex;
                justify-content: space-between;
                padding: 10px 20px;
                align-items: center;

                .left {
                    display: flex;
                    font-size: 11px;
                    font-weight: 400;
                    color: rgba(50, 50, 50, 1);

                    .phone, .wx {
                        height: 45px;
                        width: 24px;
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        justify-content: space-between;

                        .ico-bg {
                            width: 22px;
                            height: 22px;

                            border-radius: 5px;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            image {
                                width: 13.5px;
                                height: 12px;
                            }
                        }
                        .phone-bg{
                            background: rgba(76, 150, 255, 1);
                        }

                    }

                    .wx {
                        margin-left: 20px;
                        .wx-bg{
                            background: rgba(43, 173, 55, 1)
                        }
                    }
                }

                .right {
                    width: 85px;
                    height: 32px;
                    background: rgba(76, 150, 255, 1);
                    border-radius: 16px;
                    font-size: 15px;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    text-align: center;
                    line-height: 32px;
                }
            }

        }
    }

</style>