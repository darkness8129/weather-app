import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  button: css`
    width: 100%;
    height: 40px;

    padding: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 12px;
    color: ${Colors.LIGHT_1};
    white-space: nowrap;

    background: ${Colors.ACCENT_1};
    border-radius: 8px;
    border: none;

    cursor: pointer;
    outline: none;

    &:hover {
      background: ${Colors.ACCENT_2};
    }

    &:disabled {
      opacity: 0.8;
    }
  `,
}
