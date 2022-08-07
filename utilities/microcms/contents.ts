import type { MicroCMSApi } from './api'

export type DirectLink = {
  fieldId: 'directLink'
  active: boolean
  label: string
  url: string
}

type News = {
  fieldId: 'news'
  date: string
  label: string
  url: string
}

type ConcertType = '定期演奏会' | 'ミニコンサート'
type ConcertStatus = '準備' | '公開' | '終了'

type Concert = {
  fieldId: 'concert'
  type: ConcertType
  title: string
  status: ConcertStatus
  date: string
}

export type ContentsApi = MicroCMSApi<{
  directLink: DirectLink
  news: Array<News>
  concert: Array<Concert>
}>

export type Contents = {
  directLink: DirectLink
  news: Array<News>
  concert: Array<Concert>
}

export const convertContents = (contentsApi: ContentsApi): Contents => {
  return {
    directLink: contentsApi.directLink,
    news: contentsApi.news,
    concert: contentsApi.concert,
  }
}
