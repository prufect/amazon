import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c4601bc = () => interopDefault(import('../pages/category.vue' /* webpackChunkName: "pages/category" */))
const _97757e82 = () => interopDefault(import('../pages/owner.vue' /* webpackChunkName: "pages/owner" */))
const _917d1dea = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _0dfe3a33 = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
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
    path: "/products",
    component: _917d1dea,
    name: "products"
  }, {
    path: "/products/:id",
    component: _0dfe3a33,
    name: "products-id"
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
