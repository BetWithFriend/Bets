<template>
    <div id="predictions">
        <div class="col s12 login card-panel grey lighten-4 black-text center">
            <h5>Next Games</h5>
            <table class="highlight responsive-table">
                <thead>
                    <tr>
                        <th>Round</th>
                        <th>Competitor 1</th>
                        <th>Prediction</th>
                        <th>Competitor 2</th>
                    </tr>
                </thead>
                <tbody class="predictions-table">
                    <prediction-list-item :prediction="prediction" :key="index" v-for="(prediction, index) in predictions"></prediction-list-item>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import PredictionListItem from "./PredictionListItem.vue";
import dbHelper from "../Helper/dbHelper";
import dbConsts from "./firebase/firebaseConsts";

export default {
  name: "predictions",
  components: {
    "prediction-list-item": PredictionListItem
  },
  data() {
    return {
      predictions: []
    };
  },
  created() {
    var userId = "76MaFUs7EcVnzXNWAFgFPMdmwTv1";
    var leagueId = dbConsts.ShutterflyLeagueId;
    var turnamentId = dbConsts.Worldcup2018TurnamentId;

    dbHelper.getUserPredictionInLeague(
      userId,
      leagueId,
      turnamentId,
      prediction => {
        prediction.forEach(element => {

          const temp = {
            team1name: element.team1name,
            team1score: element.team1score,
            team2name: element.team2name,
            team2score: element.team2score,
            group: element.group,
            matchDay: element.matchDay
          };

          this.predictions.push(temp);

        }, this);
      }
    );
  }
};
</script>