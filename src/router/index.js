import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        redirect: '/orange事务部'
    },
    {
        path: '/orange事务部',
        name: 'orange事务部',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/orange事务部.vue')
    },
    {
        path: '/orange学习部',
        name: 'orange学习部',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/orange学习部.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
