type Place = '長岡リリックホール'

type StudioNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type Studio = `第${StudioNumber}スタジオ`

type TimeDivision = '午前' | '午後' | '夜間'

export type ScheduleApi = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  date: string
  place: Array<Place>
  studio: Array<Studio>
  timeDivision: Array<TimeDivision>
}
