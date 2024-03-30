import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk, fetchMoreCarsThunk } from './operations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  isLoadMoreCars: true,
  currentPage: 1,
};
const slice = createSlice({
  name: 'cars',
  initialState,
  selectors: {
    selectCars: state => state.cars,
    selectIsLoading: state => state.isLoading,
    selectIsLoadMoreCars: state => state.isLoadMoreCars,
    selectCurrentPage: state => state.currentPage,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCarsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.isLoading = false;
      })
      .addCase(fetchCarsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchMoreCarsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMoreCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
        state.isLoadMoreCars = payload.length > 0;
        state.currentPage = state.currentPage + 1;
        state.isLoading = false;
      })
      .addCase(fetchMoreCarsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const carsReducer = slice.reducer;
export const { addToFavorites, removeFromFavorites } = slice.actions;
export const {
  selectCars,
  selectIsLoading,
  selectIsLoadMoreCars,
  selectCurrentPage,
} = slice.selectors;
