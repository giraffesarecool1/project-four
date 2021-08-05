import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCzjm-_9apCBNdQgdNxVy3q-ZaxSmDiweM",
  authDomain: "podcastplanner.firebaseapp.com",
  databaseURL: "https://podcastplanner-default-rtdb.firebaseio.com",
  projectId: "podcastplanner",
  storageBucket: "podcastplanner.appspot.com",
  messagingSenderId: "344672290504",
  appId: "1:344672290504:web:1eaab1691c4ce07b0fc7fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;