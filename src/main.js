import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import { store } from './vuex'

createApp(App, store, router).mount('#app')
