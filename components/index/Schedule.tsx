import classNames from 'classnames'
import { DateTime } from 'luxon'

import type { Schedule } from '../../utilities/microcms/schedule'
import { LinkButton } from '../Button/LinkButton'
import { Block } from '../Layout/Block'
import { Text } from '../Layout/Text'

import styles from './Schedule.module.scss'

export const ScheduleComponent = ({ schedule }: { schedule: Schedule[] }) => {
  return (
    <div className={styles.schedule}>
      <Block title="練習日程" subTitle="Schedule">
        <Text>
          <p>主に長岡リリックホールのスタジオにて練習しております。</p>
          <p>基本的に第5スタジオにて毎週土曜日18時から22時まで合奏や個人練習しています。</p>
          <p>本番が近くなると、第1スタジオやコンサートホールなどを利用します。</p>
        </Text>
        {schedule.length !== 0 && <ScheduleNext next={schedule[0]} />}
        <LinkButton href="/schedule" />
      </Block>
    </div>
  )
}

const ScheduleNext = ({ next }: { next: Schedule }) => {
  const isToday = DateTime.fromISO(next.date).hasSame(DateTime.now(), 'day')
  const nextDate = DateTime.fromISO(next.date)
  const month = nextDate.month
  const day = nextDate.day
  const start = DateTime.fromISO(next.start)
  const end = DateTime.fromISO(next.end)
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
              {/* 一時的に非表示 */}
              {/* <span className={classNames(styles.day, styles[next.getWeekdaysEn()])}>{next.getWeekdaysJa()}</span> */}
            </span>
            <span className="time">
              {start.toFormat('H:mm')}～{end.toFormat('H:mm')}
            </span>
          </span>
          <span className={styles.frame}>
            <span className={styles.place}>{next.place}</span>
            <span className={styles.studio}>{next.studio}</span>
          </span>
        </p>
      </div>
    </div>
  )
}
