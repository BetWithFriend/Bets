<template>
    <div id="dashboard">
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
                    <tr>
                        <td>Group A <br> June 14, 2018 <br> 14:00</td>
                        <td>team 1</td>
                        <td>bet</td>
                        <td>team 2</td>
                    </tr>
                    <tr>
                        <td>Group A <br> June 14, 2018 <br> 14:00</td>
                        <td>team 1</td>
                        <td>bet</td>
                        <td>team 2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {};
  }
};
</script>