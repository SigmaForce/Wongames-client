import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'
import { CartContextData } from '@/hooks/use-cart'

export default {
  title: 'GameCard',
  component: GameCard,
  argTypes: {
    title: {
      type: 'string',
      description: 'Titulo do Jogo'
    },
    developer: {
      type: 'string',
      description: 'Desenvolvedora do Jogo'
    },
    img: {
      type: 'string',
      description: 'Link P/ Imagem do Jogo'
    },
    price: {
      type: 'number',
      description: 'Preço do Jogo'
    },
    promotionalPrice: {
      type: 'number',
      description: 'Preço promocional do Jogo'
    },
    onFav: {
      action: 'click'
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
  }
} as Meta

type Story = StoryObj<GameCardProps & CartContextData>

export const Default: Story = {
  args: {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://www.gstatic.com/earth/social/03_knowledge_card_facebook-001.jpg',
    price: 235,
    promotionalPrice: 200
  },
  render: (args: GameCardProps) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const IsInCart: Story = {
  args: {
    isInCart: () => true,
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://www.gstatic.com/earth/social/03_knowledge_card_facebook-001.jpg',
    price: 235,
    promotionalPrice: 200
  },
  render: (args: GameCardProps) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const WithRibbon: Story = {
  args: {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://www.gstatic.com/earth/social/03_knowledge_card_facebook-001.jpg',
    price: 235,
    promotionalPrice: 200,
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  },
  render: (args: GameCardProps) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}
