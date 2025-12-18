// 路由：使用 vue-router@4，配置学号查询与手机号查询页面。
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/student-query',
    },
    {
      path: '/student-query',
      name: 'StudentQuery',
      component: () => import('../views/RegistrationQuery.vue'),
    },
    {
      path: '/phone-query',
      name: 'PhoneQuery',
      component: () => import('../views/PcClinicQuery.vue'),
    },
  ],
})

export default router
