'use client'

import GameCard, { GameCardProps } from '@/components/GameCard'
import * as S from './styles'
import Base from '../Base'
import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar'
import { Grid } from '@/components/Grid'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />
        <section>
          <Grid>
            {games.map((item) => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>
          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show more</p>
            <ArrowDown size={32} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}
export default GamesTemplate
