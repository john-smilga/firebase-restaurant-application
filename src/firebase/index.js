import firebase from "firebase/app";
import config from "./config";
import "firebase/firestore";
import "firebase/auth";
firebase.initializeApp(config);

// setup firestore
export const firestore = firebase.firestore();
// setup authentication
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const googleSignIn = () => auth.signInWithPopup(provider);
export const singOut = () => auth.signOut();
export default firebase;
