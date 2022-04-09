import { useEffect, useState } from 'react'

const useFetch = <T>(initUrl: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState(initUrl)

  useEffect(() => {
    setLoading(true)
    fetch(url, { method: 'GET' })
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        setLoading(false)
      })
  }, [url, setData, setLoading])

  return { data, loading, url, setUrl }
}

export default useFetch
