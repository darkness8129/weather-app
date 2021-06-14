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
    font-size: 14px;
    line-height: 12px;
    color: ${Colors.ERROR_1};

    background: ${Colors.ERROR_2};
    border-radius: 8px;
  `,
}
