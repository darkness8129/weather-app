import { FC } from 'react'

import { Title } from '~/components'

import { styles } from './styles'
import { Coordinates, City } from './sections'

export const ForecastScreen: FC = () => {
  return (
    <div css={styles.container}>
      <Title text="Forecast" />

      <div css={styles.forecast}>
        <Coordinates />
        <City />
      </div>
    </div>
  )
}
