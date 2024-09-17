import React, { useState, lazy } from 'react'

//import Card from "./Card";

import { restaurant } from "../utils/restaurant";

const Card = lazy(() => import("./Card.js"));

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState(restaurant);

  const [inputSearch, setInputSearch] = useState("");

  const searchRestaurants = () => {
    const filteredRestaurants = restaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(inputSearch.toLowerCase());
    });

    // console.log(filteredRestaurants);

    setRestaurants(filteredRestaurants);
  }

  // console.log(restaurants, restaurants.length);

  // useEffect(() => {
  //   const getSwiggyData = async () => {
  //     try {
  //       // const response = await fetch(
  //       //   "https://proxy.cors.sh/https://www.swiggy.com/mapi/homepage/getCards?lat=26.95250&lng=75.71050");

  //       // const response = await fetch("https://cors-proxy.htmldriven.com/?url=https://www.swiggy.com/mapi/homepage/getCards?lat=26.95250&lng=75.71050");
  //       // const data = await response.json();
  //       // console.log(data.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);

  //       setRestaurants(data?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  //     } catch (error) {
  //       console.log("Error", error);
  //     }
  //   }

  //   getSwiggyData();
  //   console.log("App Component Mounted");
  // }, []);

  return (
    <>
      <div className="search_container">
        <input type="text" placeholder="Search for restaurants" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
        <button onClick={searchRestaurants}>Search</button>
      </div>
      <div className="card__container">
        {restaurants.length != 0 ? (restaurants.map((res, index) => (
          <Card key={index} restaurant={res.info} />
        ))) : <div className="card__not_found">No restaurant found!</div>}
      </div>
    </>
  )
}

export default Restaurant;

