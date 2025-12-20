import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 定义路由配置数组
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/hardware' // 根据需求修改重定向
  },
  {
    path: '/hardware',
    name: 'hardware',
    component: () => import(/* webpackChunkName: "hardware" */ '../views/hardware.vue')
  },
  {
    path: '/full-stack',
    name: 'full-stack',
    component: () => import(/* webpackChunkName: "full-stack" */ '../views/full-stack.vue')
  },
  {
    path: '/Orange 短视频',
    name: 'Orange 短视频',
    component: () => import(/* webpackChunkName: "Orange短视频" */ '../views/Orange 短视频.vue')
  },
  {
    path: '/Orange 开发',
    name: 'Orange 开发',
    component: () => import(/* webpackChunkName: "Orange开发" */ '../views/Orange 开发.vue')
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
  {
    path: '/infra/repair-book',
    name: 'computerFreeDiagnosisAppointment',
    component: () => import('../views/computerFreeDiagnosisAppointment.vue'),
  },
  {
    path: '/DevelopDepartment',
    name: 'DevelopDepartment',
    component: () => import('../views/DevelopDepartment.vue'),
  },
  {
    path: '/externalPropagandaDepartment',
    name: 'externalPropagandaDepartment',
    component: () => import('../views/externalPropagandaDepartment.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: { template: '<div>404 Not Found</div>' },
  },
]

// 创建路由器实例
const router = createRouter({
  // 选择 history 模式：
  // 1. createWebHashHistory() - 使用 hash 模式（第一个配置）
  // 2. createWebHistory(import.meta.env.BASE_URL) - 使用 history 模式（第二个配置）

  // 使用 hash 模式（推荐兼容性好）
  history: createWebHashHistory(),

  // 或者使用 history 模式（需要服务器配置）
  // history: createWebHistory(import.meta.env.BASE_URL),

  routes,

  // 可选的滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 导出路由器
export default router