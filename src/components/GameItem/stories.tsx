import { Meta, StoryObj } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://www.gstatic.com/earth/social/03_knowledge_card_facebook-001.jpg',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

type Story = StoryObj<GameItemProps>

export const Default: Story = {
  render: (args) => <GameItem {...args} />
}

export const WithPayments: Story = {
  render: (args) => <GameItem {...args} />
}

WithPayments.args = {
  downloadLink: 'https://wongames.com/game/download/123456',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
