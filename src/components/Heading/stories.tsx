import { Meta, StoryObj } from '@storybook/react'
import Heading, { HeadingProps } from '.'

const meta: Meta<HeadingProps> = {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Texto que será exibido dentro do Heading'
    },
    color: {
      control: {
        type: 'select',
        options: ['white', 'black']
      },
      description: 'Define a cor do texto'
    },
    $lineBottom: {
      control: {
        type: 'boolean'
      },
      description: 'Decorators para sublinhado abaixo do texto'
    },
    $lineLeft: {
      control: {
        type: 'boolean'
      },
      description: 'Decorators para espaço a esquerda'
    },
    lineColor: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      },
      description: 'Define a cor da barra'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium']
      },
      description: 'Define o tamanho do texto'
    }
  }
}

export default meta

type Story = StoryObj<HeadingProps>

export const Default: Story = {
  args: {
    children: 'Most Populars',
    color: 'white',
    $lineBottom: false,
    $lineLeft: false,
    lineColor: 'primary',
    size: 'medium'
  },
  render: (args) => <Heading {...args} />
}
