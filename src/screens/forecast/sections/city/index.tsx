import { FC, Fragment, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '~/redux'
import { Error, Loader, Input, Button, RadioButtons } from '~/components'

import { styles } from './styles'
import { CityForecastTypes } from '../../types'
import { forecastSlice, getWeatherByCityName } from '../../redux'
import { Card } from '../../components'

export const City: FC = () => {
  // get state and actions
  const dispatch = useAppDispatch()
  const { city } = useAppSelector((t) => t.forecast)
  const { loading, error, search, type } = city

  // get forecast when type changed
  useEffect(() => {
    if (search) {
      dispatch(getWeatherByCityName(search, type))
    }
  }, [type])

  return (
    <div css={styles.container}>
      <h2 css={styles.subtitle}>Enter City or Country</h2>

      <div css={styles.search.container}>
        <RadioButtons
          selected={type}
          options={[CityForecastTypes.Current, CityForecastTypes.Hours]}
          onSelect={(type: CityForecastTypes) =>
            dispatch(forecastSlice.actions.setCityForecastType(type))
          }
        />

        <Input
          extendStyle={styles.search.input}
          value={search}
          type="text"
          onChange={(e) => dispatch(forecastSlice.actions.setSearch(e.target.value))}
        />
        <Button
          text="Show weather"
          extendStyle={styles.search.button}
          onClick={() => dispatch(getWeatherByCityName(search, type))}
          disabled={!search || !!error || loading}
        />
      </div>

      <div css={styles.forecast}>
        {!loading && !error && city.forecast && (
          <Fragment>
            {/* current */}
            {type === CityForecastTypes.Current && !city.forecast.list && (
              <Card weather={city.forecast} type="big" format="days" />
            )}

            {/* 15 hours */}
            {type === CityForecastTypes.Hours && city.forecast.list && (
              <div css={styles.cards}>
                {city.forecast.list.map((weather: any) => (
                  <Card weather={weather} type="small" key={weather.dt} format="hours" />
                ))}
              </div>
            )}
          </Fragment>
        )}

        {!city.forecast && !loading && !error && (
          <div css={styles.noWeather}>Location not selected yet...</div>
        )}

        {loading && <Loader type="dark" />}
        {error && <Error text={error} />}
      </div>
    </div>
  )
}
