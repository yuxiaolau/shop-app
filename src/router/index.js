import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { isLogined } from '../utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hot',
    name: 'Hot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Hot" */ '../views/Hot.vue')
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      needLogin: true
    },
    component: () => import('../views/User')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      needLogin: true
    },
    component: () => import('../views/Cart')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      isHideFooter: true
    },
    component: () => import('../views/Login')
  },
  {
    path: '/reg',
    name: 'Reg',
    meta: {
      isHideFooter: true
    },
    component: () => import('../views/Reg')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogined()) {
      next()
    } else {
      next({
        name: 'Login'
      })
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {})

export default router
