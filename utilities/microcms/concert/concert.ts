import { DateTime } from 'luxon'

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
  year: number
  month: number
  day: number
  weekday: string
}

export type Concert = {
  main: ConcertItem[]
  mini: ConcertItem[]
}

export type ConcertApi = {
  fieldId: 'concert'
  type: ConcertType[]
  status: ConcertStatus[]
  title: string
  url: string
  date: string
}

export const convertConcerts = (concerts: ConcertApi[]): Concert => {
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

const weekdaysJa = ['月', '火', '水', '木', '金', '土', '日'] as const

const convertConcertItem = (concert: ConcertApi): ConcertItem => {
  const date = DateTime.fromISO(concert.date)
  return {
    status: convertConcertStatus(concert.status),
    title: concert.title,
    url: concert.url,
    date: date.toJSON(),
    year: date.year,
    month: date.month,
    day: date.day,
    weekday: weekdaysJa[Number(date.toFormat('c')) - 1],
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
