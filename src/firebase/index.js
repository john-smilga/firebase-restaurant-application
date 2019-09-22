import firebase from "firebase/app";
import { config } from "./config";
import "firebase/firestore";

firebase.initializeApp(config);

// setup firestore
export const firestore = firebase.firestore();

export default firebase;
