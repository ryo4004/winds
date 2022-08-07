import { MainBackgroundImage } from '../components/index/MainBackgroundImage'
import { MainLogo } from '../components/index/MainLogo'
import { Quote } from '../components/index/Quote'
import { ScrollGuide } from '../components/index/ScrollGuide'
import { News } from '../components/index/News'
import { Introduction } from '../components/index/Introduction'
import { Concert } from '../components/index/Concert'
import { ScheduleComponent } from '../components/index/Schedule'
import { Contact } from '../components/index/Contact'
import { Footer } from '../components/Footer/Footer'
import { getAllContents, getContents } from './api/api'

import styles from '../styles/index.module.scss'

import type { GetStaticProps } from 'next'
import { convertScheduleList } from '../utilities/microcms/schedule'
import type { Schedule, ScheduleApi } from '../utilities/microcms/schedule'
import type { Contents } from '../utilities/microcms/contents'

const Home = ({ schedule, contents }: { schedule: Array<Schedule>; contents: Contents }) => {
  console.log(contents)
  return (
    <>
      <header className={styles.header}>
        <MainBackgroundImage />
        <MainLogo showConcertGuide={true} />
        <Quote />
        <ScrollGuide />
      </header>
      <div>
        <News />
        <Introduction />
        <Concert />
        <ScheduleComponent schedule={schedule} />
        <Contact />
      </div>
      <Footer isHome={true} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const scheduleResponse = await getAllContents<ScheduleApi>('schedule')
  const contentsResponse = await getContents('contents')
  if (!scheduleResponse || !contentsResponse) {
    return { notFound: true }
  }
  return { props: { schedule: convertScheduleList(scheduleResponse), contents: contentsResponse } }
}

export default Home
