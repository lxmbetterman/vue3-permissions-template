import {
  Expand, Edit, AddLocation, HomeFilled, House, Service,
  TrendCharts, ArrowDownBold, Fold, CircleCloseFilled
} from '@element-plus/icons'
import MyIcon from './index.vue'
/**
<el-icon><fold /></el-icon>
<el-icon><expand /></el-icon>
 */
// 所有组件列表
const components = {
  MyIcon,
  iconExpand: Expand,
  iconFold: Fold,
  iconEdit: Edit,
  iconAddLocation: AddLocation,
  iconHomeFilled: HomeFilled,
  iconHouse: House,
  iconService: Service,
  iconTrendCharts: TrendCharts,
  iconArrowDownBold: ArrowDownBold,
  iconCircleCloseFilled: CircleCloseFilled
}
const svgNames = []
// 定义install方法，接收app作为参数
const install = function(app) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  // components.map((component) => app.component(component.name, component))
  for (const key in components) {
    app.component(key, components[key])
  }

  const req = require.context('./svg', false, /\.svg$/)
  const requireAll = requireContext => requireContext.keys().map(path => {
    // console.log(path) -> ./eye.svg  ->./icons.svg
    var index = path.lastIndexOf('/')
    svgNames.push(path.slice(index + 1).slice(0, -4))

    return requireContext(path)
  })
  requireAll(req)
}

export default {
  install,
  components,
  svgNames
}
