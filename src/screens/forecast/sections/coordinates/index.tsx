import { FC, Fragment, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '~/redux'
import { Error, Loader, InfoMessage } from '~/components'

import { styles } from './styles'
import { styles as commonStyles } from '../../styles'
import { CoordinatesForecastTypes } from '../../types'
import { forecastSlice, getWeatherByCoordinates } from '../../redux'
import { Card, RadioButtons } from '../../components'

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
      <h2 css={commonStyles.subtitle}>Your forecast</h2>

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

      <div css={commonStyles.forecastContainer}>
        {!loading && !error && forecast && (
          <Fragment>
            {/* current */}
            {type === CoordinatesForecastTypes.Current &&
              !forecast.hourly &&
              !forecast.daily && <Card weather={forecast} type="big" format="days" />}

            {/* 5 hours */}
            {type === CoordinatesForecastTypes.Hours && forecast.hourly && (
              <div css={commonStyles.cards}>
                {forecast.hourly.slice(0, 5).map((weather: any) => (
                  <Card weather={weather} type="small" key={weather.dt} format="hours" />
                ))}
              </div>
            )}

            {/* 7 days */}
            {type === CoordinatesForecastTypes.Days && forecast.daily && (
              <div css={commonStyles.cards}>
                {forecast.daily.slice(0, 7).map((weather: any) => (
                  <Card weather={weather} type="small" key={weather.dt} format="days" />
                ))}
              </div>
            )}
          </Fragment>
        )}

        {!loading && !error && !latitude && !longitude && (
          <InfoMessage text="WeatherApp needs access to your geolocation..." />
        )}

        {loading && <Loader type="dark" />}
        {error && <Error text={error} />}
      </div>
    </div>
  )
}
