import Link from 'next/link'

import styles from './BackToHome.module.scss'

export const BackToHome = () => {
  return (
    <div className={styles.index}>
      <Link href="/">
        <a>
          <i className="fas fa-chevron-left"></i>
          <span>ホームへ戻る</span>
        </a>
      </Link>
    </div>
  )
}
