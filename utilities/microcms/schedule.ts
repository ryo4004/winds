import { DateTime } from 'luxon'
import type { MicroCMSApi } from './api'

type Place = '長岡リリックホール'

type StudioNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type Studio = `第${StudioNumber}スタジオ` | 'コンサートホール'

type TimeDivision = '午前' | '午後' | '夜間'

const weekdaysJa = ['月', '火', '水', '木', '金', '土', '日'] as const
const weekdaysEn = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const

export type ScheduleApi = MicroCMSApi<{
  id: string
  date: string
  place: Array<Place>
  studio: Array<Studio>
  timeDivision: Array<TimeDivision>
  note: string
}>

export type Schedule = {
  date: string
  month: number
  day: number
  weekdayJa: string
  weekdayEn: string
  place: Place
  studio: Array<Studio>
  start: string
  end: string
}

export const splitByToday = (today: DateTime, schedule: Array<Schedule>) => {
  return schedule.filter((item) => DateTime.fromISO(item.date).startOf('day') >= today.startOf('day'))
}

export const convertScheduleList = (scheduleApi: Array<ScheduleApi>): Array<Schedule> => {
  return scheduleApi.map(convertSchedule).sort((a, b) => (a.date > b.date ? 1 : -1))
}

const convertSchedule = (scheduleApi: ScheduleApi): Schedule => {
  const { start, end } = calcTimeDivision(
    DateTime.fromISO(scheduleApi.date, { zone: 'Asia/Tokyo' }),
    scheduleApi.timeDivision
  )
  const date = DateTime.fromISO(scheduleApi.date, { zone: 'Asia/Tokyo' })
  return {
    date: date.toJSON(),
    month: date.month,
    day: date.day,
    weekdayJa: weekdaysJa[Number(date.toFormat('c')) - 1],
    weekdayEn: weekdaysEn[Number(date.toFormat('c')) - 1],
    place: scheduleApi.place.length === 0 ? '長岡リリックホール' : scheduleApi.place[0],
    studio: scheduleApi.studio,
    start: start.toFormat('H:mm'),
    end: end.toFormat('H:mm'),
  }
}

const MORNING = (date: DateTime) => ({ start: date.plus({ hour: 9 }), end: date.plus({ hour: 12 }) })
const AFTERNOON = (date: DateTime) => ({ start: date.plus({ hour: 13 }), end: date.plus({ hour: 17 }) })
const NIGHT = (date: DateTime) => ({ start: date.plus({ hour: 18 }), end: date.plus({ hour: 22 }) })

const asc = (a: DateTime, b: DateTime) => (a > b ? 1 : -1)
const desc = (a: DateTime, b: DateTime) => (a < b ? 1 : -1)

/**
 * 時間区分をもとに開始時刻と終了時刻を計算する
 */
const calcTimeDivision = (date: DateTime, timeDivision: Array<TimeDivision>) => {
  const convertedTimes = timeDivision.map((item) => {
    switch (item) {
      case '午前': {
        return MORNING(date)
      }
      case '午後': {
        return AFTERNOON(date)
      }
      case '夜間': {
        return NIGHT(date)
      }
    }
  })
  const timeStart = [...convertedTimes].map((item) => item.start).sort(asc)
  const timeEnd = [...convertedTimes].map((item) => item.end).sort(desc)
  return { start: timeStart[0], end: timeEnd[0] }
}
