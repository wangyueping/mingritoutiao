import axios from 'axios'

const request = axios.create({
    baseURL: 'http://toutiao.itheima.net',
    timeout: 10000
})

export default request