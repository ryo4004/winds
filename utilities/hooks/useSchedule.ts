import { useState, useEffect } from 'react'
import useFetch from './useFetch'

import { API_BASE_PATH, SCHEDULE_API } from '../constant'

import type { ApiSchedule, ApiScheduleItem, Schedule, ScheduleItem } from '../types/schedule'

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
    next: {
      today: schedule.today,
      ...createScheduleItem(schedule.next),
    },
    list,
  }
}

const createScheduleItem = (item: ApiScheduleItem): ScheduleItem => {
  const startAt = item.date + 'T' + item.time.start + '+09:00'
  const endAt = item.date + 'T' + item.time.end + '+09:00'
  return { startAt, endAt, memo: item.memo || '' }
}
