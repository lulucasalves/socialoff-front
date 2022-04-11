import { useContext } from 'react'
import { BiSun, BiMoon } from 'react-icons/bi'
import { MyContext } from '../../store/Config'

export function Theme() {
  const { theme, changeTheme } = useContext(MyContext)
  let themeType = theme === 'light' ? 'dark' : 'light'

  return (
    <div className="switchContainer">
      <input
        onClick={() => {
          changeTheme(themeType)
        }}
        type="checkbox"
        defaultChecked={theme === 'dark'}
        id="switch"
      />
      <label htmlFor="switch" checked>
        <BiMoon className="moon" />
        <BiSun className="sun" />
        <span className="ball"></span>
      </label>
    </div>
  )
}
