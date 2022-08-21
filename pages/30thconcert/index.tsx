import { DateTime } from 'luxon'
import { Logo30thConcert } from '../../components/svg/Logo'

import styles from '../../styles/30thconcert/30thconcert.module.scss'

const Concert = () => {
  return (
    <div className={styles.concert}>
      <div className={styles.header}>
        <header>
          <a href="https://winds-n.com">
            <Logo30thConcert />
          </a>
        </header>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.gap}></div>
          <div className={styles.wrap}>
            <div className={styles['header-title']}>
              <h1>演奏会のご案内</h1>
              <h2>第30回定期演奏会</h2>
            </div>
          </div>
          <div className={styles.contents}>
            <article>
              <span className={styles.subtitle}>（公財）長岡市芸術文化振興財団助成事業</span>
              <div className={styles['top-title']}>
                <div className={styles['anniversary-frame']}>
                  <img src="30thconcert/30thanniversary.png" className={styles.anniversary} alt="30thanniversary" />
                </div>
                <div className={styles['title-frame']}>
                  <span className={styles['title-winds']}>ザ・ウィンド・アンサンブル</span>
                  <span className={styles['title-name']}>第30回定期演奏会</span>
                  <span className={styles['title-date']}>
                    <span className={styles['title-date-year']}>2017年</span>
                    <span className={styles['title-date-day']}>
                      10<span className={styles['title-date-day-month']}>月</span>8
                      <span className={styles['title-date-day-day']}>日</span>
                    </span>
                    <span className={styles['title-date-date']}>(日)</span>
                  </span>
                </div>
              </div>
              <div className={styles.remain}>
                <span className={styles.remain}>終演しました</span>
              </div>
              <div className={styles.top}>
                <div className={styles['kawamoto-frame']}>
                  <img src="30thconcert/kawamoto.png" className={styles.kawamoto} alt="河本先生" />
                </div>
                <div className={styles['tabata-frame']}>
                  <img src="30thconcert/tabata.png" className={styles.tabata} alt="田端先生" />
                </div>
                <div className={styles['caption-panel']}>
                  <div className={styles['tabata-caption-frame']}>
                    <span className={styles['guest-title']}>ゲストプレーヤー</span>
                    <span className={styles['guest-name']}>田端直美</span>
                    <span className={styles['guest-link']}>
                      <a href="http://shion.jp/member/p/list/" target="_blank" rel="noreferrer">
                        <span className={styles.pc}>&gt;&gt;詳しいプロフィールはこちらから</span>
                        <span className={styles.mobile}>&gt;&gt;詳しくはこちら</span>
                      </a>
                    </span>
                    <span className={styles['guest-info-a']}>オオサカ・シオン・ウインドオーケストラ</span>
                    <span className={styles['guest-info-b']}>(旧・大阪市音楽団)サクソフォン奏者</span>
                  </div>
                </div>
                <div className={styles['all-frame']}>
                  <img src="30thconcert/30th.jpg" className={styles.all} alt="集合写真" />
                </div>
                <div className={styles['time-frame']}>
                  <span className={styles['time-place-a']}>長岡リリックホール</span>
                  <span className={styles['time-place-b']}>コンサートホール</span>
                  <span className={styles['time-open']}>
                    <span className={styles['time-open-a']}>13:30</span>
                    <span className={styles['time-open-b']}>開場</span>
                  </span>
                  <span className={styles['time-start']}>
                    <span className={styles['time-start-a']}>14:00</span>
                    <span className={styles['time-start-b']}>開演</span>
                  </span>
                  <span className={styles.poster}>
                    <a href="./img/poster/main/30th.jpg" download>
                      &gt;&gt;ポスターはこちら
                    </a>
                  </span>
                </div>
              </div>
              <h2>
                <span>終演いたしました</span>
              </h2>
              <p>
                第30回定期演奏会は終演いたしました。
                <br />
                ご来場くださいました皆さま、ありがとうございました。
              </p>
              <h2>
                <span>第30回定期演奏会概要</span>
              </h2>
              <p>
                　場所:長岡リリックホール コンサートホール
                <br />
                　日時:2017年10月8日(日)
                <br />
                　　　 14:00開演(13:30開場)
                <br />
                　指揮:河本隆吉
                <br />
                　入場料:&yen;800(当日券:&yen;1,000)小学生以下無料
                <span className={styles['poster-mobile']}>
                  <br />　
                  <a href="../image/poster/main/30th.jpg" download>
                    &gt;&gt;ポスターはこちら
                  </a>
                </span>
              </p>
              <h2>
                <span>プログラム</span>
              </h2>
              <p>
                ・アルトサクソフォンのためのファンタジア(C.T.スミス)
                <br />
                ・オリエント急行(P.スパーク)
                <br />
                ・ウエールズの歌(A.O.デイヴィス)
                <br />
                ・バレエ音楽「三角帽子」より(M.D.ファリャ)
                <br />
                　他
              </p>
              <h2>
                <span>チケット</span>
              </h2>
              <p>
                チケットのお求めは、プレイガイドまたは下記までご連絡ください。
                <br />
                ■長岡リリックホール　0258-29-7715
                <br />
                ■わたじん楽器長岡店　0258-35-7766
                <br />
                ※チケットは8月1日より各プレイガイドにて発売します。
              </p>
              <h2>
                <span>アクセス</span>
              </h2>
              <p>
                所在: 〒940-2108　新潟県長岡市千秋3丁目1356番地6
                <br />
                長岡リリックホール コンサートホール
                <br />
                リリックホールのWebサイトは
                <a href="http://www.nagaoka-caf.or.jp/" target="_blank" rel="noreferrer">
                  こちら
                </a>
                <br />
                交通のご案内
                <br />
                ●JR長岡駅大手口
                <br />- 8番線から中央循環バスで、（内回り／近代美術館、外回り／ハイブ長岡）バス停下車、徒歩3分。
                <br />- 2番線から（日赤病院経由）江陽団地行きバスで、ハイブ長岡バス停下車、徒歩3分。
                <br />- 2番線から江陽環状線バスで、（外回り／ハイブ長岡）バス停下車、徒歩3分。
                <br />- 2番線から（日赤病院経由）出雲崎行きバスで、近代美術館バス停下車、徒歩3分。
                <br />
                ●長岡インターチェンジ（関越・北陸自動車道）から車で約10分。
                <br />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.822865760664!2d138.82925099999997!3d37.46490400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5a990fc127773%3A0x716affcc8b27a1e3!2z6ZW35bKh44Oq44Oq44OD44Kv44Ob44O844Or!5e0!3m2!1sja!2sjp!4v1439099629551"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                ></iframe>
              </p>
              <div className={styles['footer-frame']}>
                <img src="30thconcert/30th_footer.jpg" className={styles['footer-img']} />
              </div>
              <span className={styles['footer-message']}>～音楽の輪が限りなく広がりますように～</span>
            </article>
          </div>
          <footer className={styles.footer}>
            &copy; The Wind Ensemble 1985-{DateTime.now().toFormat('yyyy')} All Rights Reserved.
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Concert
