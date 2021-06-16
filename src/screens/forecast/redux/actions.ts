import { AppDispatch } from '~/redux'
import { getErrorMessage } from '~/utils'
import { API_URL, API_KEY } from '~/config'

import { Coordinates, CityForecastTypes, CoordinatesForecastTypes } from '../types'
import { forecastSlice } from './slice'

// getWeatherByCoordinates used for getting weather by coordinates
export const getWeatherByCoordinates =
  (coordinates: Coordinates, type: CoordinatesForecastTypes): any =>
  async (dispatch: AppDispatch) => {
    // start getting weather
    dispatch(forecastSlice.actions.getCoordinatesWeather())

    try {
      let response

      // current
      if (type === CoordinatesForecastTypes.Current) {
        response = await fetch(
          `${API_URL}/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&APPID=${API_KEY}`,
        )
      }

      // hours, days
      if (
        type === CoordinatesForecastTypes.Hours ||
        type === CoordinatesForecastTypes.Days
      ) {
        response = await fetch(
          `${API_URL}/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&APPID=${API_KEY}`,
        )
      }
      const weather = await response?.json()

      // throw error
      if (!response?.ok) {
        throw new Error(weather.message)
      }

      // get weather succeeded
      dispatch(forecastSlice.actions.getCoordinatesWeatherSuccess(weather))
    } catch (error) {
      const errorMessage = await getErrorMessage(error)

      // getting weather failed
      console.error(`failed to get weather by coordinates`, errorMessage)
      dispatch(forecastSlice.actions.getCoordinatesWeatherFailure(String(errorMessage)))
    }
  }

// getWeatherByCityName used for getting weather by city name
export const getWeatherByCityName =
  (city: string, type: CityForecastTypes): any =>
  async (dispatch: AppDispatch) => {
    // start getting weather
    dispatch(forecastSlice.actions.getWeatherCity())

    try {
      // get weather by city name request
      const response = await fetch(
        `${API_URL}/${
          type === CityForecastTypes.Current ? 'weather' : 'forecast'
        }?q=${city}&units=metric&APPID=${API_KEY}${
          type === CityForecastTypes.Current ? '' : '&cnt=5'
        }`,
      )
      const weather = await response.json()

      // throw error
      if (!response.ok) {
        throw new Error(weather.message)
      }

      // get weather by city name succeeded
      dispatch(forecastSlice.actions.getWeatherCitySuccess(weather))
    } catch (error) {
      const errorMessage = await getErrorMessage(error)

      // getting weather failed
      console.error(`failed to get weather by city name`, errorMessage)
      dispatch(forecastSlice.actions.getWeatherCityFailure(String(errorMessage)))
    }
  }
