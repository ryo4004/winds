import classNames from 'classnames'

import styles from './ScrollTop.module.scss'

export const ScrollTop = ({ isHome }: { isHome?: boolean }) => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <div className={classNames(styles.index, { [styles.home]: isHome || false })}>
      <div className={styles['scroll-top']} onClick={scrollTop}>
        <i className="fas fa-chevron-up"></i>
        <span>トップへ</span>
      </div>
    </div>
  )
}
