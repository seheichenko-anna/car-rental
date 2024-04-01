import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6605c371d92166b2e3c2bdf3.mockapi.io';

export const fetchCarsThunk = createAsyncThunk(
  'cars/fetch',
  async ({ page, make }, thunkAPI) => {
    try {
      const params = make ? { page, limit: 12, make } : { page, limit: 12 };

      const { data } = await axios.get('/catalog', {
        params,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMoreCarsThunk = createAsyncThunk(
  'cars/load-more',
  async ({ page, make }, thunkAPI) => {
    try {
      const params = make ? { page, limit: 12, make } : { page, limit: 12 };

      const { data } = await axios.get('/catalog', {
        params,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
