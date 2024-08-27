'use client'

import GameCard, { GameCardProps } from '@/components/GameCard'
import * as S from './styles'
import Base from '../Base'
import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar'
import { Grid } from '@/components/Grid'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'

import { useQueryGames } from '@/graphql/queries/games'
import {} from '@/graphql/generated'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 15,
        start: data?.games?.data?.length || 15
      }
    }).catch((error) => console.error('Erro ao buscar mais jogos: ', error))
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <Grid>
              {data?.games?.data.map((game) => (
                <GameCard
                  key={game.attributes?.slug}
                  title={game.attributes!.name}
                  slug={game.attributes?.slug}
                  developer={
                    game.attributes!.developers!.data[0].attributes!.name!
                  }
                  img={`http://localhost:1337${game.attributes!.cover!.data!.attributes!.url!}`}
                  price={game.attributes!.price}
                />
              ))}
            </Grid>
            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show more</p>
              <ArrowDown size={32} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}
export default GamesTemplate
