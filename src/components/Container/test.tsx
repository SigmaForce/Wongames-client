import { render } from '@/utils/test-utils'
import { Container } from '.'
import theme from '@/styles/theme'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
