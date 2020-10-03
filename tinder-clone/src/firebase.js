import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTxb8bEPZAR4dK-5kbWrJGaviZdqk-nZ4",
  authDomain: "tinder-clone-4dc57.firebaseapp.com",
  databaseURL: "https://tinder-clone-4dc57.firebaseio.com",
  projectId: "tinder-clone-4dc57",
  storageBucket: "tinder-clone-4dc57.appspot.com",
  messagingSenderId: "818730296835",
  appId: "1:818730296835:web:a5d2248a84ea8c913b9036",
  measurementId: "G-TQ4B3PRTK2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
