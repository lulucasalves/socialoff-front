import { useEffect } from 'react'
import { Provider } from '../store/Config'
import '../styles/globals.scss'
import { LangProvider } from '../store/Translate'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const htmlTag = document.documentElement
    htmlTag.setAttribute('data-color', 'light')
  }, [])

  return (
    <Provider>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </Provider>
  )
}

export default MyApp
