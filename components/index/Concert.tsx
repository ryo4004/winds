import classNames from 'classnames'

import { LinkButton } from '../Button/LinkButton'
import { Block } from '../Layout/Block'
import { Text } from '../Layout/Text'

import styles from './Concert.module.scss'

export const Concert = () => {
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
                  <li>
                    <a href="34thconcert" className={styles.close}>
                      <div className={styles['concert-detail']}>
                        <div>
                          <p>2021年10月10日(日)</p>
                          <h3>第34回定期演奏会</h3>
                        </div>
                        <div className={styles['link-arrow']}>
                          <i className="fas fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className={styles['concert-prepare']}>準備中</div>
                      <div className={styles['concert-close']}>終了しました</div>
                    </a>
                  </li>
                  <li>
                    <a href="33rdconcert" className={styles.close}>
                      <div className={styles['concert-detail']}>
                        <div>
                          <p>2020年10月11日(日)</p>
                          <h3>第33回定期演奏会</h3>
                        </div>
                        <div className={styles['link-arrow']}>
                          <i className="fas fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className={styles['concert-prepare']}>準備中</div>
                      <div className={styles['concert-close']}>終了しました</div>
                    </a>
                  </li>
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
                  <li>
                    <a href="mini2022">
                      <div className={styles['concert-detail']}>
                        <div>
                          <p>2022年5月7日</p>
                          <h3>春のミニコンサート</h3>
                        </div>
                        <div className={styles['link-arrow']}>
                          <i className="fas fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className={styles['concert-prepare']}>準備中</div>
                      <div className={styles['concert-close']}>終了しました</div>
                    </a>
                  </li>
                  <li>
                    <a href="mini2021" className={styles.close}>
                      <div className={styles['concert-detail']}>
                        <div>
                          <p>2021年5月8日</p>
                          <h3>春のミニコンサート</h3>
                        </div>
                        <div className={styles['link-arrow']}>
                          <i className="fas fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className={styles['concert-prepare']}>準備中</div>
                      <div className={styles['concert-close']}>終了しました</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
