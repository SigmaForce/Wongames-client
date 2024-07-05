import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
    image {
      data {
        attributes {
          url
        }
      }
    }
    title
    subtitle
    button {
      label
      link
    }
    ribbon {
      text
      color
      size
    }
  }

  fragment GameFragment on Game {
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

  query QueryHome {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }
    newGames: games(
      filters: { release_date: { lte: "2024-07-04" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
    upcommingGames: games(
      filters: { release_date: { gt: "2024-07-04" } }
      sort: "release_date:asc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
    freeGames: games(
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
  }
`
