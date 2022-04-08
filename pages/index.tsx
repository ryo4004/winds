import { useState, useEffect } from 'react'
import Link from 'next/link'

import { Logo } from '../components/svg/Logo'

import styles from '../styles/index.module.scss'

import type { NextPage } from 'next'

const backgroundPhotoStyleList = [
  styles.first,
  styles.second,
  styles.third,
  styles.fourth,
  styles.fifth,
  styles.sixth,
  styles.seventh,
  styles.eighth,
  styles.ninth,
  styles.tenth,
  styles.eleventh,
  styles.twelfth,
  styles.thirteenth,
  styles.fourteenth,
]

const Home: NextPage = () => {
  const [count, setCount] = useState(2)
  const [firstStyle, setFirstStyle] = useState(backgroundPhotoStyleList[0])
  const [secondStyle, setSecondStyle] = useState(backgroundPhotoStyleList[1])

  // 2枚の画像を切り替えるアニメーションを1セットとしている
  useEffect(() => {
    const interval = setInterval(() => {
      // CSS animationとの兼ね合いで2秒遅らせて切り替える
      const newBackground = backgroundPhotoStyleList[count]
      if (count % 2 === 0) {
        setTimeout(() => setFirstStyle(newBackground), 2000)
      } else {
        setTimeout(() => setSecondStyle(newBackground), 2000)
      }

      if (count === backgroundPhotoStyleList.length - 1) {
        setCount(0)
      } else {
        setCount(count + 1)
      }
    }, 15000) // CSS animationが30sなのでその半分を指定
    return () => clearInterval(interval)
  }, [count, backgroundPhotoStyleList])

  return (
    <>
      <header className={styles.header}>
        <section className={styles.background}>
          <div className={firstStyle}></div>
          <div className={secondStyle}></div>
          <div className={styles.filter}></div>
        </section>
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
