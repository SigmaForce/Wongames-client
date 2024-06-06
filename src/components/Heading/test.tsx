import { render, screen } from '@testing-library/react'

describe('<Heading />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()
  })
})
