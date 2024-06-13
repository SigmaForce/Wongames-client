import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'
import item from './mock'
export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {
    title: {
      type: 'string',
      description: 'Titulo do Highlight'
    },
    subtitle: {
      type: 'string',
      description: 'Subtitulo do Highlight'
    },
    buttonLabel: {
      type: 'string',
      description: 'Texto do Botão'
    },
    buttonLink: {
      type: 'string',
      description: 'Link de Redirecionamento do botão'
    },
    backgroundImage: {
      type: 'string',
      description: 'Link da imagem de background'
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

type Story = StoryObj<HighlightProps>

export const Default: Story = {
  args: { ...item },
  render: (args: HighlightProps) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}

export const WithFloatImage: Story = {
  args: { ...item },
  render: (args: HighlightProps) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}
