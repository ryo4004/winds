import { DateTime } from 'luxon'
import classNames from 'classnames'
import type { GetStaticProps } from 'next'

import { convertScheduleList } from '../utilities/microcms/schedule'
import { getAllContents } from './api/api'
import { splitByToday } from '../utilities/microcms/schedule'
import { Block } from '../components/Layout/Block'
import { Layout } from '../components/Layout/Layout'

import type { ScheduleApi, Schedule } from '../utilities/microcms/schedule'

import styles from '../styles/schedule.module.scss'

const Schedule = ({ schedule }: { schedule: Array<Schedule> }) => {
  const splitedSchedule = splitByToday(DateTime.now(), schedule)
  return (
    <Layout pageTitle="練習日程" pageSubTitle="Schedule" pathList={[{ path: '/schedule', label: '練習日程' }]}>
      <Block title="次回の練習日" subTitle="Next Practice">
        {splitedSchedule.length !== 0 && <ScheduleNext next={splitedSchedule[0]} />}
        {splitedSchedule.length === 0 && <div className={styles['schedule-next']}>直近の練習日程はありません</div>}
      </Block>

      <Block title="今後の練習日程" subTitle="Schedule">
        <ScheduleAfter schedule={splitedSchedule} />
      </Block>
    </Layout>
  )
}

const ScheduleNext = ({ next }: { next: Schedule }) => {
  const isToday = DateTime.fromISO(next.date).hasSame(DateTime.now(), 'day')
  const { month, day, weekdayJa, weekdayEn, start, end, place, studio } = next
  return (
    <div className={styles['schedule-next']}>
      <div>
        {isToday && <p className={styles.todayflag}>本日</p>}
        <p>
          <span className={styles.frame}>
            <span className={styles['month-date']}>
              <span className={styles.month}>{month}</span>
              <span className={classNames(styles.month, styles.text)}>月</span>
              <span className={styles.date}>{day}</span>
              <span className={classNames(styles.date, styles.text)}>日</span>
              <span className={classNames(styles.day, styles[weekdayEn])}>{weekdayJa}</span>
            </span>
            <span className="time">
              {start}～{end}
            </span>
          </span>
          <span className={styles.frame}>
            <span className={styles.place}>{place}</span>
            <span className={styles.studio}>{studio}</span>
          </span>
        </p>
      </div>
    </div>
  )
}

const ScheduleAfter = ({ schedule }: { schedule: Array<Schedule> }) => {
  return (
    <div className={styles['schedule-after']}>
      <div>
        {schedule.map((item, index) => {
          const { month, day, weekdayJa, weekdayEn, start, end, place, studio } = item
          return (
            <p key={index} className={styles.each}>
              <span className={styles.frame}>
                <span className={styles['month-date']}>
                  <span className={styles.month}>{month}</span>
                  <span className={classNames(styles.month, styles.text)}>月</span>
                  <span className={styles.date}>{day}</span>
                  <span className={classNames(styles.date, styles.text)}>日</span>
                  <span className={classNames(styles.day, styles[weekdayEn])}>{weekdayJa}</span>
                </span>
                <span className="time">
                  {start}～{end}
                </span>
              </span>
              <span className={styles.frame}>
                <span className={styles.place}>{place}</span>
                <span className={styles.studio}>{studio}</span>
              </span>
            </p>
          )
        })}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const scheduleResponse = await getAllContents<ScheduleApi>('schedule')
  if (!scheduleResponse) {
    return { notFound: true }
  }
  return { props: { schedule: convertScheduleList(scheduleResponse) } }
}

export default Schedule
