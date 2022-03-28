import { Provider } from '../store/Config'
import '../styles/globals.scss'
import { LangProvider } from '../store/Translate'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </Provider>
  )
}

export default MyApp
