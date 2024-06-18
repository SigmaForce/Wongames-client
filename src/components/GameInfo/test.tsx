import { screen } from '@testing-library/react'

import GameInfo from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  title: 'My Game title',
  description: 'Game Descriptions',
  price: '210.00'
}

describe('<GameInfo />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameInfo {...props} />)

    //esperar por um heading
    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument()
    //esperar por description
    expect(screen.getByText(/Game Descriptions/i)).toBeInTheDocument()
    //esperar pelo preço
    expect(screen.getByText('$210.00')).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)
    //esperar button add to cart
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    //esperar button wishlist
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
