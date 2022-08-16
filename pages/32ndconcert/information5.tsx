import { Block } from '../../components/Layout/Block'
import { Layout } from '../../components/Layout/Layout'
import { Text } from '../../components/Layout/Text'

const Information = () => {
  return (
    <Layout
      pageTitle="お知らせ"
      pageSubTitle="Information"
      pathList={[
        { path: '/32ndconcert', label: '第32回定期演奏会' },
        { path: '/32ndconcert/information5', label: 'お知らせ' },
      ]}
    >
      <Block title="チケットの払い戻し受付は終了しました" subTitle="News" update="2020/1/6 15:00">
        <Text>
          <p>
            2019年10月13日(日)に開催を予定しておりました第32回定期演奏会は、信濃川水位上昇の影響で中止となりました。
          </p>
          <p>
            これに伴いプレイガイドにて購入されたチケットの払い戻し受付を行っておりましたが、
            <a href="information4">お知らせ</a>しました通り、2019年12月28日(土)をもって終了とさせていただきます。
          </p>
          <p>
            なお、2020年5月9日(土)に第32回定期演奏会と同様のプログラムでの演奏会を予定しております。
            みなさまお誘い合わせの上ご来場ください。
          </p>
          <p>今後ともザ・ウィンド・アンサンブルをご愛顧のほどよろしくお願いいたします。</p>
        </Text>
      </Block>
    </Layout>
  )
}

export default Information
