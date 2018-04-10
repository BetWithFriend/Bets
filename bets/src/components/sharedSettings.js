import Vue from 'vue'
import firebase from 'firebase';
import db from "./firebase/firebaseInit";
import dbTables from "./firebase/firebaseTables";

var isUserLoaded = false;

function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        db
        .collection(dbTables.USERS)
        .where('uid', '==', userId).get()
        .then( (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(JSON.stringify(doc.data()))
                sharedSettings.currentUser = doc.data()
                resolve()
            })
        })
        .catch(error => {
            console.log("Error getting document:", error);
            reject()
        });
    })
}

const sharedSettings = {
    currentUser: null,
    message: "my global message"
}
    
sharedSettings.install = function(){
    Object.defineProperty(Vue.prototype, '$sharedSettings', {
      get () { return sharedSettings }
    })
  }

  export { sharedSettings, fetchUser };
  