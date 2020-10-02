import * as firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD5IDH3A0j5yQUCXBTDq9797cQyb_fiaEE",
    authDomain: "ninja-smoothies-c4327.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-c4327.firebaseio.com",
    projectId: "ninja-smoothies-c4327",
    storageBucket: "ninja-smoothies-c4327.appspot.com",
    messagingSenderId: "759963459844",
    appId: "1:759963459844:web:59f9bc510e0b09d51e7051",
    measurementId: "G-EQ1QWN5PY5"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebaseApp.firestore().settings({
    timestampsInSnapshots: true
})

// export firestore database
export default firebaseApp;
export default firebaseApp.firestore()