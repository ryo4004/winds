import { Block } from '../Layout/Block'
import type { News } from '../../utilities/microcms/contents'

import styles from './News.module.scss'
import { DateTime } from 'luxon'

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
                    <div>{DateTime.fromISO(item.date).toFormat('yyyy/M/d')}</div>
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
