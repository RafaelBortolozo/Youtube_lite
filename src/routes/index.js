import VueRouter from 'vue-router'
import Player from '../components/Player.vue'
import SubsVideos from '../components/SubsVideos.vue'
import SearchVideos from '../components/SearchVideos.vue'

const routes = [
    { path: '/player', component: Player },
    { path: '/subs', component: SubsVideos },
    { path: '/search', component: SearchVideos }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router