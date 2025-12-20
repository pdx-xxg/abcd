
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/views/Register.vue'
import Success from '@/views/Success.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // 根路径（首页）对应Success页面
      name: 'Success',
      component: Success
    },
    {
      path: '/register', // 报名页改为/register路径
      name: 'Register',
      component: Register
    }
  ]
})

export default router