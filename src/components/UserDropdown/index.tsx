import {
  AccountCircle,
  ExitToApp,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular'

import Dropdown from '../Dropdown'

import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <S.Link href="/profile/me">
        <AccountCircle />
        <span>My profile</span>
      </S.Link>

      <S.Link href="/wishlist" title="Wishlist">
        <FavoriteBorder />
        <span>Wishlist</span>
      </S.Link>

      <S.Link href="/logout" title="Sign out">
        <ExitToApp />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
