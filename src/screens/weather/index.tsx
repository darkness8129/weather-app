import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '~/redux'
import { weatherSlice, getWeatherByCoordinates } from './redux'

export const WeatherScreen: FC = () => {
  // get state and actions
  const dispatch = useAppDispatch()
  const { weather, coordinates } = useAppSelector((t) => t.weather)

  // get coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      dispatch(
        weatherSlice.actions.setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      ),
    )
  }, [])

  // if coordinates exist - get weather by coordinates
  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) {
      dispatch(getWeatherByCoordinates(coordinates))
    }
  }, [coordinates.latitude, coordinates.longitude])

  return <div>Weather {weather?.id}</div>
}
