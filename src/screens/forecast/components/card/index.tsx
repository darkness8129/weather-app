import { FC, Fragment } from 'react'
import moment from 'moment'

import { ICON_URL } from '~/config'
import { styles } from './styles'

interface CardProps {
  type: 'small' | 'big'
  weather: any
}

export const Card: FC<CardProps> = ({ type, weather }) => {
  console.log(weather.dt_txt)

  return (
    <div css={[styles.container.base, type === 'big' && styles.container.big]}>
      <p css={styles.name}>
        {type === 'big' ? weather.name : moment(weather.dt_txt).format('LT')}
      </p>

      <div css={[styles.info.base, type === 'big' && styles.info.big]}>
        <img src={`${ICON_URL}/${weather.weather[0].icon}.png`} alt="weather icon" />

        <div>
          <p>{weather.weather[0].main}</p>
          <p>{weather.main.temp.toFixed(1)} &deg;C</p>
        </div>
      </div>

      {type === 'big' && (
        <Fragment>
          <p>
            {moment().format('dddd')} - {moment().format('LL')}
          </p>
          <p>
            Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
          </p>
          <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
          <p>Humidity: {weather.main.humidity} %</p>
        </Fragment>
      )}
    </div>
  )
}
