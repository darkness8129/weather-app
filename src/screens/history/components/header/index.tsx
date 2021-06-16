import { FC } from 'react'

import { styles } from './styles'

export const Header: FC = () => {
  return (
    <div css={styles.container}>
      <span>Date</span>
      <span>Description</span>
      <span>Temperature</span>
      <span>Feels like</span>
      <span>Humidity</span>
      <span>Pressure</span>
    </div>
  )
}
