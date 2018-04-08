<template>
    <div class="vertical-center">
        <div class="container">
            <div class="row flex">
                <div class="col s4 push-s8">
                    <div class="login card-panel grey lighten-4 black-text center">
                        <h4>Login</h4>
                        <form action="index.html">
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>
                                <input type="email" id="loginEmail" v-model="loginEmail">
                                <label for="loginEmail">Email Address</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="loginPassword" v-model="loginPassword">
                                <label for="loginPassword">Password</label>
                            </div>
                            <button v-on:click="login" class="btn btn-large btn-extended grey lighten-4 black-text">Login</button>
                        </form>
                    </div>

                    <div class="login card-panel grey lighten-4 black-text center">
                        <h4>Register</h4>
                        <form action="index.html">
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="text" id="registerUsername" v-model="registerUsername">
                                <label for="registerUsername">Username</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>
                                <input type="email" id="registerEmail" v-model="registerEmail">
                                <label for="registerEmail">Email Address</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="registerPassword" v-model="registerPassword">
                                <label for="registerPassword">Password</label>
                            </div>
                            <button v-on:click="register" class="btn btn-large btn-extended grey lighten-4 black-text">Register</button>
                        </form>
                    </div>
                </div>
                <div class="col s8 pull-s4 login card-panel grey lighten-4 black-text center">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import db from "./firebase/firebaseInit";
import dbTables from "./firebase/firebaseTables";

export default {
  name: "home",
  data: function() {
    return {
      loginEmail: "",
      loginPassword: "",
      registerUsername: "",
      registerEmail: "",
      registerPassword: ""
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .then(
          user => {
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
    register: function(e) {
      db
        .collection(dbTables.USERS)
        .where("name", "==", this.registerUsername)
        .get()
        .then(doc => {
          if (doc.size > 0) {
            alert("The username " + this.registerUsername + " is occupied, please chose another name");
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(
                this.registerEmail,
                this.registerPassword
              )
              .then(
                user => {
                  db
                    .collection("users")
                    .doc(user.uid)
                    .set({
                      email: user.email,
                      uid: user.uid,
                      name: this.registerUsername,
                      leagues: ['99lgJTKgwWiGdE1YuJ7w']
                    })
                    .then(docRef => {
                      console.log("user added: ", user.uid);
                      this.$router.go({ path: this.$router.path });
                    })
                    .catch(error => {
                      console.error("Error adding user: ", error);
                    });
                },
                err => {
                  alert(err.message);
                }
              );
          }
        })
        .catch(error => {
          console.log("Error getting document:", error);
        });

      e.preventDefault();
    }
  }
};
</script>