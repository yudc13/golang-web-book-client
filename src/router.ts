import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: () =>
      import(/* webpackChunkName 'index' */ '@/layout/layout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () =>
          import(/* webpackChunkName 'home' */ '@/views/Home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName 'login' */ '@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName 'login' */ '@/views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
