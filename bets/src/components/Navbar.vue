<template>
  <nav v-if="isLoggedIn" class="main-navbar">
    <div class="nav-wrapper">
      <div class="container">

        <!-- <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a> -->
        <ul class="left hide-on-med-and-down">
          <router-link to="/" class="brand-logo left">
            <li><img src="../assets/logo.png" /></li>
          </router-link>
          <li v-if="isLoggedIn">
            <span class="email black-text dropdown-button" data-activates="dropdown" data-beloworigin="true">
              {{currentUser}}
              <i class="material-icons right">arrow_drop_down</i>
            </span>
          </li>
          <li>
            <router-link to="/standings">
              <span class="nav-items">STANDINGS</span>
            </router-link>
          </li>
          <li>
            <router-link to="/predictions">
              <span class="nav-items">PREDICTIONS</span>
            </router-link>
          </li>
          <li>
            <router-link to="/results">
              <span class="nav-items">RESULTS</span>
            </router-link>
          </li>
          <li>
            <router-link to="/tables">
              <span class="nav-items">TABLES</span>
            </router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/leagues">
              <span class="nav-items">LEAGUES</span>
            </router-link>
          </li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li v-if="isLoggedIn">
            <router-link to="/">Dashboard</router-link>
          </li>
          <li>
            <a href="#" class="divider"></a>
          </li>
          <li v-if="isLoggedIn"></li>
        </ul>
      </div>
    </div>
    <!-- Dropdown Structure -->
    <ul id="dropdown" class="dropdown-content collection dropdown-menu">
      <li class="collection-item collection-header">My Leagues</li>
      <li class="collection-item" v-for="league in userLeagues">{{league}}</li>
      <li class="divider"></li>
      <router-link v-bind:to="{ name: 'AddLeague'}">
        <li class="collection-item collection-header">Create League</li>
      </router-link>
      <li class="collection-item collection-header" v-on:click="join">Join League</li>
      <li class="divider"></li>
      <li class="collection-item  collection-header" v-on:click="logout">Sign Out</li>
    </ul>
  </nav>
</template>

<script>
import Vue from "vue";
import firebase from "firebase";
import db from "./firebase/firebaseInit";
import dbTables from "./firebase/firebaseTables";
import dbConsts from "./firebase/firebaseConsts";
import helper from "../Helper/helper";

export default {
  name: "navbar",

  data() {
    return {
      isLoggedIn: false,
      currentUser: "",
      isAdmin: false,
      currentUserId: false,
      currentUserEmail: "",
      userLeagues: []
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      let user = JSON.parse(helper.getItem ('user'));
      if(user) {
        this.currentUser = user.name;
        this.isLoggedIn = true;
        this.getUserLeagues(user);
      } else {
        this.currentUserEmail = firebase.auth().currentUser.email;
        this.isLoggedIn = true;
        db
        .collection(dbTables.USERS)
        .where("email", "==", this.currentUserEmail)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.currentUser = doc.data().name;
            helper.setItem('user', doc.data());
            let user = doc.data()
            this.getUserLeagues(user);
  
          });
        });
      }
      
    }
  },
  mounted() {
    $(".dropdown-button").dropdown();
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          helper.removeItem('user');
          this.$router.go({ path: this.$router.path });
        });
    },
    getUserLeagues: function(user) {
      user.leagues.forEach((league) => {
        this.userLeagues.push(league.name)
      })
    },
    join: function () {
      Materialize.toast('Join League')
    }
  }
};
</script>

<style scoped>
.email {
  padding: 0 40px;
}

.main-navbar {
  background-color:#f4f9ff;
  height: 50px;
  line-height: 50px;
}
nav ul a .nav-items {
  color: #25262b;
}
.icon-arrow-down {
  height: 50px;
  line-height: 50px;
}
.dropdown-menu {
  width: 190px !important;
}
.collection-header {
  font-weight: bold;
}
.collection-item {
  border-bottom: none;
}
</style>