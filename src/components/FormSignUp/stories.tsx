import { Meta, StoryObj } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignUp />
    </div>
  )
}
