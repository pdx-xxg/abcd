// 入口：挂载应用，注册全局导航插件并启用 vue-router。
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 
import OrangeTopNav from './components/OrangeTopNav/index.vue'
import bottomNav from './components/bottomNav/bottomNav.vue'

const app = createApp(App)

app.use(createPinia())
app.component('OrangeTopNav', OrangeTopNav)
app.component('bottomNav', bottomNav)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
