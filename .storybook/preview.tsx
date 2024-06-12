import React from 'react'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import { Preview } from '@storybook/react'

export const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'won-light',
      values: [
        {
          name: 'won-light',
          value: theme.colors.white
        },
        {
          name: 'won-dark',
          value: theme.colors.mainBg
        }
      ]
    }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
