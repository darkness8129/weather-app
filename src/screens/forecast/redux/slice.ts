import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Coordinates } from '../types'

// initial state of weatherSlice
const initialState = {
  coordinates: {
    forecast: null as any,
    coordinates: {
      latitude: null,
      longitude: null,
    } as Coordinates,
    type: 'current',
    loading: true,
    error: '',
  },

  city: {
    forecast: null as any,
    days: 1,
    loading: false,
    error: '',
    search: '',
  },
}

// Forecast screen slice
export const forecastSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    // set coordinates
    setCoordinates: (state, action: PayloadAction<Coordinates>) => {
      state.coordinates.coordinates = action.payload
    },

    // start getting weather
    getWeather: (state) => {
      state.coordinates.error = ''
      state.coordinates.loading = true
    },

    // getting weather succeeded
    getWeatherSuccess: (state, action: PayloadAction<any>) => {
      state.coordinates.loading = false
      state.coordinates.error = ''
      state.coordinates.forecast = action.payload
    },

    // getting weather failed
    getWeatherFailure: (state, action: PayloadAction<string>) => {
      state.coordinates.loading = false
      state.coordinates.error = action.payload
      state.coordinates.forecast = null
    },

    // ------------------

    // set city search value
    setSearch: (state, action: PayloadAction<string>) => {
      state.city.search = action.payload

      // clear error
      state.city.error = ''
    },

    // set forecast days
    setDays: (state, action: PayloadAction<number>) => {
      state.city.days = action.payload
    },

    // start getting weather by city name
    getWeatherCity: (state) => {
      state.city.error = ''
      state.city.loading = true
    },

    // getting weather by city succeeded
    getWeatherCitySuccess: (state, action: PayloadAction<any>) => {
      state.city.loading = false
      state.city.error = ''
      state.city.forecast = action.payload
    },

    // getting weather by city failed
    getWeatherCityFailure: (state, action: PayloadAction<string>) => {
      state.city.loading = false
      state.city.error = action.payload
      state.city.forecast = null
    },
  },
})
