import { downloadContent } from '../../utils/downloadContent'
import { api } from '../api'

export function sendTwitterContent(values) {
  const { url } = values
  const request = { url }

  return new Promise((resolve, reject) => {
    ;(async () => {
      await api
        .post(`/twitter`, request)
        .then((res) => {
          const data = res.data.link
          if (res.status === 200 || res.status === 201) {
            resolve('success')
            downloadContent(data)
          } else {
            reject('error')
          }
        })
        .catch(() => reject('error'))
    })()
  })
}
