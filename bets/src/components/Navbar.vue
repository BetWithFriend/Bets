<template>
  <nav v-if="isLoggedIn">
    <div class="nav-wrapper main-navbar">
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
          <li v-if="isAdmin">
            <router-link to="/leagues">
              <span class="nav-items">TABLES</span>
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
    <ul id="dropdown" class="dropdown-content collection">
      <li class="collection-item ">ONE</li>
      <li class="collection-item ">ONE</li>
      <li class="collection-item ">ONE</li>
      <li class="collection-item " v-on:click="logout">Logout</li>
    </ul>
  </nav>
</template>

<script>
import firebase from "firebase";
import db from "./firebase/firebaseInit";
import dbTables from "./firebase/firebaseTables";
import dbConsts from "./firebase/firebaseConsts";

export default {
  name: "navbar",

  data() {
    return {
      isLoggedIn: false,
      currentUser: "",
      isAdmin: false,
      currentUserId: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.currentUserId = firebase.auth().currentUser.uid;
      this.isLoggedIn = true;
      db
        .collection(dbTables.USERS)
        .where("uid", "==", this.currentUserId)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.currentUser = doc.data().name;
            $(".dropdown-button").dropdown();

            db
              .collection(dbTables.LEAGUES)
              .doc(dbConsts.ShutterflyLeague)
              .get()
              .then(doc => {
                if (doc.exists) {
                  doc.data().admins.forEach(admin => {
                    if (admin == this.currentUserId) {
                      this.isAdmin = true;
                    }
                  });
                }
              });
          });
        });
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
  padding: 0 40px;
}

.main-navbar {
  background-color: #f4f9ff;
}
nav ul a .nav-items {
  color: #25262b;
}
</style>