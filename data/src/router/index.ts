import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/login.vue'),
    }
  ]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
