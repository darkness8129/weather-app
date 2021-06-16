import { css } from '@emotion/react'
import { spinning } from '~/emotion'

export const styles = {
  loader: css`
    animation: ${spinning} 1.2s linear infinite;
  `,
}
