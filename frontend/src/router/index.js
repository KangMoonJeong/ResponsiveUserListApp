import { createRouter, createWebHistory } from 'vue-router'

import UserView from '../views/UserView.vue'
import ErrorView from '../views/ErrorView.vue'

const routes = [
  {
    path: '/',
    name: 'UserView',
    component: UserView 
  },
  {
    path: '/errorpage',
    name: 'ErrorView',
    component: ErrorView 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
