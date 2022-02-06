<template>
    <div class="video">
        <img :src="this.video.snippet.thumbnails.medium.url">
    </div>
</template>

<script>

export default {
  name: "SubsVideos",
  props: {
    video: {
        type: Object
    }
  }
};
</script>

<style>
    /* .video {
        
    } */
</style>
