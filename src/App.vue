<template>
  <Header v-on:loginResult="setLoginResult" />
  <div class="content">
    <div class="logged" v-if="loggedState">
      <SubsVideos/>
    </div>
    <div class=unlogged v-else>
      <h3>{{ unloggedMessage }}</h3>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SubsVideos from "./components/SubsVideos.vue";

export default { 
  name: "App",
  data() {
    return {
      loggedState: false,
      unloggedMessage: 'O YouTube Lite precisa se conectar com a conta do Google para exibir videos da aba "Inscrições"',
      loginResult: {}
    };
  },
  components: {
    Header,
    SubsVideos
  },
  methods: {
    setLoginResult(response) {
      this.loggedState = response.loggedState;
      this.loginResult = response.loginResult;
      console.log(response)
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
