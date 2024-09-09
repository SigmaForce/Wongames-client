import { Meta, StoryObj } from '@storybook/react'
import CartDropdown from '.'
import items from '@/components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,

  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj

export const Default: Story = {
  render: (args) => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown {...args} />
    </div>
  )
}

Default.args = {
  cartContextValue: {
    items,
    quantity: items.length,
    total: 'R$ 330,00'
  }
}

export const Empty: Story = {
  render: () => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown />
    </div>
  )
}
