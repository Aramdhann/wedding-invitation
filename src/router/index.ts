import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AdminView from '@/views/AdminVue.vue'

const routes = [
  { path: '/:name?', name:'home', component: HomeView },
  { path: '/admin', name:'admin', component: AdminView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})