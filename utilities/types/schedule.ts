import type { DateTime } from 'luxon'

export type ApiSchedule = {
  timestamp: Timestamp
  today: Today
  next: Next
  list: Array<ApiScheduleItem>
  schedule: { [key in string]: ApiScheduleItem }
}

type Timestamp = {
  date: string
  time: string
  year: string
  month: string
  day: string
  hour: string
  minute: string
}

type Today = boolean

type Next = {
  date: string
  weekjp: string
  weeken: string
  place: string
  time: {
    start: string
    end: string
  }
  studio: string
  memo: string | false
}

export type ApiScheduleItem = {
  date: string
  weekjp: string
  weeken: string
  place: string
  time: {
    start: string
    end: string
  }
  studio: string
  memo: string | false
}

export type ScheduleItem = {
  startAt: DateTime
  endAt: DateTime
  memo: string
}
