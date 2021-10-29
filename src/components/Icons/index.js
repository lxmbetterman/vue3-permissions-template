import { Expand, Edit, AddLocation, HomeFilled, House, Service } from '@element-plus/icons'
import MyIcon from './index.vue'
// 所有组件列表
const components = {
  MyIcon,
  iconExpand: Expand,
  iconEdit: Edit,
  iconAddLocation: AddLocation,
  iconHomeFilled: HomeFilled,
  iconHouse: House,
  iconService: Service

}
// 定义install方法，接收app作为参数
const install = function(app) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  //   components.map((component) => app.component(component.name, component))
  for (const key in components) {
    app.component(key, components[key])
  }

  const req = require.context('./svg', false, /\.svg$/)
  const requireAll = requireContext => requireContext.keys().map(requireContext)
  requireAll(req)
}

export default {
  install
}
