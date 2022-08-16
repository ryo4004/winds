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
        { path: '/33rdconcert/information2', label: 'お知らせ' },
      ]}
    >
      <Block title="来場者カード記入のお願い" subTitle="Visitor card" update="2020/9/27 14:00">
        <Text>
          <div className={styles.information}>
            <p>
              新型コロナウイルス感染症対策の一環として、第33回定期演奏会ではご来場されたみなさまのご連絡先をお預かりいたします。
            </p>
            <p>
              来場前にご記入いただき、当日会場までお持ちください。また、来場を予定されている方はWebから事前入力もできます。
            </p>
            <p>
              <a href="visitor_card.pdf" target="_blank" rel="noopener noreferrer">
                来場者カード(PDF版)
              </a>
              <br />
              <a href="https://visitor.winds-n.com" target="_blank" rel="noopener noreferrer">
                来場者カード(Web版)
              </a>
            </p>
            <p className="notice">※どちらかに記入いただければ問題ありません</p>
            <p>
              来場者カードは会場でもお渡しいたしますが、可能な限り記入済みのものをお持ちください。Webからの事前入力済みでご来場いただけなかった場合はお手数ですが
              <a href="../contact">お問い合わせ</a>からご連絡ください。
            </p>
            <p>
              お客様にはご不便をおかけいたしますが、感染予防および拡大防止のため、ご理解、ご協力をいただきますようよろしくお願い申し上げます。
            </p>
          </div>
        </Text>
        <Text>
          <div className={styles.information}>
            <p style={{ fontWeight: 'bold' }}>2020年10月3日追記</p>
            <p>
              10月1日0時ごろから10月2日18時ごろまで
              <a href="https://visitor.winds-n.com" target="_blank" rel="noopener noreferrer">
                来場者カード(Web版)
              </a>
              でシステム障害が発生しました。この間に送信いただいたデータが正常に処理できていない可能性があります。詳細は
              <a href="systemfailure">こちら</a>からご確認いただけます。
              <br />
              お手数ですがこの時間に送信された可能性がある方は今一度再送いただけますようよろしくお願いいたします。
            </p>
            <p>ご迷惑をおかけし誠に申し訳ありません。</p>
          </div>
        </Text>
      </Block>
    </Layout>
  )
}

export default Information
