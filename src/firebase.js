import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDHkWXD1qBc3_logRnPfBES9a40294WtKw",
    authDomain: "crud-6629a.firebaseapp.com",
    projectId: "crud-6629a",
    storageBucket: "crud-6629a.appspot.com",
    messagingSenderId: "1076296210792",
    appId: "1:1076296210792:web:f15d67def5d68433ad1edd"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)