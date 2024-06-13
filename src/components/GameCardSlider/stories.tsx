import GameCardSlider, { GameCardSliderProps } from '.'
import items from './mock'

const meta: Meta<GameCardSliderProps> = {
  title: 'GameCardSlider',
  component: GameCardSlider,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['white', 'black']
      },
      description: 'Define a cor do logo'
    }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
}

export default meta

type Story = StoryObj<GameCardSliderProps>

export const Default: Story = {
  args: {
    items: items,
    color: 'black'
  },
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider {...args} />
    </div>
  )
}
