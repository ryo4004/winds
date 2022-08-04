import Link from 'next/link'
import { DateTime } from 'luxon'
import classNames from 'classnames'

import { Logo } from '../svg/Logo'
import { ScrollTop } from './ScrollTop/ScrollTop'
import { BackToHome } from './BackToHome/BackToHome'

import styles from './Footer.module.scss'

export const Footer = ({ isHome }: { isHome: boolean }) => {
  return (
    <>
      <div className={classNames('block', styles['block'])}>
        <BackNavigation isHome={isHome} />
      </div>
      <footer className={styles.footer}>
        <div>
          <div className={styles.author}>
            <Link href="/">
              <Logo isFooterLink={true} />
            </Link>
            <small>&copy; The Wind Ensemble 1985-{DateTime.now().toFormat('yyyy')} All Rights Reserved.</small>
          </div>
          <div className={styles.link}>
            <ul>
              <li>
                <a href="https://member.winds-n.com">会員専用ページ</a>
              </li>
              <li>
                <a href="policy">個人情報保護方針</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

const BackNavigation = ({ isHome }: { isHome: boolean }) => {
  return (
    <div className={styles['back-navigation']}>
      {isHome && <ScrollTop isHome={true} />}
      {!isHome && (
        <>
          <BackToHome />
          <ScrollTop />
        </>
      )}
    </div>
  )
}
