import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Coordinates } from '../types'

// initial state of weatherSlice
const initialState = {
  weather: null as any,
  coordinates: {
    latitude: null,
    longitude: null,
  } as Coordinates,
  loading: false,
  error: '',
}

// Weather screen slice
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    // set coordinates
    setCoordinates: (state, action: PayloadAction<Coordinates>) => {
      state.coordinates = action.payload
    },

    // start getting weather
    getWeather: (state) => {
      state.error = ''
      state.loading = true
    },

    // getting weather succeeded
    getWeatherSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false
      state.error = ''
      state.weather = action.payload
    },

    // getting weather failed
    getWeatherFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
      state.weather = null
    },
  },
})
