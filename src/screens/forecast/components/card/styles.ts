import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  container: {
    base: css`
      box-sizing: border-box;
      min-width: 160px;
      padding: 10px 20px;

      box-shadow: 0px 2px 5px ${Colors.LIGHT_11};

      p {
        margin: 0;
      }
    `,

    big: css`
      padding: 20px 50px;

      p {
        margin: 0 0 10px 0;
      }
    `,
  },

  info: {
    base: css`
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      & > img {
        width: 80px;
      }
    `,

    big: css`
      flex-direction: row;

      & > img {
        margin-right: 20px;
      }
    `,
  },

  name: css`
    margin: 0 0 10px 0;

    text-align: center;
    text-transform: uppercase;

    font-weight: bold;
  `,
}
