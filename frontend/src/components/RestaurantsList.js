import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";

const RestaurantsList = props => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchName, setSearchName ] = useState("");
    const [searchZip, setSearchZip ] = useState("");
    const [searchCuisine, setSearchCuisine ] = useState("");
    const [cuisines, setCuisines] = useState(["All Cuisines"]);

    useEffect(() => {
        retrieveRestaurants();
        retrieveCuisines();
      }, []);
    
      const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
      };
    
      const onChangeSearchZip = e => {
        const searchZip = e.target.value;
        setSearchZip(searchZip);
      };
    
      const onChangeSearchCuisine = e => {
        const searchCuisine = e.target.value;
        setSearchCuisine(searchCuisine);
        
      };

  return (
    <div className="App">
      Hello Universe!
    </div>
  );
}

export default RestaurantsList;
