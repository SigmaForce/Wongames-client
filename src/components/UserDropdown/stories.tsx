import { Meta, StoryObj } from '@storybook/react'
import UserDropdown, { UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Stories = StoryObj<UserDropdownProps>

export const Default: Stories = {
  render: (args) => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <UserDropdown {...args} />
    </div>
  )
}

Default.args = {
  username: 'Leonardo'
}
