import GamesTemplate, { GamesTemplateProps } from '@/templates/Games'
import { initializeApollo } from '@/utils/apollo'

import filterItensMock from '@/components/ExploreSidebar/mock'
import { QUERY_GAMES } from '@/graphql/queries/games'
import { QueryGamesQuery } from '@/graphql/generated/index'
import { QueryGamesQueryVariables } from '@/graphql/generated/index'

export const revalidate = 60

export default async function GamesPage(props: GamesTemplateProps) {
  const apolloClient = initializeApollo()

  const data = await apolloClient.query<
    QueryGamesQuery,
    QueryGamesQueryVariables
  >({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const games = data.data.games!.data.map((game: any) => ({
    title: game.attributes.name,
    slug: game.attributes.slug,
    img:
      game.attributes.cover.data &&
      `http://localhost:1337${game.attributes.cover.data.attributes.url}`,
    developer: game.attributes.developers.data[0].attributes.name,
    price: new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD'
    }).format(game.attributes.price)
  }))

  const filterItems = filterItensMock
  return (
    <GamesTemplate
      {...props}
      filterItems={filterItems}
      games={games.slice(1, games.length)}
    />
  )
}
