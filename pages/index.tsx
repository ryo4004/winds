import styles from '../styles/index.module.scss'

import type { NextPage } from 'next'
import { MainBackgroundImage } from '../components/index/MainBackgroundImage'
import { MainLogo } from '../components/index/MainLogo'
import { Quote } from '../components/index/Quote'

const Home: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <MainBackgroundImage />
        <MainLogo showConcertGuide={true} />
        <Quote />
        <span className={styles['scroll-guide']}></span>
      </header>
    </>
  )
}

export default Home
