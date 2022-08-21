import { useState } from 'react'
import { DateTime } from 'luxon'
import classNames from 'classnames'

import styles from '../../styles/31stconcert/31stconcert.module.scss'
import Link from 'next/link'
import { Logo31stConcert } from '../../components/svg/Logo'

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

  const [lateIn, setLateIn] = useState(false)
  setTimeout(() => {
    setLateIn(true)
  }, 4500)
  return (
    <div className={styles.concert}>
      {overlay.show && (
        <div
          className={classNames(styles.overlay, overlay.animation ? styles['opacity-0'] : null)}
          onClick={hideOverlay}
        >
          <div>
            <p>この演奏会は終演いたしました</p>
            <p>ご来場くださいました皆さま、ありがとうございました</p>
          </div>
        </div>
      )}
      <div className={styles.header}>
        <div className={styles.frame}>
          <div className={styles['main-title']}>
            <div className={styles.logo}>
              <a href="https://winds-n.com">
                <Logo31stConcert />
              </a>
            </div>

            <div className={styles['title-frame']}>
              <div className={styles.title}>
                <span>第31回定期演奏会</span>
              </div>
              <div className={styles['title-bg']}>
                <div className={styles.bg}>&nbsp;</div>
              </div>
            </div>

            <div className={styles.photo}>
              <img src="31stconcert/all.png" className={styles['photo-all']} />
              <img src="31stconcert/sensei.png" className={styles['photo-sensei']} />
            </div>

            <div className={styles['date-block']}>
              <div className={classNames(styles.square, styles.front)}>
                <span className={styles.month}>10</span>
                <span className={styles.slash}>&nbsp;</span>
                <span className={styles.day}>7&nbsp;</span>
              </div>
              <div className={classNames(styles.square, styles.back, lateIn ? styles['animation'] : null)}>
                <span className={styles.year}>2018</span>
                <span className={styles.date}>sun&nbsp;&nbsp;</span>
              </div>
              <div className={styles['title-label']}>
                <span className={styles.thewindensemble}>ザ・ウィンド・アンサンブル</span>
                <span className={styles.count}>第31回</span>
                <span className={styles.regular}>定期演奏会</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.information}>
        <div className={styles['overview-information']}>
          <div className={styles.program}>
            <h2>プログラム</h2>
            <ol>
              <li>
                <span>三日月の舞</span>
                <span>松田彬人</span>
              </li>
              <li>
                <span>大草原の歌</span>
                <span>R.ミッチェル</span>
              </li>
              <li>
                <span>喜びの音楽を奏でて！</span>
                <span>J.スウェアリンジェン</span>
              </li>
              <li>
                <span>ウィズ・ハート・アンド・ヴォイス</span>
                <span>D.ギリングハム</span>
              </li>
              <li>
                <span>アルセナール</span>
                <span>J.ヴァンデルロースト</span>
              </li>
              <li>
                <span>メキシコの祭り</span>
                <span>O.リード</span>
              </li>
            </ol>
          </div>
          <div className={styles.overview}>
            <h2>演奏会概要</h2>
            <p>
              <span>場所</span>
              <span>リリックホール コンサートホール</span>
            </p>
            <p>
              <span>日時</span>
              <span>2018年10月7日(日)</span>
            </p>
            <p>
              <span>開場</span>
              <span>13:30</span>
            </p>
            <p>
              <span>開演</span>
              <span>14:00</span>
            </p>
            <p className={styles.pass}>
              <span>入場料</span>
              <span className="advance-pass">
                前売券<span className={styles.yen}>&yen;</span>800
              </span>
            </p>
            <p className={styles['today-pass']}>
              <span></span>
              <span className="today-pass">
                (当日券<span className={styles.yen}>&yen;</span>1,000)
              </span>
            </p>
            <p className={styles['free-pass']}>
              <span></span>
              <span className={styles['free-pass']}>小学生以下無料</span>
            </p>
            <p>
              <span>主催</span>
              <span>ザ・ウィンド・アンサンブル</span>
            </p>
          </div>
        </div>
        <div className={styles.ticket}>
          <h2>チケット</h2>
          <div>
            <p>チケットのお求めは、プレイガイドまたは下記までご連絡ください。</p>
            <ol>
              <li>長岡リリックホール&nbsp; 0258-29-7715</li>
              <li>わたじん楽器 長岡店 0258-35-7766</li>
            </ol>
            <p>※チケットは8月1日より発売します。</p>
          </div>
        </div>
        <div className={styles.access}>
          <h2>アクセス</h2>
          <div id="map"></div>
          <a
            href="https://www.google.co.jp/maps/dir//%E9%95%B7%E5%B2%A1%E3%83%AA%E3%83%AA%E3%83%83%E3%82%AF%E3%83%9B%E3%83%BC%E3%83%AB%E3%80%81%E3%80%92940-2108+%E6%96%B0%E6%BD%9F%E7%9C%8C%E9%95%B7%E5%B2%A1%E5%B8%82%E5%8D%83%E7%A7%8B%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%93%EF%BC%95%EF%BC%96%E2%88%92%EF%BC%96/@37.4649032,138.8269598,17z"
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            リリックホールへのルートを検索<i className="fas fa-external-link-alt"></i>
          </a>
          <div>
            <ul>
              <li>JR長岡駅大手口より</li>
              <span>下記いずれかの方法でアクセスできます</span>
              <ul>
                <li>8番線から中央循環バスで、（内回り／近代美術館、外回り／ハイブ長岡）バス停下車、徒歩3分。</li>
                <li>2番線から（日赤病院経由）江陽団地行きバスで、ハイブ長岡バス停下車、徒歩3分。</li>
                <li>2番線から江陽環状線バスで、（外回り／ハイブ長岡）バス停下車、徒歩3分。</li>
                <li>2番線から（日赤病院経由）出雲崎行きバスで、近代美術館バス停下車、徒歩3分。</li>
              </ul>
              <li>関越・北陸自動車道より</li>
              <ul>
                <li>長岡インターチェンジから車で約10分</li>
              </ul>
            </ul>
            <p>〒940-2108</p>
            <p>新潟県長岡市千秋3丁目1356番地6</p>
            <p>
              長岡リリックホール{' '}
              <a href="http://www.nagaoka-caf.or.jp/" target="_blank" rel="noreferrer">
                Webサイト<i className="fas fa-external-link-alt"></i>
              </a>
            </p>
          </div>
        </div>

        <div className={styles['sns-button']}>
          {/* <!-- <a data-url="https://winds-n.com/mini2018" href="https://twitter.com/share" className={styles.twitter-share-button" data-lang="ja" data-count="vertical" data-dnt="true" target="_blank}></a> --> */}
          {/* <!-- Twitter --> */}
          <a
            href="https://twitter.com/share?url=https://winds-n.com/31stconcert&text=ザ・ウィンド・アンサンブルの第31回定期演奏会は10月7日(日)に長岡リリックホールにて開催いたします！&related=winds_nagaoka"
            target="_blank"
            rel="noreferrer"
            className={styles.twitter}
          >
            <i className="fab fa-twitter-square"></i>
          </a>

          {/* <!-- Facebook --> */}
          {/* <!-- <div className={styles.fb-like" data-href="" data-layout="box_count" data-action="like" data-show-faces="true" data-share="false}></div> --> */}
          <a
            href="http://www.facebook.com/share.php?u=https://winds-n.com/31stconcert"
            rel="nofollow noreferrer"
            target="_blank"
            className={styles.facebook}
          >
            <i className="fab fa-facebook-square"></i>
          </a>

          {/* <!-- Google+ --> */}
          {/* <!-- <div data-href="https://winds-n.com/mini2018" className={styles.g-plusone" data-size="tall"><i className="fab fa-google-plus-square}></i></div> --> */}

          {/* <!-- はてなブックマーク --> */}
          {/* <!-- <a href="http://b.hatena.ne.jp/entry/https://winds-n.com/mini2018" className={styles.hatena-bookmark-button" data-hatena-bookmark-layout="vertical-balloon" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border:none;} /></a> --> */}

          {/* <!-- pocket --> */}
          {/* <!-- <a data-save-url="https://winds-n.com/mini2018" data-pocket-label="pocket" data-pocket-count="vertical" className={styles.pocket-btn" data-lang="en"><i className="fa fa-get-pocket}></i></a> --> */}
          {/* <!-- <a href="http://getpocket.com/edit?url=https://winds-n.com/mini2018&title=春のミニコンサート2018" rel="nofollow" rel="nofollow" target="_blank" rel="noreferrer"><i className={styles.fab fa-get-pocket}></i></a> --> */}

          {/* <!-- LINE --> */}
          <a
            href="http://line.me/R/msg/text/?ザ・ウィンド・アンサンブル第31回定期演奏会%0D%0A詳細はこちら！%0D%0Ahttps://winds-n.com/31stconcert"
            target="_blank"
            rel="noreferrer"
            className={styles.line}
          >
            <i className="fab fa-line"></i>
          </a>
          {/* <!-- <div>ここからシェアしてね<i className={styles.fas fa-music}></i></div> --> */}
        </div>
      </div>

      <div className={styles['poster-frame']}>
        <div className={styles.poster}>
          <a href="31stconcert/poster.jpg">ポスターはこちら</a>
        </div>
      </div>

      <span className={styles.remain}>終演しました</span>

      <div className={styles.message}>～音楽の輪が限りなく広がりますように～</div>

      <div className={styles.back}>
        <Link href="/" passHref>
          <a className={classNames(styles['back-to-home'], styles.tap)}>
            <i className="fas fa-home"></i>ホームへもどる
          </a>
        </Link>
      </div>
      <a
        href="#"
        id="bottomlink"
        className={classNames(styles['top-scroll'], styles.tap)}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        BACK TO TOP
      </a>
      <footer className={styles.footer}>
        &copy; The Wind Ensemble 1985-{DateTime.now().toFormat('yyyy')} All Rights Reserved.
      </footer>
    </div>
  )
}

export default Concert
