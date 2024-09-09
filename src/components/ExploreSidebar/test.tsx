import { render, screen, waitFor, act } from '@/utils/test-utils'
import ExploreSidebar from '.'

import items from './mock'
import userEvent from '@testing-library/user-event'

describe('<ExploreSidebar />', () => {
  it('should render the headings', () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    render(
      <ExploreSidebar
        items={items}
        initialValues={{
          platforms: ['windows'],
          sort_by: 'low-to-high'
        }}
        onFilter={jest.fn}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', async () => {
    const onFilter = jest.fn()

    render(
      <ExploreSidebar
        items={items}
        initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        platforms: ['windows'],
        sort_by: 'low-to-high'
      })
    })
  })

  it('should filter with checked values', async () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={items} onFilter={onFilter} />)
    act(() => {
      userEvent.click(screen.getByLabelText(/windows/i))
      userEvent.click(screen.getByLabelText(/linux/i))
      userEvent.click(screen.getByLabelText(/low to high/i))
    })
    // 1st render (initialValues) + 3 clicks

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledTimes(4)
      expect(onFilter).toHaveBeenCalledWith({
        platforms: ['windows', 'linux'],
        sort_by: 'low-to-high'
      })
    })
  })

  it('should altern between radio options', async () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByRole('radio', { name: /low to high/i }))
    userEvent.click(screen.getByRole('radio', { name: /high to low/i }))

    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledWith({
        sort_by: 'high-to-low'
      })
    })
  })
})
