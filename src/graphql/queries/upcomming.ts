import { gql } from '@apollo/client'
import { GameFragment } from '../fragments/game'
import { HighlightFragment } from '../fragments/highlight'

export const QUERY_UPCOMMING = gql`
  query QueryUpcomming($date: Date!) {
    upcommingGames: games(
      filters: { release_date: { gt: $date } }
      sort: "release_date:asc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
    showcase: home {
      data {
        attributes {
          upcommingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }
  ${GameFragment}
  ${HighlightFragment}
`
