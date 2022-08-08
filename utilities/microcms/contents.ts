import type { MicroCMSApi } from './api'
import type { NewsApi, News } from './news/news'
import { convertNews } from './news/news'
import type { ConcertApi, Concert } from './concert/concert'
import { convertConcerts } from './concert/concert'

export type DirectLink = {
  active: boolean
  label: string
  url: string
}

type DirectLinkApi = {
  fieldId: 'directLink'
  active: boolean
  label: string
  url: string
}

export type ContentsApi = MicroCMSApi<{
  directLink: DirectLinkApi
  news: Array<NewsApi>
  concert: Array<ConcertApi>
}>

export type Contents = {
  directLink: DirectLink
  news: Array<News>
  concert: Concert
}

export const convertContents = (contentsApi: ContentsApi): Contents => {
  return {
    directLink: convertDirectLink(contentsApi.directLink),
    news: convertNews(contentsApi.news),
    concert: convertConcerts(contentsApi.concert),
  }
}

const convertDirectLink = (directLink: DirectLinkApi): DirectLink => {
  const { fieldId, ...rest } = directLink
  return { ...rest }
}
