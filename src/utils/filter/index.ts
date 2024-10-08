import { ItemProps } from '@/components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}
  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key)
      const isCheckBox = item?.type === 'checkbox'

      if (isCheckBox) {
        obj[key] = {
          name: Array.isArray(queryString[key])
            ? { in: queryString[key] }
            : { contains: queryString[key] }
        }
      } else if (key === 'price_lte') {
        const [field, operator] = key.split('_')
        if (!obj[field]) {
          obj[field] = {}
        }
        obj[field][operator] = queryString[key]
      } else {
        obj[key] = queryString[key]
      }
    })

  return obj
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const isCheckBox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    obj[key] = !isArray && isCheckBox ? [queryString[key]] : queryString[key]
  })

  return obj
}
