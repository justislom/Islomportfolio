import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainLayout,
    children: [
      {
        path: '',
        component: () => import('../views/HomeView')
      },
      {
        path: 'courses',
        component: () => import('../views/Pricingview')
      }
    ]
  },
  {
    name: 'dark',
    path: '/course',
    component: () => import('../layouts/DarkMode'),
    children: [
      {
        path: 'start',
        component: () => import('../views/Start')
      },
      {
        path: 'pro',
        component: () => import('../views/Pro')
      },
      {
        path: 'premium',
        component: () => import('../views/Premium.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
