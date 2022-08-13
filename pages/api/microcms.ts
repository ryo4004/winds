import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: String(process.env.NEXT_MICROCMS_SERVICE_DOMAIN),
  apiKey: String(process.env.NEXT_SECRET_MICROCMS_TOKEN),
})

type List<T> = {
  contents: Array<T>
  totalCount: number
  offset: number
  limit: number
}

// microcms-js-sdkの型
type depthNumber = 1 | 2 | 3
type QueriesType = Partial<{
  draftKey: string
  limit: number
  offset: number
  orders: string
  fields: string
  q: string
  depth: depthNumber
  ids: string
  filters: string
}>

const PER_PAGE = 5

export const getContents = async <T>(path: string, queries?: QueriesType): Promise<T> => {
  return await client.get({ endpoint: path, queries })
}

export const getAllContents = async <T>(
  path: string,
  offset: number = 0,
  contents: Array<T> = []
): Promise<Array<T>> => {
  const limit = PER_PAGE
  const allContents = contents
  const response = await getContents<List<T>>(path, { offset, limit })
  const newAllContents = [...allContents, ...response.contents]
  if (response.contents.length === limit) {
    return await getAllContents(path, offset + response.contents.length, newAllContents)
  } else {
    return newAllContents
  }
}
