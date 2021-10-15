const getters = {
  name: state => state.user.name, // 用户登录名
  token: state => state.user.token, // token
  apiCtrlPool: state => state.apiPool.apiCtrlPool // apiCtrlPool
}
export default getters
