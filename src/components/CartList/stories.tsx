import { Meta, StoryObj } from '@storybook/react'
import CartList from '.'

import items from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValue: {
      type: 'string'
    },
    items: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  )
}

Default.args = {
  cartContextValue: { items },
  total: 'R$ 330,00'
}

export const WithButton: Story = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} hasButton />
    </div>
  )
}

WithButton.args = {
  cartContextValue: { items },
  total: 'R$ 330,00'
}

export const Empty: Story = {
  render: () => (
    <div style={{ maxWidth: 800 }}>
      <CartList />
    </div>
  )
}
