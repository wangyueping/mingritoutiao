import request from '@/utils/requests'

// 用户登录
const loginAPI = ({ mobile, code }) => {
    return request({
        url: '/v1_0/authorizations',
        method: 'post',
        data: {
            mobile,
            code
        }
    })
}

export { loginAPI };