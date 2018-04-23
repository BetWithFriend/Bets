<template>
  <div id="standings">
    <div class="col s12 login card-panel grey lighten-4 black-text center">
      <h5>Standings</h5>
      <table class="container standings-table striped responsive-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(player, index) in sortedPlayers">
            <td>{{ index + 1 }}</td>
            <td>{{player.name}}</td>
            <td class="row">
              <div class="col s3">{{player.points}}</div>
              <div class="col s9">
                <span v-bind:class="{ 'standings-up': (player.pastPoints > 0), 'standings-down': (player.pastPoints < 0) }">
                  <span v-show="player.pastPoints > 0">+</span>{{player.pastPoints}}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import dbConsts from "./firebase/firebaseConsts";
import dbHelper from "../Helper/dbHelper";

export default {
  name: "standings",
  data() {
    return {
      players: [],
      loading: true
    };
  },
  beforeCreate() {},
  created() {
    var leagueId = dbConsts.ShutterflyLeagueId;
    var turnamentId = dbConsts.Worldcup2018TurnamentId;

    dbHelper.getLeagueTable(leagueId, turnamentId, league => {
      this.loading = false;

      league.players.forEach(function(player) {
        const temp = {
          uid: player.uid,
          name: player.name,
          points: player.points,
          pastPoints: (player.pastPoints - player.points) * -1
        };

        this.players.push(temp);
      }, this);
    });
  },
  computed: {
    sortedPlayers: function() {
      function compare(a, b) {
        if (a.points > b.points) return -1;
        if (a.points < b.points) return 1;
        return 0;
      }

      return this.players.sort(compare);
    }
  }
};
</script>