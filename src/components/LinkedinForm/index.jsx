import { useState } from 'react'
import { Button } from '../Button'
import { Loading } from '../Loading'
import { InputPaste } from '../InputPaste'
import { Message } from '../Message'
import { ChooseContent } from '../ChooseContent'
import { Label } from '../Label'
import { useIntl } from 'react-intl'
import { sendLinkedinPost } from '../../services/linkedin/post/post'
import { sendLinkedinVideo } from '../../services/linkedin/video/post'

export function LinkedinForm(props) {
  const [url, setUrl] = useState('')
  const [loadingStatus, setLoadingStatus] = useState({
    loading: false,
    message: ''
  })
  const [contentType, setContentType] = useState('')

  const { formatMessage } = useIntl()

  async function downloadLink(e) {
    e.preventDefault()

    if (url) {
      setLoadingStatus({
        loading: true,
        message: ''
      })

      if (contentType === 'post') {
        await sendLinkedinPost({ url })
          .then((res) => setLoadingStatus({ message: res, loading: false }))
          .catch((res) => setLoadingStatus({ message: res, loading: false }))
      } else {
        await sendLinkedinVideo({ url })
          .then((res) => setLoadingStatus({ message: res, loading: false }))
          .catch((res) => setLoadingStatus({ message: res, loading: false }))
      }
    }
  }

  return (
    <>
      <form onSubmit={downloadLink} className="principalForm">
        <div className="contentGroup">
          <Label>label-2</Label>
          <ChooseContent
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            <option value="video">{formatMessage({ id: 'option' })}</option>
            <option value="post">Post</option>
          </ChooseContent>
        </div>
        {props.width <= 1080 ? (
          <>
            <div className="pasteGroup">
              <Label>label-3</Label>
              <InputPaste
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={`https://linkedin.com/`}
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
                placeholder={`https://linkedin.com/`}
              />
              <Button type="submit">Download</Button>
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
