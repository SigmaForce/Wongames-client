import * as S from './styles'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <S.Link
      href="/profile/me"
      isActive={activeLink === '/profile/me'}
      title="My profile"
    >
      <AccountCircle size={24} />
      <span>My Profile</span>
    </S.Link>

    <S.Link
      href="/profile/cards"
      isActive={activeLink === '/profile/cards'}
      title="My Cards"
    >
      <CreditCard size={24} />
      <span>My Cards</span>
    </S.Link>

    <S.Link
      href="/profile/orders"
      isActive={activeLink === '/profile/orders'}
      title="My Orders"
    >
      <FormatListBulleted size={24} />
      <span>My Orders</span>
    </S.Link>

    <S.Link href="/logout" title="Sign out">
      <ExitToApp size={24} />
      <span>Sign out</span>
    </S.Link>
  </S.Nav>
)

export default ProfileMenu
