import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
const Restaurant = props => {
  const id = props.match.params.id;

  const [restaurant, SetRestaurant] = useState(null);
  useEffect(() => {
    const singleRef = firestore.doc(`restaurants/${id}`);
    // console.log(singleRef);
    singleRef
      .get()
      .then(snapshot => {
        console.log(snapshot);

        const id = snapshot.id;
        SetRestaurant({ id, ...snapshot.data() });
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line
  }, []);
  if (!restaurant) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div>
      <h2>{restaurant.title}</h2>
    </div>
  );
};

export default Restaurant;
