import {request} from './request'


export function getHomeBanner() {
	
	console.log('134')
    return request({
        url: 'home/getBannerList',
        data: {
        },
        method: 'POST'
    })
}

export function getHomeStatistics() {
    return request({
        url: 'home/getMobileData',
        data: {
        },
        method: 'POST'
    })
}

export function getProjectList() {
    return request({
        url: 'home/getProjectList',
        data: {
        },
        method: 'POST'
    })
}
export function reqCoupeList(params) {
    return request({
        url: 'home/getDiscoverList',
        data: params,
        method: 'POST'
    })
}
export function getCaseList() {
    return request({
        url: 'home/getCasesList',
        data: {
        },
        method: 'POST'
    })
}
export function getTeamList() {
    return request({
        url: 'home/getExpertTeamList',
        data: {
        },
        method: 'POST'
    })
}
export function getVideoList(type) {
    return request({
        url: 'video_main/getList',
        data: {
            type: type
        },
        method: 'POST'
    })
}

