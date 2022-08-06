import type { ReactNode } from 'react'
import styles from './Block.module.scss'

export const Block = ({ children }: { children: ReactNode }) => {
  return <div className={styles.block}>{children}</div>
}
