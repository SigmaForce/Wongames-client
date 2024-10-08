import { render, screen, waitFor } from '@/utils/test-utils'

import PaymentOptions from '.'

import cards from './mock'
import userEvent from '@testing-library/user-event'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    render(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should render select card when clicking on the label', async () => {
    render(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    userEvent.click(screen.getByLabelText(/4325/))

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/i })).toBeChecked()
    })
  })

  it('it should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()
    render(<PaymentOptions cards={cards} handlePayment={handlePayment} />)

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('it should call handlePayment when credit card', async () => {
    const handlePayment = jest.fn()
    render(<PaymentOptions cards={cards} handlePayment={handlePayment} />)

    userEvent.click(screen.getByLabelText(/4325/))

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
