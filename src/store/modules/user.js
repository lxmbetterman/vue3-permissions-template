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
      // login({ username: username.trim(), password: password })
      //   .then((response) => {
      //     const { data } = response
      //     commit('SET_TOKEN', data.token)
      //     setToken(data.token)
      //     resolve()
      //   })
      //   .catch((error) => {
      //     reject(error)
      //   })
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
  // remove token
  // resetToken({ commit }) {
  //   return new Promise((resolve) => {
  //     commit("SET_TOKEN", "");
  //     commit("SET_ROLES", []);
  //     removeToken();
  //     resolve();
  //   });
  // },
  // dynamically modify permissions
  // async changeRoles({ commit, dispatch }, role) {
  //   const token = role + "-token";
  //   commit("SET_TOKEN", token);
  //   setToken(token);
  //   const { roles } = await dispatch("getInfo");
  //   resetRouter();
  //   // generate accessible routes map based on roles
  //   const accessRoutes = await dispatch("permission/generateRoutes", roles, {
  //     root: true,
  //   });
  //   // dynamically add accessible routes
  //   router.addRoutes(accessRoutes);
  //   // reset visited views and cached views
  //   dispatch("tagsView/delAllViews", null, { root: true });
  // },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
