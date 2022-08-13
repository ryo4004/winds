import { useHistory } from './api/api'

const History = () => {
  const { data, error } = useHistory()
  console.log({ data, error })
  return <>History</>
}

export default History
