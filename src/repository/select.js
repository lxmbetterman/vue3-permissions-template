
import { ref } from 'vue'

// import $http from '@/utils/aixosInstance'

export const apis = {
  select1Data: '/select1',
  select2Data: '/select2'
}
console.log(apis)

/**
 * 管理全项目的下拉选项数据及其请求接口
 * @param
 * @returns
 */
export default function selectDataRepo(dataName) {
  const selectOptionsData = ref([])
  /**
   *
   * @param {*} key 地址对应的key
   * @param  {...any} params 下拉接口需要的参数
   */
  const getSelectOptionsData = async(key, ...params) => {
    // $http.get(apis[key], {
    //   params
    // }).then(res => {
    //   selectOptionsData.value = res
    // }).catch(err => {
    //   console.log(err)
    //   selectOptionsData.value = null
    // })
    selectOptionsData.value = ['aaa', 'bbb', 'ccc']
  }

  return {
    [dataName]: selectOptionsData,
    [`get_${dataName}`]: getSelectOptionsData
  }
}
