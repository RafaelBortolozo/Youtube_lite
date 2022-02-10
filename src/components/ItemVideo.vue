<template>
    <a class="video" href="#">
        <img class="thumbnail" :src="this.video.snippet.thumbnails.medium.url">
        <h2 class="title">{{this.video.snippet.title}}</h2>
        <p class="channel">{{this.video.snippet.channelTitle}}</p>
    </a>
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
    .video {
        width: 30%;
        border-radius: 7px;
        font-family: Arial;
        margin: 10px;
    }

    .video .thumbnail {
        width: 100%;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }

    .video .title {
        color: white;
        padding: 14px 0;
        font-size: 1rem;
    }

    .video .channel {
        color: rgb(169, 169, 169);
        padding: 14px 0;
    }

    .video:hover{
        transition: .2s;
        transform: scale(110%);
    }
</style>
