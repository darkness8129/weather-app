import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  container: css`
    width: 100%;
  `,

  input: css`
    display: block;
    width: 100%;
    height: 40px;

    box-sizing: border-box;
    padding: 14.5px 16px;

    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 15px;
    color: ${Colors.DARK_1};

    border-radius: 8px;
    background: ${Colors.LIGHT_2};
    border: 1px solid ${Colors.DARK_3};

    appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${Colors.DARK_3};
    }
  `,
}
