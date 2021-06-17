import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  container: css`
    display: flex;
    align-items: center;

    color: ${Colors.DARK_7};
    font-size: 16px;
    font-weight: 300;
  `,

  icon: css`
    margin-right: 5px;
    color: ${Colors.DARK_7};
  `,
}
