import {request} from './request'



export function reqCoupeList(params) {
    return request({
        url: 'home/getDiscoverList',
        data: params,
        method: 'POST'
    })
}

export function reqCoupeDetail(discover_id) {
    return request({
        url: 'home/getDiscoverInfo',
        data: {
            discover_id
        },
        method: 'POST'
    })
}
