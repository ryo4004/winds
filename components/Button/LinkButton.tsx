import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

import styles from './LinkButton.module.scss'

export const LinkButton = ({ href, label = 'More' }: { href: string; label?: string }) => {
  return (
    <Link href={href}>
      <a className={styles.button}>
        <div>
          <div className={styles.text}>{label}</div>
          <div className={styles['link-arrow']}>
            <FaChevronRight />
          </div>
        </div>
      </a>
    </Link>
  )
}
