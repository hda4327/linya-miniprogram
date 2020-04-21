import {request} from './request'

export function getTeamList(type) {
    return request({
        url: 'expert_team/getListWeChart',
        data: {
            type
        },
        method: 'POST'
    })
}
export function getTeamDetail(teamId) {
    return request({
        url: 'home/getExpertTeamInfo',
        data: {
            team_id: teamId
        },
        method: 'POST'
    })
}
// team_id: params.teamId,
//     type: params.typeId,
//     number: params.num
export function saveScore(data) {
    return request({
        url: '/home/setExpertTeamScore',
        data,
        method: 'POST'
    })
}

export function reqGiftList(teamId) {
    return request({
        url: 'expert_team/getGoods',
        data: {
            team_id: teamId
        },
        method: 'POST'
    })
}
export function reqCommentList(teamId) {
    return request({
        url: 'expert_team_comment/lists',
        data: {
            team_id: teamId
        },
        method: 'POST'
    })
}