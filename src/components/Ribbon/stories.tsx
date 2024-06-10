import { Meta, StoryObj } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  argTypes: {
    children: {
      type: 'string',
      description: 'Texto que será exibido dentro do Heading'
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      },
      description: 'Define a cor do Ribbon'
    },
    size: {
      control: {
        type: 'select',
        options: ['normal', 'small']
      },
      description: 'Define o tamanho do Ribbon'
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

type Story = StoryObj<RibbonProps>

export const Default: Story = {
  args: {
    children: 'Best Seller',
    color: 'primary',
    size: 'normal'
  },
  render: (args) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args} />
    </div>
  )
}
