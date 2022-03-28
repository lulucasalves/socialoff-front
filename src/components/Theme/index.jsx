import { useContext } from 'react'
import { BiSun, BiMoon } from 'react-icons/bi'
import { MyContext } from '../../store/Config'

export function Theme() {
  const { theme, changeTheme } = useContext(MyContext)
  let themeType = theme === 'light' ? 'dark' : 'light'
  console.log(themeType)

  return (
    <div className="switchContainer">
      <input
        onClick={() => {
          changeTheme(themeType)
        }}
        type="checkbox"
        checked={theme === 'dark'}
        id="switch"
      />
      <label for="switch">
        <BiMoon className="moon" />
        <BiSun className="sun" />
        <span className="ball"></span>
      </label>
    </div>
  )
}
