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
    height: calc(100vh - 150px);

    box-sizing: border-box;

    display: flex;
    justify-content: center;

    border-radius: 10px;
    border: 1px solid ${Colors.LIGHT_11};
    background: ${Colors.LIGHT_5};
    box-shadow: 0px 2px 10px ${Colors.LIGHT_11};
  `,

  coordinates: css`
    width: 50%;

    padding: 20px;

    display: flex;
    justify-content: center;

    border-right: 1px solid ${Colors.LIGHT_11};
  `,

  city: css`
    width: 50%;

    padding: 20px;

    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  subtitle: css`
    color: ${Colors.DARK_2};
  `,

  search: {
    container: css`
      width: 100%;

      display: flex;
      align-items: center;
    `,

    radio: css`
      width: 20%;
      margin-right: 20px;
    `,

    input: css`
      width: 50%;

      margin-right: 20px;
    `,

    button: css`
      width: 30%;
    `,
  },
}
