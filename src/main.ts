// 入口：挂载应用，注册全局导航插件并启用 vue-router。
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.ts'

import OrangeTopNav from './components/OrangeTopNav/index.vue'

const app = createApp(App)

app.use(createPinia())
app.component('OrangeTopNav', OrangeTopNav)
app.use(router)

app.mount('#app')
