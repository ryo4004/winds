import { useHistory } from '../../pages/api/api'

import styles from './List.module.scss'

export const List = () => {
  const { data, error } = useHistory()
  if (!data || error) {
    return <>読み込み中</>
  }
  return (
    <>
      {data.list.map((item) => {
        return <div key={item.title}>{item.title}</div>
      })}
    </>
  )
}
