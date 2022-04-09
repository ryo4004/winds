import { useState, useEffect } from 'react'
import { DateTime } from 'luxon'
import useFetch from './useFetch'

import { API_BASE_PATH, SCHEDULE_API } from '../constant'
import { createPracticeSchedule } from '../domain/schedule/scheduleService'

import type { ApiSchedule, ApiScheduleItem } from '../types/schedule'
import type { PracticeScheduleItem } from '../domain/schedule/scheduleService'

export type Schedule = {
  next: PracticeScheduleItem
  list: Array<PracticeScheduleItem>
}

export const useSchedule = () => {
  const [schedule, setSchedule] = useState<Schedule | null>(null)
  const { loading, data } = useFetch<ApiSchedule>(API_BASE_PATH + SCHEDULE_API)

  useEffect(() => {
    if (data) {
      const scheduleList = createSchedule(data)
      setSchedule(scheduleList)
    }
  }, [data])

  return { loading, schedule }
}

const createSchedule = (schedule: ApiSchedule): Schedule => {
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
