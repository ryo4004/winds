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
        { path: '/32ndconcert/information3', label: 'お知らせ' },
      ]}
    >
      <Block title="第32回定期演奏会は中止となりました" subTitle="News" update="2019/10/13 13:00">
        <Text>
          <p>
            10月13日(日)開催予定しております第32回定期演奏会は、信濃川水位上昇の影響で
            <span style={{ fontWeight: 'bold' }}>中止</span>
            となりました。
          </p>
          <p>既にご来場いただいたお客様にはご足労をおかけいたしまして大変申し訳ありません。</p>
          <p>
            また、購入済みのチケットの払い戻しに関しましては、現在検討中です。実施する場合はこちらのページにて改めてお知らせいたします。
          </p>
        </Text>
      </Block>
    </Layout>
  )
}

export default Information
