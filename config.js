import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBpIAxwu39UsLM5ZJ2hsJFLQI0BC9CzzjA",
    authDomain: "assignmentry-a-study-app.firebaseapp.com",
    projectId: "assignmentry-a-study-app",
    storageBucket: "assignmentry-a-study-app.appspot.com",
    messagingSenderId: "1040933022957",
    appId: "1:1040933022957:web:c7420d1498cf604fd470e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();