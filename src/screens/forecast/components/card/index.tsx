import { FC, Fragment } from 'react'
import moment from 'moment'

import { ICON_URL } from '~/config'
import { styles } from './styles'

interface CardProps {
  type: 'small' | 'big'
  format: 'days' | 'hours'
  weather: any
}

export const Card: FC<CardProps> = ({ type, weather, format }) => {
  // days and hours
  const formatDt = (milliseconds: number): string =>
    moment(new Date(milliseconds * 1000)).format(
      format === 'days' ? 'DD MMMM, YYYY' : 'HH:mm',
    )

  // format current date
  const currentDate = `${moment().format('dddd - DD MMMM, YYYY')}`

  // format sunrise and sunset
  const formatToLocalTime = (milliseconds: number): string =>
    moment(new Date(milliseconds * 1000)).format('HH:mm')

  return (
    <div css={[styles.container.base, type === 'big' && styles.container.big]}>
      <p css={styles.name}>{type === 'big' ? weather.name : formatDt(weather.dt)}</p>
      <div css={[styles.info.base, type === 'big' && styles.info.big]}>
        <img src={`${ICON_URL}/${weather.weather[0].icon}.png`} alt="weather icon" />

        <div>
          <p>{weather.weather[0].main}</p>
          <p>
            {(weather.main?.temp || weather.temp?.day || weather?.temp).toFixed(1)} &deg;C
          </p>
        </div>
      </div>
      {type === 'big' && (
        <Fragment>
          <p>{currentDate}</p>
          <p>Sunrise: {formatToLocalTime(weather.sys.sunrise)}</p>
          <p>Sunset: {formatToLocalTime(weather.sys.sunset)}</p>
          <p>Humidity: {weather.main.humidity} %</p>
        </Fragment>
      )}
    </div>
  )
}
