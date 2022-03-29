import { useState } from 'react'
import { Button } from '../Button'
import { Loading } from '../Loading'
import { InputPaste } from '../InputPaste'
import { Message } from '../Message'
import { Label } from '../Label'
import { sendFacebookContent } from '../../services/facebook/post'
import { ChooseContent } from '../ChooseContent'
import { useIntl } from 'react-intl'

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
  const { formatMessage } = useIntl()

  return (
    <>
      <form onSubmit={downloadLink} className="principalForm">
        <div className="contentGroup">
          <Label>label-2</Label>
          <ChooseContent>
            <option value="video">{formatMessage({ id: 'option' })}</option>
          </ChooseContent>
        </div>
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
