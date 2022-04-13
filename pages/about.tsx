import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import classNames from 'classnames'

import { Logo } from '../components/svg/Logo'
import { Footer } from '../components/Footer/Footer'

import styles from '../styles/about.module.scss'

const About = () => {
  return (
    <>
      <header id="top">
        <section id="main-logo">
          <Link href="/">
            <Logo />
          </Link>
        </section>
      </header>

      <div className="top-title">
        <div>
          <h1 data-subttl="About us">楽団紹介</h1>
          <div className="bread">
            <Link href="/">ホーム</Link>
            <FaChevronRight />
            <Link href="/about">楽団紹介</Link>
          </div>
        </div>
      </div>

      <div className="block">
        <div className="title">
          <h2 data-subttl="The Wind Ensemble">ウィンズについて</h2>
        </div>
        <div className={classNames('contents', styles.contents)}>
          <div className="text">
            <p>
              ザ・ウィンド・アンサンブル(ウィンズ)は、新潟県長岡市を活動拠点とした社会人吹奏楽団です。
              1986年11月に長岡交響楽団金管奏者を中心とした長岡ブラスアンサンブルが母体となり新潟県内外の音楽好きの有志が集まって結成されました。
              「音楽の輪が限りなく広がりますように」を標語として、年2回開かれる演奏会を通して吹奏楽の楽しさを広めて行きたいと思っております。
            </p>
            <p>
              アマチュアバンドにとって月数回の練習こそ活動目的ですが、その他の主な活動として定期演奏会、ミニコンサートを行っております。
              またこれらの演奏会の他に、出張、依頼演奏なども随時受け付けております。 お気軽に
              <a href="contact">お問い合わせ</a>ください。
            </p>
          </div>
        </div>
      </div>

      <div className={classNames('block', styles.location)}>
        <div className="title">
          <h2 data-subttl="Location">活動拠点</h2>
        </div>
        <div className={classNames('contents', styles.contents)}>
          <div className="text">
            <p>
              ウィンズは新潟県長岡市に位置する
              <a href="http://www.nagaoka-caf.or.jp/" target="_blank" rel="noreferrer">
                長岡リリックホール
              </a>
              を主な拠点としています。
            </p>
            <p>長岡在住のメンバーを中心とした総勢50名ほどで活動しております。</p>
          </div>
          <div id="map"></div>
        </div>
      </div>

      <div className="block">
        <div className="title">
          <h2 data-subttl="Recruit">会員募集</h2>
        </div>
        <div className="contents">
          <div className="text">
            <p>ウィンズは共に演奏できる仲間を募集しています。</p>
            <p>
              パートごとに募集状況が異なるため、一度<a href="contact">お問い合わせ</a>ください。
            </p>
          </div>
        </div>
      </div>

      <div className="block back-navigation">
        <div>
          <div>
            <a href="/">
              <i className="fas fa-chevron-left"></i>
              <span>ホームへ戻る</span>
            </a>
          </div>
          <div className="scrollTop">
            <div id="scrollTop">
              <i className="fas fa-chevron-up"></i>
              <span>トップへ</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About
