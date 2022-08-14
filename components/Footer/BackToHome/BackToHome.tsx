import Link from 'next/link'
import { IoChevronBackSharp } from 'react-icons/io5'

import styles from './BackToHome.module.scss'

export const BackToHome = () => {
  return (
    <div className={styles.index}>
      <Link href="/">
        <a>
          <IoChevronBackSharp className={styles.icon} />
          <span>ホームへ戻る</span>
        </a>
      </Link>
    </div>
  )
}
