import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

import Ribbon, { RibbonColors, RibbonSize } from '../Ribbon'
import formatPrice from '@/utils/format-price'
import CartButton from '../CartButton'

import * as S from './styles'

export type GameCardProps = {
  id: string
  slug?: string | null | undefined
  title: string
  developer: string
  img: string | null
  price: number
  promotionalPrice?: number
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSize
}

const GameCard = ({
  id,
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
}: GameCardProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <S.Link href={`/game/${slug}`}>
        <S.ImageBox>
          <img src={img!} alt={title} />
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
          {!!promotionalPrice && (
            <S.Price isPromotional>{formatPrice(price)}</S.Price>
          )}
          <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
          <CartButton id={id} />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
