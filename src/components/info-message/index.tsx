import { FC } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { styles } from './styles'

interface InfoMessageProps {
  text: string
}

// Input provides a universal info message.
export const InfoMessage: FC<InfoMessageProps> = ({ text }) => {
  return (
    <div css={styles.container}>
      <AiOutlineInfoCircle css={styles.icon} />
      <span>{text}</span>
    </div>
  )
}
