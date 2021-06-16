import { FC } from 'react'
import { SerializedStyles } from '@emotion/react'
import { styles } from './styles'

interface ErrorProps {
  extendStyle?: SerializedStyles

  text: string
}

// Error provides error text.
export const Error: FC<ErrorProps> = ({ extendStyle, text }) => {
  return (
    <div css={[styles.error, extendStyle]}>
      <span>{text}</span>
    </div>
  )
}
