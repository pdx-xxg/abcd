import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: '/Orange 短视频',
  },
  {
    path: '/Orange 短视频',
    name: 'Orange 短视频',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Orange 短视频" */ '../views/Orange 短视频.vue')
  },
  {
    path: '/Orange 开发',
    name: 'Orange 开发',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Orange 开发" */ '../views/Orange 开发.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
