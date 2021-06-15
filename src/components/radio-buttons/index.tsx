import { FC } from 'react'
import { styles } from './styles'

interface RadioButtonsProps {
  options: string[]
  selected: string

  onSelect: (value: any) => any
}

// RadioButtons provides set of buttons with one selected option.
export const RadioButtons: FC<RadioButtonsProps> = ({ options, selected, onSelect }) => {
  return (
    <div>
      {options.map((option) => (
        <div key={option} css={styles.option} onClick={() => onSelect(option)}>
          <div css={[styles.bullet.base, option === selected && styles.bullet.active]} />
          <span>{option}</span>
        </div>
      ))}
    </div>
  )
}
