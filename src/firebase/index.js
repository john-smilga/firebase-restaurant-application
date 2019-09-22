import firebase from "firebase/app";
import config from "./firebaseConfig";
import "firebase/firestore";

firebase.initializeApp(config);

// setup firestore
export const firestore = firebase.firestore();

export default firebase;
