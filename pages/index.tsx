import Link from 'next/link'

import { Logo } from '../components/svg/Logo'

import styles from '../styles/index.module.scss'

import type { NextPage } from 'next'
import { MainBackgroundImage } from '../components/index/MainBackgroundImage'

const Home: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <MainBackgroundImage />
        <section className={styles['main-logo']}>
          <main className={styles['before-direct-link']}>
            <Logo />
          </main>
          <div className={styles['direct-link']}>
            <Link href="#">
              <a>
                <div className={styles.detail}>
                  <p>演奏会のお知らせ</p>
                  <h3>定期演奏会</h3>
                </div>
              </a>
            </Link>
          </div>
        </section>
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
