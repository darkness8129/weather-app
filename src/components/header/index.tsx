import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { styles } from './styles'

export const Header: FC = () => {
  const { pathname } = useLocation()

  return (
    <div css={styles.container}>
      <div css={styles.logo}>
        Weather<span>APP</span>
      </div>

      <div css={styles.navigation}>
        <Link
          to="/forecast"
          css={[styles.item.base, pathname === '/forecast' && styles.item.active]}
        >
          Forecast
        </Link>

        <Link
          to="/history"
          css={[styles.item.base, pathname === '/history' && styles.item.active]}
        >
          Weather history
        </Link>

        <Link
          to="/selected"
          css={[styles.item.base, pathname === '/selected' && styles.item.active]}
        >
          Selected cities
        </Link>
      </div>
    </div>
  )
}
