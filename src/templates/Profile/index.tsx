'use client'
import { Container } from '@/components/Container'
import Base from '../Base'
import * as S from './styles'
import Heading from '@/components/Heading'
import ProfileMenu from '@/components/ProfileMenu'
import { usePathname } from 'next/navigation'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const pathname = usePathname()

  return (
    <Base>
      <Container>
        <Heading $lineLeft $lineColor="secondary">
          My Profile
        </Heading>
        <S.Main>
          <ProfileMenu activeLink={pathname} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile
