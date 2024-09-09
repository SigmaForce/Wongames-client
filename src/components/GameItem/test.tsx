import { render, screen, waitFor } from '@/utils/test-utils'

import GameItem from '.'
import { CartContextDefaultValues } from '@/hooks/use-cart'
import userEvent from '@testing-library/user-event'

const props = {
  id: '1',
  img: 'https://www.gstatic.com/earth/social/03_knowledge_card_facebook-001.jpg',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the Item', () => {
    render(<GameItem {...props} />)

    //verificar o title se foi renderizado
    expect(
      screen.getByRole('heading', { name: /Red Dead Redemption 2/i })
    ).toBeInTheDocument()
    //verificar a imagem se ele foi renderizado
    expect(
      screen.getByRole('img', { name: /Red Dead Redemption 2/i })
    ).toHaveAttribute('src', props.img)
    //verificar se o preço foi renderizado
    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render remove if the item is inside the cart and call remove', async () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }
    render(<GameItem {...props} />, { cartProviderProps })
    const removeLink = screen.getByText(/remove/i)
    expect(removeLink).toBeInTheDocument()

    userEvent.click(removeLink)
    await waitFor(() => {
      expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
    })
  })

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'

    render(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the paymentinfo', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()

    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
