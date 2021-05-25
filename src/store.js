import {configureStore} from '@reduxjs/toolkit';
import RestaurantsReducer from './components/RestaurantSlice';

export default configureStore({
  reducer: {
    restaurants: RestaurantsReducer,
  },
});
