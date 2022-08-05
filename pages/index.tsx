import { MainBackgroundImage } from '../components/index/MainBackgroundImage'
import { MainLogo } from '../components/index/MainLogo'
import { Quote } from '../components/index/Quote'
import { ScrollGuide } from '../components/index/ScrollGuide'
import { News } from '../components/index/News'
import { Introduction } from '../components/index/Introduction'
import { Concert } from '../components/index/Concert'
import { Schedule as ScheduleComponent } from '../components/index/Schedule'
import { Contact } from '../components/index/Contact'
import { Footer } from '../components/Footer/Footer'
import { getAllContents } from './api/api'

import styles from '../styles/index.module.scss'

import type { GetStaticProps } from 'next'
import { convertScheduleList } from '../utilities/microcms/schedule'
import type { Schedule, ScheduleApi } from '../utilities/microcms/schedule'

const Home = ({ schedule }: { schedule: Array<Schedule> }) => {
  console.log({ schedule })
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
        <ScheduleComponent />
        <Contact />
      </div>
      <Footer isHome={true} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await getAllContents<ScheduleApi>('schedule')
  if (!response) {
    return { notFound: true }
  }
  return { props: { schedule: convertScheduleList(response) } }
}

export default Home
