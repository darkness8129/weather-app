import { css } from '@emotion/react'

export const styles = {
  container: css`
    width: 100%;
    height: calc(100vh - 62px);

    @media (max-width: 760px) {
      height: 100%;
    }
  `,
}
