import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'

// document.getElementsByTagName('body')[0].style.setProperty('--el-button-background-color', 'red')

// import

// import '@/styles/elementPlus/var.scss' // 全局变量
import 'animate.css'

import './permission'
import '../Mock/index.js'

import '@/repository/select.js'
import Pagination from '@/components/Pagination/index.vue'
import directives from '@/utils/directives'
import Icon from '@/utils/icon'

const app = createApp(App)
app.use(ElementPlus)
app.use(directives)
app.use(Icon)

app.component('MyPagination', Pagination)

app.use(store).use(router).mount('#app')
// console.log(app, 'app')
console.log(process.env, 'process.env')

// 主题修改
// document.getElementsByTagName('body')[0].style.setProperty('--el-color-primary', '#41b584')
// document.getElementsByTagName('body')[0].style.setProperty('--el-border-radius-base', '3px')

