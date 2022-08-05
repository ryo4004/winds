import { DateTime } from 'luxon'

type Place = '長岡リリックホール'

type StudioNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type Studio = `第${StudioNumber}スタジオ`

type TimeDivision = '午前' | '午後' | '夜間'

export type ScheduleApi = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  date: string
  place: Array<Place>
  studio: Array<Studio>
  timeDivision: Array<TimeDivision>
}

export type Schedule = {
  date: DateTime
  place: Place
  studio: Array<Studio>
  start: DateTime
  end: DateTime
}

export const convertScheduleList = (scheduleApi: Array<ScheduleApi>) => {
  return scheduleApi.map(convertSchedule).sort((a, b) => (a.date > b.date ? 1 : -1))
}

const convertSchedule = (scheduleApi: ScheduleApi): Schedule => {
  const { start, end } = calcTimeDivision(DateTime.fromISO(scheduleApi.date), scheduleApi.timeDivision)
  return {
    date: DateTime.fromISO(scheduleApi.date),
    place: scheduleApi.place.length === 0 ? '長岡リリックホール' : scheduleApi.place[0],
    studio: scheduleApi.studio,
    start,
    end,
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
