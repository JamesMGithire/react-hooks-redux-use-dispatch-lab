import React, { useState } from "react";
import { addRestaurant } from "./restaurantsSlice";
import { useDispatch } from "react-redux";

function RestaurantInput() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  
  function handleNameChange(event) {
    setName(event.target.value);
  }
  const dispatch = useDispatch();
  
  function handleLocationChange(event) {
    setLocation(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    // add missing code
    dispatch(addRestaurant({name: name, location: location}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          id="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleLocationChange}
          id="location"
          placeholder="location"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantInput;
