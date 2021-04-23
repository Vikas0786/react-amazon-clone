import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZ9LR_aAv1svOTNbEu2YTMBdI0s2sUMWo",
  authDomain: "challenge-f24bd.firebaseapp.com",
  projectId: "challenge-f24bd",
  storageBucket: "challenge-f24bd.appspot.com",
  messagingSenderId: "557743187273",
  appId: "1:557743187273:web:422e717565d23020fa6698",
  measurementId: "G-QLTEJ6F0V4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
