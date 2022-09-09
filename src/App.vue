<template>
  <router-view />
  <!-- <Home /> -->
</template>

<script>
  // import Home from "./views/HomeView.vue";
  
  // export default {
  //   components: {
  //     Home
  //   }
  // }
</script>

<style>
  :root{
    --dark-black: #2A2E31;
    --gray: #91989F;
    --white: #fff;
    --blue-sombra: #1CD6CE;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html{
    overflow-x: hidden;
  }
  body{
    font-size: 64.5%;
font-family: 'Fira Sans Condensed', sans-serif;
    font-family: 'DynaPuff', cursive;
    background-color: #F7F9FA;
  }
  #app{
    width: 100%;
    min-height: 100vh;
  }
</style>
