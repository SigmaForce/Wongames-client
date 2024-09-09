import { render, screen } from '@/utils/test-utils'
import GameInfo from '.'

const props = {
  id: '1',
  title: 'My Game title',
  description: 'Game Descriptions',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render the heading', () => {
    render(<GameInfo {...props} />)

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
    render(<GameInfo {...props} />)
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
