import request from '@/utils/requests'

// 用户登录
const loginAPI = ({ mobile, code }) => request({
    url: '/v1_0/authorizations',
    method: 'post',
    data: {
        mobile,
        code
    }
})


export { loginAPI };