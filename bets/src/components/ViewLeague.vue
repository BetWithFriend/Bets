<template>
    <div id="view-league">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>{{name}}</h4>
                <h6 class="small">ID#: {{leagueId}}</h6>
            </li>
            <!-- <li class="collection-item">League ID#: {{leagueId}}</li> -->
        </ul>
        <router-link to="/leagues" class="btn grey">Back</router-link>
        <button @click="deleteLeague" class="btn red">Delete</button>

        <!-- <div class="fixed-action-btn">
            <router-link v-bind:to="{ name: 'edit-league', params: { leagueId: leagueId }}" class="btn-floating btn-large red">
                <i class="fa fa-pencil"></i>
            </router-link>
        </div> -->
    </div>
</template>

<script>
import db from "./firebase/firebaseInit";
import dbTables from "./firebase/firebaseTables";

export default {
  name: "view-league",
  data() {
    return {
      leagueId: null,
      name: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db
      .collection(dbTables.LEAGUES)
      .doc(to.params.leagueId)
      .onSnapshot(doc => {
        next(vm => {
          vm.leagueId = doc.id;
          vm.name = doc.data().name;
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db
        .collection(dbTables.LEAGUES)
        .doc(this.$route.params.leagueId)
        .onSnapshot(doc => {
          this.leagueId = doc.id;
          this.name = doc.data().name;
        });
    },
    deleteLeague() {
      if (confirm("Are you sure?")) {
        db
          .collection(dbTables.LEAGUES)
          .doc(this.$route.params.leagueId)
          .onSnapshot(doc => {
            doc.ref.delete();
            this.$router.push({ name: 'Leagues' });
          });
      }
    }
  }
};
</script>