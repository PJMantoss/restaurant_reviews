import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";

const RestaurantsList = props => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchName, setSearchName ] = useState("");
    const [searchZip, setSearchZip ] = useState("");
    const [searchCuisine, setSearchCuisine ] = useState("");
    const [cuisines, setCuisines] = useState(["All Cuisines"]);

  return (
    <div className="App">
      Hello Universe!
    </div>
  );
}

export default RestaurantsList;
