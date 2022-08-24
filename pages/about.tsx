import { Layout } from '../components/Layout/Layout'
import { Block } from '../components/Layout/Block'
import { Text } from '../components/Layout/Text'

import styles from '../styles/about.module.scss'
import { Map } from '../components/Map/Map'

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
        <div id="map">
          <Map mapStyles={aboutStyles} className={styles.map} />
        </div>
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

const aboutStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      {
        // "visibility": "off"
      },
      {
        saturation: '-100',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#000000',
      },
      {
        lightness: 40,
      },
      {
        // "visibility": "off"
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        // "visibility": "off"
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ecd9bb',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#c4d7a0',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#c4d7a0',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#7f8d89',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#f1f3da',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#7f8d89',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#7f8d89',
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a3aeab',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#a3aeab',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#f6e8d2',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#f6e8d2',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 19,
      },
      {
        color: '#a09f96',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#2b3638',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2b3638',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#7f95b9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#24282b',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
]

export default About
