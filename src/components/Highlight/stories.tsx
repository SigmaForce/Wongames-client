import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

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
  args: {
    title: 'Red dead it`s back',
    subtitle: 'Come see John`s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/red-dead-img.jpg'
  },
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}

export const WithFloatImage: Story = {
  args: {
    title: 'Red dead it`s back',
    subtitle: 'Come see John`s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/red-dead-img.jpg',
    floatImage: '/img/red-dead-float.png'
  },
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}
