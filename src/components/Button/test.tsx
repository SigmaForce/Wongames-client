import { render, screen } from '@/utils/test-utils'
import Button from '.'

import { AddShoppingCart } from '@styled-icons/material-outlined'
import { debug } from 'console'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a full width version', () => {
    render(<Button fullWidth>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a minimal version', () => {
    render(<Button minimal>Buy Now</Button>)
    debug()
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'color',
      '#F231A5'
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none'
    )

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render an button with icon', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>
    )
    expect(screen.getByText(/Buy Now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link" icon={<AddShoppingCart data-testid="icon" />}>
        Buy Now
      </Button>
    )

    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render a disabled button', () => {
    render(<Button disabled>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
