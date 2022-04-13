import classNames from 'classnames'

import styles from './ScrollTop.module.scss'

export const ScrollTop = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <div className={styles.index}>
      <div className="scrollTop">
        <div id="scrollTop" onClick={scrollTop}>
          <i className="fas fa-chevron-up"></i>
          <span>トップへ</span>
        </div>
      </div>
    </div>
  )
}
