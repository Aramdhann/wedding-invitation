import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  { path: '/:name?', name:'home', component: HomeView },
  { path: '/about', name:'about', component: AboutView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})