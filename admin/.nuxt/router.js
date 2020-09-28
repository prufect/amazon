import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c4601bc = () => interopDefault(import('../pages/category.vue' /* webpackChunkName: "pages/category" */))
const _97757e82 = () => interopDefault(import('../pages/owner.vue' /* webpackChunkName: "pages/owner" */))
const _a68fa00a = () => interopDefault(import('../pages/product.vue' /* webpackChunkName: "pages/product" */))
const _f9d36144 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category",
    component: _6c4601bc,
    name: "category"
  }, {
    path: "/owner",
    component: _97757e82,
    name: "owner"
  }, {
    path: "/product",
    component: _a68fa00a,
    name: "product"
  }, {
    path: "/",
    component: _f9d36144,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
