import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    firestore
      .collection("restaurants")
      .get()
      .then(data => {
        const restaurants = data.docs.map(item => {
          return { id: item.id, ...item.data() };
        });
        setRestaurants(restaurants);
      })
      .catch(error => console.log(error));
  }, []);
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
              <button type="button">delete restaurant</button>
              <button type="button">add start</button>
            </div>
            <Link to={`/restaurants/${id}`}>more info</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
