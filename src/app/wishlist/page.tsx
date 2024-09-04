/* eslint-disable @typescript-eslint/no-explicit-any */
import Wishlist, { WishlistTemplateProps } from '@/templates/Wishlist'
import React from 'react'

import gamesMock from '@/components/GameCardSlider/mock'
import { initializeApollo } from '@/utils/apollo'

import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended'
import { gamesMapper, highlightMapper } from '@/utils/mappers/index'

export default async function WishlistPage() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<any>({
    query: QUERY_RECOMMENDED
  })

  const gameData: WishlistTemplateProps = {
    games: gamesMock,
    recommendedTitle: data.recommended.data.attributes.section.title,
    recommendedGames: gamesMapper(
      data.recommended.data.attributes.section.games
    ),
    recommendedHighlight: highlightMapper(
      data.recommended.data.attributes.section.highlight
    )
  }
  return <Wishlist {...gameData} />
}
