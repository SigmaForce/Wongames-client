import Wishlist, { WishlistTemplateProps } from '@/templates/Wishlist'
import React from 'react'

import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

export default async function WishlistPage() {
  const gameData: WishlistTemplateProps = {
    games: gamesMock,
    recommendedGames: gamesMock,
    recommendedHighlight: highlightMock
  }
  return <Wishlist {...gameData} />
}
