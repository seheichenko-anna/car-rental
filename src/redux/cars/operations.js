import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6605c371d92166b2e3c2bdf3.mockapi.io';

export const fetchCarsThunk = createAsyncThunk(
  'cars/fetch',
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get('/catalog', {
        params: {
          page,
          limit: 12,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMoreCarsThunk = createAsyncThunk(
  'cars/load-more',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get('/catalog', {
        params: {
          page,
          limit: 12,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
