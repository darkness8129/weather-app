import { css } from '@emotion/react'

export const styles = {
  container: css`
    width: 100%;
    box-sizing: border-box;

    padding: 20px;

    display: flex;
    align-items: center;
    flex-direction: column;
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
}
