import {request} from './request'

export function reqVideoTypeList(seller_id){
	
	return request({
		url:'video_main/getTypeVideopc',
		data:{seller_id},
		method: 'POST'
	})
	
}

export function reqVideoDetail(video_id){
	
	return request({
		url:'video_main/setPlay',
		data:{video_id},
		method: 'POST'
	})
	
}

export function reqVideoList(params) {
    return request({
        url: 'video_main/getList',
        data: params,
        method: 'POST'
    })
}
