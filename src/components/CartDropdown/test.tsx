import { screen } from '@testing-library/react'

import CartDropdown from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

import items from '@/components/CartList/mock'

describe('<CartDropdown />', () => {
  it('should render the <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown items={items} total="R$ 300,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()

    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown with cart items and total', () => {
    renderWithTheme(<CartDropdown items={items} total="R$ 300,00" />)

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()

    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
