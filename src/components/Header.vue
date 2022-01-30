<template lang="pt-BR">
    <header>
      <div class="youtube">
        <a href="#">
          <img src="../assets/youtube_47.png">
          <h3>Lite</h3>
        </a>
      </div>
      <div class="searchBar">
        <input type="text" placeholder="Search">
        <a href="#"><img src="../assets/search_32.png"></a>
      </div>
      <div class="accountGoogle">
        <a href="#">
          <p>accountGoogle</p>
        </a>
      </div>
    </header>
</template>
<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
  background-color: rgb(32, 32, 32);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 7px 0;
}

header .youtube a {
  display: flex;
  align-items: flex-end;
}

header .searchBar {
  display: flex;
}

header .searchBar input {
  width: 75%;
  background-color: rgb(24, 24, 24);
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 0 15px;
}

header .searchBar a {
  width: 25%;
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