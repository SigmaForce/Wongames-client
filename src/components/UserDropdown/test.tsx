import { render, screen } from '@/utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Willian" />)
    expect(screen.getByText(/willian/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Willian" />)

    // open menu
    userEvent.click(screen.getByText(/willian/i))

    expect(screen.getByText(/my profile/i)).toBeInTheDocument()

    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toBeInTheDocument()
  })
})
