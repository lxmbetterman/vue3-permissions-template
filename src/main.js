import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
// import axiosPlugin from './utils/axiosPlugin.js'
import 'element-plus/dist/index.css'
import './permission'
import '../Mock/index.js'

const app = createApp(App)
app.use(ElementPlus)
// app.use(axiosPlugin)
app.use(store).use(router).mount('#app')
console.log(app, 'app')
console.log(process.env, 'process.env')
