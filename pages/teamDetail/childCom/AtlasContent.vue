<template>
    <div class="atlas-main">
        <div class="name">
            活动图集
        </div>
        <div class="atlas-list">
            <scroll-view class="scroll-view" scroll-x="true">
				<view :style="{width: contentWidth, justifyContent: 'space-between',display: 'flex'}">
					 <image v-for="(item,index) in photoResource"  :src="baseUrl + item.src"  @click="showCover(index)" :key="index">
				</view>
               
            </scroll-view>

        </div>
        <div class="cover" :style="{display: isShowCover?'block': 'none'}" @click="cancelCover">
            <swiper class="out-wrapper" :current="current" disable-programmatic-animation="true">
                <swiper-item class="swiper-item"  v-for="(item,index) in photoResource" :key="index">
                    <image :src="baseUrl + item.src" class="swiper-img">
                </swiper-item>
                <div class="swiper-pagination" slot="pagination"></div>
            </Swiper>
        </div>

    </div>
</template>

<script>
    import Scroll from "@/components/common/scroll/Scroll";



    export default {
        name: "AtlasContent",
        data() {
            return {
                imageList: [
                ],
                imgWidth: 70,
                imgDistance: 12.5,
                isShowCover: false,
				baseUrl: this.$baseUrl,
				current: 0,
				imgListWidthl:0
            }
        },
        props:{
            photoResource: Array
        },
        components:{
            Scroll,
        },
        mounted() {

        },
        methods:{
            showCover(i){
                this.isShowCover = true
                this.current = i
            },
            cancelCover(){
                this.isShowCover = false
            }
        },
        computed:{
            contentWidth(){
                let len = this.photoResource.length
                return this.imgWidth*len + (len-1)*this.imgDistance+'px'
            }
        },
		watch:{
			// photoResource(){
			// 	console.log(124)
			// 	this.$nextTick(()=>{
			// 		const query = uni.createSelectorQuery().in(this);
			// 		query.select('.swiper-img').boundingClientRect(data => {
			// 		  console.log("得到布局位置信息" + JSON.stringify(data));
			// 		  // console.log("节点离页面顶部的距离为" + data.top);
			// 		}).exec();
					
			// 	})
			// }
		}
    }
</script>

<style scoped lang="scss">
.atlas-main{
    // width: 100%;
    background-color: #fff;
    padding: 15px 20px 20px 20px;
	margin: 0;
    margin-top: 15px;
    .name{
        /*text-align: start;*/
    }
    .atlas-list{
        margin-top: 15px;
		.scroll-view{
			width: 350px;
			
			image{
			    width: 70px;
			    height: 70px;
			}
		}
        
    }
    .cover{
        z-index: 99;
        .out-wrapper{
            width: 375px;
			height: 100%;

        }
        .swiper-item{
            display: flex;
            justify-content: center;
            margin-top: 150px;

        }
        .swiper-img{
            width: 100%;
            height: 300px;

        }
    }







}
</style>