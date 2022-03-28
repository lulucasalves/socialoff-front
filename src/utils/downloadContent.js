import axios from 'axios'

export function downloadContent(url) {
  fetch(url)
    .then((res) => {
      res.blob()
    })
    .then((blob) => {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'SocialOff'
      link.click()
    })
    .catch(() => {
      axios({
        url: url,
        method: 'GET',
        responseType: 'blob'
      })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'SocialOff')
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        })
        .catch(() => alert(url))
    })
}
