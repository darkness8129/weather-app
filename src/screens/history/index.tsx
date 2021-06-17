import { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '~/redux'
import { Loader, Error, Title, InfoMessage } from '~/components'

import { getWeatherHistory, weatherHistorySlice } from './redux'
import { styles } from './styles'
import { Header, Item } from './components'

export const WeatherHistoryScreen: FC = () => {
  // get state and actions
  const dispatch = useAppDispatch()
  const { coordinates: userCoordinates, loading: coordinatesLoading } = useAppSelector(
    (t) => t.coordinates,
  )
  const { weatherHistory, loading, error } = useAppSelector((t) => t.weatherHistory)
  const { longitude, latitude } = userCoordinates

  // if coordinates exist - get weather history
  useEffect(() => {
    if (latitude && longitude) {
      dispatch(getWeatherHistory(userCoordinates))
    }
  }, [latitude, longitude])

  // stop loading if user block geolocation access
  useEffect(() => {
    if (!coordinatesLoading) {
      dispatch(weatherHistorySlice.actions.stopLoading())
    }
  }, [coordinatesLoading])

  // reverse of weather history array
  const reversedArr = [...(weatherHistory?.hourly || [])].reverse()

  return (
    <div css={styles.container}>
      <Title text="Your Weather history" />

      <div css={styles.table}>
        <Header />

        <div css={styles.tableBody.container}>
          {reversedArr.map((weather: any) => (
            <Item weather={weather} key={weather.dt} />
          ))}

          {!weatherHistory && (
            <div css={styles.tableBody.center}>
              {!loading && !error && !latitude && !longitude && (
                <InfoMessage text="WeatherApp needs access to your geolocation..." />
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
