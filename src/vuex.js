import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            unloggedMessage: 'O YouTube Lite precisa se conectar com a conta do Google para exibir videos da aba "Inscrições"'
        }
        // loggedState: false,
        // searchState: false,
        // inputTextSearch: '',
        // loginResult: {}
    }
})

export default store
// const app = createApp({})
// app.use(store)
// app.mount('#app')