import { DateTime } from 'luxon'

import { createPracticeSchedule } from './scheduleService'

import type { ApiSchedule, ApiScheduleItem } from '../../types/schedule'
import type { PracticeScheduleItem } from './scheduleService'

export const createSchedule = (schedule: ApiSchedule) => {
  const list = schedule.list.map((item) => {
    return createScheduleItem(item)
  })
  return {
    next: createScheduleItem(schedule.next),
    list,
  }
}

const createScheduleItem = (item: ApiScheduleItem): PracticeScheduleItem => {
  const startAt = item.date + 'T' + item.time.start + '+09:00'
  const endAt = item.date + 'T' + item.time.end + '+09:00'
  return createPracticeSchedule({
    startAt: DateTime.fromISO(startAt),
    endAt: DateTime.fromISO(endAt),
    place: item.place,
    studio: item.studio,
    memo: item.memo || '',
  })
}
