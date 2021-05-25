import React, {useEffect} from 'react';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  const renderedList = restaurants.map(restaurant => (
    <li key={restaurant.id}>{restaurant.name}</li>
  ));
  return (
    <div>
      <h1>RestaurantList</h1>
      <ul>{renderedList}</ul>
    </div>
  );
};
