import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4kNLNhqiiKrggMKscInFXoZYgBcUBf5Q",
  authDomain: "instagram-clone-react-515d9.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-515d9.firebaseio.com",
  projectId: "instagram-clone-react-515d9",
  storageBucket: "instagram-clone-react-515d9.appspot.com",
  messagingSenderId: "29885268995",
  appId: "1:29885268995:web:9dc406ee6469cd9774ba36",
  measurementId: "G-S6JPZ0SZ96",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
