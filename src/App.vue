<template>
  <Header/>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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
</style>
