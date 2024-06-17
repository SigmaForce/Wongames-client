import { Meta, StoryObj } from '@storybook/react'
import Showcase, { ShowcaseProps } from '.'
import HighlightMock from '@/components/Highlight/mock'
import GamesMock from '@/components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (StoryObj) => (
      <div style={{ margin: '0 auto' }}>
        <StoryObj />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<ShowcaseProps>

export const Default: Story = {
  render: (args: ShowcaseProps) => <Showcase {...args} />
}

Default.args = {
  title: 'Most Popular',
  highlight: HighlightMock,
  games: GamesMock
}

export const WithoutTitle: Story = {
  render: (args: ShowcaseProps) => <Showcase {...args} />
}

WithoutTitle.args = {
  highlight: HighlightMock,
  games: GamesMock
}

export const WithoutHighlight: Story = {
  render: (args: ShowcaseProps) => <Showcase {...args} />
}

WithoutHighlight.args = {
  title: 'Most Popular',
  games: GamesMock
}

export const WithoutGames: Story = {
  render: (args: ShowcaseProps) => <Showcase {...args} />
}

WithoutGames.args = {
  title: 'Most Popular',
  highlight: HighlightMock
}
