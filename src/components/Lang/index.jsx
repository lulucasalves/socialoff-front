import { useIntl } from 'react-intl'

export function Lang({ text }) {
  const { formatMessage } = useIntl()

  return formatMessage({ id: text })
}
