import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 1. 先创建实例
const app = createApp(App)

// 2. 再安装插件
app.use(createPinia())
app.use(router)

// 3. 最后挂载
app.mount('#app')

