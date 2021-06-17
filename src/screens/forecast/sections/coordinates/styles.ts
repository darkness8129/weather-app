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

  buttons: css`
    width: 100%;

    display: flex;
    justify-content: flex-start;
  `,
}
