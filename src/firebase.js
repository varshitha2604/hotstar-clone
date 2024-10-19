import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyC1gJjIRCB_9_AJXNeSJlTb3kGrCx7bonY",
  authDomain: "hotstar-clone-57d07.firebaseapp.com",
  projectId: "hotstar-clone-57d07",
  storageBucket: "hotstar-clone-57d07.appspot.com",
  messagingSenderId: "171628365262",
  appId: "1:171628365262:web:6c9006c7abe9c890d8579f",
  measurementId: "G-S72PP93R5W"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;