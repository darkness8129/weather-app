import { css } from '@emotion/react'
import { Colors, breakpoints } from '~/emotion'

export const styles = {
  container: css`
    padding: 15px 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0px 2px 5px ${Colors.LIGHT_11};
  `,

  logo: css`
    padding: 5px;

    font-size: 18px;
    font-weight: 500;
    color: ${Colors.DARK_2};

    border-radius: 5px;
    background-color: ${Colors.LIGHT_11};

    & > span {
      font-weight: bold;
      color: ${Colors.ACCENT_2};
    }
  `,

  navigation: css`
    display: flex;
    align-items: center;

    ${breakpoints.mobile} {
      display: none;
    }
  `,

  mobile: {
    animation: css`
      opacity: 1;
      margin-top: 0px;
    `,

    container: css`
      display: none;
      position: fixed;
      top: 78px;
      width: 100%;

      margin-top: -400px;
      padding: 10px 30px;

      background: ${Colors.LIGHT_1};
      transition: all 0.7s ease;
      box-shadow: 0px 10px 5px ${Colors.LIGHT_11};

      opacity: 0.5;
      z-index: 3;

      ${breakpoints.tablet} {
        display: flex;
        box-sizing: border-box;
      }
    `,

    menu: css`
      width: 100%;

      ${breakpoints.mobile} {
        display: flex;
        flex-direction: column;
      }
    `,

    item: css`
      display: block;
      margin-bottom: 20px;

      font-size: 18px;
    `,
  },

  item: {
    base: css`
      margin-right: 20px;

      font-weight: 600;
      text-decoration: none;
      color: ${Colors.DARK_1};
    `,

    active: css`
      text-decoration: underline;
      color: ${Colors.ACCENT_1};
    `,
  },

  mobileHamburger: css`
    display: none;

    ${breakpoints.mobile} {
      display: block;
    }
  `,
}
