import type { ReactNode } from 'react'
import styles from './Block.module.scss'

export const Block = ({
  children,
  title,
  subTitle,
  update,
}: {
  children: ReactNode
  title?: string
  subTitle?: string
  update?: string
}) => {
  return (
    <div className={styles.block}>
      {title && subTitle && (
        <div className={styles.title}>
          <h2 data-subttl={subTitle}>{title}</h2>
          {update && <p className={styles.update}>{update}</p>}
        </div>
      )}
      <div className={styles.contents}>{children}</div>
    </div>
  )
}
