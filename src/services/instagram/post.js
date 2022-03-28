import { api } from '../api'

export function sendInstagramContent(values) {
  const { url } = values
  const request = { url }

  return new Promise((resolve, reject) => {
    ;(async () => {
      await api
        .post(`/instagram`, request)
        .then((res) => {
          const data = res.data.link
          if (res.status === 200 || res.status === 201) {
            resolve('success')
            window.open(data, '_blank')
          } else {
            reject('error')
          }
        })
        .catch(() => reject('error'))
    })()
  })
}
