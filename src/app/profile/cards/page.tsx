import CardsList from '@/components/CardsList'

import React from 'react'

import mockCards from '@/components/PaymentOptions/mock'

export default function CardsPage() {
  const cards = mockCards
  return <CardsList cards={cards} />
}
