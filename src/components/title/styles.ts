import { css } from '@emotion/react'
import { Colors, breakpoints } from '~/emotion'

export const styles = {
  title: css`
    padding: 20px 0;
    margin: 0;
    box-sizing: border-box;

    text-align: center;
    font-family: Montserrat, sans-serif;
    font-style: bold;
    font-size: 48px;
    line-height: 40px;
    color: ${Colors.DARK_2};
    text-shadow: 3px 1px 0px ${Colors.DARK_5};

    ${breakpoints.mobile} {
      font-size: 30px;
      line-height: 30px;
    }
  `,
}
