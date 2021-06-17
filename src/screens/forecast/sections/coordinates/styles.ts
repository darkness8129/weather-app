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

    border-right: 1px solid ${Colors.LIGHT_11};

    @media (max-width: 760px) {
      border-right: none;
      border-bottom: 1px solid ${Colors.LIGHT_11};
    }
  `,

  subtitle: css`
    color: ${Colors.DARK_2};
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

  buttons: css`
    width: 100%;

    display: flex;
    justify-content: flex-start;
  `,

  noWeatherHistory: css`
    color: ${Colors.DARK_7};
  `,
}
