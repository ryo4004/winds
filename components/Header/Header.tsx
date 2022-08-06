import Link from 'next/link'
import { Logo } from '../svg/Logo'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles['main-logo']}>
        <Link href="/" passHref>
          <a>
            <Logo isHeaderLink={true} />
          </a>
        </Link>
      </section>
    </header>
  )
}
