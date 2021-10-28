import { Expand, Edit, AddLocation } from '@element-plus/icons'

// 所有组件列表
const components = {
  iconExpand: Expand,
  iconEdit: Edit,
  iconAddLocation: AddLocation
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
}

export default {
  install
}
