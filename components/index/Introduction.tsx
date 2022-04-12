import classNames from 'classnames'

import { Niigata } from '../svg/Niigata'
import { LinkButton } from '../Button/LinkButton'

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
          <LinkButton href="/about" />
        </div>
      </div>
    </div>
  )
}
