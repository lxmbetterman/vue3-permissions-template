const state = {
  apiCtlPool: {}
}

const mutations = {
  SET_apiCtlPool: (state, source) => {
    if (source.cancel) {
      state.apiCtlPool = { ...state.apiCtlPool, [source.key]: source.cancel }
      // state.set('apiCtlPool', source.key, source.cancel)
    } else {
      delete state.apiCtlPool[source.key]
    }
  }
}

const actions = {
  handle_apiCtlPool({ commit }, source) {
    commit('SET_apiCtlPool', source)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
