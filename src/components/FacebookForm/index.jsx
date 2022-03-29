import { useState } from 'react'
import { Button } from '../Button'
import { Loading } from '../Loading'
import { InputPaste } from '../InputPaste'
import { Message } from '../Message'
import { Label } from '../Label'
import { sendFacebookContent } from '../../services/facebook/post'

export function FacebookForm(props) {
  const [url, setUrl] = useState('')
  const [loadingStatus, setLoadingStatus] = useState({
    loading: false,
    message: ''
  })

  async function downloadLink(e) {
    e.preventDefault()
    if (url) {
      setLoadingStatus({
        loading: true,
        message: ''
      })

      await sendFacebookContent({ url })
        .then((res) => setLoadingStatus({ message: res, loading: false }))
        .catch((res) => setLoadingStatus({ message: res, loading: false }))
    }
  }

  return (
    <>
      <form onSubmit={downloadLink} className="principalForm">
        {props.width <= 1080 ? (
          <>
            <div className="pasteGroup">
              <Label>label-3</Label>
              <InputPaste
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={`https://facebook.com/`}
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
                placeholder={`https://facebook.com/`}
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
