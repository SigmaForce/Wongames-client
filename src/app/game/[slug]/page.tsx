/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import Game from '@/templates/Game'

import { initializeApollo } from '@/utils/apollo'
import { QUERY_GAMES_BY_SLUG } from '@/graphql/queries/games'
import {
  QueryGamesBySlugQuery,
  QueryUpcommingQuery,
  QueryUpcommingQueryVariables
} from '@/graphql/generated/index'
import { QueryGamesBySlugQueryVariables } from '@/graphql/generated/index'
import { Enum_Game_Rating } from '@/graphql/generated'
import { platform } from '@/components/GameDetails'
import { GalleryImageProps } from '@/components/Gallery'
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended'
import { gamesMapper, highlightMapper } from '@/utils/mappers'
import { GameCardProps } from '@/components/GameCard'
import { QUERY_UPCOMMING } from '@/graphql/queries/upcomming'

export default async function Index({ params }: { params: { slug: string } }) {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    QueryGamesBySlugQuery,
    QueryGamesBySlugQueryVariables
  >({
    query: QUERY_GAMES_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  const game = data.games!.data[0].attributes!

  // get recommended game
  const { data: recommended } = await apolloClient.query<any>({
    query: QUERY_RECOMMENDED
  })

  // get upcomming game and highlight
  const TODAY = new Date().toISOString().slice(0, 10)
  const { data: upcomming } = await apolloClient.query<
    QueryUpcommingQuery,
    QueryUpcommingQueryVariables
  >({
    query: QUERY_UPCOMMING,
    variables: { date: TODAY }
  })

  const gameData = {
    cover: `http://localhost:1337${game.cover?.data?.attributes?.src}`,
    gameInfo: {
      title: game.name,
      price: game.price,
      description: game.short_description as string
    },
    gallery: game.gallery!.data.map((image) => ({
      src: `http://localhost:1337${image.attributes?.url}`,
      label: image.attributes?.label
    })) as GalleryImageProps[],
    description: game.description as string,
    details: {
      developer: game.developers?.data[0].attributes?.name as string,
      releaseDate: game.release_date,
      platforms: game.platforms!.data.map(
        (platform) => platform.attributes!.name
      ) as platform[], // Este valor é válido
      publisher: data.games?.data[0].attributes?.publisher?.data?.attributes
        ?.name as string,
      rating: game.rating as Enum_Game_Rating,
      genres: game.categories!.data.map(
        (category) => category.attributes!.name
      ) as string[]
    },
    upcommingTitle: upcomming.showcase?.data?.attributes?.upcommingGames
      ?.title as string,
    upcommingGames: gamesMapper(upcomming.upcommingGames),
    upcommingHighligth: highlightMapper(
      upcomming!.showcase!.data!.attributes!.upcommingGames!.highlight
    ),
    recommendedTitle: recommended.recommended.data.attributes.section.title,
    recommendedGames: gamesMapper(
      recommended.recommended.data.attributes.section.games
    ) as GameCardProps[]
  }

  return <Game {...gameData} />
}
