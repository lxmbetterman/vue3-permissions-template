const state = {
  // 控制接口的cancle
  apiCtrlPool: { // [api-key]:[cancel function]
  }
}

const mutations = {
  SET_apiCtrlPool: (state, source) => {
    if (source.cancel) {
      state.apiCtrlPool = { ...state.apiCtrlPool, [source.key]: source.cancel }
      // state.set('apiCtrlPool', source.key, source.cancel)
    } else {
      if (state.apiCtrlPool[source.key]) {
        delete state.apiCtrlPool[source.key]
      }
    }
  }

}

const actions = {
  // ！！！
  // 当action中只有同步方法时，dispatch操作实际上也是同步的，
  // 当action中有异步方法时，异步方法的then或catch会异步执行
  handle_apiCtrlPool({ commit }, source) {
    return new Promise((resolve) => {
      commit('SET_apiCtrlPool', source) // 发起请求时添加
      resolve()
    })
  },
  excute_RepeatedCancleFunc({ state }, key) { // 发起请求时执行
    return new Promise((resolve) => {
      const theCancleFunc = state.apiCtrlPool[key]
      theCancleFunc && theCancleFunc(key) // key === message
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
