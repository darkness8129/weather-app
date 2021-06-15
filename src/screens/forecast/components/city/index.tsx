import { FC, Fragment, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '~/redux'
import { Error, Loader, Input, Button, RadioButtons } from '~/components'

import { styles } from './styles'
import { CityForecastTypes } from '../../types'
import { forecastSlice, getWeatherByCityName } from '../../redux'
import { Card } from '..'

export const City: FC = () => {
  // get state and actions
  const dispatch = useAppDispatch()
  const { city } = useAppSelector((t) => t.forecast)

  useEffect(() => {
    if (city.search) {
      dispatch(getWeatherByCityName(city.search, city.type))
    }
  }, [city.type])

  console.log(city.type)

  return (
    <div css={styles.container}>
      <h2 css={styles.subtitle}>Enter City or Country</h2>

      <div css={styles.search.container}>
        <RadioButtons
          selected={city.type}
          options={[CityForecastTypes.Current, CityForecastTypes.Days]}
          onSelect={(type: CityForecastTypes) =>
            dispatch(forecastSlice.actions.setCityForecastType(type))
          }
        />

        <Input
          extendStyle={styles.search.input}
          value={city.search}
          type="text"
          onChange={(e) => dispatch(forecastSlice.actions.setSearch(e.target.value))}
        />
        <Button
          text="Show weather"
          extendStyle={styles.search.button}
          onClick={() => dispatch(getWeatherByCityName(city.search, city.type))}
          disabled={!city.search || !!city.error || city.loading}
        />
      </div>

      <div css={styles.forecast}>
        {!city.loading && !city.error && city.forecast && (
          <Fragment>
            {city.type === CityForecastTypes.Current && !city.forecast.list && (
              <Card weather={city.forecast} type="big" />
            )}

            {city.type === CityForecastTypes.Days && city.forecast.list && (
              <div css={styles.cards}>
                {city.forecast.list.map((weather: any) => (
                  <Card weather={weather} type="small" key={weather.dt} />
                ))}
              </div>
            )}
          </Fragment>
        )}

        {!city.forecast && !city.loading && !city.error && (
          <div css={styles.noWeather}>Location not selected yet...</div>
        )}

        {city.loading && <Loader type="dark" />}
        {city.error && <Error text={city.error} />}
      </div>
    </div>
  )
}
