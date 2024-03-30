import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};
const slice = createSlice({
  name: 'favorites',
  initialState,
  selectors: {
    selectFavorites: state => state.favorites,
  },
  reducers: {
    addToFavorites: (state, { payload }) => {
      const { car } = payload;
      if (!state.favorites.some(favorite => favorite.id === car.id)) {
        state.favorites.push(car);
      }
    },
    removeFromFavorites: (state, { payload }) => {
      const { id } = payload;
      state.favorites = state.favorites.filter(favorite => favorite.id !== id);
    },
  },
});

export const favoritesReducer = slice.reducer;
export const { addToFavorites, removeFromFavorites } = slice.actions;
export const { selectFavorites } = slice.selectors;
