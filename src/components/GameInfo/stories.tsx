import { Meta, StoryObj } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'
import mockGame from './mock'
import { CartContextData } from '@/hooks/use-cart'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: mockGame,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<GameInfoProps> = {
  render: (args: GameInfoProps) => (
    <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
      <GameInfo {...args} />
    </div>
  )
}

export const IsInCart: StoryObj<GameInfoProps & CartContextData> = {
  render: (args: GameInfoProps) => (
    <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
      <GameInfo {...args} />
    </div>
  )
}

IsInCart.args = {
  isInCart: () => true
}
