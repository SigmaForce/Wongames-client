import { Meta, StoryObj } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    img: {
      control: 'text',
      description: 'url da imagem do Banner'
    },
    title: {
      control: 'text',
      description: 'Titulo do Banner'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitulo do Banner'
    },
    buttonLabel: {
      control: 'text',
      description: 'Botão de ação do Banner'
    },
    buttonLink: {
      control: 'text',
      description: 'Link do botão'
    },
    ribbon: {
      type: 'string',
      description: 'Titulo do Ribbon'
    },
    ribbonColor: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      },
      description: 'Define a cor do Ribbon'
    },
    ribbonSize: {
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

type Story = StoryObj<BannerProps>

export const Default: Story = {
  args: {
    img: 'https://www.gstatic.com/earth/social/03_knowledge_card_facebook-001.jpg',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  render: (args: BannerProps) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}

export const WithRibbon: Story = {
  args: {
    img: 'https://www.gstatic.com/earth/social/03_knowledge_card_facebook-001.jpg',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  },
  render: (args: BannerProps) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}
