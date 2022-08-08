import type { MicroCMSApi } from './api'
import type { DirectLinkApi, DirectLink } from './directLink/directLink'
import { convertDirectLink } from './directLink/directLink'
import type { NewsApi, News } from './news/news'
import { convertNews } from './news/news'
import type { ConcertApi, Concert } from './concert/concert'
import { convertConcerts } from './concert/concert'

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
