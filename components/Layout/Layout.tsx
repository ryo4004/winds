import Link from 'next/link'
import type { ReactNode } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

import styles from './Layout.module.scss'

type PathList = Array<{ path: string; label: string }>

export const Layout = ({
  children,
  pageTitle,
  pageSubTitle,
  pathList,
}: {
  children: ReactNode
  pageTitle: string
  pageSubTitle: string
  pathList: PathList
}) => {
  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles['top-title']}>
        <div>
          <h1 data-subttl={pageSubTitle}>{pageTitle}</h1>
          <div className={styles.bread}>
            <Link href="/">ホーム</Link>
            {pathList.map((item) => {
              return (
                <>
                  <FaChevronRight />
                  <Link href={item.path}>{item.label}</Link>
                </>
              )
            })}
          </div>
        </div>
      </div>

      {children}

      <Footer isHome={false} />
    </div>
  )
}
