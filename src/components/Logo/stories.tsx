import { Meta, StoryObj } from '@storybook/react'
import Logo, { LogoProps } from '.'

const meta: Meta<LogoProps> = {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['white', 'black']
      },
      description: 'Define a cor do logo'
    },
    size: {
      control: {
        type: 'select',
        options: ['normal', 'large']
      },
      description: 'Define o tamanho do logo'
    },
    $hideOnMobile: {
      control: {
        type: 'boolean'
      },
      description: 'Esconde o logo em dispositivos móveis'
    }
  }
}

export default meta

type Story = StoryObj<LogoProps>

export const Default: Story = {
  args: {
    color: 'white',
    size: 'normal',
    $hideOnMobile: false
  },
  render: (args) => <Logo {...args} />
}
