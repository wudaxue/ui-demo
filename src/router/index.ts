import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: () => import('@/pages/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
