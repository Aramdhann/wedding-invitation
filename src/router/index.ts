import { createWebHistory, createRouter } from 'vue-router'

import CommingsoonView from '@/views/CommingsoonView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  { path: '/', name:'home', component: CommingsoonView },
  { path: '/about', name:'about', component: AboutView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})