import { LOADING } from '@/globalConfig'
import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/cookieToken'
import apiLoading from '@/repository/apiLoadingPool'

// create an axios instance
export const aixosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

aixosInstance.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    const key = config.url + '#' + config.method

    // doNotCancle:true(默认能取消请求) 标记需要能够手动取消异步请求的api
    if (!config.params.doNotCancle) {
      config.cancelToken = new axios.CancelToken(async(cancel) => { // Cancellation 的第二种方式
        // 如果 apiCtrlPool 里有相同的key的cancel，先执行这个cancel
        await store.dispatch('apiPool/excute_RepeatedCancleFunc', key) // 取消连续点击的重复请求

        // 记录key到apiCtrlPool 或者 删除key
        await store.dispatch('apiPool/handle_apiCtrlPool', { key, cancel })
      })
    }

    // markLoading：标记需要loading状态的Api
    if (config.params[LOADING]) {
      // store.dispatch('apiPool/handle_apiLoadingPool', { key, value: true })// 设置为loading状态
      const { toggleApiLoadingStatus } = apiLoading(key)
      toggleApiLoadingStatus(true) // 状态设置为加载中
    }

    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

aixosInstance.interceptors.response.use(
  // response包含{config,headers,data,status}
  // 正常结束的请求，重置apiLoadingPool中对应的key loading状态为false
  response => {
    // console.log(response, 'responseresponseresponse')
    const config = response.config
    if (config.params[LOADING]) {
      const key = `${config.url}#${config.method}`
      // store.dispatch('apiPool/handle_apiLoadingPool', { key, value: false }) // 完成正常请求 设置为非loading状态
      const { toggleApiLoadingStatus } = apiLoading(key)
      toggleApiLoadingStatus(false) // 状态设置为加载完成
    }
    return response.data
  },
  error => {
    // 非正常结束的请求分为: 1手动取消 / 2请求过程错误两种情况

    if (axios.isCancel(error)) {
      // 1 判断是否是手动cancle 造成的error，通过message传入key 来设置apiCtrlPool和apiLoadingPool中对于的key
      console.log('Request canceled！！！！', error.message) // 取消请求的处理，删除 piCtlPool中的key
      // store.dispatch('apiPool/handle_apiLoadingPool', { key: error.message, value: false }) // 设置为非loading状态

      const { toggleApiLoadingStatus } = apiLoading(error.message)
      toggleApiLoadingStatus(false) // 状态设置为加载完成

      return Promise.reject(error)
    } else {
      // 2 请求过程错误 error中包含config信息，需要设置apiCtrlPool和apiLoadingPool中对于的key
      if (error.response) { // 服务器出错的情况（有响应）error.response 有config数据
        const config = error.response.config
        if (config.params[LOADING]) {
          const key = `${config.url}#${config.method}`
          const { toggleApiLoadingStatus } = apiLoading(key)
          toggleApiLoadingStatus(false) // 状态设置为加载完成
        }
      } else if (error.request) { // 服务器无响应的情况
        console.log(error.request)
      } else { // 其他
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      return Promise.reject(error)
    }
  }
)
export default aixosInstance
