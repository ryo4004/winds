import type { ReactNode } from 'react'
import styles from './Block.module.scss'

export const Block = ({ children, title, subTitle }: { children: ReactNode; title: string; subTitle: string }) => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>
        <h2 data-subttl={subTitle}>{title}</h2>
      </div>
      <div className={styles.contents}>{children}</div>
    </div>
  )
}
