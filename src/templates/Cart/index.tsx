'use client'
import { Container } from '@/components/Container'
import Base from '../Base'
import Heading from '@/components/Heading'
import Showcase from '@/components/Showcase'
import { GameCardProps } from '@/components/GameCard'
import { HighlightProps } from '@/components/Highlight'
import { Divider } from '@/components/Divider'
import CartList, { CartListProps } from '@/components/CartList'

import * as S from './styles'
import PaymentOptions, {
  PaymentOptionsProps
} from '@/components/PaymentOptions'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedTitle?: string
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedTitle = 'You may like these games',
  recommendedHighlight,
  cards
}: CartProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading $lineLeft $lineColor="secondary">
          My cart
        </Heading>
        <S.Content>
          <CartList />
          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>
        <Divider />
      </Container>
      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}
export default Cart
