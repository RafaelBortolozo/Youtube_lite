<template>
    <button v-on:click="searchVideos">Atualizar lista</button>
    <div class="videos">
        <ItemVideo v-for="(video, index) of videos" :video="video" :key="index"/>
    </div>
</template>

<script>
import axios from "axios";
import firebaseConfig from "../scripts/firebaseConfig.js";
import ItemVideo from "../components/ItemVideo.vue";

export default {
  name: "SubsVideos",
  data() {
    return {
      buttonText: "Atualizar lista",
      videos: [],
      breakRequest: false
    };
  },
  components: {
    ItemVideo,
  },
  props: {
    title: {
        type: String,
        required: true
    }
  },
  methods: {
    async searchVideos() {
      this.videos = [];
      const link_api = "https://www.googleapis.com/youtube/v3/search?"
      const part = "snippet";
      const API_KEY = firebaseConfig.apiKey;
      const maxResults = 25;
      const type = 'video';
      const url = `${link_api}part=${part}&key=${API_KEY}&maxResults=${maxResults}&q=${this.title}&type=${type}`;
      if (this.title) {
        axios({
          method: "get",
          url: url,
        }).then((result) => {
          this.videos = result.data.items
          console.log(this.videos)
        });
      }
    }
  },
}
</script>

<style>
    button {
    border: none;
    padding: 7px;
    border-radius: 50px;
    cursor: pointer;
    }

    .videos {
        display: flex;
        flex-wrap: wrap;
    }
</style>