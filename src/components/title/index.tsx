import { FC } from 'react'

import { styles } from './styles'

interface TitleProps {
  text: string
}

// Title provides title text.
export const Title: FC<TitleProps> = ({ text }) => {
  return <h1 css={styles.title}>{text}</h1>
}
