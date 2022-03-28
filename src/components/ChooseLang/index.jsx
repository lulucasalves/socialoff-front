import { useContext, useState } from 'react'
import { RiArrowDownSFill } from 'react-icons/ri'
import OnOutsiceClick from 'react-outclick'
import { MyContext } from '../../store/Config'

export function ChooseLang() {
  const { lang, changeLang } = useContext(MyContext)
  const [modalLang, setModalLang] = useState(false)

  return (
    <div className="langGroup">
      <div className="langDiv" onClick={() => setModalLang(!modalLang)}>
        <p>{lang}</p>
        <RiArrowDownSFill />
      </div>
      {modalLang && (
        <div className="langModal">
          <OnOutsiceClick onOutsideClick={() => setModalLang(false)}>
            <ul>
              <li
                onClick={() => {
                  changeLang('en')
                  setModalLang(false)
                }}
                className={lang === 'en' && 'activeOption'}
              >
                en
              </li>
              <li
                onClick={() => {
                  changeLang('pt')
                  setModalLang(false)
                }}
                className={lang === 'pt' && 'activeOption'}
              >
                pt
              </li>
              <li
                onClick={() => {
                  changeLang('es')
                  setModalLang(false)
                }}
                className={lang === 'es' && 'activeOption'}
              >
                es
              </li>
            </ul>
          </OnOutsiceClick>
        </div>
      )}
    </div>
  )
}
