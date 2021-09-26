try {
  /*
    // get user info
    // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
    const { roles } = await store.dispatch('user/getInfo')

    // generate accessible routes map based on roles
    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // hack method to ensure that addRoutes is complete
    // set the replace: true, so the navigation will not leave a history record
    */
  // 没有用户信息：通过token 获取用户信息
  // await store.dispatch('user/getInfo')
  // await store.dispatch('permission/generateRoutes', roles) // 生成权限过滤后的动态路由
  // router.addRoutes(accessRoutes) // dynamically add accessible routes
  next({ ...to, replace: true })
} catch (error) {
  // remove token and go to login page to re-login
  await store.dispatch('user/resetToken')
  // Message.error(error || 'Has Error')
  alert('error')
  next(`/login`)
  NProgress.done()
}
