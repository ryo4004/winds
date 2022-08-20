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
        { path: '/32ndconcert/information2', label: 'お知らせ' },
      ]}
    >
      <Block title="第32回定期演奏会は予定通り開催いたします" subTitle="News" update="2019/10/12 15:00">
        <Text>
          <p>
            10月13日(日)開催予定しております第32回定期演奏会は、台風19号が接近している状況ではありますが、屋内(長岡リリックホール・コンサートホール)で行うため、予定通り
            <span style={{ fontWeight: 'bold' }}>開催</span>いたします。
          </p>
          <p>ご来場いただく際は、十分ご注意の上くれぐれもお気をつけてお越しください。</p>
        </Text>
      </Block>
    </Layout>
  )
}

export default Information
