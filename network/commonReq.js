import {request} from './request'



export function reqCompanyMsg(){
    return request({
        url:'home/getAboutInfo',
        data:{
        },
        method:'POST'
    })
}