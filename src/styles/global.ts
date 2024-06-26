'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px)
    }
    
    body {
      background-color: ${theme.colors.mainBg};
      font-family: ${theme.font.family}
      font-size: ${theme.font.sizes.medium}
    }
  `}

`

export default GlobalStyles
