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

// get document reference
const singleRef = firestore.doc(`restaurants/${id}`);

// get single document/returns a promise - grab all properties using data method.
singleRef.get().then(snapshot => {....snapshot.data()})

// two ways of getting document refernce
firestore.doc(`restaurants/${id}`);
firestore.collection("restaurants").doc(id)

//update document
 firestore.collection("restaurants").doc(id).update({ stars: stars + 1 });

//delete/remove document
await firestore
      .doc(`restaurants/${id}`)
      .delete()
      .catch(error => console.log(error));
// subscribe to changes and cleanup
useEffect(() => {
    let unsubscribe = firestore
      .collection("restaurants")
      .onSnapshot(snapshot => {
        const restaurants = snapshot.docs.map(item => {
          return { id: item.id, ...item.data() };
        });
        setRestaurants(restaurants);
      });
    // console.log(unsubscribe);
    return () => {
      unsubscribe();
    };
  }, []);
// add new item/restaurant
await firestore
      .collection("restaurants")
      .add(restaurant)
      .catch(error => console.log(error));

```

## Authentication

```js
import "firebase/auth";
// setup authentication
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const googleSignIn = auth.signInWithPopup(provider);
export const singOut = () => auth.signOut();
```
