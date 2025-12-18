// 入口：挂载应用，注册全局导航插件并启用 vue-router。
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import OrangeTopNav from './components/OrangeTopNav'

const app = createApp(App)

app.use(OrangeTopNav)
app.use(router)

app.mount('#app')
