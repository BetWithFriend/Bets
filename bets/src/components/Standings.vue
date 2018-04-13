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
                    <tr>
                        <td>1</td>
                        <td>Yanay Hollander</td>
                        <td class="row">
                            <div class="col s3">132</div>
                            <div class="col s9">
                                <span class="standings-up">+2</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Shai Shiloni</td>
                        <td class="row">
                            <div class="col s3">80</div>
                            <div class="col s9">
                                <span class="standings-down">-4</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Ido Geled</td>
                        <td class="row">
                            <div class="col s3">-10</div>
                            <div class="col s9">
                                <span class="standings-down">-2</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "standings",
  data() {
    return {};
  }
};
</script>