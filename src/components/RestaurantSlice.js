import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetch',
  async () => {},
);

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchRestaurants.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default restaurantSlice.reducer;
