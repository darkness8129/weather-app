import { FC, useEffect } from 'react'

import { useAppDispatch } from '~/redux'
import { Title } from '~/components'

import { styles } from './styles'
import { forecastSlice } from './redux'
import { City } from './components'

export const ForecastScreen: FC = () => {
  // get state and actions
  const dispatch = useAppDispatch()

  // get coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      dispatch(
        forecastSlice.actions.setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      ),
    )
  }, [])

  // if coordinates exist - get weather by coordinates
  // useEffect(() => {
  //   if (coordinates.latitude && coordinates.longitude) {
  //     dispatch(getWeatherByCoordinates(coordinates))
  //   }
  //   dispatch(getWeatherByCityName('Rivne'))
  // }, [coordinates.latitude, coordinates.longitude])

  return (
    <div css={styles.container}>
      <Title text="Forecast" />

      <div css={styles.forecast}>
        <div css={styles.coordinates}>
          <h2>Forecast In Your City</h2>
        </div>

        <City />
      </div>
    </div>
  )
}
