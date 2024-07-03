import { Favorite, ShoppingCart } from '@styled-icons/material-outlined'
import Button from '../Button'
import Heading from '../Heading'
import Ribbon from '../Ribbon'
import * as S from './styles'
import formatPrice from '@/utils/format-price'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}
const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading $lineBottom color="black">
      {title}
    </Heading>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <S.Description>{description}</S.Description>

    <S.ButtonWrapper>
      <Button icon={<ShoppingCart />} size="large">
        Add to cart
      </Button>

      <Button icon={<Favorite />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
