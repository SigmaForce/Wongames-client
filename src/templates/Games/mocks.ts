import { QUERY_GAMES } from '../../graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15 }
  },
  result: {
    data: {
      games: {
        data: [
          {
            id: '1',
            attributes: {
              name: 'Wizardry 6+7',
              slug: 'wizardry_6_7',
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/wizardry_6_7_820b94a4d1.jpg'
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Sir-Tech Software'
                    }
                  }
                ]
              },
              price: 0,
              __typename: 'Game'
            }
          }
        ]
      }
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1 }
  },
  result: {
    data: {
      games: {
        data: [
          {
            id: '2',
            attributes: {
              name: 'Fallout: New Vegas Ultimate Edition',
              slug: 'fallout_new_vegas_ultimate_edition',
              cover: {
                data: {
                  attributes: {
                    url: '/uploads/fallout_new_vegas_ultimate_edition_708f70b9fc.jpg'
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Obsidian Entertainment'
                    }
                  }
                ]
              },
              price: 6.59,
              __typename: 'Game'
            }
          }
        ]
      }
    }
  }
}
