/* eslint-disable @typescript-eslint/no-explicit-any */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
  DateTime: { input: any; output: any }
  JSON: { input: any; output: any }
  Upload: { input: any; output: any }
}

export type Banner = {
  __typename?: 'Banner'
  button?: Maybe<ComponentPageButton>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  image: UploadFileEntityResponse
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  ribbon?: Maybe<ComponentPageRibbon>
  subtitle: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type BannerEntity = {
  __typename?: 'BannerEntity'
  attributes?: Maybe<Banner>
  id?: Maybe<Scalars['ID']['output']>
}

export type BannerEntityResponse = {
  __typename?: 'BannerEntityResponse'
  data?: Maybe<BannerEntity>
}

export type BannerEntityResponseCollection = {
  __typename?: 'BannerEntityResponseCollection'
  data: Array<BannerEntity>
  meta: ResponseCollectionMeta
}

export type BannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>
  button?: InputMaybe<ComponentPageButtonFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<BannerFiltersInput>
  or?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  ribbon?: InputMaybe<ComponentPageRibbonFiltersInput>
  subtitle?: InputMaybe<StringFilterInput>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type BannerInput = {
  button?: InputMaybe<ComponentPageButtonInput>
  image?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  ribbon?: InputMaybe<ComponentPageRibbonInput>
  subtitle?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  contains?: InputMaybe<Scalars['Boolean']['input']>
  containsi?: InputMaybe<Scalars['Boolean']['input']>
  endsWith?: InputMaybe<Scalars['Boolean']['input']>
  eq?: InputMaybe<Scalars['Boolean']['input']>
  eqi?: InputMaybe<Scalars['Boolean']['input']>
  gt?: InputMaybe<Scalars['Boolean']['input']>
  gte?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  lt?: InputMaybe<Scalars['Boolean']['input']>
  lte?: InputMaybe<Scalars['Boolean']['input']>
  ne?: InputMaybe<Scalars['Boolean']['input']>
  nei?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']['input']>
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>
  startsWith?: InputMaybe<Scalars['Boolean']['input']>
}

export type Category = {
  __typename?: 'Category'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  games?: Maybe<GameRelationResponseCollection>
  name: Scalars['String']['output']
  slug?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type CategoryGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CategoryEntity = {
  __typename?: 'CategoryEntity'
  attributes?: Maybe<Category>
  id?: Maybe<Scalars['ID']['output']>
}

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse'
  data?: Maybe<CategoryEntity>
}

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection'
  data: Array<CategoryEntity>
  meta: ResponseCollectionMeta
}

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  games?: InputMaybe<GameFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<CategoryFiltersInput>
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type CategoryInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection'
  data: Array<CategoryEntity>
}

export type ComponentPageButton = {
  __typename?: 'ComponentPageButton'
  id: Scalars['ID']['output']
  label: Scalars['String']['output']
  link: Scalars['String']['output']
}

export type ComponentPageButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageButtonFiltersInput>>>
  label?: InputMaybe<StringFilterInput>
  link?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentPageButtonFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentPageButtonFiltersInput>>>
}

export type ComponentPageButtonInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  link?: InputMaybe<Scalars['String']['input']>
}

export type ComponentPageHighlight = {
  __typename?: 'ComponentPageHighlight'
  alignment?: Maybe<Enum_Componentpagehighlight_Alignment>
  background: UploadFileEntityResponse
  buttonLabel: Scalars['String']['output']
  buttonLink: Scalars['String']['output']
  floatImage?: Maybe<UploadFileEntityResponse>
  id: Scalars['ID']['output']
  subtitle: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type ComponentPageHighlightInput = {
  alignment?: InputMaybe<Enum_Componentpagehighlight_Alignment>
  background?: InputMaybe<Scalars['ID']['input']>
  buttonLabel?: InputMaybe<Scalars['String']['input']>
  buttonLink?: InputMaybe<Scalars['String']['input']>
  floatImage?: InputMaybe<Scalars['ID']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  subtitle?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentPagePopularGames = {
  __typename?: 'ComponentPagePopularGames'
  games?: Maybe<GameRelationResponseCollection>
  highlight?: Maybe<ComponentPageHighlight>
  id: Scalars['ID']['output']
  title: Scalars['String']['output']
}

export type ComponentPagePopularGamesGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentPagePopularGamesInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  highlight?: InputMaybe<ComponentPageHighlightInput>
  id?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ComponentPageRibbon = {
  __typename?: 'ComponentPageRibbon'
  color?: Maybe<Enum_Componentpageribbon_Color>
  id: Scalars['ID']['output']
  size?: Maybe<Enum_Componentpageribbon_Size>
  text?: Maybe<Scalars['String']['output']>
}

export type ComponentPageRibbonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPageRibbonFiltersInput>>>
  color?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ComponentPageRibbonFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ComponentPageRibbonFiltersInput>>>
  size?: InputMaybe<StringFilterInput>
  text?: InputMaybe<StringFilterInput>
}

export type ComponentPageRibbonInput = {
  color?: InputMaybe<Enum_Componentpageribbon_Color>
  id?: InputMaybe<Scalars['ID']['input']>
  size?: InputMaybe<Enum_Componentpageribbon_Size>
  text?: InputMaybe<Scalars['String']['input']>
}

export type ComponentPageSection = {
  __typename?: 'ComponentPageSection'
  highlight?: Maybe<ComponentPageHighlight>
  id: Scalars['ID']['output']
  title?: Maybe<Scalars['String']['output']>
}

export type ComponentPageSectionInput = {
  highlight?: InputMaybe<ComponentPageHighlightInput>
  id?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  contains?: InputMaybe<Scalars['Date']['input']>
  containsi?: InputMaybe<Scalars['Date']['input']>
  endsWith?: InputMaybe<Scalars['Date']['input']>
  eq?: InputMaybe<Scalars['Date']['input']>
  eqi?: InputMaybe<Scalars['Date']['input']>
  gt?: InputMaybe<Scalars['Date']['input']>
  gte?: InputMaybe<Scalars['Date']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  lt?: InputMaybe<Scalars['Date']['input']>
  lte?: InputMaybe<Scalars['Date']['input']>
  ne?: InputMaybe<Scalars['Date']['input']>
  nei?: InputMaybe<Scalars['Date']['input']>
  not?: InputMaybe<DateFilterInput>
  notContains?: InputMaybe<Scalars['Date']['input']>
  notContainsi?: InputMaybe<Scalars['Date']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  startsWith?: InputMaybe<Scalars['Date']['input']>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  contains?: InputMaybe<Scalars['DateTime']['input']>
  containsi?: InputMaybe<Scalars['DateTime']['input']>
  endsWith?: InputMaybe<Scalars['DateTime']['input']>
  eq?: InputMaybe<Scalars['DateTime']['input']>
  eqi?: InputMaybe<Scalars['DateTime']['input']>
  gt?: InputMaybe<Scalars['DateTime']['input']>
  gte?: InputMaybe<Scalars['DateTime']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  lt?: InputMaybe<Scalars['DateTime']['input']>
  lte?: InputMaybe<Scalars['DateTime']['input']>
  ne?: InputMaybe<Scalars['DateTime']['input']>
  nei?: InputMaybe<Scalars['DateTime']['input']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']['input']>
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  startsWith?: InputMaybe<Scalars['DateTime']['input']>
}

export type Developer = {
  __typename?: 'Developer'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  games?: Maybe<GameRelationResponseCollection>
  name: Scalars['String']['output']
  slug?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type DeveloperGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type DeveloperEntity = {
  __typename?: 'DeveloperEntity'
  attributes?: Maybe<Developer>
  id?: Maybe<Scalars['ID']['output']>
}

export type DeveloperEntityResponse = {
  __typename?: 'DeveloperEntityResponse'
  data?: Maybe<DeveloperEntity>
}

export type DeveloperEntityResponseCollection = {
  __typename?: 'DeveloperEntityResponseCollection'
  data: Array<DeveloperEntity>
  meta: ResponseCollectionMeta
}

export type DeveloperFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DeveloperFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  games?: InputMaybe<GameFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<DeveloperFiltersInput>
  or?: InputMaybe<Array<InputMaybe<DeveloperFiltersInput>>>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type DeveloperInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type DeveloperRelationResponseCollection = {
  __typename?: 'DeveloperRelationResponseCollection'
  data: Array<DeveloperEntity>
}

export enum Enum_Componentpagehighlight_Alignment {
  Left = 'left',
  Right = 'right'
}

export enum Enum_Componentpageribbon_Color {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum Enum_Componentpageribbon_Size {
  Normal = 'normal',
  Small = 'small'
}

export enum Enum_Game_Rating {
  Br0 = 'BR0',
  Br10 = 'BR10',
  Br12 = 'BR12',
  Br14 = 'BR14',
  Br16 = 'BR16',
  Br18 = 'BR18'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  contains?: InputMaybe<Scalars['Float']['input']>
  containsi?: InputMaybe<Scalars['Float']['input']>
  endsWith?: InputMaybe<Scalars['Float']['input']>
  eq?: InputMaybe<Scalars['Float']['input']>
  eqi?: InputMaybe<Scalars['Float']['input']>
  gt?: InputMaybe<Scalars['Float']['input']>
  gte?: InputMaybe<Scalars['Float']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  lt?: InputMaybe<Scalars['Float']['input']>
  lte?: InputMaybe<Scalars['Float']['input']>
  ne?: InputMaybe<Scalars['Float']['input']>
  nei?: InputMaybe<Scalars['Float']['input']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']['input']>
  notContainsi?: InputMaybe<Scalars['Float']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  startsWith?: InputMaybe<Scalars['Float']['input']>
}

export type Game = {
  __typename?: 'Game'
  categories?: Maybe<CategoryRelationResponseCollection>
  cover?: Maybe<UploadFileEntityResponse>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  developers?: Maybe<DeveloperRelationResponseCollection>
  gallery?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']['output']
  platforms?: Maybe<PlatformRelationResponseCollection>
  price: Scalars['Float']['output']
  publisher?: Maybe<PublisherEntityResponse>
  rating?: Maybe<Enum_Game_Rating>
  release_date?: Maybe<Scalars['Date']['output']>
  short_description?: Maybe<Scalars['String']['output']>
  slug?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type GameCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type GameDevelopersArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type GameGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type GamePlatformsArgs = {
  filters?: InputMaybe<PlatformFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type GameEntity = {
  __typename?: 'GameEntity'
  attributes?: Maybe<Game>
  id?: Maybe<Scalars['ID']['output']>
}

export type GameEntityResponse = {
  __typename?: 'GameEntityResponse'
  data?: Maybe<GameEntity>
}

export type GameEntityResponseCollection = {
  __typename?: 'GameEntityResponseCollection'
  data: Array<GameEntity>
  meta: ResponseCollectionMeta
}

export type GameFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GameFiltersInput>>>
  categories?: InputMaybe<CategoryFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  developers?: InputMaybe<DeveloperFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<GameFiltersInput>
  or?: InputMaybe<Array<InputMaybe<GameFiltersInput>>>
  platforms?: InputMaybe<PlatformFiltersInput>
  price?: InputMaybe<FloatFilterInput>
  publisher?: InputMaybe<PublisherFiltersInput>
  rating?: InputMaybe<StringFilterInput>
  release_date?: InputMaybe<DateFilterInput>
  short_description?: InputMaybe<StringFilterInput>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type GameInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  cover?: InputMaybe<Scalars['ID']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  developers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  platforms?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  price?: InputMaybe<Scalars['Float']['input']>
  publisher?: InputMaybe<Scalars['ID']['input']>
  rating?: InputMaybe<Enum_Game_Rating>
  release_date?: InputMaybe<Scalars['Date']['input']>
  short_description?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type GameRelationResponseCollection = {
  __typename?: 'GameRelationResponseCollection'
  data: Array<GameEntity>
}

export type GenericMorph =
  | Banner
  | Category
  | ComponentPageButton
  | ComponentPageHighlight
  | ComponentPagePopularGames
  | ComponentPageRibbon
  | ComponentPageSection
  | Developer
  | Game
  | Home
  | I18NLocale
  | Platform
  | Publisher
  | Recommended
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

export type Home = {
  __typename?: 'Home'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  freeGames?: Maybe<ComponentPageSection>
  newGames?: Maybe<ComponentPageSection>
  popularGames?: Maybe<ComponentPagePopularGames>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  upcommingGames?: Maybe<ComponentPageSection>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type HomeEntity = {
  __typename?: 'HomeEntity'
  attributes?: Maybe<Home>
  id?: Maybe<Scalars['ID']['output']>
}

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse'
  data?: Maybe<HomeEntity>
}

export type HomeInput = {
  freeGames?: InputMaybe<ComponentPageSectionInput>
  newGames?: InputMaybe<ComponentPageSectionInput>
  popularGames?: InputMaybe<ComponentPagePopularGamesInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  upcommingGames?: InputMaybe<ComponentPageSectionInput>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  name?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']['output']>
}

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  contains?: InputMaybe<Scalars['ID']['input']>
  containsi?: InputMaybe<Scalars['ID']['input']>
  endsWith?: InputMaybe<Scalars['ID']['input']>
  eq?: InputMaybe<Scalars['ID']['input']>
  eqi?: InputMaybe<Scalars['ID']['input']>
  gt?: InputMaybe<Scalars['ID']['input']>
  gte?: InputMaybe<Scalars['ID']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  lt?: InputMaybe<Scalars['ID']['input']>
  lte?: InputMaybe<Scalars['ID']['input']>
  ne?: InputMaybe<Scalars['ID']['input']>
  nei?: InputMaybe<Scalars['ID']['input']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']['input']>
  notContainsi?: InputMaybe<Scalars['ID']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  startsWith?: InputMaybe<Scalars['ID']['input']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  contains?: InputMaybe<Scalars['Int']['input']>
  containsi?: InputMaybe<Scalars['Int']['input']>
  endsWith?: InputMaybe<Scalars['Int']['input']>
  eq?: InputMaybe<Scalars['Int']['input']>
  eqi?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  ne?: InputMaybe<Scalars['Int']['input']>
  nei?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']['input']>
  notContainsi?: InputMaybe<Scalars['Int']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  startsWith?: InputMaybe<Scalars['Int']['input']>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  contains?: InputMaybe<Scalars['JSON']['input']>
  containsi?: InputMaybe<Scalars['JSON']['input']>
  endsWith?: InputMaybe<Scalars['JSON']['input']>
  eq?: InputMaybe<Scalars['JSON']['input']>
  eqi?: InputMaybe<Scalars['JSON']['input']>
  gt?: InputMaybe<Scalars['JSON']['input']>
  gte?: InputMaybe<Scalars['JSON']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  lt?: InputMaybe<Scalars['JSON']['input']>
  lte?: InputMaybe<Scalars['JSON']['input']>
  ne?: InputMaybe<Scalars['JSON']['input']>
  nei?: InputMaybe<Scalars['JSON']['input']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']['input']>
  notContainsi?: InputMaybe<Scalars['JSON']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  startsWith?: InputMaybe<Scalars['JSON']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>
  createBanner?: Maybe<BannerEntityResponse>
  createCategory?: Maybe<CategoryEntityResponse>
  createDeveloper?: Maybe<DeveloperEntityResponse>
  createGame?: Maybe<GameEntityResponse>
  createPlatform?: Maybe<PlatformEntityResponse>
  createPublisher?: Maybe<PublisherEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  createUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteBanner?: Maybe<BannerEntityResponse>
  deleteCategory?: Maybe<CategoryEntityResponse>
  deleteDeveloper?: Maybe<DeveloperEntityResponse>
  deleteGame?: Maybe<GameEntityResponse>
  deleteHome?: Maybe<HomeEntityResponse>
  deletePlatform?: Maybe<PlatformEntityResponse>
  deletePublisher?: Maybe<PublisherEntityResponse>
  deleteRecommended?: Maybe<RecommendedEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateBanner?: Maybe<BannerEntityResponse>
  updateCategory?: Maybe<CategoryEntityResponse>
  updateDeveloper?: Maybe<DeveloperEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateGame?: Maybe<GameEntityResponse>
  updateHome?: Maybe<HomeEntityResponse>
  updatePlatform?: Maybe<PlatformEntityResponse>
  updatePublisher?: Maybe<PublisherEntityResponse>
  updateRecommended?: Maybe<RecommendedEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationCreateBannerArgs = {
  data: BannerInput
}

export type MutationCreateCategoryArgs = {
  data: CategoryInput
}

export type MutationCreateDeveloperArgs = {
  data: DeveloperInput
}

export type MutationCreateGameArgs = {
  data: GameInput
}

export type MutationCreatePlatformArgs = {
  data: PlatformInput
}

export type MutationCreatePublisherArgs = {
  data: PublisherInput
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationDeleteBannerArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteDeveloperArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteGameArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeletePlatformArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeletePublisherArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>
  files: Array<InputMaybe<Scalars['Upload']['input']>>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input']
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input']
  password: Scalars['String']['input']
  passwordConfirmation: Scalars['String']['input']
}

export type MutationUpdateBannerArgs = {
  data: BannerInput
  id: Scalars['ID']['input']
}

export type MutationUpdateCategoryArgs = {
  data: CategoryInput
  id: Scalars['ID']['input']
}

export type MutationUpdateDeveloperArgs = {
  data: DeveloperInput
  id: Scalars['ID']['input']
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateGameArgs = {
  data: GameInput
  id: Scalars['ID']['input']
}

export type MutationUpdateHomeArgs = {
  data: HomeInput
}

export type MutationUpdatePlatformArgs = {
  data: PlatformInput
  id: Scalars['ID']['input']
}

export type MutationUpdatePublisherArgs = {
  data: PublisherInput
  id: Scalars['ID']['input']
}

export type MutationUpdateRecommendedArgs = {
  data: RecommendedInput
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']['input']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']['input']
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>
  file: Scalars['Upload']['input']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']['input']>
  refId?: InputMaybe<Scalars['ID']['input']>
}

export type Pagination = {
  __typename?: 'Pagination'
  page: Scalars['Int']['output']
  pageCount: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pageSize?: InputMaybe<Scalars['Int']['input']>
  start?: InputMaybe<Scalars['Int']['input']>
}

export type Platform = {
  __typename?: 'Platform'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  games?: Maybe<GameRelationResponseCollection>
  name: Scalars['String']['output']
  slug?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type PlatformGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PlatformEntity = {
  __typename?: 'PlatformEntity'
  attributes?: Maybe<Platform>
  id?: Maybe<Scalars['ID']['output']>
}

export type PlatformEntityResponse = {
  __typename?: 'PlatformEntityResponse'
  data?: Maybe<PlatformEntity>
}

export type PlatformEntityResponseCollection = {
  __typename?: 'PlatformEntityResponseCollection'
  data: Array<PlatformEntity>
  meta: ResponseCollectionMeta
}

export type PlatformFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PlatformFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  games?: InputMaybe<GameFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<PlatformFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PlatformFiltersInput>>>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PlatformInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type PlatformRelationResponseCollection = {
  __typename?: 'PlatformRelationResponseCollection'
  data: Array<PlatformEntity>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Publisher = {
  __typename?: 'Publisher'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  games?: Maybe<GameRelationResponseCollection>
  name?: Maybe<Scalars['String']['output']>
  slug?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type PublisherGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PublisherEntity = {
  __typename?: 'PublisherEntity'
  attributes?: Maybe<Publisher>
  id?: Maybe<Scalars['ID']['output']>
}

export type PublisherEntityResponse = {
  __typename?: 'PublisherEntityResponse'
  data?: Maybe<PublisherEntity>
}

export type PublisherEntityResponseCollection = {
  __typename?: 'PublisherEntityResponseCollection'
  data: Array<PublisherEntity>
  meta: ResponseCollectionMeta
}

export type PublisherFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PublisherFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  games?: InputMaybe<GameFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<PublisherFiltersInput>
  or?: InputMaybe<Array<InputMaybe<PublisherFiltersInput>>>
  slug?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type PublisherInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type Query = {
  __typename?: 'Query'
  banner?: Maybe<BannerEntityResponse>
  banners?: Maybe<BannerEntityResponseCollection>
  categories?: Maybe<CategoryEntityResponseCollection>
  category?: Maybe<CategoryEntityResponse>
  developer?: Maybe<DeveloperEntityResponse>
  developers?: Maybe<DeveloperEntityResponseCollection>
  game?: Maybe<GameEntityResponse>
  games?: Maybe<GameEntityResponseCollection>
  home?: Maybe<HomeEntityResponse>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  platform?: Maybe<PlatformEntityResponse>
  platforms?: Maybe<PlatformEntityResponseCollection>
  publisher?: Maybe<PublisherEntityResponse>
  publishers?: Maybe<PublisherEntityResponseCollection>
  recommended?: Maybe<RecommendedEntityResponse>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  uploadFolder?: Maybe<UploadFolderEntityResponse>
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export type QueryBannerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryBannersArgs = {
  filters?: InputMaybe<BannerFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryDeveloperArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryDevelopersArgs = {
  filters?: InputMaybe<DeveloperFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryGameArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryHomeArgs = {
  publicationState?: InputMaybe<PublicationState>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPlatformArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryPlatformsArgs = {
  filters?: InputMaybe<PlatformFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPublisherArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryPublishersArgs = {
  filters?: InputMaybe<PublisherFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryRecommendedArgs = {
  publicationState?: InputMaybe<PublicationState>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Recommended = {
  __typename?: 'Recommended'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  section: ComponentPagePopularGames
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type RecommendedEntity = {
  __typename?: 'RecommendedEntity'
  attributes?: Maybe<Recommended>
  id?: Maybe<Scalars['ID']['output']>
}

export type RecommendedEntityResponse = {
  __typename?: 'RecommendedEntityResponse'
  data?: Maybe<RecommendedEntity>
}

export type RecommendedInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  section?: InputMaybe<ComponentPagePopularGamesInput>
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  containsi?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  eq?: InputMaybe<Scalars['String']['input']>
  eqi?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  ne?: InputMaybe<Scalars['String']['input']>
  nei?: InputMaybe<Scalars['String']['input']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']['input']>
  notContainsi?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  notNull?: InputMaybe<Scalars['Boolean']['input']>
  null?: InputMaybe<Scalars['Boolean']['input']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']['output']>
  caption?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  ext?: Maybe<Scalars['String']['output']>
  formats?: Maybe<Scalars['JSON']['output']>
  hash: Scalars['String']['output']
  height?: Maybe<Scalars['Int']['output']>
  mime: Scalars['String']['output']
  name: Scalars['String']['output']
  previewUrl?: Maybe<Scalars['String']['output']>
  provider: Scalars['String']['output']
  provider_metadata?: Maybe<Scalars['JSON']['output']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  url: Scalars['String']['output']
  width?: Maybe<Scalars['Int']['output']>
}

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']['output']>
}

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  folder?: InputMaybe<UploadFolderFiltersInput>
  folderPath?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>
  caption?: InputMaybe<Scalars['String']['input']>
  ext?: InputMaybe<Scalars['String']['input']>
  folder?: InputMaybe<Scalars['ID']['input']>
  folderPath?: InputMaybe<Scalars['String']['input']>
  formats?: InputMaybe<Scalars['JSON']['input']>
  hash?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  mime?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  previewUrl?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

export type UploadFolder = {
  __typename?: 'UploadFolder'
  children?: Maybe<UploadFolderRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  files?: Maybe<UploadFileRelationResponseCollection>
  name: Scalars['String']['output']
  parent?: Maybe<UploadFolderEntityResponse>
  path: Scalars['String']['output']
  pathId: Scalars['Int']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity'
  attributes?: Maybe<UploadFolder>
  id?: Maybe<Scalars['ID']['output']>
}

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse'
  data?: Maybe<UploadFolderEntity>
}

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection'
  data: Array<UploadFolderEntity>
  meta: ResponseCollectionMeta
}

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  children?: InputMaybe<UploadFolderFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  files?: InputMaybe<UploadFileFiltersInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFolderFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>
  parent?: InputMaybe<UploadFolderFiltersInput>
  path?: InputMaybe<StringFilterInput>
  pathId?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  parent?: InputMaybe<Scalars['ID']['input']>
  path?: InputMaybe<Scalars['String']['input']>
  pathId?: InputMaybe<Scalars['Int']['input']>
}

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection'
  data: Array<UploadFolderEntity>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input']
  password: Scalars['String']['input']
  provider?: Scalars['String']['input']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']['output']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']['output']>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']['output']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  type?: Maybe<Scalars['String']['output']>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  type?: InputMaybe<Scalars['String']['input']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']['output']
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']['output']>
  confirmed?: Maybe<Scalars['Boolean']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email: Scalars['String']['output']
  provider?: Maybe<Scalars['String']['output']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  username: Scalars['String']['output']
}

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']['output']>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>
  confirmationToken?: InputMaybe<Scalars['String']['input']>
  confirmed?: InputMaybe<Scalars['Boolean']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  provider?: InputMaybe<Scalars['String']['input']>
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['ID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}

export type BannerFragmentFragment = {
  __typename?: 'Banner'
  title: string
  subtitle: string
  image: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      attributes?: { __typename?: 'UploadFile'; url: string } | null
    } | null
  }
  button?: {
    __typename?: 'ComponentPageButton'
    label: string
    link: string
  } | null
  ribbon?: {
    __typename?: 'ComponentPageRibbon'
    text?: string | null
    color?: Enum_Componentpageribbon_Color | null
    size?: Enum_Componentpageribbon_Size | null
  } | null
}

export type GameFragmentFragment = {
  __typename?: 'Game'
  name: string
  slug?: string | null
  price: number
  cover?: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      attributes?: { __typename?: 'UploadFile'; url: string } | null
    } | null
  } | null
  developers?: {
    __typename?: 'DeveloperRelationResponseCollection'
    data: Array<{
      __typename?: 'DeveloperEntity'
      attributes?: { __typename?: 'Developer'; name: string } | null
    }>
  } | null
}

export type HighlightFragmentFragment = {
  __typename?: 'ComponentPageHighlight'
  title: string
  subtitle: string
  buttonLink: string
  buttonLabel: string
  alignment?: Enum_Componentpagehighlight_Alignment | null
  background: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      attributes?: { __typename?: 'UploadFile'; url: string } | null
    } | null
  }
  floatImage?: {
    __typename?: 'UploadFileEntityResponse'
    data?: {
      __typename?: 'UploadFileEntity'
      attributes?: { __typename?: 'UploadFile'; url: string } | null
    } | null
  } | null
}

export type MutationRegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput
}>

export type MutationRegisterMutation = {
  __typename?: 'Mutation'
  register: { __typename?: 'UsersPermissionsLoginPayload'; jwt?: string | null }
}

export type QueryGamesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  start?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<GameFiltersInput>
  sort?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >
}>

export type QueryGamesQuery = {
  __typename?: 'Query'
  games?: {
    __typename?: 'GameEntityResponseCollection'
    data: Array<{
      __typename?: 'GameEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Game'
        name: string
        slug?: string | null
        price: number
        cover?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; url: string } | null
          } | null
        } | null
        developers?: {
          __typename?: 'DeveloperRelationResponseCollection'
          data: Array<{
            __typename?: 'DeveloperEntity'
            attributes?: { __typename?: 'Developer'; name: string } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type QueryGamesBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type QueryGamesBySlugQuery = {
  __typename?: 'Query'
  games?: {
    __typename?: 'GameEntityResponseCollection'
    data: Array<{
      __typename?: 'GameEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Game'
        name: string
        short_description?: string | null
        description?: string | null
        price: number
        rating?: Enum_Game_Rating | null
        release_date?: any | null
        gallery?: {
          __typename?: 'UploadFileRelationResponseCollection'
          data: Array<{
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              url: string
              label?: string | null
            } | null
          }>
        } | null
        cover?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; src: string } | null
          } | null
        } | null
        developers?: {
          __typename?: 'DeveloperRelationResponseCollection'
          data: Array<{
            __typename?: 'DeveloperEntity'
            attributes?: { __typename?: 'Developer'; name: string } | null
          }>
        } | null
        publisher?: {
          __typename?: 'PublisherEntityResponse'
          data?: {
            __typename?: 'PublisherEntity'
            attributes?: {
              __typename?: 'Publisher'
              name?: string | null
            } | null
          } | null
        } | null
        platforms?: {
          __typename?: 'PlatformRelationResponseCollection'
          data: Array<{
            __typename?: 'PlatformEntity'
            attributes?: { __typename?: 'Platform'; name: string } | null
          }>
        } | null
        categories?: {
          __typename?: 'CategoryRelationResponseCollection'
          data: Array<{
            __typename?: 'CategoryEntity'
            attributes?: { __typename?: 'Category'; name: string } | null
          }>
        } | null
      } | null
    }>
  } | null
}

export type QueryHomeQueryVariables = Exact<{
  date: Scalars['Date']['input']
}>

export type QueryHomeQuery = {
  __typename?: 'Query'
  banners?: {
    __typename?: 'BannerEntityResponseCollection'
    data: Array<{
      __typename?: 'BannerEntity'
      attributes?: {
        __typename?: 'Banner'
        title: string
        subtitle: string
        image: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; url: string } | null
          } | null
        }
        button?: {
          __typename?: 'ComponentPageButton'
          label: string
          link: string
        } | null
        ribbon?: {
          __typename?: 'ComponentPageRibbon'
          text?: string | null
          color?: Enum_Componentpageribbon_Color | null
          size?: Enum_Componentpageribbon_Size | null
        } | null
      } | null
    }>
  } | null
  newGames?: {
    __typename?: 'GameEntityResponseCollection'
    data: Array<{
      __typename?: 'GameEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Game'
        name: string
        slug?: string | null
        price: number
        cover?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; url: string } | null
          } | null
        } | null
        developers?: {
          __typename?: 'DeveloperRelationResponseCollection'
          data: Array<{
            __typename?: 'DeveloperEntity'
            attributes?: { __typename?: 'Developer'; name: string } | null
          }>
        } | null
      } | null
    }>
  } | null
  upcommingGames?: {
    __typename?: 'GameEntityResponseCollection'
    data: Array<{
      __typename?: 'GameEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Game'
        name: string
        slug?: string | null
        price: number
        cover?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; url: string } | null
          } | null
        } | null
        developers?: {
          __typename?: 'DeveloperRelationResponseCollection'
          data: Array<{
            __typename?: 'DeveloperEntity'
            attributes?: { __typename?: 'Developer'; name: string } | null
          }>
        } | null
      } | null
    }>
  } | null
  freeGames?: {
    __typename?: 'GameEntityResponseCollection'
    data: Array<{
      __typename?: 'GameEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Game'
        name: string
        slug?: string | null
        price: number
        cover?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; url: string } | null
          } | null
        } | null
        developers?: {
          __typename?: 'DeveloperRelationResponseCollection'
          data: Array<{
            __typename?: 'DeveloperEntity'
            attributes?: { __typename?: 'Developer'; name: string } | null
          }>
        } | null
      } | null
    }>
  } | null
  sections?: {
    __typename?: 'HomeEntityResponse'
    data?: {
      __typename?: 'HomeEntity'
      attributes?: {
        __typename?: 'Home'
        newGames?: {
          __typename?: 'ComponentPageSection'
          title?: string | null
          highlight?: {
            __typename?: 'ComponentPageHighlight'
            title: string
            subtitle: string
            buttonLink: string
            buttonLabel: string
            alignment?: Enum_Componentpagehighlight_Alignment | null
            background: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            }
            floatImage?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            } | null
          } | null
        } | null
        popularGames?: {
          __typename?: 'ComponentPagePopularGames'
          title: string
          highlight?: {
            __typename?: 'ComponentPageHighlight'
            title: string
            subtitle: string
            buttonLink: string
            buttonLabel: string
            alignment?: Enum_Componentpagehighlight_Alignment | null
            background: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            }
            floatImage?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            } | null
          } | null
          games?: {
            __typename?: 'GameRelationResponseCollection'
            data: Array<{
              __typename?: 'GameEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Game'
                name: string
                slug?: string | null
                price: number
                cover?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                    } | null
                  } | null
                } | null
                developers?: {
                  __typename?: 'DeveloperRelationResponseCollection'
                  data: Array<{
                    __typename?: 'DeveloperEntity'
                    attributes?: {
                      __typename?: 'Developer'
                      name: string
                    } | null
                  }>
                } | null
              } | null
            }>
          } | null
        } | null
        upcommingGames?: {
          __typename?: 'ComponentPageSection'
          title?: string | null
          highlight?: {
            __typename?: 'ComponentPageHighlight'
            title: string
            subtitle: string
            buttonLink: string
            buttonLabel: string
            alignment?: Enum_Componentpagehighlight_Alignment | null
            background: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            }
            floatImage?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            } | null
          } | null
        } | null
        freeGames?: {
          __typename?: 'ComponentPageSection'
          title?: string | null
          highlight?: {
            __typename?: 'ComponentPageHighlight'
            title: string
            subtitle: string
            buttonLink: string
            buttonLabel: string
            alignment?: Enum_Componentpagehighlight_Alignment | null
            background: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            }
            floatImage?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type QueryRecommendedQueryVariables = Exact<{ [key: string]: never }>

export type QueryRecommendedQuery = {
  __typename?: 'Query'
  recommended?: {
    __typename?: 'RecommendedEntityResponse'
    data?: {
      __typename?: 'RecommendedEntity'
      attributes?: {
        __typename?: 'Recommended'
        section: {
          __typename?: 'ComponentPagePopularGames'
          title: string
          highlight?: {
            __typename?: 'ComponentPageHighlight'
            title: string
            subtitle: string
            buttonLink: string
            buttonLabel: string
            alignment?: Enum_Componentpagehighlight_Alignment | null
            background: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            }
            floatImage?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            } | null
          } | null
          games?: {
            __typename?: 'GameRelationResponseCollection'
            data: Array<{
              __typename?: 'GameEntity'
              id?: string | null
              attributes?: {
                __typename?: 'Game'
                name: string
                slug?: string | null
                price: number
                cover?: {
                  __typename?: 'UploadFileEntityResponse'
                  data?: {
                    __typename?: 'UploadFileEntity'
                    attributes?: {
                      __typename?: 'UploadFile'
                      url: string
                    } | null
                  } | null
                } | null
                developers?: {
                  __typename?: 'DeveloperRelationResponseCollection'
                  data: Array<{
                    __typename?: 'DeveloperEntity'
                    attributes?: {
                      __typename?: 'Developer'
                      name: string
                    } | null
                  }>
                } | null
              } | null
            }>
          } | null
        }
      } | null
    } | null
  } | null
}

export type QueryUpcommingQueryVariables = Exact<{
  date: Scalars['Date']['input']
}>

export type QueryUpcommingQuery = {
  __typename?: 'Query'
  upcommingGames?: {
    __typename?: 'GameEntityResponseCollection'
    data: Array<{
      __typename?: 'GameEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Game'
        name: string
        slug?: string | null
        price: number
        cover?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: { __typename?: 'UploadFile'; url: string } | null
          } | null
        } | null
        developers?: {
          __typename?: 'DeveloperRelationResponseCollection'
          data: Array<{
            __typename?: 'DeveloperEntity'
            attributes?: { __typename?: 'Developer'; name: string } | null
          }>
        } | null
      } | null
    }>
  } | null
  showcase?: {
    __typename?: 'HomeEntityResponse'
    data?: {
      __typename?: 'HomeEntity'
      attributes?: {
        __typename?: 'Home'
        upcommingGames?: {
          __typename?: 'ComponentPageSection'
          title?: string | null
          highlight?: {
            __typename?: 'ComponentPageHighlight'
            title: string
            subtitle: string
            buttonLink: string
            buttonLabel: string
            alignment?: Enum_Componentpagehighlight_Alignment | null
            background: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            }
            floatImage?: {
              __typename?: 'UploadFileEntityResponse'
              data?: {
                __typename?: 'UploadFileEntity'
                attributes?: { __typename?: 'UploadFile'; url: string } | null
              } | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}
