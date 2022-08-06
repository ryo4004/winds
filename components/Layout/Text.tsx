import type { ReactNode } from 'react'
import styles from './Text.module.scss'

export const Text = ({ children }: { children: ReactNode }) => {
  return <div className={styles.text}>{children}</div>
}
