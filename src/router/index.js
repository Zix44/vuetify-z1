import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    id: 1,
    path: '/',
    name: 'Home',
    title: 'Dashboard',
    icon: 'mdi-vuetify',
    component: Home
  },
  {
    id: 2,
    path: '/test-page',
    name: 'Test-page',
    title: 'Test Page',
    icon: 'mdi-view-dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/test-page.vue')
  },
  {
    id: 3,
    path: '/settings',
    name: 'Settings',
    title: 'Settings',
    icon: 'mdi-cogs',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    id: 4,
    path: '/v-template',
    name: 'vuetify-template-default',
    title: 'Vuetify-Template',
    icon: 'mdi-file-document',
    component: () => import('../views/vuetify-template-default.vue')    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
