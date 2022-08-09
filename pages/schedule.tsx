import { Block } from '../components/Layout/Block'
import { Layout } from '../components/Layout/Layout'

const Schedule = () => {
  return (
    <Layout pageTitle="練習日程" pageSubTitle="Schedule" pathList={[{ path: '/schedule', label: '練習日程' }]}>
      <Block title="次回の練習日" subTitle="Next Practice">
        <div className="contents">
          <div className="schedule-next">
            <div></div>
          </div>
        </div>
      </Block>

      <Block title="今後の練習日程" subTitle="Schedule">
        <div className="contents">
          <div className="schedule-after">
            <div></div>
          </div>
        </div>
      </Block>
    </Layout>
  )
}

export default Schedule
