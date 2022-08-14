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
        if (displayType.main && item.type === 'main') {
          return null
        }
        if (displayType.mini && item.type === 'mini') {
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
                    {this.showDate(item.detail)}
                    {this.showPlace(item.detail)}
                    {this.showConductor(item.detail)}
                    {this.showGuest(item.detail)}
                    {this.showGuide(item.detail)}
                  </div>
                  <ol className="music-list">{this.showMusic(item.detail)}</ol>
                </div>
              </div>
            </div>
          </details>
        )
      })}
    </>
  )
}
