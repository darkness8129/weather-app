import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  container: css`
    width: 100%;
    box-sizing: border-box;

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

      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 20px;

      @media (max-width: 1020px) {
        grid-template-columns: 2fr 1fr;
      }
    `,

    radio: css`
      @media (max-width: 1020px) {
        grid-column: -1/1;
      }
    `,
  },

  noWeather: css`
    color: ${Colors.DARK_7};
  `,

  forecast: css`
    height: 100%;
    min-height: 400px;

    display: flex;
    align-items: center;
  `,

  cards: css`
    height: calc(100vh - 450px);
    overflow: auto;

    padding: 20px 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  `,
}
