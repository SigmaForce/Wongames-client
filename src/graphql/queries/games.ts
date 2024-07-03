import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
      data {
        attributes {
          name
          slug
          cover {
            data {
              attributes {
                url
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
          price
        }
      }
    }
  }
`

export const QUERY_GAMES_BY_SLUG = gql`
  query QueryGamesBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
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
