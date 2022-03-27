import axios from 'axios'

const service = axios.create({
    baseURL: 'http://toutiao.itheima.net',
    timeout: 10000
})

export default service