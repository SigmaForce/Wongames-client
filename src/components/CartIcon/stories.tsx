import { Meta, StoryObj } from '@storybook/react'
import CartIcon, { CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<CartIconProps>

export const Default: Story = {
  render: () => <CartIcon />
}

export const WithIcon: Story = {
  render: (args) => <CartIcon {...args} />
}

WithIcon.args = {
  quantity: 3
}
