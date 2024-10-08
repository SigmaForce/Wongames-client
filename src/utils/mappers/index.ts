import formatPrice from '../format-price'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const bannerMapper = (banners: any) => {
  return banners.data.map((banner: any) => ({
    img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
    title: banner.attributes?.title,
    subtitle: banner.attributes?.subtitle,
    buttonLabel: banner.attributes?.button!.label,
    buttonLink: banner.attributes?.button!.link,
    ...(banner.attributes?.ribbon && {
      ribbon: banner.attributes.ribbon.text,
      ribbonColor: banner.attributes.ribbon?.color,
      ribbonSize: banner.attributes.ribbon?.size
    })
  }))
}

export const gamesMapper = (games: any) => {
  return games
    ? games!.data.map((game: any) => ({
        id: game.id,
        title: game.attributes!.name,
        slug: game.attributes!.slug,
        developer: game.attributes!.developers!.data[0].attributes!.name,
        img: `http://localhost:1337${game.attributes!.cover!.data!.attributes!.url}`,
        price: game.attributes!.price
      }))
    : []
}

export const highlightMapper = (highlight: any) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: `http://localhost:1337${highlight.background.data.attributes.url}`,
      buttonLabel: highlight!.buttonLabel,
      buttonLink: highlight.buttonLink,
      floatImage: `http://localhost:1337${highlight.floatImage.data.attributes.url}`,
      alignment: highlight.alignment
    }
  )
}

export const cartMapper = (items: any) => {
  console.log(items)
  return items
    ? items.map((item: any) => ({
        id: item.id,
        img: `http://localhost:1337${item.attributes.cover.data.attributes.url}`,
        price: formatPrice(item.attributes.price),
        title: item.attributes.name
      }))
    : []
}
