import { createRouter, createWebHashHistory } from 'vue-router'
import computerFreeDiagnosisAppointment from '../views/computerFreeDiagnosisAppointment.vue'

// 创建一个简单的Home组件
const Home = {
  template: '<div>Home Page</div>'
}

// 创建一个简单的NotFound组件
const NotFound = {
  template: '<div>404 Not Found</div>'
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/computerFreeDiagnosisAppointment',
      name: 'computerFreeDiagnosisAppointment',
      component: computerFreeDiagnosisAppointment
    },
    // 404路由
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound
    }
  ]
})

export default router