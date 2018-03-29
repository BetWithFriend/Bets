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
                            <input type="email" id="email" v-model="email">
                            <label for="email">Email Address</label>
                        </div>
                        <div class="input-field">
                            <i class="material-icons prefix">lock</i>
                            <input type="password" id="password" v-model="password">
                            <label for="password">Password</label>
                        </div>
                        <button v-on:click="login" class="btn btn-large btn-extended grey lighten-4 black-text">Login</button>
                    </form>
                    </div>

                <div class="login card-panel grey lighten-4 black-text center">
                    <h4>Register</h4>
                    <form action="index.html">
                        <div class="input-field">
                            <i class="material-icons prefix">email</i>
                            <input type="email" id="email" v-model="email">
                            <label for="email">Email Address</label>
                        </div>
                        <div class="input-field">
                            <i class="material-icons prefix">lock</i>
                            <input type="password" id="password" v-model="password">
                            <label for="password">Password</label>
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
import firebase from 'firebase';
import db from './firebase/firebaseInit'

export default {
  name: 'home',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
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
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
                // console.log(user);
                alert(`Account Created for ${user.email}`);
                this.$router.go({ path: this.$router.path });
            },
            err => {
                alert(err.message);
            }
            );
        e.preventDefault();
    }
  }
};
</script>