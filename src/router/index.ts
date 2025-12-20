import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
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
      path: '/Register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
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
      path: '/full-stack',
      name: 'FullStack',
      component: () => import('../views/full-stack.vue'),
    },
    {
      path: '/hardware',
      name: 'Hardware',
      component: () => import('../views/hardware.vue'),
    },
    {
      path: '/data',
      name: 'Data',
      component: () => import('../views/data.vue'),
    },
    {
      path: '/embedded',
      name: 'Embedded',
      component: () => import('../views/embedded.vue'),
    },
    {
      path: '/orange学习部',
      name: 'OrangeLearning',
      component: () => import('../views/orange学习部.vue'),
    },
    {
      path: '/orange事务部',
      name: 'OrangeAffairs',
      component: () => import('../views/orange事务部.vue'),
    },
    {
      path: '/Orange 短视频',
      name: 'OrangeShortVideo',
      component: () => import('../views/Orange 短视频.vue'),
    },
    {
      path: '/Orange 开发',
      name: 'OrangeDevelop',
      component: () => import('../views/Orange 开发.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: { template: '<div>404 Not Found</div>' },
    },
  ],
})

export default router