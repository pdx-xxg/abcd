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
  ],
})

export default router