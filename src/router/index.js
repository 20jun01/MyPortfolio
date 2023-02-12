import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillsView from '@/views/SkillsView.vue'
import LikesView from '@/views/LikesView.vue'
import SocialView from '@/views/SocialView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/skill',
    name: 'skill',
    component: SkillsView
  },
  {
    path: '/likes',
    name: 'likes',
    component: LikesView
  },
  {
    path: '/social',
    name: 'social',
    component: SocialView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
