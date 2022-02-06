<template lang="pt-BR">
    <header>
      <div class="container">
        <div class="youtube">
          <a href="#">
            <img src="../assets/mini_youtube_hd.png">
            <h1>YouTube</h1>
          </a>
        </div>
        <div class="searchBar">
          <input v-model="inputTextSearch" type="text" placeholder="Search">
          <a href="#" v-on:click="searchVideos()"><img src="../assets/search_32.png"></a>
        </div>
        <LoginGoogle v-on:loginResult="setLoginResult"/>
      </div>
    </header>
</template>

<script>
import LoginGoogle from "./LoginGoogle.vue";
import axios from "axios";
import firebaseConfig from "../scripts/firebaseConfig.js";

export default {
  name: "Header",
  data() {
    return {
      inputTextSearch: "Manual do mundo"
    };
  },
  components: {
    LoginGoogle,
  },
  methods: {
    setLoginResult(response) {
      this.$emit("loginResult", {
        loggedState: response.loggedState,
        loginResult: response.loginResult,
      });
    },

    async searchVideos() {
      const part = "snippet";
      const API_KEY = firebaseConfig.apiKey;
      const maxResults = 25;
      const url = `https://www.googleapis.com/youtube/v3/search?part=${part}&key=${API_KEY}&maxResults=${maxResults}&q=${this.inputTextSearch}`;
      if (this.inputTextSearch) {
        axios({
          method: "get",
          url: url,
        }).then((result) => {
          this.$emit("resultSearchBar", {
            resultSearchBar: result.data.items
          })
          console.log(this.videos);
        });
      }
    },
  },
};
</script> 

<style scoped>
header {
  background-color: rgb(32, 32, 32);
  color: white;
  padding: 12px 0;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 60%;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
}

header .youtube {
  text-align: center;
}

header .youtube a {
  display: flex;
  justify-content: center;
  align-items: center;
}

header .youtube h1 {
  color: white;
  font-weight: 600;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  transform: scale(1, 1.8);
}

header .youtube img {
  max-width: 60px;
}

header .searchBar {
  display: flex;
  width: 50%;
}

header .searchBar input {
  width: 75%;
  background-color: rgb(24, 24, 24);
  border: none;
  color: white;
  border-radius: 5px 0 0 5px;
  padding: 0 15px;
}

header .searchBar a {
  width: 15%;
  background-color: rgb(49, 49, 49);
  border-radius: 0 5px 5px 0;
  text-align: center;
}

header .searchBar img {
  position: relative;
  top: 7%;
  transform: scale(50%);
}
</style>