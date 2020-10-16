import firebase from "firebase";

const firebaseConfig = {
   apiKey: <your api key>,
  authDomain: <your auth domain>,
  databaseURL: <your database URL>,
  projectId: <your project id>,
  storageBucket: <your storage bucket>,
  messagingSenderId: <your messaging sender id>,
  appId: <your app id>,
  measurementId: <your measurement id>,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
