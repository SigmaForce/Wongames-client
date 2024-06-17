import { Meta, StoryObj } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

type Story = StoryObj

export const Default: Story = {
  args: {
    img: 'https://www.gstatic.com/earth/social/03_knowledge_card_facebook-001.jpg',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  render: (args) => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignIn {...args} />
    </div>
  )
}
