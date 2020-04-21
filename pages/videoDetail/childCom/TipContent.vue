<template>
    <view class="info-footer">
		<view class="statement">
                <view class="statement-content">  
				版权声明：本视频所有权归医学微视所有，医学微视是配合卫健委宣传司实施的权威医学科普栏目，非授权情况下，任何人不得通过任何手段复制、再分发、反编译、跟踪及分析手段获取中间数据及结果，包括但不限于视频、文字、图片、音频等，否则视为侵权，医学微视将保留法律责任追究的权力！ 
				</view>
            </view>
    </view>
</template>

<script>
    export default {
        name: "TipContent",
        data(){
			return{
				
			}
        },
        components:{

        }
    }
</script>

<style scoped lang="scss">
.info-footer{
	text-align: center;
	
	.statement{
		    margin: auto;
		    color: #AAAAAA;
		    font-size: 11px;
		    width: 345px;
			box-sizing: border-box;
		.statement-content{
			padding-top: 19px;
			border-top: 1px solid rgba(49, 49, 49, 0.28);
		}
	}
}
</style>
