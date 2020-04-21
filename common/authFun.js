import {getKey, reqPhoneNum} from '@/network/auth.js'
//service 值说明(String)

// 值	说明
// oauth	授权登录
// share	分享
// payment	支付
// push		推送

//service值为oauth时返回示例： {code:"the code is a mock one"errMsg:"login:ok"}

//授权登录的
export function getCodeForOauth() {  //返回{code: xxx}
	return new Promise((resolve, reject) => {
		getProvider('oauth').then(proRes => {
			// console.log(proRes) //weixin
			getLoginCode(proRes).then(codeRes => {
				resolve(codeRes)
			}, err => {
				reject(err)
			})
			})
		})
}

export function getProvider(service) {
	return new Promise((resolve, reject) => {
		uni.getProvider({
			service,
			success: (res) => {

				resolve(res.provider[0])
				// //若是授权登录
				// if (service === 'oauth') {
				// 	getLoginCode(res.provider[0]).then(res => {
				// 		resolve(res)
				// 	}, err => {
				// 		reject(err)
				// 	})
				// }

			}

		})
	})
}
//获取授权登录code
function getLoginCode(provider) {
	return new Promise((resolve, reject) => {
		uni.login({
			provider,
			success(res) {
				resolve(res)
			},
			fail(err) {
				uni.showToast({
					title: '授权失败'
				});
				reject(err)
			}
		})
	})
}
/**
 * scope 列表
 * scope.userInfo	uni.getUserInfo	用户信息	
scope.userLocation	uni.getLocation, uni.chooseLocation	地理位置	
scope.userLocationBackground	wx.userLocationBackground	后台定位	微信小程序
scope.address	uni.chooseAddress	通信地址	
scope.record	uni.getRecorderManager	录音功能	
scope.writePhotosAlbum	uni.saveImageToPhotosAlbum, uni.saveVideoToPhotosAlbum	保存到相册	头条小程序的返回值是scope.album
scope.camera	<camera /> 组件，头条下的扫码、拍照、选择相册	摄像头	
scope.invoice	wx.chooseInvoice	获取发票	微信小程序、QQ小程序
scope.invoiceTitle	uni.chooseInvoiceTitle	发票抬头	微信小程序、百度小程序、QQ小程序
scope.werun	wx.getWeRunData	微信运动步数	微信小程序
 */

// 获取用户信息
export function authForMsg(scopeVar) {
	return new Promise((resolve, reject) => {
		uni.authorize({
			scope: scopeVar,
			success() {
				if (scopeVar === 'scope.userInfo') {
					getProvider('oauth').then(providerRes => {
						uni.getUserInfo({
							provider: providerRes,
							success: function(infoRes) {
								console.log(infoRes);
								console.log('用户昵称为：' + infoRes.userInfo.nickName);
								resolve(infoRes)
							}
						})
					})
				}
			},
			fail(err) {
				console.log(err)
			}
		})

	})

}

export function getPhoneNumber(detail) {
	
	return new Promise((resolve)=>{
		const session_key = uni.getStorageSync('session_key')
			uni.checkSession({
				success: function() {
					console.log('sessionkey未过期')
					deciyption(detail, session_key).then(res => resolve(res))
				},
				fail: function() {
					console.log('sessionkey过期')
					
					//1.login获取code
					uni.login({
						provider:'weixin',
						success: res => {
							//2.以code获取session_key
							getKey(res=>{
								uni.setStorageSync('session_key', res.session_key)
								uni.setStorageSync('openid', res.openid)
								//现在获取到的key已不是过期的了 3.拿session_key和detail手机加密信息调接口获取phone
								deciyption(detail, res.session_key).then(res => resolve(res))
								
							} ,{code: res.code})
					   }
					})
				}
			})
	})
	
}
//发送获取手机号请求接口
function deciyption(detail, session_key) {
	
	return new Promise(resolve=>{
		console.log('deciyption', detail)
		const params = {
			session_key,
			encryptedData: detail.encryptedData,
			iv: detail.iv
		}
		reqPhoneNum(params).then(res=>resolve(res))
	}) 

}

