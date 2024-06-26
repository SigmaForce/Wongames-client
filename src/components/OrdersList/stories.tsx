import { Meta, StoryObj } from '@storybook/react'
import OrdersList, { OrdersListProps } from '.'

import itemsMock from './mock'

export default {
  title: 'OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock
  }
} as Meta

type Story = StoryObj<OrdersListProps>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <OrdersList {...args} />
    </div>
  )
}
