import { DateTime } from 'luxon'
import { Schedule, splitByToday } from './schedule'

const createDummySchedule = (partialSchedule: Partial<Schedule> = {}): Schedule => {
  const schedule: Schedule = {
    date: '2022-08-06T00:00:00.000+09:00',
    month: 8,
    day: 6,
    weekdayJa: '土',
    weekdayEn: 'saturday',
    place: '長岡リリックホール',
    studio: ['第5スタジオ'],
    start: '18:00',
    end: '22:00',
  }
  return { ...schedule, ...partialSchedule }
}

describe('splitByToday', () => {
  it('今日以前の練習日は取り除く', () => {
    const today = DateTime.fromISO('2022-08-05T00:00:00.000+09:00')
    const schedule = createDummySchedule({ date: '2022-08-04T00:00:00.000+09:00' })
    expect(splitByToday(today, [schedule])).toEqual([])
  })
  it('今日以降の練習日は残る', () => {
    const today = DateTime.fromISO('2022-08-05T00:00:00.000+09:00')
    const schedule = createDummySchedule({ date: '2022-08-05T00:00:00.000+09:00' })
    expect(splitByToday(today, [schedule])).toEqual([schedule])
  })
  it('23:59までは今日', () => {
    const today = DateTime.fromISO('2022-08-05T23:59:59.999+09:00')
    const schedule = createDummySchedule({ date: '2022-08-05T00:00:00.000+09:00' })
    expect(splitByToday(today, [schedule])).toEqual([schedule])
  })
})
