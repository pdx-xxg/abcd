import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home/index.vue'),
    },
    {
      path: '/student-query',
      name: 'StudentQuery',
      component: () => import('../views/joinSearch/index.vue'),
    },
    {
      path: '/phone-query',
      name: 'PhoneQuery',
      component: () => import('../views/computerFreeDiagnosis/search/index.vue'),
    },
    {
      path: '/infra/repair-book',
      name: 'computerFreeDiagnosisAppointment',
      component: () => import('../views/computerFreeDiagnosis/appointment/index.vue'),
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('../views/join/index.vue'),
    },
    {
      path: '/DevelopDepartment',
      name: 'DevelopDepartment',
      component: () => import('../views/departments/DevelopDepartment.vue'),
    },
    {
      path: '/externalPropagandaDepartment',
      name: 'externalPropagandaDepartment',
      component: () => import('../views/departments/externalPropagandaDepartment.vue'),
    },
    {
      path: '/full-stack',
      name: 'FullStack',
      component: () => import('../views/groups/fullStack.vue'),
    },
    {
      path: '/hardware',
      name: 'Hardware',
      component: () => import('../views/groups/hardware.vue'),
    },
    {
      path: '/data',
      name: 'Data',
      component: () => import('../views/groups/bigData.vue'),
    },
    {
      path: '/embedded',
      name: 'Embedded',
      component: () => import('../views/groups/embedded.vue'),
    },
    {
      path: '/orange学习部',
      name: 'OrangeLearning',
      component: () => import('../views/departments/learningDepartment.vue'),
    },
    {
      path: '/orange事务部',
      name: 'OrangeAffairs',
      component: () => import('../views/departments/affairsDepartment.vue'),
    },
    {
      path: '/Orange 短视频',
      name: 'OrangeShortVideo',
      component: () => import('../views/groups/video.vue'),
    },
    {
      path: '/Orange 开发',
      name: 'OrangeDevelop',
      component: () => import('../views/groups/develop.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      redirect: '/',
    },
  ],
})

export default router