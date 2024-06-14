import { screen } from '@testing-library/react'
import Auth from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // Verifiquem se tem 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    // Verifiquem se  tem o Heading Principal
    expect(
      screen.getByRole('heading', { name: /All your favorites/i })
    ).toBeInTheDocument()
    // Verifiquem se tem o subtitle
    expect(
      screen.getByRole('heading', { name: /the best/i })
    ).toBeInTheDocument()
    // Verificar se tem o title do content
    expect(
      screen.getByRole('heading', { name: /Auth Title/i })
    ).toBeInTheDocument()
    // Verificar se o children ta sendo Renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
