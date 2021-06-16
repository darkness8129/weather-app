import { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '~/redux'
import { Loader, Error, Title } from '~/components'

import { getWeatherHistory } from './redux'
import { styles } from './styles'
import { Header, Item } from './components'

export const WeatherHistoryScreen: FC = () => {
  // get state and actions
  const dispatch = useAppDispatch()
  const { coordinates: userCoordinates } = useAppSelector((t) => t.coordinates)
  const { weatherHistory, loading, error } = useAppSelector((t) => t.weatherHistory)
  const { longitude, latitude } = userCoordinates

  // if coordinates exist - get weather history
  useEffect(() => {
    if (latitude && longitude) {
      dispatch(getWeatherHistory(userCoordinates))
    }
  }, [latitude, longitude])

  return (
    <div css={styles.container}>
      <Title text="Weather history" />

      <div css={styles.table}>
        <Header />

        <div css={styles.tableBody.container}>
          {weatherHistory?.hourly.map((weather: any) => (
            <Item weather={weather} key={weather.dt} />
          ))}

          {!weatherHistory && (
            <div css={styles.tableBody.center}>
              {!loading && !error && !latitude && !longitude && (
                <div css={styles.noWeatherHistory}>
                  WeatherApp needs access to your geolocation...
                </div>
              )}

              {loading && <Loader type="dark" />}
              {error && <Error text={error} />}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
