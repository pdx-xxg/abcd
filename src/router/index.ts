import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // ========== 主页重定向 ==========
  {
    path: '/',
    redirect: '/orange事务部',
  },

  // ========== orange部门路由 ==========
  {
    path: '/orange事务部',
    name: 'orange事务部',
    component: () => import(/* webpackChunkName: "orange事务部" */ '../views/orange事务部.vue')
  },
  {
    path: '/orange学习部',
    name: 'orange学习部',
    component: () => import(/* webpackChunkName: "orange学习部" */ '../views/orange学习部.vue')
  },
  {
    path: '/Orange 短视频',
    name: 'Orange 短视频',
    component: () => import(/* webpackChunkName: "Orange 短视频" */ '../views/Orange 短视频.vue')
  },
  {
    path: '/Orange 开发',
    name: 'Orange 开发',
    component: () => import(/* webpackChunkName: "Orange 开发" */ '../views/Orange 开发.vue')
  },

  // ========== 其他硬件/开发部门路由 ==========
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

  // ========== 查询类路由 ==========
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

  // ========== 开发部门路由 ==========
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

  // ========== 404页面 ==========
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: { template: '<div>404 Not Found</div>' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router