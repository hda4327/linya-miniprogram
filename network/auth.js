import {request} from './request.js'

export function getKey(params) {
	return request({
			url: 'home/onLogin',
			data: params,
			method: 'POST'
		})
}
// export function reqPhoneNum(call, data){
// 	request('work/index/getPhone', call, data)
// }
export function saveUserInfo(params) {
	return request({
		url: 'home/doUserInfo',
		data: params,
		method: 'POST'
	})
}

export function reqPhoneNum(params){
	return request({
		url: 'work/index/getPhone',
		data: params,
		method: 'POST'
	})
}
