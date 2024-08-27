import GamesTemplate, { GamesTemplateProps } from '@/templates/Games'

import filterItensMock from '@/components/ExploreSidebar/mock'

export const dynamic = 'auto'
export const revalidate = 60 // Revalidate every 60 seconds

export default async function GamesPage(props: GamesTemplateProps) {
  const filterItems = filterItensMock
  return <GamesTemplate {...props} filterItems={filterItems} />
}
