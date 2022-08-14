import { ReactNode, useRef, useState } from 'react'
import classNames from 'classnames'

import { useHistory } from '../../pages/api/api'

import styles from './List.module.scss'
import type { History } from '../../utilities/domain/history/history'

type DisplayType = {
  main: boolean
  mini: boolean
}

const initialDisplayType = (): DisplayType => ({
  main: true,
  mini: true,
})

export const List = () => {
  const { data, error } = useHistory()
  const [searchText, setSearchText] = useState('')
  const [displayType, setDisplayType] = useState(initialDisplayType())
  const updateDisplayType = (type: keyof DisplayType) => {
    setDisplayType((state) => ({ ...state, [type]: !state[type] }))
  }
  if (!data || error) {
    return <>読み込み中</>
  }
  return (
    <div className={styles.history}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        displayType={displayType}
        updateDisplayType={updateDisplayType}
      />
      <ConcertList concertList={data.list} displayType={displayType} />
      {data.list.map((item) => {
        return <div key={item.title}>{item.title}</div>
      })}
    </div>
  )
}

const SearchBar = ({
  searchText,
  setSearchText,
  displayType,
  updateDisplayType,
}: {
  searchText: string
  setSearchText: (searchText: string) => void
  displayType: DisplayType
  updateDisplayType: (displayType: keyof DisplayType) => void
}) => {
  const searchBarButtonClass = searchText
    ? styles['search-bar-button']
    : classNames(styles['search-bar-button'], styles.hidden)
  const searchModeClass = searchText ? styles['search-mode'] : ''
  const resetSearch = () => setSearchText('')
  const ref = useRef(null)

  return (
    <div className={classNames(styles['search-bar'], searchModeClass)}>
      <div className={styles['search-frame']}>
        <div className={styles['search-box']}>
          <div className={styles['search-bar-icon']}>
            <i className="fas fa-search"></i>
          </div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            ref={ref}
            placeholder="検索"
          />
          <div onClick={resetSearch} className={searchBarButtonClass}>
            <i className="fas fa-times-circle"></i>
          </div>
        </div>
      </div>
      {searchText === '' && (
        <div className={styles.controller}>
          <div
            className={classNames(styles.switch, styles.main, displayType.main ? styles.on : styles.off)}
            onClick={() => updateDisplayType('main')}
          >
            定期演奏会
          </div>
          <div
            className={classNames(styles.switch, styles.mini, displayType.mini ? styles.on : styles.off)}
            onClick={() => updateDisplayType('mini')}
          >
            ミニコンサート
          </div>
        </div>
      )}
    </div>
  )
}

const ConcertList = ({ concertList, displayType }: { concertList: History[]; displayType: DisplayType }) => {
  return (
    <>
      {concertList.map((item) => {
        if (!displayType.main && item.type === 'main') {
          return null
        }
        if (!displayType.mini && item.type === 'mini') {
          return null
        }
        const poster = item.poster ? (
          <img src={item.poster} />
        ) : (
          <div className={styles['no-poster']}>
            <div>
              <span>NO IMAGE</span>
            </div>
          </div>
        )

        return (
          <details key={item.id} className={'concert-item ' + item.type + ' ' + item.id}>
            <summary onTouchStart={() => {}}>
              <h2>{item.title}</h2>
            </summary>
            <div>
              <div className="detail">
                <div className="poster">{poster}</div>
                <div className={'overview ' + item.type}>
                  <div>
                    <ShowDate history={item} />
                    <ShowPlace history={item} />
                    <ShowConductor history={item} />
                    <ShowGuest history={item} />
                    <ShowGuide history={item} />
                  </div>
                  <ol className="music-list">
                    <ShowMusic history={item} />
                  </ol>
                </div>
              </div>
            </div>
          </details>
        )
      })}
    </>
  )
}

const ShowDate = ({ history }: { history: History }) => {
  if (history.time.time && history.time.label) {
    return (
      <Labeling label="日時">
        <div>
          <div>{history.time.date}</div>
          <div>{history.time.time + history.time.label}</div>
        </div>
      </Labeling>
    )
  }
  return (
    <Labeling label="開催日">
      <div>{history.time.date}</div>
    </Labeling>
  )
}

const Labeling = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <div className={styles.item}>
      <label>{label}</label>
      <div>{children}</div>
    </div>
  )
}

const ShowPlace = ({ history }: { history: History }) => {
  if (!history.place) {
    return null
  }
  return (
    <Labeling label="会場">
      {history.place.map((each, i) => {
        return <div key={i}>{each}</div>
      })}
    </Labeling>
  )
}

const ShowConductor = ({ history }: { history: History }) => {
  if (!history.conductor) {
    return null
  }
  var name = ''
  for (var i in history.conductor) {
    name += history.conductor[i].name + '・'
  }
  return <Labeling label="指揮">{name.slice(0, -1)}</Labeling>
}

const ShowGuest = ({ history }: { history: History }) => {
  if (!history.guest) {
    return null
  }
  var list = ''
  for (var i in history.guest) {
    list = history.guest[i].name + '(' + history.guest[i].instrument + ')'
  }
  return <Labeling label="客演">{list}</Labeling>
}

const ShowGuide = ({ history }: { history: History }) => {
  if (!history.guide) {
    return null
  }
  return (
    <div className={styles.item}>
      <div className={styles.guide}>
        <a href={history.guide}>案内ページ</a>
      </div>
    </div>
  )
}

const ShowMusic = ({ history }: { history: History }) => {
  const { data } = history
  return (
    <>
      {history.contents.map((list, i) => {
        const ml = list.music.map((ml, j) => {
          return (
            <li key={'m' + history.id + j} className={styles.track}>
              <div>
                <span>{data[ml].title}</span>
                <Composer composer={data[ml].composer} arranger={data[ml].arranger} />
                <Additional add={data[ml].add} />
                <Movement movement={data[ml].movement} />
              </div>
            </li>
          )
        })
        return (
          <li key={'l' + history.id + i}>
            <label className={list.label.match(/第[0-9]部/) ? '' : styles.other}>{list.label}</label>
            <ol>{ml}</ol>
          </li>
        )
      })}
    </>
  )
}

const Composer = ({ composer, arranger }: { composer?: string; arranger?: string }) => {
  if (composer && arranger) {
    return (
      <span className={styles.composer}>
        {composer}
        {composer?.match(/民謡/) ? '' : '作曲'}
        <span>/</span>
        {arranger}編曲
      </span>
    )
  } else if (composer) {
    return <span className={styles.composer}>{composer}</span>
  } else if (arranger) {
    return <span className={styles.composer}>{arranger}編曲</span>
  } else {
    return null
  }
}

const Additional = ({ add }: { add?: Array<string> }) => {
  if (!add) {
    return null
  }
  return (
    <ol>
      {add.map((mv, k) => (
        <li key={k}>{mv}</li>
      ))}
    </ol>
  )
}

const Movement = ({ movement }: { movement?: Array<string> }) => {
  if (!movement) {
    return null
  }
  return (
    <ol>
      {movement.map((mv, k) => (
        <li key={k}>{mv}</li>
      ))}
    </ol>
  )
}
