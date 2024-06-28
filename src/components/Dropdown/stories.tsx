import { Meta, StoryObj } from '@storybook/react'
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<DropdownProps>

export const Default: Story = {
  render: (args) => <Dropdown {...args} />
}

Default.args = {
  title: 'Click here',
  children: 'content'
}
