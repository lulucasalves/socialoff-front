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
import { Message } from '../Message'
import { ChooseContent } from '../ChooseContent'
import { Label } from '../Label'
import { sendYoutubeVideo } from '../../services/youtube/video/post'
import { sendYoutubeThumb } from '../../services/youtube/thumbnail/post'
import { sendLinkedinPost } from '../../services/linkedin/post/post'
import { sendLinkedinVideo } from '../../services/linkedin/video/post'
import { sendInstagramContent } from '../../services/instagram/post'
import { sendFacebookContent } from '../../services/facebook/post'
import { sendTiktokContent } from '../../services/tiktok/post'
import { sendTwitterContent } from '../../services/twitter/post'
import { Lang } from '../Lang'
import { useIntl } from 'react-intl'

export function PrincipalForm(props) {
  const [brand, setBrand] = useState('youtube')
  const [url, setUrl] = useState('')
  const [loadingStatus, setLoadingStatus] = useState({
    loading: false,
    message: ''
  })
  const [contentType, setContentType] = useState('')

  const { formatMessage } = useIntl()

  function appearOptions() {
    if (
      brand === 'linkedin' ||
      brand === 'youtube' ||
      brand === 'twitter' ||
      brand === 'facebook'
    ) {
      if (brand === 'linkedin') {
        return (
          <>
            <option value="video">{formatMessage({ id: 'option' })}</option>
            <option value="post">Post</option>
          </>
        )
      }
      if (brand === 'youtube') {
        return (
          <>
            <option value="video">{formatMessage({ id: 'option' })}</option>
            <option value="thumbnail">Thumbnail</option>
          </>
        )
      }
      if (brand === 'twitter' || brand === 'facebook') {
        return <option value="video">{formatMessage({ id: 'option' })}</option>
      }
    }

    return (
      <option value="videoPost">
        {formatMessage({ id: 'option' })} / Post
      </option>
    )
  }

  async function downloadLink(e) {
    e.preventDefault()

    if (url && !loadingStatus.loading) {
      setLoadingStatus({
        loading: true,
        message: ''
      })

      switch (brand) {
        case 'youtube':
          if (contentType === 'thumbnail') {
            await sendYoutubeThumb({ url })
              .then((res) => setLoadingStatus({ message: res, loading: false }))
              .catch((res) =>
                setLoadingStatus({ message: res, loading: false })
              )
          } else {
            await sendYoutubeVideo({ url })
              .then((res) => setLoadingStatus({ message: res, loading: false }))
              .catch((res) =>
                setLoadingStatus({ message: res, loading: false })
              )
          }
          break

        case 'linkedin':
          if (contentType === 'post') {
            await sendLinkedinPost({ url })
              .then((res) => setLoadingStatus({ message: res, loading: false }))
              .catch((res) =>
                setLoadingStatus({ message: res, loading: false })
              )
          } else {
            await sendLinkedinVideo({ url })
              .then((res) => setLoadingStatus({ message: res, loading: false }))
              .catch((res) =>
                setLoadingStatus({ message: res, loading: false })
              )
          }
          break

        case 'instagram':
          await sendInstagramContent({ url })
            .then((res) => setLoadingStatus({ message: res, loading: false }))
            .catch((res) => setLoadingStatus({ message: res, loading: false }))
          break

        case 'facebook':
          await sendFacebookContent({ url })
            .then((res) =>
              setLoadingStatus({ melinkedinssage: res, loading: false })
            )
            .catch((res) => setLoadingStatus({ message: res, loading: false }))
          break

        case 'tiktok':
          await sendTiktokContent({ url })
            .then((res) => setLoadingStatus({ message: res, loading: false }))
            .catch((res) => setLoadingStatus({ message: res, loading: false }))
          break

        case 'twitter':
          await sendTwitterContent({ url })
            .then((res) => setLoadingStatus({ message: res, loading: false }))
            .catch((res) => setLoadingStatus({ message: res, loading: false }))
          break
      }
    }
  }

  return (
    <>
      <form onSubmit={downloadLink} className="principalForm">
        <Label>label-1</Label>
        <div className="options">
          <Option
            active={brand === 'youtube' ? 1 : 0}
            onClick={() => {
              setContentType('video')
              setBrand('youtube')
            }}
          >
            <FaYoutube />
          </Option>
          <Option
            active={brand === 'tiktok' ? 1 : 0}
            onClick={() => {
              setContentType('videoPost')
              setBrand('tiktok')
            }}
          >
            <FaTiktok />
          </Option>
          <Option
            active={brand === 'instagram' ? 1 : 0}
            onClick={() => {
              setContentType('videoPost')
              setBrand('instagram')
            }}
          >
            <FaInstagram />
          </Option>
          <Option
            active={brand === 'twitter' ? 1 : 0}
            onClick={() => {
              setContentType('video')
              setBrand('twitter')
            }}
          >
            <FaTwitter />
          </Option>
          <Option
            active={brand === 'facebook' ? 1 : 0}
            onClick={() => {
              setContentType('videoPost')
              setBrand('facebook')
            }}
          >
            <FaFacebook />
          </Option>
          <Option
            active={brand === 'linkedin' ? 1 : 0}
            onClick={() => {
              setContentType('video')
              setBrand('linkedin')
            }}
          >
            <FaLinkedinIn />
          </Option>
        </div>
        <div className="contentGroup">
          <Label>label-2</Label>
          <ChooseContent
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            {appearOptions()}
          </ChooseContent>
        </div>
        {props.width <= 1080 ? (
          <>
            <div className="pasteGroup">
              <Label>label-3</Label>
              <InputPaste
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={`https://${brand}.com/`}
              />
            </div>
            <div className="divButton">
              <Button type="submit">Download</Button>
            </div>
          </>
        ) : (
          <div className="pasteGroup">
            <Label>label-3</Label>
            <div className="inputButton">
              <InputPaste
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={`https://${brand}.com/`}
              />
              <Button readOnly={loadingStatus.loading} type="submit">
                Download
              </Button>
            </div>
          </div>
        )}
      </form>
      <div className="afterSubmit">
        {loadingStatus.loading ? (
          <Loading active={!loadingStatus.loading ? 1 : 0} />
        ) : (
          <Message message={loadingStatus.message} />
        )}
      </div>
    </>
  )
}
