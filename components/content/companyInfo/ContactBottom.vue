<template>
	<view>
		<div class="company-bottom-contract">
		    <view class="company-to-tel" @click="toPhone(companyInfo.phone)">
		        <div class="to-tel-ico"></div>
		        <span>电话</span>
		    </view>
			
			<template v-if="isHaveShop">
				<view  class="two-btn">
					<button class="contract" open-type="contact">
						<image src="../../../static/img/common/mobile-wx-ico.png"></image><text>在线咨询</text>
					</button>
					<button class="shop" @click="toShopUrl">
						<image src="../../../static/img/common/shop-link-ico.png"></image><text>护理商城</text>
						
					</button>
				</view>
			</template>
			
			<template v-else>
				<button class="company-to-contract" open-type="contact">
					在线咨询
				</button>
			</template>
		   
		</div>
		<div style="height: 50px;"></div>
	</view>
    
</template>

<script>
    export default {
        name: "contactBottom",
        data(){
			return {
				companyInfo: this.$store.state.companyMsg
			}
        },
		props:{
			isHaveShop:{
				default:true,
				
			}
		},
        components:{

        },
		methods:{
			toPhone(num){
				uni.makePhoneCall({
				    phoneNumber: num 
				});
			},
			toShopUrl(){
				uni.navigateToMiniProgram({
					  appId: 'wx9188524557398958',
					  path: 'pages/home/dashboard/index',
					  success(res) {
						// 打开成功
						// console.log('res', res)
					  },
					  fail(err){
						  // console.log('err', err)
					  }
				})
			}
			
		}
    }
</script>

<style scoped>
.company-bottom-contract{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.06);
        display: flex;
        align-items: center;
        height: 50px;
        padding-left: 25px;
        /*padding-left: 0.35rem;*/
        padding-right: 13.5px;
        z-index: 99;
		justify-content: space-around;
    }

    .company-bottom-contract .company-to-tel{
        display: flex;
        width: 25px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

    }
    .company-bottom-contract .company-to-tel span{
        font-size:11px;
        font-weight:400;
        color:rgba(26,26,26,1);
    }

    .company-bottom-contract .company-to-tel .to-tel-ico{
        width: 15px;
        height: 18px;
        background-size: cover;
        background-image: url("/static/img/common/to-tel-black.png");
    }
    .company-bottom-contract .company-to-contract{
        width:298px;
        height:36.5px;
        background:rgba(76,150,255,1);
        border-radius:18.5px;
        text-align: center;
        line-height: 36.5px;
		flex: 1;

        font-size:14px;
        font-weight:400;
        color:rgba(255,255,255,1);
        margin-left: 20px;
    }
	.two-btn{
		display: flex;
		/* flex-direction: column; */
		line-height: 36.5px;
		margin-left: 12px;
		font-weight: 400;
		
		width: 298px;
		height: 36.5px;
		flex: 1;
	}
	.two-btn button{
		font-size: 14px;
		color: rgba(255,255,255,1);
	}
	.two-btn .contract{
		width: 50%;
		height: 36.5px;
		background: rgba(0,183,113,1);
		border-radius: 18.5px 0px 0px 18.5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.two-btn .contract image{
		margin-right: 5px;
		width: 15.5px;
		height: 13.5px;
	}
	.two-btn .shop image{
		margin-right: 5px;
		width: 11px;
		height: 14px;
	}
	
	.two-btn .shop{
		width: 50%;
		height: 36.5px;
		background: rgba(76,150,255,1);
		border-radius: 0px 18.5px 18.5px 0px;
		display: flex;
		align-items: center;
		justify-content: center;
			
	}
	button::after{
		border: none;
	}

</style>
