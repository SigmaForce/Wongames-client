import { screen } from '@testing-library/react'
import '../../../.jest/match-media-mock'
import GameCardSlider from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const items = [
  {
    title: 'The Witcher 3: Wild Hunt',
    developer: 'CD Projekt Red',
    img: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    price: 'R$ 199,00',
    promotionalPrice: 'R$ 179,00'
  },
  {
    title: 'Cyberpunk 2077',
    developer: 'CD Projekt Red',
    img: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    price: 'R$ 250,00',
    promotionalPrice: 'R$ 230,00'
  },
  {
    title: "Assassin's Creed Valhalla",
    developer: 'Ubisoft',
    img: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',
    price: 'R$ 270,00',
    promotionalPrice: 'R$ 250,00'
  },
  {
    title: 'Horizon Zero Dawn',
    developer: 'Guerrilla Games',
    img: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    price: 'R$ 210,00',
    promotionalPrice: 'R$ 190,00'
  },
  {
    title: 'Ghost of Tsushima',
    developer: 'Sucker Punch Productions',
    img: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
    price: 'R$ 260,00',
    promotionalPrice: 'R$ 240,00'
  },
  {
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    img: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',
    price: 'R$ 280,00',
    promotionalPrice: 'R$ 260,00'
  }
]

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
