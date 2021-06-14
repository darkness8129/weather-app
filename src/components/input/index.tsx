import { FC, InputHTMLAttributes } from 'react'
import { SerializedStyles } from '@emotion/react'
import { styles } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  extendStyle?: SerializedStyles
}

// Input provides a universal input.
export const Input: FC<InputProps> = ({
  onChange,

  extendStyle,
  ...props
}) => {
  return (
    <div css={[styles.container, extendStyle]}>
      <input {...props} css={styles.input} onChange={onChange} />
    </div>
  )
}
