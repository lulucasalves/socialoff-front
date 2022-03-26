import { IntlProvider } from 'react-intl'

import * as enMessages from '../languages/en-us.json'
import * as esMessages from '../languages/es-es.json'
import * as ptMessages from '../languages/pt-br.json'

const messages = {
  'pt': ptMessages,
  'en': enMessages,
  'es': esMessages
}

export function LangProvider({ children }) {
  const currentLang = 'pt'

  return (
    <IntlProvider
      locale={currentLang}
      messages={messages[currentLang]}
    >
      {children}
    </IntlProvider>
  )
}
