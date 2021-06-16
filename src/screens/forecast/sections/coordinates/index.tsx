import { FC, Fragment, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '~/redux'
import { Error, Loader, RadioButtons } from '~/components'

import { styles } from './styles'
import { CoordinatesForecastTypes } from '../../types'
import { forecastSlice, getWeatherByCoordinates } from '../../redux'
import { Card } from '../../components'

export const Coordinates: FC = () => {
  // get state and actions
  const dispatch = useAppDispatch()
  const { coordinates } = useAppSelector((t) => t.forecast)
  const { coordinates: userCoordinates } = useAppSelector((t) => t.coordinates)

  const { forecast, loading, error, type } = coordinates
  const { longitude, latitude } = userCoordinates

  // if coordinates exist - get weather by coordinates
  useEffect(() => {
    if (latitude && longitude) {
      dispatch(getWeatherByCoordinates(userCoordinates, type))
    }
  }, [latitude, longitude])

  // get forecast when type changed
  useEffect(() => {
    if (latitude && longitude) {
      dispatch(getWeatherByCoordinates(userCoordinates, type))
    }
  }, [type])

  return (
    <div css={styles.container}>
      <h2 css={styles.subtitle}>Your forecast</h2>

      <div css={styles.buttons}>
        <RadioButtons
          selected={type}
          options={[
            CoordinatesForecastTypes.Current,
            CoordinatesForecastTypes.Hours,
            CoordinatesForecastTypes.Days,
          ]}
          onSelect={(type: CoordinatesForecastTypes) =>
            dispatch(forecastSlice.actions.setCoordinatesForecastType(type))
          }
        />
      </div>

      <div css={styles.forecast}>
        {!loading && !error && forecast && (
          <Fragment>
            {/* current */}
            {type === CoordinatesForecastTypes.Current &&
              !forecast.hourly &&
              !forecast.daily && <Card weather={forecast} type="big" format="days" />}

            {/* 5 hours */}
            {type === CoordinatesForecastTypes.Hours && forecast.hourly && (
              <div css={styles.cards}>
                {forecast.hourly.slice(0, 5).map((weather: any) => (
                  <Card weather={weather} type="small" key={weather.dt} format="hours" />
                ))}
              </div>
            )}

            {/* 7 days */}
            {type === CoordinatesForecastTypes.Days && forecast.daily && (
              <div css={styles.cards}>
                {forecast.daily.slice(0, 7).map((weather: any) => (
                  <Card weather={weather} type="small" key={weather.dt} format="days" />
                ))}
              </div>
            )}
          </Fragment>
        )}

        {!loading && !error && !latitude && !longitude && (
          <div css={styles.noWeatherHistory}>
            WeatherApp needs access to your geolocation...
          </div>
        )}

        {loading && <Loader type="dark" />}
        {error && <Error text={error} />}
      </div>
    </div>
  )
}
