import firebase from 'firebase'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig.dev)

export default firebaseApp.firestore()