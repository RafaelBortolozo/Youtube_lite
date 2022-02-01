<template>
  <Header v-on:loggedState="setLoggedState"/>
  <h1>Logged: {{loggedState}}</h1>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  data() {
    return {
      loggedState: false
    }
  },
  components: {
    Header
  },
  methods: {
    setLoggedState(response){
      this.loggedState = response.loggedState
    }
  }
}
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
</style>
