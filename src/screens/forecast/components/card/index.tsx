import { FC } from 'react'
import moment from 'moment'

import { ICON_URL } from '~/config'

interface CardProps {
  weather: any
}

export const Card: FC<CardProps> = ({ weather }) => {
  return (
    <div>
      <p>Name: {weather.name}</p>
      <p>Temperature: {weather.main.temp} &deg;C</p>
      <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
      <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      <p>Description: {weather.weather[0].main}</p>
      <p>Humidity: {weather.main.humidity} %</p>
      <p>Day: {moment().format('dddd')}</p>
      <p>Date: {moment().format('LL')}</p>
      <img src={`${ICON_URL}/${weather.weather[0].icon}.png`} alt="weather icon" />
    </div>
  )
}
