<template>
  <Header
    v-on:loginResult="setLoginResult"
    v-on:searchVideos="setSearchVideos"
  />
  <div class="content">
    <router-view />
    <div class="searchVideos" v-if="inputTextSearch != ''">
      <SearchVideos :title="inputTextSearch" />
    </div>
    <!-- <div class="logged" v-else-if="loggedState">
      <SubsVideos/>
    </div> -->
    <div class=unlogged v-else>
      <h3>{{ unloggedMessage }}</h3>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapState } from "vuex";
//import SubsVideos from "./components/SubsVideos.vue";
//import SearchVideos from "./components/SearchVideos.vue"

export default {
  name: "App",
  computed: {
    ...mapState({
      loggedState: state => state.loggedState,
      searchState: state => state.searchState,
      inputTextSearch: state => state.inputTextSearch,
      unloggedMessage: state => state.unloggedMessage,
      loginResult: state => state.loginResult
    }),
  },
  components: {
    Header,
    //SubsVideos,
    //SearchVideos
  },
  methods: {
    setLoginResult(response) {
      this.loggedState = response.loggedState;
      this.loginResult = response.loginResult;
      console.log(response);
    },
    setSearchVideos(response) {
      this.searchState = true;
      this.inputTextSearch = response.inputTextSearch;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(24, 24, 24);
}

a {
  text-decoration: none;
  color: unset;
}

h1 {
  color: white;
  font-size: 50px;
}

.content {
  justify-content: center;
}

.content > div {
  width: 70%;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.unlogged {
  text-align: center;
}

.unlogged h3 {
  user-select: none;
  position: relative;
  top: 35vh;
  font-family: Arial;
  line-height: 150%;
  color: rgb(133, 133, 133);
  min-width: 40%;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
