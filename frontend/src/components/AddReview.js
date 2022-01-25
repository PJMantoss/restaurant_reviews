import React, { useState } from "react";
import RestaurantDataService from "../services/restaurant";

const AddReview = props => {
  let initialReviewState = ""

  let editing = false;

  if (props.location.state && props.location.state.currentReview) {
    editing = true;
    initialReviewState = props.location.state.currentReview.text
  }

  return (
    <div className="App">
      Hello Universe!
    </div>
  );
}

export default AddReview;
