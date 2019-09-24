import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    let unsubscribe = firestore
      .collection("restaurants")
      .onSnapshot(snapshot => {
        const restaurants = snapshot.docs.map(item => {
          return { id: item.id, ...item.data() };
        });
        setRestaurants(restaurants);
      });
    return () => {
      unsubscribe();
    };
  }, []);
  const addStar = (id, oldStars) => {
    // const singleRef = firestore.doc(`restaurants/${id}`);
    // singleRef
    //   .update({ stars: oldStars + 1 })
    //   .catch(error => console.log(error));
    firestore
      .collection("restaurants")
      .doc(id)
      .update({ stars: oldStars + 1 });
  };
  const removeRestaurant = async id => {
    await firestore
      .doc(`restaurants/${id}`)
      .delete()
      .catch(error => console.log(error));
  };
  return (
    <div>
      {restaurants.map(item => {
        const { id, image, title, content, stars } = item;
        return (
          <div key={id} className="temp-restaurant">
            <img src={image} alt="restaurant" width="200"></img>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>stars:{stars}</p>
            <div>
              <button type="button" onClick={() => removeRestaurant(id)}>
                delete restaurant
              </button>
              <button type="button" onClick={() => addStar(id, stars)}>
                add star
              </button>
            </div>
            <Link to={`/restaurants/${id}`}>more info</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
