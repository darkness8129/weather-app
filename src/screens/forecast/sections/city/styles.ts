import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  container: css`
    width: 50%;

    padding: 20px;

    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  subtitle: css`
    color: ${Colors.DARK_2};
  `,

  search: {
    container: css`
      width: 100%;

      display: flex;
      align-items: center;
    `,

    input: css`
      width: 50%;

      margin: 0 20px;
    `,

    button: css`
      width: 30%;
    `,
  },

  noWeather: css`
    color: ${Colors.DARK_7};
  `,

  forecast: css`
    height: 100%;

    display: flex;
    align-items: center;

    overflow: hidden;
  `,

  cards: css`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    overflow: scroll;

    & > div {
      margin: 0 20px 20px 0;

      &:nth-of-type(3),
      &:nth-of-type(5) {
        margin-right: 0;
      }
    }
  `,
}
