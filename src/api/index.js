import request from '@/utils/requests'
import { getToken } from '@/utils/token'

// 用户登录
const loginAPI = ({ mobile, code }) => request({
    url: '/v1_0/authorizations',
    method: 'post',
    data: {
        mobile,
        code
    }
})

// 获取用户的频道
const userChannelsAPI = () => request({
    url: '/v1_0/user/channels',
    method: 'get',
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
})

// 获取文章列表
const getUserArticleAPI = ({ channelID, timestamp }) => request({
    url: '/v1_0/articles',
    method: 'get',
    headers: {
        Authorization: `Bearer ${getToken()}`
    },
    params: {
        channel_id: channelID,
        timestamp
    }
})
export { loginAPI, userChannelsAPI, getUserArticleAPI };