import { css } from '@emotion/react'
import { Colors } from '~/emotion'

export const styles = {
  container: css`
    height: 55px;
    box-sizing: border-box;
    padding: 14px 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    align-content: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    color: ${Colors.DARK_2};
    background: ${Colors.LIGHT_1};
    border-bottom: 1px solid ${Colors.LIGHT_11};

    & > span {
      display: flex;
      align-items: center;
    }
  `,
}
