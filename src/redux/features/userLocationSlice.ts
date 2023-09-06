/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//-------------------------------------------------
//-------------------------------------------------

export const getLocations = createAsyncThunk(
  'get/getLocations',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://restcountries.com/v3.1/all');

      //@ts-expect-error
      const country = data?.map(cnt => {
        return {
          imageUrl: cnt?.flags?.png || cnt?.flags?.svg,
          region: cnt?.region,
          capital: typeof cnt?.capital !== 'undefined' ? cnt?.capital[0] : '',
          cca2: cnt?.cca2,
          country: cnt?.name?.common,
        };
      });
      return country;
    } catch (error: unknown) {
      //@ts-expect-error
      if (error.response) return rejectWithValue(error.response.data.message);
      //@ts-expect-error
      rejectWithValue(error.message);
    }
  }
);

export interface GetLocationData {
  imageUrl: string;
  cca2: string;
  capital: string;
  region: string;
  country: string;
}

interface GetLocationState {
  locations: {
    status: string;
    error: string;
    locations: GetLocationData[];
  };
  selectedLocation: GetLocationData;
}

const initialState: GetLocationState = {
  locations: {
    status: '',
    error: '',
    locations: [],
  },
  //@ts-ignore
  selectedLocation: {},
};

const userLocationSlice = createSlice({
  name: 'locations api',
  initialState: initialState,

  reducers: {},
  extraReducers: {
    [getLocations.pending.toString()]: state => {
      state.locations.status = 'pending';
    },
    [getLocations.fulfilled.toString()]: (state, action) => {
      state.locations.status = 'success';
      state.locations.locations = action.payload;
    },
    [getLocations.rejected.toString()]: (state, action) => {
      state.locations.status = 'rejected';
      state.locations.error = action.payload;
    },
  },
});

export default userLocationSlice.reducer;
