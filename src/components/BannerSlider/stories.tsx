import { Meta, StoryObj } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'
import items from './mock'

const meta: Meta<BannerSliderProps> = {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}

export default meta

type Story = StoryObj<BannerSliderProps>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  )
}
