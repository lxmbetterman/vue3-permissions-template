// import { login, logout, getInfo } from "@/api/user";
// import { getToken, setToken, removeToken } from '@/utils/cookieToken'
import { getToken, setToken, TokenKey, removeToken } from '@/utils/cookieToken'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    // const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', TokenKey)
      setToken(TokenKey)
      resolve()
    })
  },
  // 根据token 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_NAME', 'lxm')
      resolve()
    })
  },
  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      removeToken()
      commit('SET_NAME', '')
      resetRouter()

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
