import type { MicroCMSApi } from './api'
import type { NewsApi, News } from './news/news'
import { convertNews } from './news/news'

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

const CONCERT_TYPE = {
  main: '定期演奏会',
  mini: 'ミニコンサート',
} as const

const CONCERT_STATUS = {
  prepare: '準備',
  open: '公開',
  close: '終了',
} as const

type ConcertType = typeof CONCERT_TYPE[keyof typeof CONCERT_TYPE]
type ConcertStatus = typeof CONCERT_STATUS[keyof typeof CONCERT_STATUS]

type ConcertItem = {
  status: keyof typeof CONCERT_STATUS
  title: string
  url: string
  date: string
}

export type Concert = {
  main: ConcertItem[]
  mini: ConcertItem[]
}

type ConcertApi = {
  fieldId: 'concert'
  type: ConcertType[]
  status: ConcertStatus[]
  title: string
  url: string
  date: string
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

const convertConcerts = (concerts: ConcertApi[]): Concert => {
  const mainConcerts = concerts
    .filter((item) => item.type.includes(CONCERT_TYPE.main))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
  const miniConcerts = concerts
    .filter((item) => item.type.includes(CONCERT_TYPE.mini))
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return {
    main: mainConcerts.map(convertConcertItem),
    mini: miniConcerts.map(convertConcertItem),
  }
}

const convertConcertItem = (concert: ConcertApi): ConcertItem => {
  return {
    status: convertConcertStatus(concert.status),
    title: concert.title,
    url: concert.url,
    date: concert.date,
  }
}

const convertConcertStatus = (status: ConcertStatus[]): keyof typeof CONCERT_STATUS => {
  if (status.length === 0) {
    return 'prepare'
  }
  switch (status[0]) {
    case CONCERT_STATUS.prepare: {
      return 'prepare'
    }
    case CONCERT_STATUS.open: {
      return 'open'
    }
    case CONCERT_STATUS.close: {
      return 'close'
    }
  }
}
