const getters = {
  name: state => state.user.name, // 用户登录名
  token: state => state.user.token, // token
  apiCtlPool: state => state.axiosStatus.apiCtlPool // token
}
export default getters
