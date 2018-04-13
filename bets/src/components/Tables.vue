<template>
    <div id="tables">
        <div class="col s12 login card-panel grey lighten-4 black-text center">
            <h5>Tables</h5>
            <div class="col center">
                <div class="tables-tabs container col s12">
                    <ul class="tabs">
                        <li class="tab col s3">
                            <a href="#groups">Groups</a>
                        </li>
                        <li class="tab col s3">
                            <a href="#round-of-16">Round of 16</a>
                        </li>
                        <li class="tab col s3">
                            <a href="#quarter-final">Quarter final</a>
                        </li>
                        <li class="tab col s3">
                            <a href="#semi-final">Semi Final</a>
                        </li>
                        <li class="tab col s3">
                            <a href="#final">Final</a>
                        </li>
                    </ul>
                </div>
                <div id="groups" class="col s12">
                    <div class="col">
                        <div class="groups-tabs col s12">
                            <ul class="tabs">
                                <li class="tab col s3">
                                    <a href="#group-a">Group A</a>
                                </li>
                                <li class="tab col s3">
                                    <a href="#group-b">Group B</a>
                                </li>
                                <li class="tab col s3">
                                    <a href="#group-c">Group C</a>
                                </li>
                                <li class="tab col s3">
                                    <a href="#group-d">Group D</a>
                                </li>
                                <li class="tab col s3">
                                    <a href="#group-e">Group E</a>
                                </li>
                                <li class="tab col s3">
                                    <a href="#group-f">Group F</a>
                                </li>
                                <li class="tab col s3">
                                    <a href="#group-g">Group G</a>
                                </li>
                                <li class="tab col s3">
                                    <a href="#group-h">Group H</a>
                                </li>
                            </ul>
                        </div>
                        <div id="group-a" class="groups-container col s12">
                            <table class="group-table responsive-table">
                                <thead>
                                    <tr>
                                        <th>Teams</th>
                                        <th>MP</th>
                                        <th>W</th>
                                        <th>D</th>
                                        <th>L</th>
                                        <th>GF</th>
                                        <th>GA</th>
                                        <th>+/-</th>
                                        <th>PTS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="row">
                                            <div class="col s2"><img src="../assets/logo.png"/></div>
                                            <div class="col s10">Uruguay</div>
                                        </td>
                                        <td class="row">0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                     <tr>
                                        <td class="row">
                                            <div class="col s2"><img src="../assets/logo.png"/></div>
                                            <div class="col s10">Russia</div>
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                     <tr>
                                        <td class="row">
                                            <div class="col s2"><img src="../assets/logo.png"/></div>
                                            <div class="col s10">Saudi Arabia</div>
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                     <tr>
                                        <td class="row">
                                            <div class="col s2"><img src="../assets/logo.png"/></div>
                                            <div class="col s10">Egypt</div>
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id="group-b" class="groups-container col s12">group-b</div>
                        <div id="group-c" class="groups-container col s12">group-c</div>
                        <div id="group-d" class="groups-container col s12">group-d</div>
                        <div id="group-e" class="groups-container col s12">group-e</div>
                        <div id="group-f" class="groups-container col s12">group-f</div>
                        <div id="group-g" class="groups-container col s12">group-g</div>
                        <div id="group-h" class="groups-container col s12">group-h</div>
                    </div>
                </div>
                <div id="round-of-16" class="col s12">Round of 16</div>
                <div id="quarter-final" class="col s12">Quarter final</div>
                <div id="semi-final" class="col s12">Semi final</div>
                <div id="final" class="col s12">Final</div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: "tables",
  data() {
    return {};
  },
  created() {
    $(document).ready(function() {
      $(".tabs").tabs();
    });
  }
};
</script>

