import Link from 'next/link'
import { HeaderLogo } from '../svg/Logo'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles['main-logo']}>
        <Link href="/" passHref>
          <a>
            <HeaderLogo />
          </a>
        </Link>
      </section>
    </header>
  )
}
