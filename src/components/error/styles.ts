import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  error: css`
    width: 100%;

    padding: 16px;
    box-sizing: border-box;

    text-align: center;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: ${Colors.ERROR_1};
  `,
}
