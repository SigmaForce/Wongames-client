import Home, { HomeTemplateProps } from '@/templates/Home'

import gamesMock from '@/components/GameCardSlider/mock'
import HighlightMock from '@/components/Highlight/mock'
import { initializeApollo } from '@/utils/apollo'
import { QueryHomeQuery } from '@/graphql/generated/index'
import { QUERY_HOME } from '@/graphql/queries/home'
import { BannerProps } from '@/components/Banner'

export const revalidate = 60

export default async function Index() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHomeQuery>({
    query: QUERY_HOME
  })

  const dataBanners = data.banners?.data.map((banner) => ({
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
  })) as BannerProps[]

  const props: HomeTemplateProps = {
    banners: dataBanners,
    newGames: gamesMock,
    mostPopularHighlight: HighlightMock,
    mostPopularGames: gamesMock,
    upcommingGames: gamesMock,
    upcommingHighligth: HighlightMock,
    upcommingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighligth: HighlightMock
  }

  return <Home {...props} />
}
