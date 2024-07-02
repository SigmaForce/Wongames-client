import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import * as S from './styles'
import Button from '../Button'
import Ribbon, { RibbonColors, RibbonSize } from '../Ribbon'

export type GameCardProps = {
  slug?: string | null | undefined
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSize
}

const GameCard = ({
  developer,
  img,
  price,
  slug,
  title,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.Link href={`/game/${slug}`}>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </S.Link>

    <S.Content>
      <S.Link href={`/game/${slug}`}>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </S.Link>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
