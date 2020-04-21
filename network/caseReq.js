import {request} from './request'


export function reqCaseCat() {
    return request({
        url: 'home/getCasesCat',
        data: {
        },
        method: 'POST'
    })
}
export function reqCaseList(params) {
    return request({
        url: 'home/getCasesList',
        data: {
            title:params.title,
            project_id: params.project_id,
            page: 1,
            num: 10,
        },
        method: 'POST'
    })
}

export function reqCaseDetail(case_id) {
    return request({
        url: 'home/getCasesInfo',
        data: {
            case_id
        },
        method: 'POST'
    })
}

