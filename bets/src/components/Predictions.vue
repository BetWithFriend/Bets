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
    var a = {
        uid: "uid1",
      team1name: "Uruguay",
      team1score: 2,
      team2name: "Russia",
      team2score: 1,
      group: "A",
      matchDay: "June 14, 2018 14:00"
    };

    var b = {
        uid: "uid2",
      team1name: "Uruguay",
      team1score: 4,
      team2name: "Egypt",
      team2score: 0,
      group: "A",
      matchDay: "June 17, 2018 14:00"
    };

    this.predictions.push(a);
    this.predictions.push(b);
  }
};
</script>