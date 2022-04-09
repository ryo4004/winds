import classNames from 'classnames'

import styles from './News.module.scss'

export const News = () => {
  return (
    <div className={classNames('block', styles.news)}>
      <div className="title">
        <h2 className="title-large" data-subttl="News">
          お知らせ
        </h2>
      </div>
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
    </div>
  )
}
