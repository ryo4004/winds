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
        { path: '/33rdconcert/systemfailure', label: 'お知らせ' },
      ]}
    >
      <Block
        title="来場者カードにおけるシステム障害のお知らせ"
        subTitle="Visitor card system failure"
        update="2020/10/3 22:00"
      >
        <Text>
          <div className={styles.information}>
            <p>
              ザ・ウィンド・アンサンブルが運営する来場者カード先行受付システムにて、10月1日0時頃から10月2日18時9分頃まで、システム障害により、データが正常に受け取れない事象が発生いたしました。ご利用いただいたお客様にはご迷惑をおかけいたしまして誠に申し訳ございません。
            </p>
            <p>
              システム障害については10月2日18時20分頃には復旧し、通常通りご利用いただけることを併せてご報告いたします。
            </p>
            <p>
              また、今回の障害はデータベース上のトラブルであり外部からの攻撃やコンピュータウイルスによるものではないことを確認しております。今回のシステム障害による個人情報の漏洩は生じておりません。
            </p>
            <p>
              今後とも安定したサイトやサービスの運営にも注力してまいりますので、ご理解いただけますようお願い申し上げます。
            </p>
            <p>なお、システム障害の内容およびご利用されたお客様への影響につきましては以下のとおりです。</p>
            <p style={{ marginTop: '2em', textAlign: 'center' }}>記</p>
            <p>1. 発生事象</p>
            <p>
              9月30日23時56分〜10月2日18時9分まで当会が運営するサイト上の「来場者カード(Web版)」のデータベース上に障害が発生し、お客様から送信されたデータを正しく記録できない状態となっておりました。※10月2日18時20分頃に復旧済み
            </p>
            <p>2. お客様への影響</p>
            <p>
              上記時間に、お客様が送信されたデータが正常に受け付けできていない可能性があります。この時間に送信された方はお手数ですが改めて情報の送信をお願いいたします。
            </p>
          </div>
        </Text>
      </Block>
    </Layout>
  )
}

export default Information
