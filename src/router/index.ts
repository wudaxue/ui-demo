import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/rank',
    component: () => import('@/pages/rank/index.vue'),
  },
  {
    path: '/gradient',
    component: () => import('@/pages/gradient/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
