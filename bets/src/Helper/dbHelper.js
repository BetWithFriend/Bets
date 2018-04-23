import db from "../components/firebase/firebaseInit";
import dbTables from "../components/firebase/firebaseTables";
import dbConsts from "../components/firebase/firebaseConsts";


export default {

  getUserPredictionInLeague(userId, leagueId, tournamentId, next) {

    db
      .collection(dbTables.PREDICTIONS)
      .where("userId", "==", userId)
      .where("leagueId", "==", leagueId)
      .where("tournamentId", "==", tournamentId)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(prediction => {
          next(prediction.data().predictions)
        });
      })
      .catch(error => {
        console.log(error);
      });
  },

  getLeagueTable(leagueId, tournamentId, next) {

    db
    .collection(dbTables.LEAGUES)
    .where("uid", "==", leagueId)
    .where("tournamentId", "==", tournamentId)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(league => {
        next(league.data())
      })
    })
    .catch(error => {
      console.log(error);
    });
  },
}
