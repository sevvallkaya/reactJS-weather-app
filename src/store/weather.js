import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: {},
  loading: false,
  error: "",
};

export const getWeather = createAsyncThunk(
  "weather/getCity",
  async (cityName) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=00aba192d8e34d861ab5cc361bf86cff&units=metric`
    ).then((res) => res.json());
    return data;
  }
);

export const weather = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [getWeather.pending]: (state) => {
      state.loading = true;
    },
    [getWeather.fulfilled]: (state, action) => {
      state.loading = false;
      state.cities[action.meta.arg] = action.payload;
    },
    [getWeather.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default weather.reducer;
