import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/01',
      name: '01',
      component: () => import('../views/01View.vue')
    },
    {
      path: '/02',
      name: '02',
      component: () => import('../views/02View.vue')
    },
    {
      path: '/03',
      name: '03',
      component: () => import('../views/03View.vue')
    },
  ]
})

export default router
