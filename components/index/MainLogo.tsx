import Link from 'next/link'

import { Logo } from '../svg/Logo'

import styles from './MainLogo.module.scss'

export const MainLogo = ({ showConcertGuide }: { showConcertGuide: boolean }) => {
  return (
    <section className={styles['main-logo']}>
      <main className={styles['before-direct-link']}>
        <Logo isAnimate={true} />
      </main>
      {showConcertGuide && <DirectLink />}
    </section>
  )
}

const DirectLink = () => {
  return (
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
  )
}
