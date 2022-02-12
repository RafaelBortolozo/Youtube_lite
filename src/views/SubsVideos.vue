<template>
  <button v-on:click="updateList()">{{buttonText}}</button>
</template>

<script>
//const axios = require('axios')

export default {
    name: "SubsVideos",
    data() {
        return {
            buttonText: "Atualizar lista"
        }
    },
    methods: {
        updateList() {
            // let channels = 
            // axios.get()
        }
    }
}
</script>

<style>
    button {
        border: none;
        padding: 7px;
        border-radius: 50px;
        cursor: pointer;
    }
</style>