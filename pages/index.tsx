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
import { convertContents } from '../utilities/microcms/contents'
import type { Contents, ContentsApi } from '../utilities/microcms/contents'
import { convertScheduleList } from '../utilities/microcms/schedule'
import type { Schedule, ScheduleApi } from '../utilities/microcms/schedule'

const Home = ({ contents, schedule }: { contents: Contents; schedule: Array<Schedule> }) => {
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
  const contentsResponse = await getContents<ContentsApi>('contents')
  const scheduleResponse = await getAllContents<ScheduleApi>('schedule')
  if (!contentsResponse || !scheduleResponse) {
    return { notFound: true }
  }
  return { props: { contents: convertContents(contentsResponse), schedule: convertScheduleList(scheduleResponse) } }
}

export default Home
