import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/cookieToken'

// create an axios instance
export const aixosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
aixosInstance.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    const key = config.url + '#' + config.method
    config.cancelToken = new axios.CancelToken(cancel => { // Cancellation 的第二种方式
      store.dispatch('axiosStatus/handle_apiCtlPool', { key, cancel })
    })
    console.log(config, 'config')
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
aixosInstance.interceptors.response.use(
  response => response,
  error => {
    if (axios.isCancel(error)) {
      console.log('Request canceled！！！！', error.message) // 取消请求的处理，删除 piCtlPool中的key
    } else {
      return Promise.reject(error)
    }
  }
)
export default aixosInstance
