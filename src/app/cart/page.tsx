/* eslint-disable @typescript-eslint/no-explicit-any */
import Cart, { CartProps } from '@/templates/Cart'
import React from 'react'

import cardsMock from '@/components/PaymentOptions/mock'
import { initializeApollo } from '@/utils/apollo'
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended'
import { gamesMapper, highlightMapper } from '@/utils/mappers/index'

export default async function CartPage() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<any>({
    query: QUERY_RECOMMENDED
  })

  const cartData: CartProps = {
    cards: cardsMock,
    recommendedTitle: data.recommended.data.attributes.section.title,
    recommendedGames: gamesMapper(
      data.recommended.data.attributes.section.games
    ),
    recommendedHighlight: highlightMapper(
      data.recommended.data.attributes.section.highlight
    )
  }
  return <Cart {...cartData} />
}
