import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { GameFragment } from '../fragments/game'
import { QueryGamesQuery } from '../generated/index'
import { QueryGamesQueryVariables } from '../generated/index'

export const QUERY_GAMES = gql`
  query QueryGames(
    $limit: Int
    $start: Int
    $where: GameFiltersInput
    $sort: [String]
  ) {
    games(
      pagination: { limit: $limit, start: $start }
      filters: $where
      sort: $sort
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
`

export const QUERY_GAMES_BY_SLUG = gql`
  query QueryGamesBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export function useQueryGames(
  options?: QueryHookOptions<QueryGamesQuery, QueryGamesQueryVariables>
) {
  return useQuery<QueryGamesQuery, QueryGamesQueryVariables>(
    QUERY_GAMES,
    options
  )
}
