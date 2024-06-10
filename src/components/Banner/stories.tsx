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
  render: (args: BannerProps) => <Banner {...args} />
}
