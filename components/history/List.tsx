import React, { ReactNode, useRef, useState } from 'react'
import classNames from 'classnames'

import { useHistory } from '../../pages/api/api'

import styles from './List.module.scss'
import type { History, Time, Conductor, Guest, Content, Data } from '../../utilities/domain/history/history'

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
      <ConcertList concertList={data.list} displayType={displayType} searchText={searchText} />
      <SearchResult concertList={data.list} searchText={searchText} />
      <NoData displayType={displayType} searchText={searchText} />
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

const ConcertList = ({
  concertList,
  displayType,
  searchText,
}: {
  concertList: History[]
  displayType: DisplayType
  searchText: string
}) => {
  if (searchText !== '') {
    return null
  }
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
          <details key={item.id} className={classNames(styles['concert-item'], styles[item.type], styles[item.id])}>
            <summary>
              <h2>{item.title}</h2>
            </summary>
            <div>
              <div className={styles.detail}>
                <div className={styles.poster}>{poster}</div>
                <div className={classNames(styles.overview, styles[item.type])}>
                  <div>
                    <ShowDate time={item.time} />
                    <ShowPlace place={item.place} />
                    <ShowConductor conductor={item.conductor} />
                    <ShowGuest guest={item.guest} />
                    <ShowGuide guide={item.guide} />
                  </div>
                  <ol className={styles['music-list']}>
                    <ShowMusic contents={item.contents} data={item.data} />
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

const Labeling = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <div className={styles.item}>
      <label>{label}</label>
      <div>{children}</div>
    </div>
  )
}

const ShowDate = ({ time }: { time: Time }) => {
  if (time.time && time.label) {
    return (
      <Labeling label="日時">
        <div>
          <div>{time.date}</div>
          <div>{time.time + time.label}</div>
        </div>
      </Labeling>
    )
  }
  return (
    <Labeling label="開催日">
      <div>{time.date}</div>
    </Labeling>
  )
}

const ShowPlace = ({ place }: { place?: Array<string> }) => {
  if (!place) {
    return null
  }
  return (
    <Labeling label="会場">
      {place.map((each, i) => {
        return <div key={i}>{each}</div>
      })}
    </Labeling>
  )
}

const ShowConductor = ({ conductor }: { conductor?: Array<Conductor> }) => {
  if (!conductor) {
    return null
  }
  const nameList = conductor.map((item) => item.name)
  return <Labeling label="指揮">{nameList.join('・')}</Labeling>
}

const ShowGuest = ({ guest }: { guest?: Array<Guest> }) => {
  if (!guest) {
    return null
  }
  return (
    <Labeling label="客演">
      {guest.map((item, i) => (
        <React.Fragment key={i}>
          {item.name}({item.instrument})
        </React.Fragment>
      ))}
    </Labeling>
  )
}

const ShowGuide = ({ guide }: { guide?: string }) => {
  if (!guide) {
    return null
  }
  return (
    <div className={styles.item}>
      <div className={styles.guide}>
        <a href={guide}>案内ページ</a>
      </div>
    </div>
  )
}

const ShowMusic = ({ contents, data }: { contents: Array<Content>; data: Array<Data> }) => {
  return (
    <>
      {contents.map((list, i) => (
        <li key={`list-${i}`}>
          <label className={list.label.match(/第[0-9]部/) ? '' : styles.other}>{list.label}</label>
          <ol>
            {list.music.map((ml, j) => (
              <li key={`music-${j}`} className={styles.track}>
                <div>
                  <span>{data[ml].title}</span>
                  <Composer composer={data[ml].composer} arranger={data[ml].arranger} />
                  <Additional add={data[ml].add} />
                  <Movement movement={data[ml].movement} />
                </div>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </>
  )
}

const Composer = ({ composer, arranger }: { composer?: string; arranger?: string }) => {
  if (composer && arranger) {
    return (
      <span className={styles.composer}>
        {composer}
        {composer.match(/民謡/) ? '' : '作曲'}
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

const SearchResult = ({ concertList, searchText }: { concertList: History[]; searchText: string }) => {
  if (searchText === '') {
    return null
  }
  const results = concertList.map((item) => {
    return item.data.map((track) => {
      const s = new RegExp(escapeReg(searchText), 'i')
      // 演奏会名で一致
      if (item.title.search(s) >= 0) return { concert: item, track }
      // タイトルで一致
      if (track.title.search(s) >= 0) return { concert: item, track }
      // 作曲者名で一致
      if ((track.composer ? track.composer : '').search(s) >= 0) return { concert: item, track }
      // 編曲者名で一致
      if ((track.arranger ? track.arranger : '').search(s) >= 0) return { concert: item, track }
    })
  })

  if (!results) {
    return null
  }

  return (
    <div className={styles['result-list']}>
      {results.map((item, i) => {
        if (!item) {
          return null
        }
        return item.map((each, j) => {
          if (!each) {
            return null
          }
          return (
            <div key={i + j} className={styles['result-item']}>
              <div className={styles[each.concert.type]}>
                <span className={styles['concert-title']}>{each.concert.title}</span>
                <span className={styles.title}>{each.track.title}</span>
                <Composer composer={each.track.composer} arranger={each.track.arranger} />
              </div>
            </div>
          )
        })
      })}
    </div>
  )
}

const escapeReg = (string: string) => {
  const reRegExp = /[\\^$.*+?()[\]{}|]/g
  const reHasRegExp = new RegExp(reRegExp.source)
  return reHasRegExp.test(string) ? string.replace(reRegExp, '\\$&') : string
}

const NoData = ({ displayType, searchText }: { displayType: DisplayType; searchText: string }) => {
  const isTypeNotSelected = !displayType.main && !displayType.mini && searchText === ''
  return (
    <div className={styles.notice}>
      {isTypeNotSelected && (
        <>
          <i className="fas fa-arrow-up"></i>
          <span>演奏会のジャンルを選んでください</span>
        </>
      )}
      {!isTypeNotSelected && <span>これ以上はありません</span>}
    </div>
  )
}
