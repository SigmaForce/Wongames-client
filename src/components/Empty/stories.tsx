import { Meta, StoryObj } from '@storybook/react'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<EmptyProps> = {
  render: (args) => <Empty {...args} />
}

Default.args = {
  title: 'Your Wishlist is empty',
  description: 'Games added to your wishlist will appear here',
  hasLink: true
}
