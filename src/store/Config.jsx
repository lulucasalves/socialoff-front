import { createContext, useEffect, useState } from 'react'

export const MyContext = createContext({})

export function Provider(props) {
  const [users, setUsers] = useState(null)

  return (
    <MyContext.Provider value={{ users }}>{props.children}</MyContext.Provider>
  )
}
