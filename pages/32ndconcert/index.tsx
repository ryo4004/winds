import { useState } from 'react'
import classNames from 'classnames'
import { DateTime } from 'luxon'

import styles from '../../styles/32ndconcert/32ndconcert.module.scss'
import Link from 'next/link'
import { FooterLogo, Logo32ndConcert } from '../../components/svg/Logo'

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
            <p>この演奏会は中止となりました</p>
          </div>
        </div>
      )}

      <a href="information5" className={styles['information-top']}>
        <div className={styles.information}>チケットの払い戻しは終了しました</div>
      </a>

      <div className={styles.header}>
        <div className={styles.frame}>
          <div className={styles['main-title']}>
            <div className={styles.logo}>
              <a href="https://winds-n.com">
                <Logo32ndConcert />
              </a>
            </div>

            <div className={styles['title-frame']}>
              <div className={styles.title}>
                <span>第32回定期演奏会</span>
              </div>
              <div className={styles['title-bg']}>
                <div className={styles.bg}>&nbsp;</div>
                {/* <!-- <div className={styles.bg-left}>&nbsp;</div> */}
                {/* <div className={styles.bg-right}>&nbsp;</div> --> */}
              </div>
            </div>

            <div className={styles.photo}>
              <img src="32ndconcert/all.png" className={styles['photo-all']} />
              <img src="32ndconcert/sensei.png" className={styles['photo-sensei']} />
            </div>

            <div className={styles['date-block']}>
              <div className={classNames(styles.square, styles.front)}>
                <span className={styles.month}>10</span>
                <span className={styles.slash}>&nbsp;</span>
                <span className={styles.day}>13</span>
              </div>
              <div className={classNames(styles.square, styles.back, lateIn ? styles['animation'] : null)}>
                <span className={styles.year}>2019</span>
                <span className={styles.date}>sun&nbsp;&nbsp;</span>
              </div>
              <div className={styles['title-label']}>
                <span className={styles.thewindensemble}>ザ・ウィンド・アンサンブル</span>
                <span className={styles.count}>第32回</span>
                <span className={styles.regular}>定期演奏会</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.information}>
        <div className={classNames(styles.news, styles.ticket)} style={{ marginBottom: '20px' }}>
          <h2>お知らせ</h2>
          <div>
            <ol>
              <li>
                1/6 15:00<span style={{ display: 'inline-block', width: '8px' }}></span>
                <Link href="32ndconcert/information5">チケットの払い戻し受付は終了しました</Link>
              </li>
              <li>
                10/26 15:00<span style={{ display: 'inline-block', width: '8px' }}></span>
                <Link href="32ndconcert/information4">チケットの払い戻しについて</Link>
              </li>
              <li>
                10/13 13:00<span style={{ display: 'inline-block', width: '8px' }}></span>
                <Link href="32ndconcert/information3">第32回定期演奏会は中止となりました</Link>
              </li>
              <li>
                10/12 15:00<span style={{ display: 'inline-block', width: '8px' }}></span>
                <Link href="32ndconcert/information2">第32回定期演奏会は予定通り開催いたします</Link>
              </li>
              <li>
                10/11 15:00<span style={{ display: 'inline-block', width: '8px' }}></span>
                <Link href="32ndconcert/information">台風接近に伴う演奏会開催の可否について</Link>
              </li>
            </ol>
          </div>
        </div>
        <div className={styles['overview-information']}>
          <div className={styles.program}>
            <h2>プログラム</h2>
            <ol>
              <li>
                <span>五月の風</span>
                <span>真島俊夫</span>
              </li>
              <li>
                <span>詩的間奏曲</span>
                <span>J.バーンズ</span>
              </li>
              <li>
                <span>祝典のための音楽</span>
                <span>P.スパーク</span>
              </li>
              <li>
                <span>「スラヴ舞曲」より</span>
                <span>A.ドヴォルザーク / 河本隆吉 編曲</span>
              </li>
              <li>
                <span>富士山～北斎の版画に触発されて～</span>
                <span>真島俊夫</span>
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
              <span>2019年10月13日(日)</span>
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
              <span className={styles['advance-pass']}>
                前売券<span className={styles.yen}>&yen;</span>800
              </span>
            </p>
            <p className={styles['today-pass']}>
              <span></span>
              <span className={styles['today-pass']}>
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
              <li>長岡リリックホール</li>
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
            className={styles['guide-button']}
          >
            リリックホールへのルートを検索<i className={classNames(styles.fas, styles['fa-external-link-alt'])}></i>
          </a>
          <div>
            <ul className={styles['access-guide']}>
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
                Webサイト<i className={classNames(styles.fas, styles['fa-external-link-alt'])}></i>
              </a>
            </p>
          </div>
        </div>

        <div className={styles['sns-button']}>
          {/* <!-- <a data-url="https://winds-n.com/mini2018" href="https://twitter.com/share" className={styles.twitter-share-button" data-lang="ja" data-count="vertical" data-dnt="true" target="_blank}></a> --> */}
          {/* <!-- Twitter --> */}
          <a
            href="https://twitter.com/share?url=https://winds-n.com/32ndconcert&text=ザ・ウィンド・アンサンブルの第32回定期演奏会は10月13日(日)に長岡リリックホールにて開催いたします！&related=winds_nagaoka"
            target="_blank"
            rel="noreferrer"
            className={styles.twitter}
          >
            <i className={classNames(styles.fab, styles['fa-twitter-square'])}></i>
          </a>

          {/* <!-- Facebook --> */}
          {/* <!-- <div className={styles.fb-like" data-href="" data-layout="box_count" data-action="like" data-show-faces="true" data-share="false}></div> --> */}
          <a
            href="http://www.facebook.com/share.php?u=https://winds-n.com/32ndconcert"
            rel="nofollow noreferrer"
            target="_blank"
            className={styles.facebook}
          >
            <i className={classNames(styles.fab, styles['fa-facebook-square'])}></i>
          </a>

          {/* <!-- LINE --> */}
          <a
            href="http://line.me/R/msg/text/?ザ・ウィンド・アンサンブル第32回定期演奏会%0D%0A詳細はこちら！%0D%0Ahttps://winds-n.com/32ndconcert"
            target="_blank"
            rel="noreferrer"
            className={styles.line}
          >
            <i className={classNames(styles.fab, styles['fa-line'])}></i>
          </a>
          {/* <!-- <div>ここからシェアしてね<i className={styles.fas fa-music}></i></div> --> */}
        </div>
      </div>

      <div className={styles['poster-frame']}>
        <div className={styles.poster}>
          <a href="32ndconcert/poster.jpg" target="_blank" rel="noreferrer">
            ポスターはこちら
          </a>
        </div>
      </div>

      <div className={styles.remain}>
        <span className={styles.remain}>終演しました</span>
      </div>

      <div className={styles.message}>～音楽の輪が限りなく広がりますように～</div>

      <div className={classNames(styles.block, styles['back-navigation'])}>
        <div>
          <div>
            <Link href="/" passHref>
              <a>
                <i className={classNames(styles.fas, styles['fa-chevron-left'])}></i>
                <span>ホームへ戻る</span>
              </a>
            </Link>
          </div>
          <div className={styles.scrollTop}>
            <div id="scrollTop">
              <i className={classNames(styles.fas, styles['fa-chevron-up'])}></i>
              <span>トップへ</span>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div>
          <div className={styles.author}>
            <Link href="/" passHref>
              <a>
                <FooterLogo />
              </a>
            </Link>
            <small>&copy; The Wind Ensemble 1985-{DateTime.now().toFormat('yyyy')} All Rights Reserved.</small>
          </div>
          <div className={styles.link}>
            <ul>
              <li>
                <a href="https://member.winds-n.com">会員専用ページ</a>
              </li>
              <li>
                <a href="../policy">個人情報保護方針</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Concert
