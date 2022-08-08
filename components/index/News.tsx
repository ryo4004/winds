import { Block } from '../Layout/Block'
import type { News } from '../../utilities/microcms/news/news'

import styles from './News.module.scss'

export const NewsComponent = ({ news }: { news: News[] }) => {
  return (
    <div className={styles.news}>
      <Block title="お知らせ" subTitle="News">
        <div className={styles['news-list']}>
          <ol>
            {news.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>
                    <div>{item.date}</div>
                    <p>{item.label}</p>
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </Block>
    </div>
  )
}
