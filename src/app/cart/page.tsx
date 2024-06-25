import Cart, { CartProps } from '@/templates/Cart'
import React from 'react'

import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'
import itemsMock from '@/components/CartList/mock'
import cardsMock from '@/components/PaymentOptions/mock'

export default function CartPage() {
  const cartData: CartProps = {
    items: itemsMock,
    total: 'R$ 430,00',
    cards: cardsMock,
    recommendedGames: gamesMock,
    recommendedHighlight: highlightMock
  }
  return <Cart {...cartData} />
}
