import { MainBackgroundImage } from '../components/index/MainBackgroundImage'
import { MainLogo } from '../components/index/MainLogo'
import { Quote } from '../components/index/Quote'
import { ScrollGuide } from '../components/index/ScrollGuide'
import { News } from '../components/index/News'
import { Introduction } from '../components/index/Introduction'
import { Concert } from '../components/index/Concert'
import { useSchedule } from '../utilities/hooks/useSchedule'

import styles from '../styles/index.module.scss'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { loading, schedule } = useSchedule()
  console.log({ loading, schedule })
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
      </div>
    </>
  )
}

export default Home
