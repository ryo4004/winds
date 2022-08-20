import { Block } from '../../components/Layout/Block'
import { Layout } from '../../components/Layout/Layout'
import { Text } from '../../components/Layout/Text'

import styles from '../../styles/34thconcert/34thconcert.module.scss'

const Information = () => {
  return (
    <Layout
      pageTitle="お知らせ"
      pageSubTitle="Information"
      pathList={[
        { path: '/34thconcert', label: '第34回定期演奏会' },
        { path: '/34thconcert/information2', label: 'お知らせ' },
      ]}
    >
      <Block title="来場者カード記入のお願い" subTitle="Visitor card" update="2021/9/26 21:00">
        <Text>
          <div className={styles.information}>
            <p>
              新型コロナウイルス感染症対策の一環として、第34回定期演奏会ではご来場されたみなさまのご連絡先をお預かりいたします。
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
      </Block>
    </Layout>
  )
}

export default Information
