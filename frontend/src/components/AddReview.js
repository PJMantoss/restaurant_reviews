import React, { useState } from "react";
import RestaurantDataService from "../services/restaurant";

const AddReview = props => {
  let initialReviewState = ""

  let editing = false;

  if (props.location.state && props.location.state.currentReview) {
    editing = true;
    initialReviewState = props.location.state.currentReview.text
  }

  const [review, setReview] = useState(initialReviewState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    setReview(event.target.value);
  };

  const saveReview = () => {
    var data = {
      text: review,
      name: props.user.name,
      user_id: props.user.id,
      restaurant_id: props.match.params.id
    };

  return (
    <div className="App">
      Hello Universe!
    </div>
  );
}

export default AddReview;
