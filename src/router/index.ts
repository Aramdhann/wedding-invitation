import { createWebHistory, createRouter } from 'vue-router'

import AdminView from '@/views/AdminVue.vue'

const routes = [
  { path: '/:name?', name:'home', component: () => import('@/views/HomeView.vue') },
  { path: '/admin', name:'admin', component: AdminView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})