import { useIntl } from 'react-intl'

export function Lang({ children }) {
  const { formatMessage } = useIntl()

  return formatMessage({ id: children })
}
