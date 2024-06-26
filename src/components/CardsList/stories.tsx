import { Meta, StoryObj } from '@storybook/react'
import CardsList, { CardsListProps } from '.'
import cardsMock from '@/components/PaymentOptions/mock'

export default {
  title: 'CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} as Meta

type Story = StoryObj<CardsListProps>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <CardsList {...args} />
    </div>
  )
}
