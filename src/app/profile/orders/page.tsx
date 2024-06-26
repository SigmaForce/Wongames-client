import React from 'react'

import OrdersList from '@/components/OrdersList'
import mockOrder from '@/components/OrdersList/mock'

export default function CardsPage() {
  return <OrdersList items={mockOrder} />
}
