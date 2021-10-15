
import { ref } from 'vue'

import $http from '@/utils/aixosInstance'
import { LOADING } from '@/globalConfig'

export const urlKeys = {
  /**
   * 所有下拉接口地址列表
   * url通常很长，直接写占用代码空间
   * 建议 ListApi_xxx统一格式定义key的格式。方便全局查找
   */

  list: '/dev-api/list' // 请求接口
}

/**
 * 管理全项目的下拉选项数据及其请求接口
 * @param
 * @returns
 */
export default function dropListRepository() {
  const listData = ref([])
  const loading = ref(false)

  /**
   *
   * @param {*} urlKey 地址对应的key
   * @param  {...any} params 下拉接口需要的参数
   */

  const getListData = async(urlKey, ...params) => {
    if (urlKey) {
      //
      // if (config.params[LOADING]) {
      //   // apiLoadingPool会将key 设置在api状态池里。
      //   const { toggleApiLoadingStatus } = apiLoadingPool(key)
      //   toggleApiLoadingStatus(true) // 状态设置为加载中
      // }
      loading.value = true
      $http.get(urlKeys[urlKey], {
        params: {
          ...params,
          [LOADING]: false // 下拉接口不加markLoading状态，每个getListData单独维护一个loading
        }
      }).then(res => {
        listData.value = (res.list) // 接口地址能否统一返回格式?。
        loading.value = false
      }).catch(err => {
        console.log(err)
        listData.value = null
        loading.value = false
      })
    } else {
      listData.value = ['请传入接口url']
    }
  }
  return {
    listData,
    loading,
    getListData
  }
}
