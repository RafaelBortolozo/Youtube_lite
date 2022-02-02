<template>
  <Header v-on:loggedState="setLoggedState" />
  <div class="content">
    <div class="logged" v-if="loggedState">
      <h1>{{ loggedState }}</h1>
    </div>
    <div class=unlogged v-else>
      <h3>{{ unloggedMessage }}</h3>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  data() {
    return {
      loggedState: false,
      unloggedMessage: 'O YouTube Lite precisa se conectar com a conta do Google para exibir videos da aba "Inscrições"',
    };
  },
  components: {
    Header,
  },
  methods: {
    setLoggedState(response) {
      this.loggedState = response.loggedState;
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
