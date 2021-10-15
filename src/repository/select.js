
import { ref } from 'vue'

import $http from '@/utils/aixosInstance'

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

  const getListData = async(url, ...params) => {
    if (url) {
      loading.value = true
      $http.get(url, {
        params: {
          ...params
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
