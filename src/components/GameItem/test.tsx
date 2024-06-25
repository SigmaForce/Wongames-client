import { screen } from '@testing-library/react'

import GameItem from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  img: 'https://www.gstatic.com/earth/social/03_knowledge_card_facebook-001.jpg',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the Item', () => {
    renderWithTheme(<GameItem {...props} />)

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

  it('should render the item with download link', () => {
    const downloadLink = 'https://link'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

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

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()

    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
