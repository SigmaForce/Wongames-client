import { bannerMapper, cartMapper, gamesMapper, highlightMapper } from '.'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      data: [
        {
          attributes: {
            image: {
              data: {
                attributes: {
                  url: '/image.jpg'
                }
              }
            },
            title: 'Banner title',
            subtitle: 'Banner subtitle',
            button: {
              label: 'Buy label',
              link: 'button link'
            },
            ribbon: {
              text: 'ribbon text',
              color: 'primary',
              size: 'small'
            }
          }
        }
      ]
    }

    expect(bannerMapper(banner)).toStrictEqual([
      {
        img: `http://localhost:1337/image.jpg`,
        title: 'Banner title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'Buy label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })
  it('should return the correct format when mapped', () => {
    const game = {
      data: [
        {
          id: 1,
          attributes: {
            name: 'game',
            slug: 'game',
            cover: {
              data: {
                attributes: {
                  url: '/image.jpg'
                }
              }
            },
            developers: {
              data: [
                {
                  attributes: {
                    name: 'developer'
                  }
                }
              ]
            },
            price: 10
          }
        }
      ]
    }

    expect(gamesMapper(game)).toStrictEqual([
      {
        id: 1,
        title: 'game',
        slug: 'game',
        developer: 'developer',
        img: `http://localhost:1337/image.jpg`,
        price: 10
      }
    ])
  })
})

describe('highlightMapper', () => {
  it('should render the correct format when mapped', () => {
    const highlight = {
      title: 'highlight title',
      subtitle: 'highlight subtitle',
      background: {
        data: {
          attributes: {
            url: '/image.png'
          }
        }
      },
      floatImage: {
        data: {
          attributes: {
            url: '/image.png'
          }
        }
      },
      buttonLink: 'button link',
      buttonLabel: 'button label',
      alignment: 'left'
    }

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'highlight title',
      subtitle: 'highlight subtitle',
      backgroundImage: 'http://localhost:1337/image.png',
      buttonLabel: 'button label',
      buttonLink: 'button link',
      floatImage: 'http://localhost:1337/image.png',
      alignment: 'left'
    })
  })
})

describe('cartMapper', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should render the correct format when mapped', () => {
    const gamesItems = [
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
      }
    ]

    expect(cartMapper(gamesItems)).toStrictEqual([
      {
        id: '1',
        img: 'http://localhost:1337/sample-game.jpg',
        price: '$10.50',
        title: 'Sample Game'
      }
    ])
  })
})
