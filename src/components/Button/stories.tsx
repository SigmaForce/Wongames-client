import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'Texto que será exibido dentro do Botão'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
  args: {
    children: 'Buy Now'
  },
  render: (args) => <Button {...args} />
}

export const withIcon: Story = {
  args: {
    size: 'small',
    children: 'Buy Now',
    icon: <AddShoppingCart />
  },
  render: (args) => <Button {...args} />
}
