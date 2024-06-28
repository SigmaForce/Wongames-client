import { Meta, StoryObj } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<MenuProps>

export const Default: Story = {
  render: (args) => <Menu {...args} />
}

export const Logged: Story = {
  render: (args) => <Menu {...args} />
}

Logged.args = {
  username: 'Leonardo'
}
