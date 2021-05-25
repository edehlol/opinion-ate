import React, {useEffect} from 'react';

export const RestaurantList = ({loadRestaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <div>
      <h1>RestaurantList</h1>
    </div>
  );
};
