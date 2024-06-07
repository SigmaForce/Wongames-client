import { Meta, StoryObj } from '@storybook/react'

import MediaMatch from '.'

const meta: Meta<typeof MediaMatch> = {
  title: 'MediaMatch',
  component: MediaMatch
}

export default meta

type Story = StoryObj<typeof MediaMatch>

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    lessThan: 'medium' // Exemplo de largura em breakpoint
  },
  render: (args) => <MediaMatch {...args}>Only on Mobile</MediaMatch>
}

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  },
  args: {
    greaterThan: 'medium' // Exemplo de largura em breakpoint
  },
  render: (args) => <MediaMatch {...args}>Only on Desktop</MediaMatch>
}
