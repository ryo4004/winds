import { useState, useEffect } from 'react'
import classNames from 'classnames'

import { Title } from '../../components/svg/34thconcert/34thconcert'
import { Date } from '../../components/svg/34thconcert/date'

import styles from '../../styles/34thconcert/34thconcert.module.scss'
import { Footer } from '../../components/Footer/Footer'
import { Logo34thConcert } from '../../components/svg/Logo'

const Concert = () => {
  const [overlay, setOverlay] = useState({
    show: true,
    animation: false,
  })
  const hideOverlay = () => {
    setOverlay({ show: true, animation: true })
    setTimeout(() => {
      setOverlay({ show: false, animation: false })
    }, 1000)
  }

  const [filter, setFilter] = useState<boolean>(false)
  useEffect(() => {
    const getScroll = () => {
      const currentScrollMount = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      )
      const filterStartHeight = window.innerHeight / 4
      setFilter(currentScrollMount > filterStartHeight)
    }
    window.addEventListener('scroll', getScroll)
    return () => window.removeEventListener('scroll', getScroll)
  }, [])
  return (
    <div className={styles.concert}>
      {overlay.show && (
        <div
          className={classNames(styles.overlay, overlay.animation ? styles['opacity-0'] : null)}
          onClick={hideOverlay}
        >
          <div>
            <p>
              <span>この演奏会は</span>
              <br />
              <span>終演いたしました</span>
            </p>
            <p>
              <span>ご来場くださいました皆さま、</span>
              <br />
              <span>誠にありがとうございました</span>
            </p>
          </div>
        </div>
      )}

      <div className={styles.background}></div>
      <div className={classNames(styles.home, filter ? styles.dark : styles.light)}>
        <div className={styles.main}>
          <div className={styles['main-logo']}>
            <Logo34thConcert />
          </div>
          <div className={styles.title}>
            <Title />
          </div>
          <div className={styles.date}>
            <Date st0={styles.st0} st1={styles.st1} st2={styles.st2} />
          </div>
          <span className={styles['scroll-guide']}></span>
        </div>
        <section className={styles.about}>
          <h2>ごあいさつ</h2>
          <div className={styles.text}>
            <p>
              ザ・ウィンド・アンサンブルでは2021年10月10日(日)に長岡リリックホールにて第34回定期演奏会を予定しています。
            </p>
            <p>
              私たちの楽団では主に秋の本定期演奏会と春のミニコンサートの年2回、演奏会を開いております。本演奏会では対となる春とはまったく違う雰囲気で、吹奏楽オリジナルやクラシックの吹奏楽アレンジ曲を演奏いたします。
            </p>
            <p>
              この演奏会を通して、音楽の輪、音楽の楽しさをみなさまとともに分かち合うことができればこれ以上の喜びはありません。
            </p>
            <p>会員一同、みなさまのお越しをお待ちしております。</p>
          </div>
        </section>
        <section className={styles.information}>
          <h2>お知らせ</h2>
          <div className={styles.contents}>
            <div>
              <span className={styles.date}>9/26</span>
              <wbr />
              <span className={styles.link}>
                <a href="34thconcert/information2">来場者カード記入のお願い</a>
              </span>
            </div>
            <div>
              <span className={styles.date}>9/26</span>
              <wbr />
              <span className={styles.link}>
                <a href="34thconcert/information">新型コロナウイルス感染症対策について</a>
              </span>
            </div>
          </div>
        </section>
        <section className={styles.program}>
          <h2>プログラム</h2>
          <div className={styles.contents}>
            <div>
              <span className={styles.title}>コンサート・プレリュード</span>
              <wbr />
              <span className={styles.composer}>P.スパーク</span>
            </div>
            <div>
              <span className={styles.title}>星の船</span>
              <wbr />
              <span className={styles.composer}>西邑由記子</span>
            </div>
            <div>
              <span className={styles.title}>春の猟犬</span>
              <wbr />
              <span className={styles.composer}>A.リード</span>
            </div>
            <div>
              <span className={styles.title}>富士山 -北斎の版画に触発されて-</span>
              <wbr />
              <span className={styles.composer}>真島敏夫</span>
            </div>
            <div>
              <span className={styles.title}>『海』管弦楽のための3つの交響的素描より 3. 風と海との対話</span>
              <wbr />
              <span className={styles.composer}>C.ドビュッシー</span>
            </div>
          </div>
        </section>
        <section className={styles['place-date']}>
          <h2>日程</h2>
          <div className={styles.contents}>
            <div>
              <div className={classNames(styles.place, styles.label)}>場所</div>
              <div>
                <div>長岡リリックホール</div>
                <div>コンサートホール</div>
              </div>
            </div>
            <div>
              <div className={styles.label}>日付</div>
              <div>2021年10月10日(日)</div>
            </div>
            <div>
              <div className={classNames(styles['time-open'], styles.label)}>開場</div>
              <div>13:30</div>
            </div>
            <div>
              <div className={classNames(styles['time-start'], styles.label)}>開演</div>
              <div>14:00</div>
            </div>
          </div>
        </section>
        <section className={styles.ticket}>
          <h2>チケット</h2>
          <div className={styles.contents}>
            <div className={styles.price}>
              <div className={styles.label}>入場料</div>
              <div>
                <span>前売券&nbsp;&yen;800(税込)&nbsp;</span>
                <wbr />
                <span>当日券&nbsp;&yen;1,000(税込)</span>
              </div>
            </div>
            <div className={styles.info}>チケットのお求めはプレイガイドまたは下記までご連絡ください</div>
            <ul>
              <li>長岡リリックホール</li>
              <li>わたじん楽器 長岡店 0258-35-7766</li>
            </ul>
          </div>
        </section>
        <section className={styles.access}>
          <h2>アクセス</h2>
          <div className={styles.contents}>
            <div id="map"></div>
            <a
              href="https://www.google.co.jp/maps/dir//%E9%95%B7%E5%B2%A1%E3%83%AA%E3%83%AA%E3%83%83%E3%82%AF%E3%83%9B%E3%83%BC%E3%83%AB%E3%80%81%E3%80%92940-2108+%E6%96%B0%E6%BD%9F%E7%9C%8C%E9%95%B7%E5%B2%A1%E5%B8%82%E5%8D%83%E7%A7%8B%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%93%EF%BC%95%EF%BC%96%E2%88%92%EF%BC%96/@37.4649032,138.8269598,17z"
              target="_blank"
              rel="noreferrer"
              className={styles['guide-button']}
            >
              リリックホールへのルートを検索<i className="fas fa-external-link-alt"></i>
            </a>
            <div>
              <div className={styles.label}>JR長岡駅大手口より</div>
              <ul>
                <li>8番線から中央循環バスで、（内回り／近代美術館、外回り／ハイブ長岡）バス停下車、徒歩3分</li>
                <li>2番線から（日赤病院経由）江陽団地行きバスで、ハイブ長岡バス停下車、徒歩3分</li>
                <li>2番線から江陽環状線バスで、（外回り／ハイブ長岡）バス停下車、徒歩3分</li>
                <li>2番線から（日赤病院経由）出雲崎行きバスで、近代美術館バス停下車、徒歩3分</li>
              </ul>
            </div>
            <div>
              <div className={styles.label}>関越・北陸自動車道より</div>
              <ul>
                <li>長岡インターチェンジから車で約10分</li>
              </ul>
            </div>
            <div className={styles.address}>
              <p>〒940-2108</p>
              <p>新潟県長岡市千秋3丁目1356番地6</p>
              <p>
                長岡リリックホール
                <a href="http://www.nagaoka-caf.or.jp/" target="_blank" rel="noreferrer">
                  Webサイト<i className="fas fa-external-link-alt"></i>
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.poster}>
          <h2>ポスター</h2>
          <div className={styles.contents}>
            <figure>
              <img src="34thconcert/poster.jpg" />
            </figure>
            <a href="34thconcert/poster.jpg" target="_blank" rel="noreferrer" download>
              ダウンロード
            </a>
          </div>
        </section>

        <section className={styles.message}>
          <p>音楽の輪が限りなく広がりますように</p>
        </section>

        <Footer isHome={false} />
      </div>
    </div>
  )
}

export default Concert
