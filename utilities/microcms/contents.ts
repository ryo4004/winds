import type { MicroCMSApi } from './api'

type DirectLink = {
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

type Concert = {
  fieldId: 'concert'
  type: '定期演奏会' | 'ミニコンサート'
  title: string
  status: '準備' | '公開' | '終了'
  date: string
}

export type Contents = MicroCMSApi<{
  directLink: DirectLink
  news: Array<News>
  concert: Array<Concert>
}>
