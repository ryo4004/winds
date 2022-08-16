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
        { path: '/32ndconcert/information', label: 'お知らせ' },
      ]}
    >
      <Block title="台風接近に伴う演奏会開催の可否について" subTitle="News" update="2019/10/11 15:00">
        <Text>
          <p>
            10月13日(日)第32回定期演奏会の開催につきましては、台風19号の進路をみて演奏会中止の可能性も含め楽団内で対応を協議しております。
          </p>
          <p>
            台風情報、また各公共交通機関の情報を確認しながらの判断となりますので、可否のお知らせまで今しばらくお待ちくださいますようお願い申し上げます。
            最終判断は12日(土)15:00にさせていただきます。
          </p>
        </Text>
      </Block>
    </Layout>
  )
}

export default Information
