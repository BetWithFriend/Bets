<template>
  <div id="app">
    <Menu></Menu>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  background-image: url("./assets/main.jpg");
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background: rgba(255, 255, 255, 0.116); */
}
</style>
