import { downloadContent } from '../../utils/downloadContent'
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
          console.log(data)
          if (res.status === 200 || res.status === 201) {
            resolve('success')

            if (data.length < 11) {
              for (let i = 0; i < data.length; i++) {
                window.open(data[i], '_blank')
              }
            } else {
              window.open(data, '_blank')
            }
          } else {
            reject('error')
          }
        })
        .catch(() => reject('error'))
    })()
  })
}
