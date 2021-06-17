import { FC, Fragment } from 'react'
import moment from 'moment'
import { BsDropletHalf } from 'react-icons/bs'
import { FaCompressArrowsAlt, FaTemperatureHigh } from 'react-icons/fa'
import { GiSunrise, GiSunset } from 'react-icons/gi'

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

  console.log(weather)

  return (
    <div css={[styles.container.base, type === 'big' && styles.container.big]}>
      <div css={styles.header}>
        <p css={styles.name}>{type === 'big' ? weather.name : formatDt(weather.dt)}</p>
        {type === 'big' && <p>{currentDate}</p>}
      </div>

      <div css={[styles.info.base, type === 'big' && styles.info.big]}>
        <img src={`${ICON_URL}/${weather.weather[0].icon}.png`} alt="weather icon" />

        <div css={[styles.main.base, type === 'big' && styles.main.big]}>
          <p>{weather.weather[0].main}</p>
          <p>
            <FaTemperatureHigh />
            {(weather.main?.temp || weather.temp?.day || weather?.temp).toFixed(1)} &deg;C
          </p>
        </div>
      </div>

      {type === 'big' && (
        <Fragment>
          <p>
            <FaCompressArrowsAlt />
            Pressure: {Math.round(weather.main.pressure / 1.332)} mm Hg
          </p>
          <p>
            <BsDropletHalf />
            Humidity: {weather.main.humidity} %
          </p>
          <p>
            <GiSunrise />
            Sunrise: {formatToLocalTime(weather.sys.sunrise)}
          </p>
          <p>
            <GiSunset />
            Sunset: {formatToLocalTime(weather.sys.sunset)}
          </p>
        </Fragment>
      )}
    </div>
  )
}
