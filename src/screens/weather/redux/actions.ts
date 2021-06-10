import { AppDispatch } from '~/redux'
import { getErrorMessage } from '~/utils'
import { API_URL, API_KEY } from '~/config'

import { Coordinates } from '../types'
import { weatherSlice } from './slice'

// getWeatherByCoordinates used for getting weather by coordinates
export const getWeatherByCoordinates =
  (coordinates: Coordinates): any =>
  async (dispatch: AppDispatch) => {
    // start getting weather
    dispatch(weatherSlice.actions.getWeather())

    try {
      // get weather by coordinates request
      const response = await fetch(
        `${API_URL}/weather/?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&APPID=${API_KEY}`,
      )
      const weather = await response.json()

      // get weather succeeded
      dispatch(weatherSlice.actions.getWeatherSuccess(weather))
    } catch (error) {
      const errorMessage = await getErrorMessage(error)

      // getting weather failed
      console.error(`failed to get weather`, errorMessage)
      dispatch(weatherSlice.actions.getWeatherFailure(String(errorMessage)))
    }
  }
