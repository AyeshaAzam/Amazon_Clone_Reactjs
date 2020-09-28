import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBf5lKnt5wEpXPVlHip5JmbYL1f__5vxOE",
  authDomain: "challenge-e2a0d.firebaseapp.com",
  databaseURL: "https://challenge-e2a0d.firebaseio.com",
  projectId: "challenge-e2a0d",
  storageBucket: "challenge-e2a0d.appspot.com",
  messagingSenderId: "1062384306116",
  appId: "1:1062384306116:web:88bba8533c503c15330691",
  measurementId: "G-1FKTE78DCQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
