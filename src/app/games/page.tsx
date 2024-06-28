'use server'

import GamesTemplate, { GamesTemplateProps } from '@/templates/Games'

import gamesMock from '@/components/GameCardSlider/mock'

import filterItensMock from '@/components/ExploreSidebar/mock'

export default async function GamesPage(props: GamesTemplateProps) {
  const filterItems = filterItensMock
  return (
    <GamesTemplate {...props} filterItems={filterItems} games={gamesMock} />
  )
}
