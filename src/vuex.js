import { createApp } from 'vue'
import { createStore } from 'vuex'

Vue.use(Vuex)

const store = createStore({
    state() {
        return {
            loggedState: false,
            searchState: false,
            inputTextSearch: '',
            unloggedMessage: 'O YouTube Lite precisa se conectar com a conta do Google para exibir videos da aba "Inscrições"',
            loginResult: {}
        }
    },
    mutations: {
        setLoginResult(state, response) {
            state.loggedState = response.loggedState;
            state.loginResult = response.loginResult;
        },
        setSearchVideos(response) {
            this.searchState = true;
            this.inputTextSearch = response.inputTextSearch;
        },
    }
})

export default { store }