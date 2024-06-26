import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '@/utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Willian" />)
    expect(screen.getByText(/willian/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Willian" />)

    // open menu
    userEvent.click(screen.getByText(/willian/i))

    expect(screen.getByText(/my profile/i)).toBeInTheDocument()

    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toBeInTheDocument()
  })
})
