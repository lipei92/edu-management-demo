import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// 路由规则
const routes: Array<RouteConfig> = []

const router = new VueRouter({
  routes
})

export default router
