import { Layout } from '../components/Layout/Layout'
import { Block } from '../components/Layout/Block'
import { Text } from '../components/Layout/Text'

import styles from '../styles/about.module.scss'

const About = () => {
  return (
    <Layout pageTitle="楽団紹介" pageSubTitle="About us" pathList={[{ path: '/about', label: '楽団紹介' }]}>
      <Block title="ウィンズについて" subTitle="The Wind Ensemble">
        <Text>
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
        </Text>
      </Block>

      <Block title="活動拠点" subTitle="Location">
        <Text>
          <p>
            ウィンズは新潟県長岡市に位置する
            <a href="http://www.nagaoka-caf.or.jp/" target="_blank" rel="noreferrer">
              長岡リリックホール
            </a>
            を主な拠点としています。
          </p>
          <p>長岡在住のメンバーを中心とした総勢50名ほどで活動しております。</p>
        </Text>
        <div id="map"></div>
      </Block>

      <Block title="会員募集" subTitle="Recruit">
        <Text>
          <p>ウィンズは共に演奏できる仲間を募集しています。</p>
          <p>
            パートごとに募集状況が異なるため、一度<a href="contact">お問い合わせ</a>ください。
          </p>
        </Text>
      </Block>
    </Layout>
  )
}

export default About
