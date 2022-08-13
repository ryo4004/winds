import useSWR from 'swr'
import { History } from '../../utilities/domain/history/history'

const BASE_PATH = 'http://windsapi.winds-n.com'

const getContents = async (url: string) => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  const response = await fetch(url, options)
  return response.json()
}

const getHistory = async () => {
  return await getContents(BASE_PATH + '/history')
}

export const useHistory = () => {
  const { data, error } = useSWR<History[]>('/history', getHistory)
  return { data: data ?? null, error: error ?? null }
}
