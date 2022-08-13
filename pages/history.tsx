import { Block } from '../components/Layout/Block'
import { Layout } from '../components/Layout/Layout'
import { Text } from '../components/Layout/Text'
import { useHistory } from './api/api'

const History = () => {
  const { data, error } = useHistory()
  console.log({ data, error })
  return (
    <Layout pageTitle="過去の演奏会" pageSubTitle="History" pathList={[{ path: '/history', label: '過去の演奏会' }]}>
      <Block>
        <Text>
          <p>
            ウィンズは1988年5月に第1回定期演奏会を開催してから現在に至るまで毎年秋に定期演奏会を開催しています。
            また、春にはミニコンサートも開催しております。 ここではこれまでに開催した演奏会の記録を紹介します。
          </p>
        </Text>
      </Block>
    </Layout>
  )
}

export default History
