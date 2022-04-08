import styles from '../styles/index.module.scss'

import type { NextPage } from 'next'
import { MainBackgroundImage } from '../components/index/MainBackgroundImage'
import { MainLogo } from '../components/index/MainLogo'

const Home: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <MainBackgroundImage />
        <MainLogo showConcertGuide={true} />
        <section className={styles.quote}>
          <q>
            <Quote />
          </q>
        </section>
        <span className={styles['scroll-guide']}></span>
      </header>
    </>
  )
}

const QUOTE_TEXT = '音楽の輪が限りなく広がりますように'

const Quote = () => {
  return (
    <>
      {QUOTE_TEXT.split('').map((q, i) => (
        <span key={i}>{q}</span>
      ))}
      <span className={styles.dash}>&mdash;&mdash;</span>
    </>
  )
}

export default Home
