import { FC } from 'react'
import { styles } from './styles'

interface LoaderProps {
  type: 'dark' | 'light'
}

// Loader provides a dark and light loader, that can be showed when some action in progress.
export const Loader: FC<LoaderProps> = ({ type }) => {
  return (
    <img
      src={
        type === 'dark'
          ? require('./assets/dark-loader.svg')
          : require('./assets/light-loader.svg')
      }
      alt="loader"
      css={styles.loader}
    />
  )
}
