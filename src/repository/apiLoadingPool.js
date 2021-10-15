
/**
 * apiLoadingPool 全局管理需要loading状态的api
 * 将apiLoadingPool从vuex中迁移到 组合式api中管理
 * key的格式：/test/axios#get'
 */
import { reactive } from 'vue'

const apiLoadingPools = reactive({

})

export default function apiLoadingPool(urlKey) {
  console.log(urlKey, 'urlKeyurlKey')
  if (urlKey && apiLoadingPools[urlKey] === undefined) { // 为api 状态池中初始化 URL对应的key
    apiLoadingPools[urlKey] = false
  }

  const toggleApiLoadingStatus = async(loading) => {
    apiLoadingPools[urlKey] = loading // reactive 具体的某一项不需要用value来取值赋值
  }
  return {
    apiLoadingPools, // 这是个reactive
    toggleApiLoadingStatus
  }
}
