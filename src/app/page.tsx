import Home, { HomeTemplateProps } from '@/templates/Home'
import bannersMock from '@/components/BannerSlider/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import HighlightMock from '@/components/Highlight/mock'

export default async function Index() {
  const props: HomeTemplateProps = {
    banners: bannersMock,
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
