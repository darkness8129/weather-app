import moment from 'moment'
import { FC } from 'react'

import { ICON_URL } from '~/config'
import { styles } from './styles'

interface ItemProps {
  weather: any
}

export const Item: FC<ItemProps> = ({ weather }) => {
  // days and hours
  const formatDaysAndHours = (milliseconds: number): string =>
    moment(new Date(milliseconds * 1000)).format('LLL')

  return (
    <div css={styles.container}>
      <span>{formatDaysAndHours(weather.dt)}</span>
      <span>
        {weather?.weather[0].main}
        <img src={`${ICON_URL}/${weather.weather[0].icon}.png`} alt="weather icon" />
      </span>
      <span>{weather?.temp.toFixed(1)} &deg;C</span>
      <span>{weather?.feels_like.toFixed(1)} &deg;C</span>
      <span>{weather?.humidity} %</span>
      <span>{(weather.pressure / 1.332).toFixed(0)} mm Hg</span>
    </div>
  )
}
