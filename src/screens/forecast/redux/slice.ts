import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CityForecastTypes, CoordinatesForecastTypes } from '../types'

// initial state of weatherSlice
const initialState = {
  coordinates: {
    forecast: null as any,
    type: CoordinatesForecastTypes.Current,
    loading: false,
    error: '',
  },

  city: {
    forecast: null as any,
    type: CityForecastTypes.Current,
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
    // start getting weather by coordinates
    getCoordinatesWeather: (state) => {
      state.coordinates.error = ''
      state.coordinates.loading = true
    },

    // getting weather by coordinates succeeded
    getCoordinatesWeatherSuccess: (state, action: PayloadAction<any>) => {
      state.coordinates.loading = false
      state.coordinates.error = ''
      state.coordinates.forecast = action.payload
    },

    // getting weather by coordinates failed
    getCoordinatesWeatherFailure: (state, action: PayloadAction<string>) => {
      state.coordinates.loading = false
      state.coordinates.error = action.payload
      state.coordinates.forecast = null
    },

    // set coordinates weather type
    setCoordinatesForecastType: (
      state,
      action: PayloadAction<CoordinatesForecastTypes>,
    ) => {
      state.coordinates.type = action.payload

      // clear error
      state.city.error = ''
    },

    // set city search value
    setSearch: (state, action: PayloadAction<string>) => {
      state.city.search = action.payload

      // clear error
      state.city.error = ''
    },

    // set city weather type
    setCityForecastType: (state, action: PayloadAction<CityForecastTypes>) => {
      state.city.type = action.payload

      // clear error
      state.city.error = ''
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
