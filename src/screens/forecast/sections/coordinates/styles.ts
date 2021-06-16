import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  container: css`
    width: 50%;

    padding: 20px;

    display: flex;
    align-items: center;
    flex-direction: column;

    border-right: 1px solid ${Colors.LIGHT_11};
  `,

  subtitle: css`
    color: ${Colors.DARK_2};
  `,

  forecast: css`
    height: 100%;

    display: flex;
    align-items: center;

    overflow: hidden;
  `,

  cards: css`
    height: 100%;
    overflow: scroll;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    & > div {
      margin: 0 20px 20px 0;

      &:nth-of-type(3),
      &:nth-of-type(5) {
        margin-right: 0;
      }
    }
  `,

  buttons: css`
    width: 100%;

    display: flex;
    justify-content: flex-start;
  `,
}
