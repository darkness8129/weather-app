import { keyframes } from '@emotion/react'

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
