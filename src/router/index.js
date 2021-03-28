import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import( '../views/general/Home.vue')
  },
  {
    path: '/loading',
    component: () => import('../views/general/Loading.vue')
  },
  {
    path: '/evenement',
    component: () => import('../views/createur/Evenement.vue')
  },
  {
    path: '/profil',
    component: () => import('../views/general/Profil.vue')
  },
  {
    path: '/invitation',
    component: () => import('../views/createur/Invitation.vue')
  },
  {
    path: '/evenementPublic',
    component: () => import('../views/createur/EvenementPublic.vue')
  },
  {
    path: '/participant',
    component: () => import('../views/createur/Participant.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
