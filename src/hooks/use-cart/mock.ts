import { QUERY_GAMES } from '@/graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { where: { id: { in: ['1', '2'] } } }
  },
  result: {
    data: {
      games: {
        data: [
          {
            id: '1',
            attributes: {
              name: 'Sample Game',
              slug: 'sample-game',
              short_description: 'sample description',
              price: 10.5,
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'sample developer'
                    }
                  }
                ]
              },
              cover: {
                data: {
                  attributes: {
                    url: '/sample-game.jpg'
                  }
                }
              }
            }
          },
          {
            id: '2',
            attributes: {
              name: 'Sample Game',
              slug: 'sample-game',
              short_description: 'sample description',
              price: 10.5,
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'sample developer'
                    }
                  }
                ]
              },
              cover: {
                data: {
                  attributes: {
                    url: '/sample-game.jpg'
                  }
                }
              }
            }
          }
        ]
      }
    }
  }
}

export const cartItems = [
  {
    id: '1',
    img: 'http://localhost:1337/sample-game.jpg',
    price: '$10.50',
    title: 'Sample Game'
  },
  {
    id: '2',
    img: 'http://localhost:1337/sample-game.jpg',
    price: '$10.50',
    title: 'Sample Game'
  }
]
