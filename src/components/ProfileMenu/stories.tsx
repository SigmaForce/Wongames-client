import { Meta, StoryObj } from '@storybook/react'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<ProfileMenuProps>

export const Default: Story = {
  render: (args) => <ProfileMenu {...args} />
}
