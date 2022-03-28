import { useEffect, useState } from 'react'

export function Loading(props) {
  const [loadingStatus, setLoadingStatus] = useState(0)

  useEffect(() => {
    if (!props.active) {
      const currentInterval = setInterval(() => {
        setLoadingStatus(loadingStatus++)
      }, 1000)

      return () => clearInterval(currentInterval)
    }
  }, [])

  return (
    <div className={props.active ? 'loadFalse' : 'loadGroup'}>
      <p>{loadingStatus}s</p>
      <div className="loader" />
    </div>
  )
}
