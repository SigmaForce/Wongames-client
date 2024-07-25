import Home, { HomeTemplateProps } from '@/templates/Home'

import { initializeApollo } from '@/utils/apollo'
import {
  QueryHomeQuery,
  QueryHomeQueryVariables
} from '@/graphql/generated/index'
import { QUERY_HOME } from '@/graphql/queries/home'
import { BannerProps } from '@/components/Banner'
import { HighlightProps } from '@/components/Highlight'
import { bannerMapper, gamesMapper, highlightMapper } from '@/utils/mappers'
import { GameCardProps } from '@/components/GameCard'

export const revalidate = 60

export default async function Index() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)
  const {
    data: { banners, newGames, upcommingGames, freeGames, sections }
  } = await apolloClient.query<QueryHomeQuery, QueryHomeQueryVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY }
  })

  const props: HomeTemplateProps = {
    banners: bannerMapper(banners) as BannerProps[],
    newGames: gamesMapper(newGames) as GameCardProps[],
    newGamesTitle: sections!.data!.attributes!.newGames!.title!,
    mostPopularHighlight: highlightMapper(
      sections!.data!.attributes!.popularGames!.highlight
    ) as HighlightProps,
    mostPopularGames: gamesMapper(
      sections!.data!.attributes!.popularGames!.games
    ) as GameCardProps[],
    mostPopularGamesTitle: sections!.data!.attributes!.popularGames!.title!,
    upcommingGames: gamesMapper(upcommingGames) as GameCardProps[],
    upcommingHighligth: highlightMapper(
      sections!.data!.attributes!.upcommingGames!.highlight
    ) as HighlightProps,
    upcommingGamesTitle: sections!.data!.attributes!.upcommingGames!.title!,
    freeGames: gamesMapper(freeGames) as GameCardProps[],
    freeGamesTitle: sections!.data!.attributes!.freeGames!.title!,
    freeHighligth: highlightMapper(
      sections!.data!.attributes!.freeGames!.highlight
    ) as HighlightProps
  }

  return <Home {...props} />
}
