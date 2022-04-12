import classNames from 'classnames'

import { useSchedule } from '../../utilities/hooks/useSchedule'
import { LinkButton } from '../Button/LinkButton'

import styles from './Schedule.module.scss'

export const Schedule = () => {
  return (
    <div className={classNames('block', styles.schedule)}>
      <div className="title">
        <h2 className="title-large" data-subttl="Schedule">
          練習日程
        </h2>
      </div>
      <div className={styles.contents}>
        <div className={styles.text}>
          <p>主に長岡リリックホールのスタジオにて練習しております。</p>
          <p>基本的に第5スタジオにて毎週土曜日18時から22時まで合奏や個人練習しています。</p>
          <p>本番が近くなると、第1スタジオやコンサートホールなどを利用します。</p>
        </div>
        <ScheduleNext />
        <LinkButton href="/schedule" />
      </div>
    </div>
  )
}

const ScheduleNext = () => {
  const { loading, schedule } = useSchedule()
  if (loading || !schedule) {
    return <>読み込み中</>
  }
  const { next } = schedule
  const { month, day } = next.getDate()
  return (
    <div className={styles['schedule-next']}>
      <div>
        {next.isToday() && <p className={styles.todayflag}>本日</p>}
        <p>
          <span className={styles.frame}>
            <span className={styles['month-date']}>
              <span className={styles.month}>{month}</span>
              <span className={classNames(styles.month, styles.text)}>月</span>
              <span className={styles.date}>{day}</span>
              <span className={classNames(styles.date, styles.text)}>日</span>
              <span className={classNames(styles.day, styles[next.getWeekdaysEn()])}>{next.getWeekdaysJa()}</span>
            </span>
            <span className="time">
              {next.getStartAtTime('H:mm')}～{next.getEndAtTime('H:mm')}
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
