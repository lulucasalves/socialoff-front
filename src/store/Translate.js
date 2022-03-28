import { useContext } from 'react'
import { IntlProvider } from 'react-intl'

import * as enMessages from '../languages/en-us.json'
import * as esMessages from '../languages/es-es.json'
import * as ptMessages from '../languages/pt-br.json'
import { MyContext } from './Config'

const messages = {
  pt: ptMessages,
  en: enMessages,
  es: esMessages
}

export function LangProvider({ children }) {
  const { lang } = useContext(MyContext)

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      {children}
    </IntlProvider>
  )
}
