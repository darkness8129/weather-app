import { FC } from 'react'
import { styles } from './styles'

interface InfoMessageProps {
  text: string
}

// Input provides a universal info message.
export const InfoMessage: FC<InfoMessageProps> = ({ text }) => {
  return <div css={styles.text}>{text}</div>
}
