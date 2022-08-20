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
        { path: '/32ndconcert/information4', label: 'お知らせ' },
      ]}
    >
      <Block title="チケットの払い戻しについて" subTitle="News" update="2019/10/26 15:00">
        <Text>
          <p>10月13日(日)に開催を予定しておりました第32回定期演奏会は、信濃川水位上昇の影響で中止となりました。</p>
          <p>
            演奏会を楽しみにしてくださった皆様には大変申し訳ございません。
            また、中止のお知らせが開催予定時刻直前となってしまったことをお詫び申し上げます。
          </p>
          <p>
            プレイガイドにてチケットを購入された方には払い戻しの対応を致します。 リリックホール事務室まで、もしくは
            <a href="../contact">お問い合わせ</a>からご連絡をお願いいたします。
          </p>
          <p>なお誠に勝手ではございますが、払い戻しの対応期限は2019年12月28日(土)までとさせていただきます。</p>
        </Text>
        <a href="../contact" className="button">
          <div>
            <div className="text">お問い合わせ</div>
            <div className="link-arrow">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </a>
      </Block>
    </Layout>
  )
}

export default Information
