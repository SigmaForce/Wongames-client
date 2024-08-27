import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'
import { MockedProvider } from '@apollo/client/testing'
import filterItemsMock from '@/components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock } from './mocks'

import Games from '.'
import userEvent from '@testing-library/user-event'
import apolloCache from '@/utils/apolloCache'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    //it starts without data
    //shows loading
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    //we wait until we have data to get the elements
    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByText('Wizardry 6+7')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText('Wizardry 6+7')).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(
      await screen.findByText('Fallout: New Vegas Ultimate Edition')
    ).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })
})
