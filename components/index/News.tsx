import { Block } from '../Layout/Block'

import styles from './News.module.scss'

export const News = () => {
  return (
    <div className={styles.news}>
      <Block title="お知らせ" subTitle="News">
        <div className="contents">
          <div className={styles['news-list']}>
            <ol>
              <li>
                <a href="#">
                  <div>2022/1/1</div>
                  <p>お知らせのタイトル</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div>2021/12/31</div>
                  <p>お知らせのタイトル</p>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </Block>
    </div>
  )
}
