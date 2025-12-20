import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 重定向到 orange事务部（或你决定的主页）
  {
    path: '/',
    redirect: '/orange事务部',
  },
  // lxq分支的路由
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
  // main分支的路由
  {
    path: '/Orange 短视频',
    name: 'Orange 短视频',
    component: () => import(/* webpackChunkName: "Orange 短视频" */ '../views/Orange 短视频.vue')
  },
  {
    path: '/Orange 开发',
    name: 'Orange 开发',
    component: () => import(/* webpackChunkName: "Orange 开发" */ '../views/Orange 开发.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router