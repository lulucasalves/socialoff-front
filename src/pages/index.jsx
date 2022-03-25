import { Logo } from '../components/Logo'
import { HiMenuAlt2 } from 'react-icons/hi'
import {
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa'
import { Title } from '../components/Title'
import { Option } from '../components/Option'
import { InputPaste } from '../components/InputPaste'
import { Button } from '../components/Button'
import { useEffect, useState } from 'react'
import { Loading } from '../components/Loading'

export default function Home() {
  const [brand, setBrand] = useState('youtube')
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(true)

  function downloadLink(url) {
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
    <div className="container">
      <nav className="navigation">
        <HiMenuAlt2 />
        <Logo />
      </nav>

      <Title>
        Access your content completely <span>offline</span>
      </Title>
      <div className="line" />
      <label>Select platform from URL</label>
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
          <Button onClick={() => downloadLink(url)}>Download</Button>
        </div>
      </div>
      <div className="afterSubmit">
        <Loading active={!loading ? 1 : 0} />
      </div>
      <p>sdadssada</p>
    </div>
  )
}
