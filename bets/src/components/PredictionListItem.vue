<template>
    <tr>
        <td>Group {{prediction.group}} <br> {{prediction.matchDay}}</td>
        <td>{{prediction.team1name}}</td>
        <td class="row">
            <div class="col s3">
                <input type="number" name="quantity" min="0" max="100" :value="prediction.team1score">
            </div>
            <div class="col s3 center">
                -
            </div>
            <div class="col s3">
                <input type="number" name="quantity" min="0" max="100" :value="prediction.team2score">
            </div>
        </td>
        <td>{{prediction.team2name}}</td>
    </tr>
</template>

<script>
export default {
  name: "prediction-list-item",
  props: ["prediction"],
  methods: {
      test() {
          console.log("test was clicked");
      }
  }
};
</script>