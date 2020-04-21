<template>
	<view class="auth-modal">
		<view class="title">申请获得以下权限</view>
		<view class="tip">{{authTip}}</view>
		<button :open-type="authType" @getuserinfo="authForInfo" @getphonenumber="getPhoneNumber" :lang="'zh_CN'" type="primary" class="confirm-auth">确认微信授权</button>
		<view @click="closePop" class="close">暂不授权</view>
	</view>
</template>

<script>
	export default {
		name: "auth-modal",
		data() {
			return{
				tip: {'getInfo': '获取你的公开信息（昵称、头像等）', 'getNumber': '获取你的手机号'}
			}
		},
		props:{
			authType: {
				default: 'getUserInfo',
				type: String
				
			}
		},
		computed: {
			authTip(){
				if(this.authType === 'getUserInfo'){
					return this.tip['getInfo']
				}
				else if(this.authType === 'getPhoneNumber'){
					return this.tip['getNumber']
				}else{
					return ''
				}
			}
		},
		methods: {
			authForInfo(e) {
				this.$emit('authForInfo', e)
			},
			closePop() {
				this.$emit('closePop', false)
			},
			getPhoneNumber(e){
				this.$emit('getPhoneNumber', e)
			}
		}
	}
</script>

<style scoped>
	.auth-modal {
		width: 750rpx;
		height: 437rpx;
		background: rgba(255, 255, 255, 1);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		line-height: 86rpx;
		padding: 20rpx 0;

	}

	.confirm-auth {
		width: 690rpx;
		height: 88rpx;
		border: 1rpx solid rgba(65, 146, 40, 1);
		border-radius: 10rpx;

		font-size: 36rpx;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
	}

	.title {
		margin-top: 20rpx;
		font-size: 46rpx;
		font-weight: 400;
	}

	.tip, .close {
		font-size: 24rpx;
		font-weight: 400;
		color: rgba(136, 136, 136, 1);
	}

</style>
