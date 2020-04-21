<template>
    <swiper  :showIndicator="false" @animationfinish="showIndex" class="wrapper" :autoplay='true' :interval="2500">
        <swiper-item  v-for="(item, index) in bannerList" :key="index">
            <div class="banner"><image :src="baseUrl+item.img_resource.src" alt=""></image></div>
        </swiper-item>
        <template v-slot:indicator><div class="indicator">{{swiperCurrentIndex+'/'+bannerList.length}}</div></template>
    </swiper>
</template>

<script>
    // import {Swiper, SwiperItem} from '@/components/common/swiper'
    // import SwiperItem from '@/components/common/swiper/SwiperItem'
    // import Swiper from '@/components/common/swiper/Swiper'
    import {getHomeBanner} from '@/network/homeReq'
    export default {
        name: "BannerSwiper",
		created() {
		},
        mounted(){
			this.getBanner()
            // this.getBanner();

        },
        data(){
            return{
                baseUrl:this.$baseUrl,
                bannerList: null,
                swiperCurrentIndex: 1,
				// sid: this.$store.state.sid,
            }
        },
        components:{
            // Swiper,
            // SwiperItem
        },
       
        methods:{
            getBanner(){
                getHomeBanner().then(res=>{this.bannerList=res.data})
            },
            showIndex(event){
                this.swiperCurrentIndex = event.detail.current+1
            }
        }

    }
</script>

<style scoped>
	.wrapper{
		height: 200px;
	}
    .banner image{
        height: 200px;
		width: 100%;
    }
    .indicator{
        position: absolute;
        right: 10px;
        bottom: 30px;
        background: rgba(1,1,1,0.4);
        color: white;
        width: 40px;
        /*height: 20px;*/
        padding: 2px 5px;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
        border-radius: 20px;
    }
</style>