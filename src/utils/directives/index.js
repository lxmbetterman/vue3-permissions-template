import { Resize } from './Resize'
import { Animate } from './Animate'

// 自定义指令集合
const directives = {
  Resize,
  Animate
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
