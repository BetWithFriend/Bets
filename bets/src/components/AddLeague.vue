<template>
  <div id="add-league">
    <h3>Add League</h3>
    <div class="row">
      <form @submit.prevent="saveLeague" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            <label>League Name</label>
          </div>
          <div class="input-field col s12 chips-initial">
            <input type="email"  v-model="emails">
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/leagues" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebase/firebaseInit";
import dbTables from "./firebase/firebaseTables";
import helper from "../Helper/helper";

export default {
  name: "add-league",
  data() {
    return {
      name: null,
      adminId: helper.getUserId('user'),
      adminMail: helper.getEmail('user'),
      adminName: helper.getName('user'),
      emails: [],
      playerList: []
    };
  },
  mounted() {
    $('.chips-initial').material_chip({
      data: [{
        tag: this.adminMail,
      }],
  });
    $('.chips-placeholder').material_chip({
      placeholder: '+Friend\'s Email',
      secondaryPlaceholder: '+Friend\'s Email',
  });
  },
  methods: {
    saveLeague() {
      const tempName = this.name;
      const emails = this.getPlayersEmail(this.adminName);
      // let playersList = this.createPlayersList(this.emails);
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
              // console.log(this.playerList)
              .add({
                name: tempName,
                admins: {
                  id: this.adminId,
                  email: this.adminMail
                },
                players: emails
              })
              .then(league => {
                console.log("League added: ", league.id);
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
    },
    getPlayersEmail(adminName) {
      var emailList = {}
      $('.chips-initial').material_chip('data').forEach(function (pUser, idx) {
        emailList[idx] = {};
        emailList[idx]['email'] = pUser.tag;
        if(idx == 0) {
          emailList[idx]['name'] = adminName
        } else {
          emailList[idx]['name'] = "";
        }
          
      });
      return emailList;
    }
  }
};
</script>