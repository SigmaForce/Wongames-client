import { InMemoryCache } from '@apollo/client'

const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        games: {
          keyArgs: ['where', 'sort'],
          merge(existing = { data: [] }, incoming) {
            const existingGames = existing?.data || []
            const incomingGames = incoming?.data || []

            return {
              ...incoming,
              data: [...existingGames, ...incomingGames]
            }
          }
        }
      }
    }
  }
})

export default apolloCache
