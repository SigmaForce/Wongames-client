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
    <div style={{ padding: 16, maxWidth: 320 }}>
      <ExploreSidebar {...args} />
    </div>
  )
}

export const WithInitialValues: Story = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 320 }}>
      <ExploreSidebar
        {...args}
        initialValues={{
          platforms: ['windows', 'linux'],
          sort_by: 'low-to-high'
        }}
      />
    </div>
  )
}
