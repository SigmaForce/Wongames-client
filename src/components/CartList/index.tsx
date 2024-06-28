import Link from 'next/link'
import GameItem, { GameItemProps } from '../GameItem'
import * as S from './styles'
import Button from '../Button'
import Empty from '../Empty'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!items.length}>
    {items.length > 0 ? (
      <>
        {items.map((item) => (
          <GameItem key={item.title} {...item} />
        ))}
        <S.Footer>
          {!hasButton && <span>Total:</span>}
          <S.Total>{total}</S.Total>
          {hasButton && (
            <Link href="/cart">
              <Button as="button">Buy it now</Button>
            </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <>
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore games and offers"
          hasLink
        />
      </>
    )}
  </S.Wrapper>
)

export default CartList
