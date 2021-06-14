import { css } from '@emotion/react'
import { Colors } from '~/emotion'

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
  `,

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
}
