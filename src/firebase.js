import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDZMf55XBiVV1mlSMzGnt3984rOojcUic8",
  authDomain: "whatsapp-clone-68c52.firebaseapp.com",
  projectId: "whatsapp-clone-68c52",
  storageBucket: "whatsapp-clone-68c52.appspot.com",
  messagingSenderId: "735619341679",
  appId: "1:735619341679:web:70e7ce2f03aff82c609c9a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  createTimestamp,
  serverTimestamp,
};
