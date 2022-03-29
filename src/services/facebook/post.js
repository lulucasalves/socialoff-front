import { downloadContent } from '../../utils/downloadContent'
import { api } from '../api'

export function sendFacebookContent(values) {
  const { url } = values
  const request = { url }

  return new Promise((resolve, reject) => {
    ;(async () => {
      await api
        .post(`/facebook`, request)
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
