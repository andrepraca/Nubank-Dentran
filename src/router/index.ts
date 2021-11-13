import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/vehicle',
    component: () => import('../views/Vehicle.vue')
  },
  {
    path: '/detran/:vehicleId',
    component: () => import('../views/Detran.vue')
  },
  {
    path: '/detran/result/:status',
    component: () => import('../views/DetranResult.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
