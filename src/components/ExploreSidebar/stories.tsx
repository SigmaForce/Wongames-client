import { Meta, StoryObj } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items
  }
} as Meta

type Story = StoryObj<ExploreSidebarProps>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <ExploreSidebar {...args} />
    </div>
  )
}
