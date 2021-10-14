
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
export default function selectDataRepo(dataName) {
  const ListData = ref([])
  // const loading = ref(false)
  /**
   *
   * @param {*} urlKey 地址对应的key
   * @param  {...any} params 下拉接口需要的参数
   */
  const getSelectOptionsData = async(urlKey, ...params) => {
    if (urlKey) {
      $http.get(urlKeys[urlKey], {
        params: {
          ...params,
          [LOADING]: true // 下拉接口统一加入markLoading 状态
        }
      }).then(res => {
        console.log(res)
        ListData.value = (res.list) // 接口地址能否统一返回格式?。
      }).catch(err => {
        console.log(err)
        ListData.value = null
      })
    } else {
      ListData.value = ['请传入接口url']
    }
  }

  return {
    [dataName]: ListData,
    // loading,
    [`${dataName}Getter`]: getSelectOptionsData
  }
}
