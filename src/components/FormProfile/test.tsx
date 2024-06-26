import { screen } from '@testing-library/react'

import FormProfile from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<FormProfile />', () => {
  it('should render the Profile form', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/Type your password/i)
    ).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/New password/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
