import { useState } from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import { Option } from '../Option'
import { Button } from '../Button'
import { Loading } from '../Loading'
import { InputPaste } from '../InputPaste'

export function PrincipalForm() {
  const [brand, setBrand] = useState('youtube')
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(true)

  function downloadLink() {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = 'nome'
        link.click()
      })
      .catch(console.error)

    //window.open(url)
    //      <button onClick={() => downloadLink('')}>Download Link</button>
  }

  return (
    <>
      <form onSubmit={downloadLink}>
        <div className="options">
          <Option
            active={brand === 'youtube' ? 1 : 0}
            onClick={() => {
              setBrand('youtube')
            }}
          >
            <FaYoutube />
          </Option>
          <Option
            active={brand === 'tiktok' ? 1 : 0}
            onClick={() => {
              setBrand('tiktok')
            }}
          >
            <FaTiktok />
          </Option>
          <Option
            active={brand === 'instagram' ? 1 : 0}
            onClick={() => {
              setBrand('instagram')
            }}
          >
            <FaInstagram />
          </Option>
          <Option
            active={brand === 'twitter' ? 1 : 0}
            onClick={() => setBrand('twitter')}
          >
            <FaTwitter />
          </Option>
          <Option
            active={brand === 'facebook' ? 1 : 0}
            onClick={() => {
              setBrand('facebook')
            }}
          >
            <FaFacebook />
          </Option>
          <Option
            active={brand === 'linkedin' ? 1 : 0}
            onClick={() => {
              setBrand('linkedin')
            }}
          >
            <FaLinkedinIn />
          </Option>
        </div>
        <div className="pasteGroup">
          <label>Paste your URL</label>
          <div>
            <InputPaste
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={`https://${brand}.com/`}
            />
            <Button type="submit">Download</Button>
          </div>
        </div>
      </form>
      <div className="afterSubmit">
        <Loading active={!loading ? 1 : 0} />
      </div>
    </>
  )
}
