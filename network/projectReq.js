import {request} from "./request";

export function reqProjectList() {
    return request({
        url: 'home/getProjectList',
        data: {

        },
        method: 'POST'
    })
}
export function reqPictureList(class_id) {
    return request({
        url: 'home/getImg',
        data: {
			class_id
        },
        method: 'POST'
    })
}
export function reqVideoList(params) {
    return request({
        url: 'home/getVideo',
        data: params,
        method: 'POST'
    })
}
export function reqProductList() {
    return request({
        url: 'home/projectGoodsList',
        data: {

        },
        method: 'POST'
    })
}
