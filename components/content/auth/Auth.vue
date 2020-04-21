<template>
    <view class="auth-main">
		<UniPopup ref="popup">
			<AuthModal @authForInfo="authForInfo" @closePop="closePop" :authType="'getUserInfo'"></AuthModal>
		
		</UniPopup>
		<UniPopup ref="popupPhone">
			<AuthModal @getPhoneNumber="toReqGetPhone" @closePop="closePopPhone" :authType="'getPhoneNumber'"></AuthModal>
		
		</UniPopup>
    </view>
</template>

<script>
	import AuthModal from '@/components/common/authModal/auth-modal.vue'
	import UniPopup from '@/components/common/uni-popup/uni-popup.vue'
	import {
		getCodeForOauth,
		getPhoneNumber
	} from '@/common/authFun.js'
	import {getKey,saveUserInfo} from '@/network/auth.js'
	
    export default {
        name: "auth",
        data(){
			return{
				
			}
        },
        components:{
			AuthModal,
            UniPopup,
        },
		mounted() {
			// // 先获取code，发送code至后台获取openid和session_key
			if (!uni.getStorageSync('userInfo')) {
				getCodeForOauth('oauth').then(res => {
					// console.log('res:', res); // {code:"..."errMsg:"login:ok"}
					// uni.setStorageSync('code', res.code)
					const getKeyParam = {
						code:res.code, 
						appid:this.$store.state.appid,
					}
					getKey(getKeyParam).then(kRes => {
						uni.setStorageSync('session_key', kRes.data.session_key)
						uni.setStorageSync('openid', kRes.data.openid)
						this.$refs.popup.open()
					})
				})
		
			}
			
		},
		methods: {
			// 授权获取信息
			authForInfo(e) {
				if(e.detail.errMsg !=='getUserInfo:fail auth deny'){
					let openId = uni.getStorageSync('openid')
					let userInfo = e.detail.userInfo
					userInfo['nickname'] = userInfo['nickName']
					userInfo['headimgurl'] = userInfo['avatarUrl']
					uni.setStorageSync('userInfo', JSON.stringify(userInfo))
					this.closePop()
					this.$refs.popupPhone.open()
					
				}
				
			},
			// 提交用户信息
			sendUserInfo(phone){
				let userInfo = JSON.parse(uni.getStorageSync('userInfo')) 
				Object.assign(userInfo, {
					openid: uni.getStorageSync('openid'),
					seller_id : this.$store.state.sid,
					phone:  phone
				})
				saveUserInfo(userInfo).then((res) => {
					console.log('手机号提交成功')
					this.closePopPhone(true)
				
				})
			},
			
			//关闭弹框
			closePop() {
				this.$refs.popup.close()
			},
			//关闭获取手机弹框
			closePopPhone(isGetPhone) {
				if(!isGetPhone){
					this.sendUserInfo('')
				}
				this.$refs.popupPhone.close();
				
			},
			
			// 获取手机号
			toReqGetPhone(e) {
				 //检查session_key是否过期,过期则从新获取session_key
				getPhoneNumber(e.detail).then(res => {
					// uni.setStorageSync('phone', res.data)
					this.sendUserInfo(res.data)
				})
				
			},
		}
    }
</script>

<style scoped>

</style>
