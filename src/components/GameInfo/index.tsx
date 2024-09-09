import { Favorite } from '@styled-icons/material-outlined'
import Button from '../Button'
import Heading from '../Heading'
import Ribbon from '../Ribbon'
import * as S from './styles'
import formatPrice from '@/utils/format-price'
import CartButton from '../CartButton'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}
const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading $lineBottom color="black">
      {title}
    </Heading>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <S.Description>{description}</S.Description>

    <S.ButtonWrapper>
      <CartButton id={id} size="large" hasText />
      <Button icon={<Favorite />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
