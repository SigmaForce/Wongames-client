'use client'
import { BannerProps } from '@/components/Banner'
import { GameCardProps } from '@/components/GameCard'
import { HighlightProps } from '@/components/Highlight'

import { Container } from '@/components/Container'
import BannerSlider from '@/components/BannerSlider'

import * as S from './styles'
import Showcase from '@/components/Showcase'
import Base from '../Base'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
  newGamesTitle: string
  mostPopularGamesTitle: string
  upcommingGamesTitle: string
  freeGamesTitle: string
}

const Home = ({
  banners,
  newGames,
  newGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  mostPopularGamesTitle,
  upcommingGames,
  upcommingGamesTitle,
  upcommingHighligth,
  freeGames,
  freeGamesTitle,
  freeHighligth
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcommingGamesTitle}
      games={upcommingGames}
      highlight={upcommingHighligth}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighligth}
      games={freeGames}
    />
  </Base>
)

export default Home
