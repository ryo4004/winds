import { MainBackgroundImage } from '../components/index/MainBackgroundImage'
import { MainLogo } from '../components/index/MainLogo'
import { Quote } from '../components/index/Quote'
import { ScrollGuide } from '../components/index/ScrollGuide'
import { News } from '../components/index/News'
import { Introduction } from '../components/index/Introduction'

import styles from '../styles/index.module.scss'

import type { NextPage } from 'next'

const Home: NextPage = () => {
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
      </div>
    </>
  )
}

export default Home
