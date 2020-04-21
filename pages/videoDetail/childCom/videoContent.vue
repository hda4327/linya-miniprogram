<template>
    <view class="video-conent-main">
		<!-- <video :src="videoInfo.new_source_url" :poster="videoInfo.pic" object-fit="fill"></video> -->
		<view class="info">
			<text class="title text-line-ov-hide">{{videoInfo.desc}}</text>
			<text class="view-num">浏览量：{{videoInfo.play_num}}</text>
		</view>
    </view>
</template>

<script>
    export default {
        name: "videoContent",
        data(){
			return {
				
			}
        },
		props:{
			videoInfo:Object
		},
        components:{

        }
    }
</script>

<style scoped lang="scss">
.video-conent-main{
	margin-top: 25px;
	
	video{
		    width: 100%;
		    height: 235px;
		    margin-top: 10px;
	}
	.info{
		display: flex;
		padding: 10px;
		font-size: 11px;
		line-height: 11px;
		background: #FBF9F9;
		justify-content: space-between;
		align-items: center;
		
		.title{
			width: 230px;

		}
		.view-num{
			width: 90px;
			text-align: end;
		}
	}
}
</style>
