import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
   redirect: '/hardware'
  },
  {
    path: '/hardware',
    name: 'hardware',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/hardware.vue')
  },
  {
    path: '/full-stack',
    name: 'full-stack',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/full-stack.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
