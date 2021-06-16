import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// initial state of weatherHistorySlice
const initialState = {
  weatherHistory: null as any,
  loading: false,
  error: '',
}

// Weather history screen slice
export const weatherHistorySlice = createSlice({
  name: 'weather-history',
  initialState,
  reducers: {
    // start getting weather history
    getWeatherHistory: (state) => {
      state.error = ''
      state.loading = true
    },

    // getting weather history succeeded
    getWeatherHistorySuccess: (state, action: PayloadAction<any>) => {
      state.loading = false
      state.error = ''
      state.weatherHistory = action.payload
    },

    // getting weather history failed
    getWeatherHistoryFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
      state.weatherHistory = null
    },
  },
})
