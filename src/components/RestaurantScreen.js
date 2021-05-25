import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RestaurantList} from './RestaurantList';
import {fetchRestaurants} from './RestaurantSlice';

export const RestaurantScreen = () => {
  const restaurants = useSelector(state => state.restaurants);
  const loadRestaurants = useDispatch(fetchRestaurants);
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList
        restaurants={restaurants}
        loadRestaurants={loadRestaurants}
      />
    </div>
  );
};
