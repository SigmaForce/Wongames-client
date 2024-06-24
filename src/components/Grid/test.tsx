import { renderWithTheme } from '@/utils/tests/helpers'
import { Grid } from '.'

describe('<Grid />', () => {
  it('should render the Grid', () => {
    const { container } = renderWithTheme(<Grid>Children</Grid>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
