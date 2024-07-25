import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import bannerMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  newGamesTitle: 'New Games',
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  mostPopularGamesTitle: 'Most Popular Games',
  upcommingGames: [gamesMock[0]],
  upcommingGamesTitle: 'Upcomming Games',
  upcommingHighligth: highlightMock,
  freeGames: [gamesMock[0]],
  freeGamesTitle: 'Free Games',
  freeHighligth: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render banner and showcase', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
  })
})
