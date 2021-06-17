import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  option: css`
    display: flex;
    align-items: center;

    margin-bottom: 5px;

    color: ${Colors.DARK_2};
    font-size: 16px;

    cursor: pointer;
    white-space: nowrap;
  `,

  bullet: {
    base: css`
      display: inline;
      width: 10px;
      height: 10px;

      margin-right: 10px;

      border-radius: 50%;
      border: 1px solid ${Colors.DARK_2};
    `,

    active: css`
      background-color: ${Colors.DARK_2};
    `,
  },
}
