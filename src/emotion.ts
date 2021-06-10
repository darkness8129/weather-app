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
    background-color: #ffffff;
    background: #f8f8f8;
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
