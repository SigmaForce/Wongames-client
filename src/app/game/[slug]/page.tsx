'use server'
import Game from '@/templates/Game'

import { initializeApollo } from '@/utils/apollo'
import { QUERY_GAMES_BY_SLUG } from '@/graphql/queries/games'
import { QueryGamesBySlugQuery } from '@/graphql/generated/index'
import { QueryGamesBySlugQueryVariables } from '@/graphql/generated/index'
import { Enum_Game_Rating } from '@/graphql/generated'
import { platform } from '@/components/GameDetails'
import { GalleryImageProps } from '@/components/Gallery'

export default async function Index({ params }: { params: { slug: string } }) {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    QueryGamesBySlugQuery,
    QueryGamesBySlugQueryVariables
  >({
    query: QUERY_GAMES_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  const gameData = {
    cover: `http://localhost:1337${data.games!.data[0].attributes!.cover?.data?.attributes?.src}`,
    gameInfo: {
      title: data.games!.data[0].attributes!.name,
      price: data.games!.data[0].attributes!.price,
      description: data.games!.data[0].attributes!.short_description as string
    },
    gallery: data.games!.data[0].attributes!.gallery!.data.map((image) => ({
      src: `http://localhost:1337${image.attributes?.url}`,
      label: image.attributes?.label
    })) as GalleryImageProps[],
    description: data.games!.data[0].attributes!.description as string,
    details: {
      developer: data.games!.data[0].attributes!.developers?.data[0].attributes
        ?.name as string,
      releaseDate: data.games!.data[0].attributes!.release_date,
      platforms: data.games!.data[0].attributes!.platforms!.data.map(
        (platform) => platform.attributes!.name
      ) as platform[], // Este valor é válido
      publisher: data.games?.data[0].attributes?.publisher?.data?.attributes
        ?.name as string,
      rating: data.games!.data[0].attributes!.rating as Enum_Game_Rating,
      genres: data.games?.data[0].attributes!.categories!.data.map(
        (category) => category.attributes!.name
      ) as string[]
    }
  }

  return <Game {...gameData} />
}
