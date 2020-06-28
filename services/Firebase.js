import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuZeUzkISwMVmAGe9YaTHx6vcDw9-4hjs",
  authDomain: "recipe-book-fb0fd.firebaseapp.com",
  databaseURL: "https://recipe-book-fb0fd.firebaseio.com",
  projectId: "recipe-book-fb0fd",
  storageBucket: "recipe-book-fb0fd.appspot.com",
  messagingSenderId: "821497928149",
  appId: "1:821497928149:web:dd59ae267cdb314f06855c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
