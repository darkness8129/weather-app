import { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '~/redux'
import { Error, Loader, Title, Input, Button } from '~/components'

import { styles } from './styles'
import { forecastSlice, getWeatherByCityName } from './redux'
import { Card } from './components'

export const ForecastScreen: FC = () => {
  // get state and actions
  const dispatch = useAppDispatch()
  const { city } = useAppSelector((t) => t.forecast)

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
          <h2 css={styles.subtitle}>Forecast In Your City</h2>
        </div>
        <div css={styles.city}>
          <h2 css={styles.subtitle}>Enter City Name</h2>

          <div css={styles.search.container}>
            <Input
              extendStyle={styles.search.input}
              value={city.search}
              type="text"
              onChange={(e) => dispatch(forecastSlice.actions.setSearch(e.target.value))}
            />
            <Button
              text="Show weather"
              extendStyle={styles.search.button}
              onClick={() => dispatch(getWeatherByCityName(city.search, city.days))}
              disabled={!city.search || !!city.error || city.loading}
              loading={city.loading}
            />
          </div>

          {!city.loading && !city.error && city.forecast && (
            <Card weather={city.forecast} />
          )}

          {!city.search && !city.forecast && <div>City not selected yet...</div>}

          {city.loading && <Loader type="dark" />}
          {city.error && <Error text={city.error} />}
        </div>
      </div>
    </div>
  )
}
