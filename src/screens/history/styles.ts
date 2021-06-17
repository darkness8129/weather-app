import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  container: css`
    width: 100%;
    height: 100%;

    padding: 0 20px;
    box-sizing: border-box;
  `,

  table: css`
    position: relative;
    width: 100%;
    font-family: Montserrat, sans-serif;
    font-style: normal;

    background: ${Colors.LIGHT_7};
    border: 1px solid ${Colors.LIGHT_11};
    border-radius: 10px;
  `,

  tableBody: {
    container: css`
      height: calc(100vh - 217px);
      overflow: auto;
      transition: 0.3s linear opacity;

      border-radius: 0 0 10px 10px;
    `,

    center: css`
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    `,
  },

  noWeatherHistory: css`
    color: ${Colors.DARK_7};
  `,
}
