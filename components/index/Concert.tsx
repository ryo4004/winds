import classNames from 'classnames'
import { DateTime } from 'luxon'

import { LinkButton } from '../Button/LinkButton'
import { Block } from '../Layout/Block'
import { Text } from '../Layout/Text'
import type { Concert } from '../../utilities/microcms/contents'

import styles from './Concert.module.scss'

export const ConcertComponent = ({ concert }: { concert: Concert }) => {
  const { main, mini } = concert
  return (
    <>
      <div className={classNames('block', styles.concert)}>
        <Block title="演奏会" subTitle="Concert">
          <Text>
            <p>ザ・ウィンド・アンサンブルは年2回、演奏会を主催しております。</p>
            <p>これらの演奏会の他に出張依頼演奏も随時受け付けております。</p>
            <p>
              お気軽に<a href="contact">お問い合わせ</a>ください。
            </p>
          </Text>
          <LinkButton href="/history" label="過去の演奏会" />
        </Block>
      </div>

      <div className={classNames('home-block', styles['concert-introduction'])}>
        <div className={classNames(styles.contents)}>
          <div className={styles['concert-box']}>
            <div className={styles['main-concert']}>
              <div className={styles.content}>
                <h3 className={styles.title} data-subttl="Annual Concert">
                  定期演奏会
                </h3>
                <div className={styles.text}>
                  <p>
                    秋に開催する定期演奏会では、吹奏楽のオリジナル作品やクラシックのアレンジ作品をメインに演奏いたします。
                  </p>
                </div>
                <ul>
                  {main.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.url} className={styles[item.status]}>
                          <div className={styles['concert-detail']}>
                            <div>
                              <p>{DateTime.fromISO(item.date).toFormat('yyyy年M月d日')}</p>
                              <h3>{item.title}</h3>
                            </div>
                            <div className={styles['link-arrow']}>
                              <i className="fas fa-chevron-right"></i>
                            </div>
                          </div>
                          {item.status === 'prepare' && <div className={styles['concert-prepare']}>準備中</div>}
                          {item.status === 'close' && <div className={styles['concert-close']}>終了しました</div>}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className={styles['mini-concert']}>
              <div className={styles.content}>
                <h3 className={styles.title} data-subttl="Mini Concert">
                  ミニコンサート
                </h3>
                <div className={styles.text}>
                  <p>春に開催するミニコンサートでは、アニメソングやポップス、映画音楽などをメインに演奏いたします。</p>
                </div>
                <ul>
                  {mini.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.url}className={styles[item.status]}>
                          <div className={styles['concert-detail']}>
                            <div>
                              <p>{DateTime.fromISO(item.date).toFormat('yyyy年M月d日')}</p>
                              <h3>{item.title}</h3>
                            </div>
                            <div className={styles['link-arrow']}>
                              <i className="fas fa-chevron-right"></i>
                            </div>
                          </div>
                          {item.status === 'prepare' && <div className={styles['concert-prepare']}>準備中</div>}
                          {item.status === 'close' && <div className={styles['concert-close']}>終了しました</div>}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
