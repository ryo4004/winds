import Link from 'next/link'
import type { DirectLink } from '../../utilities/microcms/directLink/directLink'

import { IndexLogo } from '../svg/Logo'

import styles from './MainLogo.module.scss'

export const MainLogo = ({ directLink }: { directLink: DirectLink }) => {
  return (
    <section className={styles['main-logo']}>
      <main className={styles['before-direct-link']}>
        <IndexLogo />
      </main>
      {directLink.active && <DirectLink directLink={directLink} />}
    </section>
  )
}

const DirectLink = ({ directLink }: { directLink: DirectLink }) => {
  return (
    <div className={styles['direct-link']}>
      <Link href={directLink.url}>
        <a>
          <div className={styles.detail}>
            <p>演奏会のお知らせ</p>
            <h3>{directLink.label}</h3>
          </div>
        </a>
      </Link>
    </div>
  )
}
