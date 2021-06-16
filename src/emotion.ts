import { keyframes, css } from '@emotion/react'

// standardized dimensions for adaptive markup (mobile, tablet, etc)
export const breakpoints = {
  mobile: `@media (max-width: 576px)`,
  tablet: `@media (max-width: 992px)`,
  pc: `@media (max-width: 1200px)`,
}

// spinning animation for loading icon
export const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

// colors for whole app
export enum Colors {
  DARK_1 = 'rgba(21, 31, 38, 0.75)',
  DARK_2 = 'rgba(21, 31, 38, 0.85)',
  DARK_3 = 'rgba(21, 31, 38, 0.3)',
  DARK_4 = '#151f26',
  DARK_5 = 'rgba(21, 31, 38, 0.35)',
  DARK_6 = 'rgba(21, 31, 38, 0.4)',
  DARK_7 = '#73797d',
  DARK_8 = '#8a8f93',

  LIGHT_1 = '#ffffff',
  LIGHT_2 = 'rgba(21, 31, 38, 0.03)',
  LIGHT_3 = 'rgba(255, 255, 255, 0.05)',
  LIGHT_4 = 'rgba(255, 255, 255, 0.1)',
  LIGHT_5 = 'rgba(255, 255, 255, 0.85)',
  LIGHT_6 = 'rgba(255, 255, 255, 0.3)',
  LIGHT_7 = 'rgba(248, 248, 248, 0.5)',
  LIGHT_8 = '#fbfbfb',
  LIGHT_9 = 'rgba(21, 31, 38, 0.01)',
  LIGHT_10 = '#f6f7fa',
  LIGHT_11 = 'rgba(21, 31, 38, 0.1)',
  LIGHT_12 = 'rgba(21, 31, 38, 0.03)',
  LIGHT_13 = 'rgba(0, 0, 0, 0.03)',
  LIGHT_15 = '#eff1f5',

  ACCENT_1 = '#8429f2',
  ACCENT_2 = '#903ff2',
  ACCENT_3 = '#a869f5',

  ERROR_1 = '#ef5350',
  ERROR_2 = '#ffcdd2',
}

// global styles
export const global = css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Montserrat;
  }
  body {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    background: #ffffff;
  }
  input[type='text'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local(''),
      url(${require('~/assets/montserrat/montserrat-v15-latin-regular.woff2')})
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${require('~/assets/montserrat/montserrat-v15-latin-regular.woff')})
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-500 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local(''),
      url(${require('~/assets/montserrat/montserrat-v15-latin-500.woff2')})
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${require('~/assets/montserrat/montserrat-v15-latin-500.woff')})
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-600 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local(''),
      url(${require('~/assets/montserrat/montserrat-v15-latin-600.woff2')})
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${require('~/assets/montserrat/montserrat-v15-latin-600.woff')})
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: local(''),
      url(${require('~/assets/montserrat/montserrat-v15-latin-700.woff2')})
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${require('~/assets/montserrat/montserrat-v15-latin-700.woff')})
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-800 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: local(''),
      url(${require('~/assets/montserrat/montserrat-v15-latin-800.woff2')})
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${require('~/assets/montserrat/montserrat-v15-latin-800.woff')})
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`
