import { SerializedStyles } from '@emotion/react'
import { FC } from 'react'

import { styles } from './styles'
import { Loader } from '..'

interface ButtonProps {
  text: string
  dataTestId?: string
  loading?: boolean
  disabled?: boolean
  extendStyle?: SerializedStyles

  onClick: () => any
}

// Button provides a universal button.
export const Button: FC<ButtonProps> = ({
  loading,
  disabled,
  text,
  extendStyle,

  onClick,
}) => {
  return (
    <button
      css={[styles.button, extendStyle]}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <Loader type="light" /> : <span>{text}</span>}
    </button>
  )
}
