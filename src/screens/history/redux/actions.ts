import { AppDispatch } from '~/redux'
import { getErrorMessage } from '~/utils'
import { API_URL, API_KEY } from '~/config'

import { Coordinates } from '~/types'
import { weatherHistorySlice } from './slice'

// getWeatherHistory used for getting weather history
export const getWeatherHistory =
  (coordinates: Coordinates): any =>
  async (dispatch: AppDispatch) => {
    // start getting weather history
    dispatch(weatherHistorySlice.actions.getWeatherHistory())

    try {
      const date: Date = new Date()

      // get weather history request
      const response = await fetch(
        `${API_URL}/onecall/timemachine?lat=${coordinates.latitude}&lon=${
          coordinates.longitude
        }&units=metric&APPID=${API_KEY}&dt=${Math.floor(date.valueOf() / 1000)}`,
      )
      const weatherHistory = await response?.json()

      // get weather history succeeded
      dispatch(weatherHistorySlice.actions.getWeatherHistorySuccess(weatherHistory))
    } catch (error) {
      const errorMessage = await getErrorMessage(error)

      // getting weather history failed
      console.error(`failed to get weather history`, errorMessage)
      dispatch(weatherHistorySlice.actions.getWeatherHistoryFailure(String(errorMessage)))
    }
  }
