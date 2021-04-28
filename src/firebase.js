
import firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyAbIpy9UDUh5PjCFlGy9nLXZLLjWcZP-rs",
    authDomain: "birdsighting-82715.firebaseapp.com",
    databaseURL: "https://birdsighting-82715-default-rtdb.firebaseio.com",
    projectId: "birdsighting-82715",
    storageBucket: "birdsighting-82715.appspot.com",
    messagingSenderId: "1042132511210",
    appId: "1:1042132511210:web:b6c0ccbd08090874e76a93"
  };
  // Initialize Firebase
 var fireDb =  firebase.initializeApp(firebaseConfig);

 export default fireDb.database().ref();