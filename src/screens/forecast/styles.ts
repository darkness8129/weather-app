import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  container: css`
    width: 100%;
    height: 100%;

    padding: 0 20px;
    box-sizing: border-box;
  `,

  forecast: css`
    width: 100%;
    height: calc(100vh - 160px);

    box-sizing: border-box;

    display: grid;
    grid-template-columns: 1fr 1fr;

    border-radius: 10px;
    border: 1px solid ${Colors.LIGHT_11};
    background: ${Colors.LIGHT_5};
    box-shadow: 0px 2px 10px ${Colors.LIGHT_11};

    @media (max-width: 760px) {
      height: 100%;
      grid-template-columns: 1fr;
    }
  `,
}
