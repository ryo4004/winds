import Link from 'next/link'
import { DateTime } from 'luxon'

import { Block } from '../Layout/Block'
import { FooterLogo } from '../svg/Logo'
import { ScrollTop } from './ScrollTop/ScrollTop'
import { BackToHome } from './BackToHome/BackToHome'

import styles from './Footer.module.scss'

export const Footer = ({ isHome }: { isHome: boolean }) => {
  return (
    <>
      <Block>
        <BackNavigation isHome={isHome} />
      </Block>
      <footer className={styles.footer}>
        <div>
          <div className={styles.author}>
            <Link href="/" passHref>
              <a>
                <FooterLogo />
              </a>
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
      {isHome && <ScrollTop rightPosition={true} />}
      {!isHome && (
        <>
          <BackToHome />
          <ScrollTop rightPosition={false} />
        </>
      )}
    </div>
  )
}
