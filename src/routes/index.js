import { createRouter, createWebHistory } from 'vue-router'
import Player from '../views/Player'
import SubsVideos from '../views/SubsVideos'
import SearchVideos from '../views/SearchVideos'
import Unlogged from '../views/Unlogged'

const routes = [
    { path: '/player', component: Player, name: 'player' },
    { path: '/subs', component: SubsVideos, name: 'subs' },
    { path: '/search', component: SearchVideos, name: 'search' },
    { path: '/', component: Unlogged, name: 'main' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
// const app = Vue.createApp({})
// app.use(router)
// app.mount('#app')