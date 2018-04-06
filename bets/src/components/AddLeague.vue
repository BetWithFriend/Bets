<template>
  <div id="add-league">
    <h3>Add League</h3>
    <div class="row">
      <form @submit.prevent="saveLeague" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            <label>Name</label>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebase/firebaseInit";
import dbTables from "./firebase/firebaseTables";

export default {
  name: "add-league",
  data() {
    return {
      name: null
    };
  },
  methods: {
    saveLeague() {
      const tempName = this.name;
      db
        .collection(dbTables.LEAGUES)
        .where("name", "==", tempName)
        .get()
        .then(doc => {
          if (doc.size > 0) {
            alert(`${tempName} is occupied, please chose another name`);
          } else {
            db
              .collection("leagues")
              .add({
                name: tempName
              })
              .then(docRef => {
                console.log("League added: ", docRef.id);
                this.$router.push({ name: "Leagues", params: { userId: 123 } });
              })
              .catch(error => {
                console.error("Error adding league: ", error);
              });
          }
        })
        .catch(error => {
          console.log("Error getting document:", error);
        });
    }
  }
};
</script>