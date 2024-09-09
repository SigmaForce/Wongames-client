import { render, screen } from '@/utils/test-utils'

import ProfileMenu from '.'

import theme from '@/styles/theme'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = render(<ProfileMenu />)

    expect(screen.getByText(/My Profile/i)).toBeInTheDocument()
    expect(screen.getByText(/My Cards/i)).toBeInTheDocument()
    expect(screen.getByText(/My orders/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
