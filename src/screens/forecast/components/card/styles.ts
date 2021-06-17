import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  container: {
    base: css`
      box-sizing: border-box;
      min-width: 160px;
      padding: 10px 20px;

      color: ${Colors.DARK_2};
      box-shadow: 0px 0px 7px ${Colors.LIGHT_11};

      p {
        margin: 0;
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }
      }
    `,

    big: css`
      padding: 20px 50px;

      p {
        margin: 0 0 10px 0;
      }
    `,
  },

  header: css`
    & > p {
      justify-content: center;
    }
  `,

  main: {
    base: css`
      & > p {
        justify-content: center;

        &:first-of-type {
          font-weight: bold;
        }
      }
    `,

    big: css`
      font-size: 18px;
      font-weight: 600;
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
        width: 100px;
      }
    `,
  },

  name: css`
    margin: 0 0 10px 0;

    text-align: center;
    text-transform: uppercase;
    font-size: 18px;

    font-weight: bold;
  `,
}
