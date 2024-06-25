import { Meta, StoryObj } from '@storybook/react'
import PaymentOptions, { PaymentOptionsProps } from '.'

import cardsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    handlePayment: {
      action: 'clicked'
    }
  }
} as Meta

type Story = StoryObj<PaymentOptionsProps>

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 400 }}>
      <PaymentOptions {...args} />
    </div>
  )
}
