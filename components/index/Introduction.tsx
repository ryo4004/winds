import classNames from 'classnames'

import { Niigata } from '../svg/Niigata'

import styles from './Introduction.module.scss'

export const Introduction = () => {
  return (
    <div className={classNames('home-block', 'full', styles.introduction)}>
      <div className={classNames(styles.background, styles.map)}>
        <Niigata />
      </div>
      <div className={styles.contents}>
        <div>
          <h2 className={styles.location} data-subttl="About us">
            私たちについて
          </h2>
          <div className="text">
            <p>ザ・ウィンド・アンサンブルは、新潟県長岡市を中心に活動している社会人吹奏楽団です。</p>
          </div>
          <a href="#" className={classNames('button', styles.button)}>
            <div>
              <div className="text">More</div>
              <div className="link-arrow">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
