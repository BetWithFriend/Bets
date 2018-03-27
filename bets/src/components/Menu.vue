<template>
    <div class="menu-items">
      <router-link class="menu-link" to="/">HOME</router-link>
      <router-link class="menu-link" to="/table">TABLE</router-link>
      <router-link class="menu-link" to="/standings">STANDINGS</router-link>
      <router-link class="menu-link" to="/predictions">PREDICTIONS</router-link>
    </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
.menu-items {
    background: grey;
    width: 100vw;
    line-height: 7vh;
    /* display: flex;
    flex-direction: row;
    justify-content: space-around; */
}
.menu-link {
    text-decoration: none;
    color:rgb(233, 222, 205);
    margin: 0 5% 0 5%;
}
</style>