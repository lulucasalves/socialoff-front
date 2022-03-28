import { createContext, useEffect, useState } from 'react'

export const MyContext = createContext({})

export function Provider(props) {
  const [theme, setTheme] = useState('dark')
  const [lang, setLang] = useState('en')

  function changeTheme(type) {
    localStorage.setItem('theme', type)
    setTheme(type)
  }

  useEffect(() => {
    const htmlTag = document.documentElement
    htmlTag.setAttribute('data-color', theme || 'light')
  }, [theme])

  useEffect(() => {
    const getTheme = localStorage.getItem('theme')

    if (getTheme) {
      setTheme(getTheme)
    }
  }, [])

  useEffect(() => {
    const getLang = localStorage.getItem('lang')

    if (getLang) {
      setLang(getLang)
    }
  }, [])

  function changeLang(type) {
    localStorage.setItem('lang', type)
    setLang(type)
  }

  return (
    <MyContext.Provider value={{ theme, changeTheme, lang, changeLang }}>
      {props.children}
    </MyContext.Provider>
  )
}
