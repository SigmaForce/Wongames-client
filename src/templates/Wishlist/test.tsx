import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import Wishlist from '.'

import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

const props = {
  games: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/The Witcher 3: Wild Hunt/i)).toHaveLength(1)

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />
    )

    expect(
      screen.queryByText(/The Witcher 3: Wild Hunt/i)
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
