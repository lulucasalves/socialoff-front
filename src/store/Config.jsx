import { createContext, useEffect, useState } from 'react'

export const MyContext = createContext({})

export function Provider(props) {
  const [theme, setTheme] = useState('dark')

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

  return (
    <MyContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </MyContext.Provider>
  )
}
