import { SerializedStyles } from '@emotion/react'
import { FC } from 'react'
import { styles } from './styles'

interface RadioButtonsProps {
  options: string[]
  selected: string
  extendStyle?: SerializedStyles

  onSelect: (value: any) => any
}

// RadioButtons provides set of buttons with one selected option.
export const RadioButtons: FC<RadioButtonsProps> = ({
  options,
  selected,
  extendStyle,

  onSelect,
}) => {
  return (
    <div css={extendStyle}>
      {options.map((option) => (
        <div key={option} css={styles.option} onClick={() => onSelect(option)}>
          <div css={[styles.bullet.base, option === selected && styles.bullet.active]} />
          <span>{option}</span>
        </div>
      ))}
    </div>
  )
}
