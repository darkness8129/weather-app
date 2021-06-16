import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Coordinates } from '~/types'

// initial state of weatherSlice
const initialState = {
  coordinates: {
    latitude: null,
    longitude: null,
  } as Coordinates,
}

// Forecast screen slice
export const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    // set coordinates
    setCoordinates: (state, action: PayloadAction<Coordinates>) => {
      state.coordinates = action.payload
    },
  },
})
