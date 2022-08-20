import { Block } from '../../components/Layout/Block'
import { Layout } from '../../components/Layout/Layout'
import { Text } from '../../components/Layout/Text'

import styles from '../../styles/33rdconcert/33rdconcert.module.scss'

const Information = () => {
  return (
    <Layout
      pageTitle="お知らせ"
      pageSubTitle="Information"
      pathList={[
        { path: '/33rdconcert', label: '第33回定期演奏会' },
        { path: '/33rdconcert/information', label: 'お知らせ' },
      ]}
    >
      <Block
        title="新型コロナウイルス感染症対策について"
        subTitle="Countermeasures for infectious diseases"
        update="2020/9/8 21:00"
      >
        <Text>
          <div className={styles.information}>
            <p>ザ・ウィンド・アンサンブルでは2020年10月11日(日)に第33回定期演奏会を開催いたします。</p>
            <p>
              当会では、公演実施に際してお客様が安心してご来場いただけるよう、開催場所である長岡リリックホールと連携し以下の通り対策を講じます。
            </p>
            <h2>感染拡大予防策</h2>
            <ul>
              <li>ホワイエに手指用アルコール消毒液を設置します。</li>
              <li>扉や手すりなど、施設内の消毒作業を随時行います。</li>
              <li>
                お客様と接するスタッフは、マスクまたはフェイスシールド、手袋を着用してのご案内、ご対応をさせていただきます。
              </li>
              <li>お客様と接するカウンター等にビニールカーテンなどでパーティションを設置します。</li>
              <li>ホール内入場者数制限を行い、接触を避けるため使用できる座席を制限させていただきます。</li>
              <li>出演者やスタッフは演奏会参加前に検温を行い、発熱等の症状がある場合は参加を見合わせます。</li>
            </ul>
            <h2>ご来場のお客様へご協力のお願い</h2>
            <ul>
              <li>
                以下に該当する方はご入場いただけません。
                <ul>
                  <li>37.5度以上の発熱がある方。</li>
                  <li>咳、喉の痛み等の症状がある方。</li>
                  <li>新型コロナウイルス感染症陽性者との濃厚接触があった方。</li>
                  <li>
                    過去２週間以内に政府から入国制限、入国後の観察期間を必要とされている国・地域への訪問歴、及び当該在住者との濃厚接触があった方。
                  </li>
                </ul>
              </li>
              <li>重症化リスクが高い方はご来場に際してより慎重なご判断をお願いいたします。</li>
              <li>
                厚生労働省が提供している
                <a
                  href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  新型コロナウイルス接触確認アプリ(COCOA)<i className="fas fa-external-link-alt"></i>
                </a>
                のご利用を推奨しております。
                <ul>
                  <li>なお、ホール内では演奏中も電源は切らずに、音や振動が出ないよう設定をお願いいたします。</li>
                </ul>
              </li>
              <li>当日券の販売の用意はございますが、できる限り前売券での購入をご検討ください。</li>
              <li>入場時の検温および手指アルコール消毒にご協力ください。</li>
              <li>ホール内およびホワイエでは、常時マスクの着用をし、会話はお控えください。</li>
              <li>
                こまめな手洗い、手指消毒、
                <a href="https://www.kantei.go.jp/jp/content/000059528.pdf" target="_blank" rel="noopener noreferrer">
                  咳エチケット<i className="fas fa-external-link-alt"></i>
                </a>
                の励行をお願いいたします。
              </li>
              <li>ホール内およびホワイエでは、周囲の方との距離を保ち密集を避けるようご協力ください。</li>
              <li>当日の差し入れやプレゼントなどは受付いたしますが、できる限り控えるようお願いいたします。</li>
              <li>開演前および終演後のホール内での出演者との接触はお控えください。</li>
              <li>ご来場いただいたお客様のお名前、ご住所、電話番号などの連絡先を提出いただきます。</li>
              <li>
                ご来場のお客様の中から感染者が発生した場合は、必要に応じて保健所等の公的機関へお名前および連絡先を提出させていただくことがありますので、あらかじめご了承ください。
              </li>
            </ul>
            <p>
              お客様にはご不便をおかけいたしますが、感染予防および拡大防止のため、ご理解、ご協力をいただきますようよろしくお願い申し上げます。
            </p>
          </div>
        </Text>
      </Block>
    </Layout>
  )
}

export default Information
