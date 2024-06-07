import { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'Texto que será exibido dentro do Botão'
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
