import { Meta, StoryObj } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignIn />
    </div>
  )
}
