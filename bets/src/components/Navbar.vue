<template>
  <nav v-if="isLoggedIn">
      <div class="nav-wrapper green">
        <div class="container">
          <router-link to="/" class="brand-logo">Worldcup 2018 Shutterfly</router-link>    
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li v-if="isLoggedIn"><span class="email black-text">{{currentUser.name}}</span></li>
            <li v-if="isAdmin"><router-link to="/leagues">Leagues</router-link></li>
            <li v-if="isLoggedIn"><button v-on:click="logout" class="btn black">Logout</button></li>
          </ul>
          <ul class="side-nav" id="mobile-demo">
            <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
            <li><a href="#" class="divider"></a></li>
             <li v-if="isLoggedIn"><button v-on:click="logout" class="btn">Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>
  </template>

<script>
import firebase from 'firebase';
import { sharedSettings , fetchUser } from '@/components/sharedSettings'

export default {
  name: 'navbar',
  
  data() {
    return {
      isLoggedIn: true,
      currentUser: false,
      isAdmin: false,
    };
  },
  created() {
    if (sharedSettings.currentUser) {
      this.isLoggedIn = true;
      this.currentUser =  sharedSettings.currentUser;
      if (this.currentUser.email == "yanayh90@gmail.com") {
        this.isAdmin = true;
      }
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style scoped>
.email {
  padding-right: 10px;
}
</style>