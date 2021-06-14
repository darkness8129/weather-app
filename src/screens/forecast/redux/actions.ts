import { AppDispatch } from '~/redux'
import { getErrorMessage } from '~/utils'
import { API_URL, API_KEY } from '~/config'

import { Coordinates } from '../types'
import { forecastSlice } from './slice'

// getWeatherByCoordinates used for getting weather by coordinates
export const getWeatherByCoordinates =
  (coordinates: Coordinates): any =>
  async (dispatch: AppDispatch) => {
    // start getting weather
    dispatch(forecastSlice.actions.getWeather())

    try {
      // get weather by coordinates request
      const response = await fetch(
        `${API_URL}/forecast/?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&APPID=${API_KEY}&cnt=2`,
      )
      const weather = await response.json()
      console.debug(weather)

      // get weather succeeded
      // dispatch(weatherSlice.actions.getWeatherSuccess(weather))
    } catch (error) {
      const errorMessage = await getErrorMessage(error)

      // getting weather failed
      console.error(`failed to get weather by coordinates`, errorMessage)
      dispatch(forecastSlice.actions.getWeatherFailure(String(errorMessage)))
    }
  }

// getWeatherByCityName used for getting weather by city name
export const getWeatherByCityName =
  (city: string, days: number): any =>
  async (dispatch: AppDispatch) => {
    // start getting weather
    dispatch(forecastSlice.actions.getWeatherCity())

    try {
      // get weather by city name request
      const response = await fetch(
        `${API_URL}/${
          days === 1 ? 'weather' : 'forecast'
        }/?q=${city}&units=metric&APPID=${API_KEY}${days === 1 ? '' : '&cnt=5'}`,
      )
      const weather = await response.json()
      console.debug(weather)

      // get weather by city name succeeded
      dispatch(forecastSlice.actions.getWeatherCitySuccess(weather))
    } catch (error) {
      const errorMessage = await getErrorMessage(error)

      // getting weather failed
      console.error(`failed to get weather by city name`, errorMessage)
      dispatch(forecastSlice.actions.getWeatherCityFailure(String(errorMessage)))
    }
  }
