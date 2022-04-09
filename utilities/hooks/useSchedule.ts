import { useState, useEffect } from 'react'
import { DateTime } from 'luxon'
import useFetch from './useFetch'

import { API_BASE_PATH, SCHEDULE_API } from '../constant'
import { createSchedule } from '../domain/schedule/createSchedule'

import type { ApiSchedule } from '../types/schedule'
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
