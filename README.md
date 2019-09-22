## Connect to Firebase

```js
import firebase from "firebase/app";
import { config } from "./config";

firebase.initializeApp(config);
export default firebase;
code;
```

## Use Firestore

```js
firebase / index.js;
import "firebase/firestore";
export const firestore = firebase.firestore();

// get collection (all restaurants)
firestore.collection("restaurants").get();
// returns a promise
// snapshot
// docs property - collection array
// data() method - returns all properties of document
```
