import * as firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyCinbvzwIvMRaxgo6Lt6mnbSKODfaSIVy0",
    authDomain: "couplegoals-ad440.firebaseapp.com",
    databaseURL: "https://couplegoals-ad440.firebaseio.com",
    projectId: "couplegoals-ad440",
    storageBucket: "couplegoals-ad440.appspot.com",
    messagingSenderId: "625055197411",
    appId: "1:625055197411:web:bdc4a4cb97d1763bd97dd6",
    measurementId: "G-X38K0K9GNK"
  };
  // Initialize Firebase
  export const FirebaseSetUp = firebase.initializeApp(firebaseConfig);
