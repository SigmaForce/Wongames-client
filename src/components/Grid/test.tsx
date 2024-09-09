import { render } from '@/utils/test-utils'
import { Grid } from '.'

describe('<Grid />', () => {
  it('should render the Grid', () => {
    const { container } = render(<Grid>Children</Grid>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
